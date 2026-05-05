'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { blogArticles } from '@/data/blog';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';

export default function BlogIndexPage() {
  const [modal, setModal] = useState(false);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Insights', url: '/blog/' },
  ]);

  const sorted = [...blogArticles].sort((a, b) => b.publishDate.localeCompare(a.publishDate));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main className="flex-grow bg-bone">
        <section className="bg-ink text-white">
          <div className="container-width pt-10 pb-14">
            <Breadcrumbs dark items={[{ label: 'Insights' }]} />
            <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-brand-300 mt-6 mb-4">Local SEO insights</p>
            <h1 className="font-display font-bold text-[34px] lg:text-[46px] leading-tight max-w-2xl mb-5">
              Practical guides for Miami local SEO
            </h1>
            <p className="text-[15px] lg:text-[17px] text-white/80 max-w-2xl leading-relaxed">
              Hand-written guides covering Miami-specific local SEO realities. No AI generic content, no agency sales pitches, just specific, applicable insights.
            </p>
          </div>
        </section>

        <section className="container-width py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {sorted.map(a => (
              <Link key={a.slug} href={`/blog/${a.slug}/`} className="card p-6 group">
                <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.18em] text-ink/50 mb-3">
                  <span className="text-brand-600">{a.category}</span>
                  <span className="w-1 h-1 rounded-full bg-ink/30" />
                  <span className="flex items-center gap-1"><Clock size={11} /> {a.publishDate}</span>
                </div>
                <h2 className="font-display font-bold text-[22px] lg:text-[26px] text-ink leading-tight mb-3 group-hover:text-brand-600 transition-colors">
                  {a.title}
                </h2>
                <p className="text-[14px] text-ink/70 leading-relaxed mb-4 line-clamp-3">
                  {a.excerpt}
                </p>
                <span className="text-[12px] font-bold text-brand-600 inline-flex items-center gap-1">
                  Read article <ArrowRight size={11} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
