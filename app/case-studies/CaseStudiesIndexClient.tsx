'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { caseStudies, caseTotals } from '@/data/caseStudies';

export default function CaseStudiesIndexClient() {
  const [modal, setModal] = useState(false);

  const proof = [
    { v: caseTotals.rankingKeywords, l: 'keywords ranking on Google' },
    { v: caseTotals.page1Keywords, l: 'keywords on page one' },
    { v: caseTotals.top3Keywords, l: 'keywords in the top three' },
    { v: String(caseTotals.projects), l: 'projects built and grown' },
  ];

  return (
    <>
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main className="flex-grow bg-bone">
        <section className="bg-ink text-white">
          <div className="container-width pt-10 pb-14">
            <Breadcrumbs dark items={[{ label: 'Case studies' }]} />
            <div className="max-w-3xl mt-6">
              <p className="eyebrow text-brand-300 mb-3">The track record</p>
              <h1 className="font-display font-bold text-[32px] lg:text-[46px] leading-tight text-white mb-4">
                Real local-SEO results, straight from Search Console
              </h1>
              <p className="text-[15px] lg:text-[17px] text-white/75 leading-relaxed">
                The simplest way to judge a local-SEO operator is the search results they produce. These are projects run
                by the person behind the matching service, US local sites taken from launch toward page-one Google
                rankings across very different niches. Every figure is pulled straight from Google Search Console and
                kept honest. The same bar is what we hold every Miami specialist in the network to.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {proof.map((s) => (
                <div key={s.l} className="rounded-lg border border-white/12 bg-white/[0.04] p-5">
                  <div className="font-display font-bold text-[26px] lg:text-[32px] text-brand-300">{s.v}</div>
                  <div className="mt-1.5 text-[12px] leading-snug text-white/55">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="container-width py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {caseStudies.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}/`}
                className="group flex flex-col bg-white border border-ink/10 rounded-lg p-6 hover:border-brand-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-brand-600">{c.location}</p>
                  {c.status === 'live' && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.14em] text-accent-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-500" /> In progress
                    </span>
                  )}
                </div>
                <div className="mt-4 font-display font-bold text-[30px] text-ink leading-none">{c.headline.value}</div>
                <div className="mt-1.5 text-[12.5px] text-ink/55">{c.headline.label}</div>
                <p className="mt-5 font-display font-semibold text-[18px] text-ink leading-tight group-hover:text-brand-600 transition-colors">
                  {c.name}
                </p>
                <p className="mt-1.5 flex-1 text-[13.5px] text-ink/65 leading-relaxed">{c.vertical}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-[12px] font-bold text-brand-600">
                  Read the case study <ArrowRight size={11} />
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-[12.5px] text-ink/45 max-w-2xl leading-relaxed">
            Specifics are kept general on purpose. We report ranking results, not traffic volumes or the exact target
            keywords, so the playbook is not handed to competitors. Live projects show their current trajectory, not a
            finished result.
          </p>
        </div>

        <section className="bg-brand-600 text-white text-center py-14">
          <div className="container-width max-w-3xl">
            <h2 className="font-display font-bold text-[26px] lg:text-[36px] leading-tight mb-3">
              Want results like these for your Miami business
            </h2>
            <p className="text-[15px] text-white/85 max-w-xl mx-auto mb-6 leading-relaxed">
              Free matching with a vetted Miami local SEO specialist held to the same standard. Most introductions
              within 24 business hours.
            </p>
            <button onClick={() => setModal(true)} className="btn-on-dark text-[15px] px-7 py-3.5">
              Get matched <ArrowUpRight size={14} />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
