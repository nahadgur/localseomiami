'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, ExternalLink } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { CaseStudy } from '@/data/caseStudies';

export default function CaseStudyClient({ study }: { study: CaseStudy }) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main className="flex-grow bg-bone">
        {/* Hero */}
        <section className="bg-ink text-white">
          <div className="container-width pt-10 pb-14">
            <Breadcrumbs
              dark
              items={[{ label: 'Case studies', href: '/case-studies/' }, { label: study.name }]}
            />
            <div className="mt-6 grid lg:grid-cols-[1.3fr_0.7fr] gap-10 lg:items-end">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <p className="eyebrow text-brand-300">{study.vertical}</p>
                  {study.status === 'live' && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.14em] text-accent-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-500" /> In progress
                    </span>
                  )}
                </div>
                <h1 className="font-display font-bold text-[30px] lg:text-[44px] leading-tight text-white mb-4">
                  {study.name}
                </h1>
                <p className="text-[15px] lg:text-[17px] text-white/75 leading-relaxed">{study.summary}</p>
                <p className="mt-5 text-[12px] font-mono uppercase tracking-[0.15em] text-white/45">
                  {study.location} · {study.period}
                </p>
              </div>
              <div className="rounded-xl border border-white/12 bg-white/[0.04] p-7">
                <div className="font-display font-bold text-[44px] lg:text-[52px] leading-none text-brand-300">
                  {study.headline.value}
                </div>
                <div className="mt-2 text-[13px] text-white/60 leading-snug">{study.headline.label}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Metric grid */}
        <section className="container-width py-12">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {study.metrics.map((m) => (
              <div key={m.label} className="bg-white border border-ink/10 rounded-lg p-6">
                <div className="font-display font-bold text-[26px] lg:text-[30px] text-ink leading-none">{m.value}</div>
                <div className="mt-2 text-[12.5px] text-ink/55 leading-snug">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Narrative */}
        <section className="container-width pb-14 grid lg:grid-cols-[1fr_0.8fr] gap-12">
          <div className="space-y-10 max-w-2xl">
            <Block title="The challenge">
              <p className="text-[15.5px] text-ink/80 leading-relaxed">{study.challenge}</p>
            </Block>
            <Block title="The approach">
              <ul className="space-y-3">
                {study.approach.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-[15px] text-ink/80 leading-relaxed">
                    <Check size={16} className="mt-1 shrink-0 text-brand-600" />
                    {a}
                  </li>
                ))}
              </ul>
            </Block>
            <Block title="The result">
              <p className="text-[15.5px] text-ink/80 leading-relaxed">{study.result}</p>
              {study.status === 'live' && (
                <p className="mt-4 text-[13px] text-ink/55 leading-relaxed">
                  This project is still building. The figures above are its current Search Console trajectory, not a
                  finished result.
                </p>
              )}
            </Block>
          </div>

          <aside className="lg:pt-2">
            <div className="bg-white border border-ink/10 rounded-lg p-7 lg:sticky lg:top-24">
              <p className="eyebrow mb-3">What stood out</p>
              <ul className="space-y-3">
                {study.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-[14px] text-ink/80 leading-relaxed">
                    <Check size={15} className="mt-0.5 shrink-0 text-accent-600" />
                    {h}
                  </li>
                ))}
              </ul>
              {study.url && (
                <a
                  href={study.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-600 hover:text-brand-700"
                >
                  Visit the live site <ExternalLink size={12} />
                </a>
              )}
            </div>
          </aside>
        </section>

        <section className="bg-brand-600 text-white text-center py-14">
          <div className="container-width max-w-3xl">
            <h2 className="font-display font-bold text-[26px] lg:text-[36px] leading-tight mb-3">
              Want this kind of work for your Miami business
            </h2>
            <p className="text-[15px] text-white/85 max-w-xl mx-auto mb-6 leading-relaxed">
              Free matching with a vetted Miami local SEO specialist held to the same standard you just read about.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <button onClick={() => setModal(true)} className="btn-on-dark text-[15px] px-7 py-3.5">
                Get matched <ArrowUpRight size={14} />
              </button>
              <Link href="/case-studies/" className="text-[14px] font-semibold text-white/85 hover:text-white underline">
                See all case studies
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display font-semibold text-[22px] lg:text-[26px] text-ink leading-tight mb-4">{title}</h2>
      {children}
    </div>
  );
}
