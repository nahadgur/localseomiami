'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { pricingTiers } from '@/data/pricing';
import { FAQS_SERVICES } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';

export default function ServicesIndexPage() {
  const [modal, setModal] = useState(false);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Services', url: '/services/' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main className="flex-grow bg-bone">

        <section className="bg-ink text-white">
          <div className="container-width pt-10 pb-14 lg:pt-14 lg:pb-20">
            <Breadcrumbs dark items={[{ label: 'Services' }]} />
            <div className="mt-6 max-w-3xl">
              <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-brand-300 mb-4">
                Local SEO services in Miami
              </p>
              <h1 className="font-display font-bold text-[34px] lg:text-[48px] leading-tight text-white mb-5">
                Seven local SEO services for Miami businesses
              </h1>
              <p className="text-[15px] lg:text-[17px] leading-relaxed text-white/80 max-w-2xl">
                Each service has a detail page with what it includes, who it suits, and how it fits into a complete Miami local SEO program. Specialists in our network typically combine multiple services into integrated retainers.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container-width">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {services.map(s => (
                <Link key={s.slug} href={`/services/${s.slug}/`} className="card p-5 lg:p-6 group">
                  <h2 className="font-display font-semibold text-[22px] text-ink mb-2 group-hover:text-brand-600 transition-colors leading-tight">
                    {s.title}
                  </h2>
                  <p className="text-[13.5px] text-ink/70 leading-relaxed mb-4">
                    {s.description}
                  </p>
                  <span className="text-[12px] font-bold text-brand-600 inline-flex items-center gap-1">
                    Read full guide <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-paper py-16 lg:py-20">
          <div className="container-width">
            <div className="mb-8">
              <p className="eyebrow mb-3">— What you actually pay</p>
              <h2 className="font-display font-bold text-[30px] lg:text-[40px] leading-tight text-ink mb-3">
                Typical Miami local SEO pricing
              </h2>
              <p className="text-[15px] text-ink/65 max-w-2xl leading-relaxed">
                Ranges reflect what specialists in our network typically quote for Miami market work. Final pricing is set by the matched specialist after a free discovery call.
              </p>
            </div>

            <div className="hidden md:block bg-white border border-ink/10 rounded-lg overflow-hidden">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="bg-ink text-white text-left">
                    <th className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.15em] font-normal text-white/70">Service tier</th>
                    <th className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.15em] font-normal text-white/70">Monthly</th>
                    <th className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.15em] font-normal text-white/70">One-time</th>
                    <th className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.15em] font-normal text-white/70">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingTiers.map((t, i) => (
                    <tr key={t.slug} className={i < pricingTiers.length - 1 ? 'border-b border-ink/8' : ''}>
                      <td className="px-5 py-4 font-semibold text-ink">{t.service}</td>
                      <td className="px-5 py-4 font-mono text-brand-700">{t.monthlyRange}</td>
                      <td className="px-5 py-4 font-mono text-ink/75">{t.oneTimeRange}</td>
                      <td className="px-5 py-4 text-[13px] text-ink/65 max-w-md">{t.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="md:hidden space-y-3">
              {pricingTiers.map(t => (
                <div key={t.slug} className="bg-white border border-ink/10 rounded-lg p-4">
                  <p className="font-semibold text-ink mb-2">{t.service}</p>
                  <div className="grid grid-cols-2 gap-3 mb-2 text-[13px]">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-ink/45 mb-0.5">Monthly</p>
                      <p className="font-mono text-brand-700">{t.monthlyRange}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-ink/45 mb-0.5">One-time</p>
                      <p className="text-ink/85">{t.oneTimeRange}</p>
                    </div>
                  </div>
                  <p className="text-[12px] text-ink/60 leading-relaxed">{t.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-bone">
          <div className="container-width max-w-4xl">
            <p className="eyebrow mb-3">— Common questions</p>
            <FAQ faqs={FAQS_SERVICES} title="Common questions about Miami local SEO services" />
          </div>
        </section>

        <section className="bg-brand-600 text-center text-white py-16 lg:py-20">
          <div className="container-width max-w-3xl">
            <h2 className="font-display font-bold text-[30px] lg:text-[42px] leading-tight mb-4">
              Get matched with a Miami local SEO specialist
            </h2>
            <p className="text-[15px] lg:text-[17px] text-white/85 max-w-xl mx-auto mb-8 leading-relaxed">
              Tell us about your business. Free, no obligation, vetted network.
            </p>
            <button onClick={() => setModal(true)} className="btn-on-dark text-[15px] px-7 py-3.5">
              Open the matching form <ArrowRight size={14} />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
