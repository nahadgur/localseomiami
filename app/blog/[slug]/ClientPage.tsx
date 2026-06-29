'use client';

import { useState, type ReactNode } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Clock, AlertCircle } from 'lucide-react';
import { getArticleBySlug, ContentBlock } from '@/data/blog';
import { getGuideBySlug } from '@/data/guides';
import { siteConfig } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SpokeHero } from '@/components/SpokeHero';

function estReadMins(text: string): number {
  return Math.max(3, Math.round(text.trim().split(/\s+/).filter(Boolean).length / 200));
}
import { FAQ } from '@/components/FAQ';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';
import { editorialAuthorJsonLd, buildFaqPageSchema, AUTHOR_ID } from '@/lib/schema';

// Parse markdown-style [label](href) into nodes. Internal paths use next/link,
// http(s) links open in a new tab. Plain text without links passes through
// unchanged, so existing posts render exactly as before.
function renderText(text: string): ReactNode {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const label = m[1];
    const href = m[2];
    if (/^https?:\/\//.test(href)) {
      parts.push(
        <a key={k++} href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-600 hover:text-brand-700 underline">{label}</a>
      );
    } else {
      parts.push(
        <Link key={k++} href={href} className="font-semibold text-brand-600 hover:text-brand-700 underline">{label}</Link>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length === 1 ? parts[0] : parts;
}

// Contained brand band that opens the existing lead modal. Used mid-article
// (before the second H2) and again at the end of the body.
function LeadCtaBanner({ onClick }: { onClick: () => void }) {
  return (
    <div className="my-10 rounded-2xl bg-brand-600 text-white px-6 py-6 md:px-10 md:py-7">
      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/70 mb-2">
        Free matching · 24h response
      </p>
      <h2 className="font-display font-bold text-[22px] md:text-[26px] leading-tight mb-2">
        Want this handled by a vetted Miami SEO specialist?
      </h2>
      <p className="text-[14px] text-white/85 leading-relaxed mb-5 max-w-xl">
        Tell us a little about your business and we will match you with a specialist who has live ranking results in your sector. Free, no obligation.
      </p>
      <button onClick={onClick} className="btn-on-dark text-[14px]">
        Get matched <ArrowRight size={14} />
      </button>
    </div>
  );
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={i} className="font-display font-bold text-[26px] lg:text-[32px] text-ink leading-tight mt-10 mb-4">
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={i} className="font-display font-semibold text-[20px] lg:text-[24px] text-ink leading-tight mt-8 mb-3">
          {block.text}
        </h3>
      );
    case 'p':
      return (
        <p key={i} className="text-[15.5px] text-ink/80 leading-relaxed mb-4">
          {renderText(block.text ?? '')}
        </p>
      );
    case 'list':
      return (
        <ul key={i} className="list-disc pl-6 space-y-2 mb-5 text-[15px] text-ink/80 leading-relaxed">
          {block.items?.map((item, j) => <li key={j}>{renderText(item)}</li>)}
        </ul>
      );
    case 'note':
      return (
        <div key={i} className="bg-brand-50 border-l-4 border-brand-500 rounded-md p-4 my-6">
          <div className="flex items-start gap-3">
            <AlertCircle size={16} className="text-brand-600 flex-shrink-0 mt-0.5" />
            <p className="text-[14px] text-ink/85 leading-relaxed">{renderText(block.text ?? '')}</p>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [modal, setModal] = useState(false);
  const article = getArticleBySlug(params.slug);
  if (!article || article.draft) notFound();

  const dateModified = article.dateModified ?? article.publishDate;
  const hub = getGuideBySlug(article.hub);

  // Insert the mid-article CTA before the second H2. If there are fewer than
  // two H2s it stays -1 and only the end-of-article banner renders.
  const h2Indexes = article.content
    .map((b, i) => (b.type === 'h2' ? i : -1))
    .filter(i => i !== -1);
  const secondH2Index = h2Indexes.length >= 2 ? h2Indexes[1] : -1;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Insights',     url: '/blog/' },
    { name: article.title,  url: `/blog/${article.slug}/` },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${siteConfig.url}/blog/${article.slug}/#article`,
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishDate,
    dateModified,
    author: { '@id': AUTHOR_ID },
    reviewedBy: { '@id': AUTHOR_ID },
    publisher: { '@id': `${siteConfig.url}/#organization` },
    mainEntityOfPage: `${siteConfig.url}/blog/${article.slug}/`,
    inLanguage: 'en-US',
  };

  const faqSchema = article.faqs && article.faqs.length > 0 ? buildFaqPageSchema(article.faqs) : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(editorialAuthorJsonLd()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main className="flex-grow bg-bone">

        <section className="bg-bone">
          <div className="container-width pt-8">
            <Breadcrumbs items={[{ label: 'Insights', href: '/blog/' }, { label: article.title }]} />
          </div>
          <div className="container-width pt-4 pb-10">
            <SpokeHero
              title={article.title}
              hubName={hub?.title ?? null}
              hubSlug={article.hub}
              readMins={estReadMins(article.content.map((b: { text?: string; items?: string[] }) => (b.text || '') + ' ' + ((b.items || []).join(' '))).join(' '))}
            />
            <div className="mt-4 flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.18em] text-stone-500">
              <span>{article.category}</span>
              <span className="w-1 h-1 rounded-full bg-stone-300" />
              <span className="flex items-center gap-1"><Clock size={11} /> {article.publishDate}</span>
            </div>
            {/* Real heading kept for SEO/a11y; the SVG above is decorative. */}
            <h1 className="sr-only">{article.title}</h1>
            <p className="text-[15px] lg:text-[17px] text-stone-600 leading-relaxed mt-4 max-w-3xl">{article.excerpt}</p>
          </div>
        </section>

        <div className="container-width py-12 lg:py-16">
          <article>
            {article.content.map((block, i) => (
              <span key={i}>
                {i === secondH2Index && <LeadCtaBanner onClick={() => setModal(true)} />}
                {renderBlock(block, i)}
              </span>
            ))}

            <LeadCtaBanner onClick={() => setModal(true)} />

            {article.faqs && article.faqs.length > 0 && (
              <div className="mt-10">
                <FAQ faqs={article.faqs} title="Frequently asked questions" embedSchema={false} />
              </div>
            )}
          </article>
        </div>

        <section className="bg-brand-600 text-white text-center py-14">
          <div className="container-width max-w-3xl">
            <h2 className="font-display font-bold text-[26px] lg:text-[36px] leading-tight mb-3">
              Ready to talk to a Miami local SEO specialist?
            </h2>
            <p className="text-[15px] text-white/85 max-w-xl mx-auto mb-6 leading-relaxed">
              Free matching, vetted network, most introductions within 24 business hours.
            </p>
            <button onClick={() => setModal(true)} className="btn-on-dark text-[15px] px-7 py-3.5">
              Get matched <ArrowRight size={14} />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
