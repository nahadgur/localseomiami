'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import type { Guide, GuideBlock } from '@/data/guides';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SpokeHero } from '@/components/SpokeHero';

function estReadMins(text: string): number {
  return Math.max(3, Math.round(text.trim().split(/\s+/).filter(Boolean).length / 200));
}
import { FAQ } from '@/components/FAQ';

interface Spoke { slug: string; title: string; excerpt: string }

function Block({ block }: { block: GuideBlock }) {
  if (block.type === 'h3') {
    return <h3 className="font-display font-semibold text-[20px] lg:text-[24px] text-ink leading-tight mt-8 mb-3">{block.text}</h3>;
  }
  if (block.type === 'list') {
    return (
      <ul className="list-disc pl-6 space-y-2 mb-5 text-[15px] text-ink/80 leading-relaxed">
        {(block.items ?? []).map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    );
  }
  return <p className="text-[15.5px] text-ink/80 leading-relaxed mb-4">{block.text}</p>;
}

export default function GuideClient({
  guide,
  spokes,
  service,
  relatedHubs,
}: {
  guide: Guide;
  spokes: Spoke[];
  service: { slug: string; title: string } | null;
  relatedHubs: { slug: string; title: string }[];
}) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main className="flex-grow bg-bone">
        <section className="bg-bone">
          <div className="container-width pt-8">
            <Breadcrumbs items={[{ label: 'Guides', href: '/guides/' }, { label: guide.title }]} />
          </div>
          <div className="container-width pt-4 pb-10">
            <SpokeHero title={guide.heroHeading} hubName="Guide" hubSlug={guide.slug} readMins={estReadMins(JSON.stringify(guide.sections))} />
            <div className="mt-4 flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.18em] text-stone-500">
              <span>{guide.heroEyebrow}</span>
              <span className="w-1 h-1 rounded-full bg-stone-300" />
              <span className="flex items-center gap-1"><Clock size={11} /> Updated {guide.updatedDate}</span>
            </div>
            {/* Real heading kept for SEO/a11y; the SVG above is decorative. */}
            <h1 className="sr-only">{guide.heroHeading}</h1>
            <p className="text-[15px] lg:text-[17px] text-stone-600 leading-relaxed mt-4 max-w-3xl">{guide.heroIntro}</p>
          </div>
        </section>

        <div className="container-width py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            <article className="lg:col-span-2">
              {guide.intro.map((p, i) => (
                <p key={i} className={i === 0 ? 'text-[17px] text-ink/85 leading-relaxed mb-4 font-medium' : 'text-[15.5px] text-ink/80 leading-relaxed mb-4'}>
                  {p}
                </p>
              ))}

              {guide.sections.map(section => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="font-display font-bold text-[26px] lg:text-[32px] text-ink leading-tight mt-10 mb-4">{section.heading}</h2>
                  {section.blocks.map((b, i) => <Block key={i} block={b} />)}
                </section>
              ))}

              {spokes.length > 0 && (
                <div className="mt-12">
                  <p className="eyebrow mb-4">More on {guide.heroEyebrow.toLowerCase()}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {spokes.map(sp => (
                      <Link key={sp.slug} href={`/blog/${sp.slug}/`} className="block bg-white border border-ink/10 rounded-lg p-5 group hover:border-brand-400 transition-colors">
                        <p className="text-[15px] font-semibold text-ink leading-tight mb-1.5 group-hover:text-brand-600 transition-colors">{sp.title}</p>
                        <p className="text-[13px] text-ink/70 leading-relaxed line-clamp-2">{sp.excerpt}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-12">
                <FAQ faqs={guide.faqs} title="Frequently asked questions" embedSchema={false} />
              </div>

              {(service || relatedHubs.length > 0) && (
                <div className="mt-12 pt-8 border-t border-ink/10">
                  {service && (
                    <p className="text-[15px] text-ink/80 mb-4">
                      Related service:{' '}
                      <Link href={`/services/${service.slug}/`} className="text-brand-600 font-semibold hover:text-brand-700">{service.title}</Link>
                    </p>
                  )}
                  {relatedHubs.length > 0 && (
                    <div className="flex flex-wrap gap-2.5">
                      {relatedHubs.map(h => (
                        <Link key={h.slug} href={`/guides/${h.slug}/`} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-700 bg-brand-50 border border-brand-200 rounded-full px-3.5 py-1.5 hover:bg-brand-100 transition-colors">
                          {h.title} <ArrowRight size={12} />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </article>

            <aside>
              <div className="lg:sticky lg:top-24 space-y-5">
                <div className="hidden lg:block">
                  <HeroLeadForm />
                </div>
                {service && (
                  <div className="bg-white border border-ink/10 rounded-lg p-5">
                    <p className="eyebrow mb-2">Related service</p>
                    <Link href={`/services/${service.slug}/`} className="text-[15px] font-semibold text-ink leading-tight hover:text-brand-600 transition-colors inline-flex items-center gap-1.5">
                      {service.title} <ArrowRight size={13} />
                    </Link>
                  </div>
                )}
                <div className="bg-white border border-ink/10 rounded-lg p-5">
                  <p className="eyebrow mb-3">All guides</p>
                  <Link href="/guides/" className="inline-flex items-center gap-1 text-[13px] font-bold text-brand-600 hover:text-brand-700">
                    Browse every local SEO guide <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <section className="bg-brand-600 text-white text-center py-14">
          <div className="container-width max-w-3xl">
            <h2 className="font-display font-bold text-[26px] lg:text-[36px] leading-tight mb-3">
              Get matched with a Miami local SEO specialist
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
