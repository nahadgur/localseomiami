'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, CheckCircle, TrendingUp, DollarSign } from 'lucide-react';
import { services } from '@/data/services';
import { AREA_HUBS } from '@/data/locations';
import { siteConfig, FAQS_HOME } from '@/data/site';
import { heroContent, problemFraming, howItWorks, whyMatchingService, faqSectionTitle, ctaSection } from '@/data/homepage';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { FAQ } from '@/components/FAQ';
import { GeoGrid, LocalPackMockup, GBPCard, TrafficGraph, RankBar, CitationRow } from '@/components/SEOArt';

export default function HomePage() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main className="flex-grow bg-bone">

        {/* ─── Hero with above-fold form ─────────────────────────── */}
        <section className="bg-bone relative overflow-hidden">
          <div className="container-width pt-12 pb-16 lg:pt-20 lg:pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

              <div className="lg:col-span-7">
                <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-coral-600 mb-5 flex items-center gap-3">
                  <span className="w-8 h-px bg-coral-500/70" />
                  {heroContent.eyebrow}
                </p>
                <h1 className="font-display font-bold text-[36px] sm:text-[46px] lg:text-[60px] leading-[1.02] tracking-[-0.025em] text-ink mb-6">
                  Get your Miami business ranking in the{' '}
                  <span
                    className="inline-block"
                    style={{
                      background: 'linear-gradient(180deg, transparent 60%, #ff6b4a66 60%)',
                      padding: '0 6px',
                      marginLeft: -6,
                    }}
                  >
                    Map Pack
                  </span>
                </h1>
                <p className="text-[15px] lg:text-[17px] leading-relaxed text-ink/70 max-w-2xl mb-8">
                  {heroContent.subtitle}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-2">
                  {[
                    { icon: <CheckCircle size={16} />, text: 'Vetted network' },
                    { icon: <TrendingUp size={16} />, text: 'Map Pack focus' },
                    { icon: <MapPin size={16} />, text: 'Miami-specific' },
                    { icon: <DollarSign size={16} />, text: 'Free to you' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[12.5px] text-ink/70">
                      <span className="text-coral-600">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <HeroLeadForm />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Why most don't rank ───────────────────────────────── */}
        <section className="bg-bone py-16 lg:py-24">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10">
              <div className="lg:col-span-5">
                <p className="eyebrow mb-3">Reality check</p>
                <h2 className="font-display font-bold text-[32px] lg:text-[44px] leading-tight text-ink">
                  {problemFraming.heading}
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-4 text-[15px] lg:text-[16px] leading-relaxed text-ink/75 self-end">
                {problemFraming.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Geo-grid measurement section (dark, technical proof) ─ */}
        <section className="bg-ink text-white py-16 lg:py-24">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-6">
                <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#ff6b4a] mb-3">
                  → How rankings get measured
                </p>
                <h2 className="font-display font-bold text-[30px] lg:text-[42px] leading-[1.1] mb-5">
                  &quot;Number 1 in Miami&quot; means nothing without a grid.
                </h2>
                <div className="space-y-4 text-[15px] text-white/75 leading-relaxed max-w-xl">
                  <p>
                    A real local SEO operator does not check a single keyword from one office chair. They scan 25 points across a search radius and read the heatmap. Top 3 in green, page 1 in yellow, page 2+ in red.
                  </p>
                  <p>
                    Specialists in our network ship a geo-grid baseline before they touch your Google Business Profile, and another every 30 days after. If a specialist quotes you on rankings without showing one, that is your tell to walk.
                  </p>
                </div>
                <div className="mt-7 grid grid-cols-3 gap-3 max-w-md">
                  {[
                    { c: '#0f9d58', l: 'Top 3',      n: '18 / 25' },
                    { c: '#fbbc04', l: 'Pos 4-10',   n: '5 / 25'  },
                    { c: '#ea4335', l: 'Pos 11+',    n: '2 / 25'  },
                  ].map(r => (
                    <div key={r.l} className="bg-[#0a0d12] p-3 rounded">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ background: r.c }} />
                        <span className="text-[10px] font-mono text-white/60 tracking-wider">{r.l}</span>
                      </div>
                      <p className="text-[18px] font-bold font-mono mt-1">{r.n}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div
                  className="rounded-lg p-5 w-full max-w-md"
                  style={{ background: '#13171f', border: '1px solid #232733' }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-white/55 tracking-wide">
                      &quot;hvac repair brickell&quot; · 3mi radius
                    </span>
                    <span className="text-[10px] font-mono" style={{ color: '#ff6b4a' }}>● post-30d</span>
                  </div>
                  <div className="flex justify-center">
                    <GeoGrid size={280} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Service catalogue ─────────────────────────────────── */}
        <section className="bg-paper py-16 lg:py-24">
          <div className="container-width">
            <div className="mb-10 lg:mb-12">
              <p className="eyebrow mb-3">Seven services</p>
              <h2 className="font-display font-bold text-[30px] lg:text-[42px] leading-tight text-ink mb-3">
                What we match for
              </h2>
              <p className="text-[15px] text-ink/65 max-w-2xl leading-relaxed">
                The seven local SEO service categories we route Miami businesses to. Specialists in our network typically combine these into integrated retainers; one-off project scopes (audit, citation cleanup) are also available.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {services.map(s => (
                <Link key={s.slug} href={`/services/${s.slug}/`} className="card p-5 lg:p-6 group">
                  <h3 className="font-display font-semibold text-[20px] text-ink mb-2 group-hover:text-brand-600 transition-colors leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-[13.5px] text-ink/70 leading-relaxed mb-4 line-clamp-3">
                    {s.description}
                  </p>
                  <span className="text-[12px] font-bold text-brand-600 inline-flex items-center gap-1">
                    Read more <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Local Pack + GBP, what success actually looks like ─ */}
        <section className="bg-bone py-16 lg:py-24">
          <div className="container-width">
            <div className="max-w-2xl mb-10 lg:mb-12">
              <p className="eyebrow mb-3">What a result looks like</p>
              <h2 className="font-display font-bold text-[30px] lg:text-[42px] leading-tight text-ink mb-4">
                Two artifacts you should see from any specialist you hire.
              </h2>
              <p className="text-[15px] text-ink/65 leading-relaxed">
                The Map Pack (those 3 listings above the fold on a local query) takes about 44% of clicks. The Google Business Profile dashboard is where most of the work shows up. If a specialist cannot show you both, they are running a different playbook.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-brand-600 mb-3">
                  → Goal · Map Pack visibility
                </p>
                <LocalPackMockup />
                <p className="text-[12.5px] text-ink/60 leading-relaxed mt-4 max-w-md">
                  Sample SERP. The &quot;YOU&quot; row is the position the specialist is paid to defend, week after week.
                </p>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-brand-600 mb-3">
                  → Proof · GBP insights
                </p>
                <GBPCard />
                <p className="text-[12.5px] text-ink/60 leading-relaxed mt-4 max-w-md">
                  Sample 30-day GBP movement. Direction requests and calls are the two metrics that map cleanly to revenue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── How matching works ────────────────────────────────── */}
        <section className="bg-ink text-white py-16 lg:py-24">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
              <div className="lg:col-span-7">
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-brand-300 mb-3">How it works</p>
                <h2 className="font-display font-bold text-[32px] lg:text-[44px] leading-tight">
                  {howItWorks.heading}
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {howItWorks.steps.map((step) => (
                <div key={step.step} className="border-t-2 border-brand-300 pt-5">
                  <div className="font-display font-bold text-[48px] lg:text-[60px] leading-none text-brand-300 mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-display font-semibold text-[22px] text-white mb-3 leading-tight">{step.title}</h3>
                  <p className="text-[14px] leading-relaxed text-white/70">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Sample audit + traffic + rank movement ─────────────── */}
        <section className="bg-paper py-16 lg:py-24">
          <div className="container-width">
            <div className="max-w-2xl mb-10 lg:mb-12">
              <p className="eyebrow mb-3">Sample deliverables</p>
              <h2 className="font-display font-bold text-[30px] lg:text-[42px] leading-tight text-ink mb-4">
                What the first 90 days should produce.
              </h2>
              <p className="text-[15px] text-ink/65 leading-relaxed">
                A Miami specialist worth a retainer will hand you these three things in the first quarter, citation gaps mapped, organic traffic curve climbing, priority keywords moving up the SERP. Use these samples to set your baseline expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

              <div className="lg:col-span-5">
                <div className="bg-white border border-ink/10 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-3.5 py-3 bg-[#fafaf7] border-b border-ink/10">
                    <span className="text-[12px] font-bold font-mono tracking-wide">NAP_AUDIT.csv</span>
                    <span className="text-[11px] font-mono text-ink/55">14 / 80 issues</span>
                  </div>
                  {[
                    { name: 'Google Business Profile',     status: 'listed'       as const },
                    { name: 'Apple Business Connect',      status: 'missing'      as const },
                    { name: 'Bing Places',                 status: 'listed'       as const },
                    { name: 'Yelp',                        status: 'inconsistent' as const },
                    { name: 'Facebook',                    status: 'listed'       as const },
                    { name: 'Foursquare / Factual',        status: 'missing'      as const },
                    { name: 'Better Business Bureau',      status: 'inconsistent' as const },
                    { name: 'Yellow Pages',                status: 'listed'       as const },
                  ].map(c => <CitationRow key={c.name} {...c} />)}
                  <div className="px-3.5 py-3.5 bg-[#fafaf7] border-t border-ink/10 text-center">
                    <span className="text-[11px] font-mono text-ink/55">+ 72 more checked</span>
                  </div>
                </div>
                <p className="text-[12.5px] text-ink/60 leading-relaxed mt-3 max-w-md">
                  Sample citation audit. Inconsistent NAP across data aggregators is the silent ranking killer in Miami, especially for businesses that have moved or rebranded.
                </p>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="bg-ink rounded-lg p-5 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-white/55 tracking-wide">ORGANIC SESSIONS · 12 MONTHS</span>
                    <span className="text-[10px] font-mono" style={{ color: '#0f9d58' }}>↑ sample curve</span>
                  </div>
                  <TrafficGraph width={520} height={170} />
                </div>

                <div className="bg-white border border-ink/10 rounded-lg p-5">
                  <p className="text-[10px] font-mono text-ink/55 uppercase tracking-wide mb-4">
                    → Priority keyword movement · sample
                  </p>
                  <div className="flex flex-col gap-3.5">
                    <RankBar before={47} after={2}  label='"hvac repair brickell"' />
                    <RankBar before={62} after={1}  label='"miami office cleaning"' />
                    <RankBar before={89} after={4}  label='"dentist near doral"' />
                    <RankBar before={31} after={1}  label='"abogado de accidentes miami"' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Why matching service ──────────────────────────────── */}
        <section className="bg-bone py-16 lg:py-24">
          <div className="container-width">
            <div className="mb-10 lg:mb-12 max-w-2xl">
              <p className="eyebrow mb-3">Why us</p>
              <h2 className="font-display font-bold text-[30px] lg:text-[42px] leading-tight text-ink">
                {whyMatchingService.heading}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {whyMatchingService.points.map((p, i) => (
                <div key={i} className="bg-white border border-ink/10 rounded-lg p-6">
                  <h3 className="font-display font-semibold text-[19px] text-ink mb-2 leading-tight">{p.title}</h3>
                  <p className="text-[14px] text-ink/70 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Neighborhoods ─────────────────────────────────────── */}
        <section className="bg-paper py-16 lg:py-24">
          <div className="container-width">
            <div className="mb-10">
              <p className="eyebrow mb-3">Coverage</p>
              <h2 className="font-display font-bold text-[30px] lg:text-[42px] leading-tight text-ink mb-3">
                Miami neighborhoods we cover
              </h2>
              <p className="text-[15px] text-ink/65 max-w-2xl leading-relaxed">
                Every major Miami metro neighborhood, with sector-specific specialist matching for the dominant business mix in each area.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {AREA_HUBS.map(a => (
                <Link key={a.slug} href={`/location/${a.slug}/`} className="card p-4 group">
                  <div className="flex items-center gap-2 mb-1.5">
                    <MapPin size={14} className="text-brand-500 flex-shrink-0" />
                    <span className="font-semibold text-[14px] text-ink group-hover:text-brand-600 transition-colors">{a.name}</span>
                  </div>
                  <p className="text-[11px] font-mono text-ink/50">{a.zip}</p>
                </Link>
              ))}
            </div>
            <Link href="/location/" className="inline-flex items-center gap-1 mt-6 text-[13px] font-bold text-brand-600 hover:text-brand-700">
              View all neighborhoods <ArrowRight size={12} />
            </Link>
          </div>
        </section>

        {/* ─── FAQ ───────────────────────────────────────────────── */}
        <section className="bg-bone py-16 lg:py-24">
          <div className="container-width max-w-4xl">
            <p className="eyebrow mb-3">Common questions</p>
            <FAQ faqs={FAQS_HOME} title={faqSectionTitle} />
          </div>
        </section>

        {/* ─── Bottom CTA ────────────────────────────────────────── */}
        <section className="bg-brand-600 py-16 lg:py-24 text-center text-white">
          <div className="container-width max-w-3xl">
            <h2 className="font-display font-bold text-[30px] lg:text-[44px] leading-tight mb-4">
              {ctaSection.heading}
            </h2>
            <p className="text-[15px] lg:text-[17px] text-white/85 leading-relaxed mb-8 max-w-2xl mx-auto">
              {ctaSection.subheading}
            </p>
            <button onClick={() => setModal(true)} className="btn-on-dark text-[15px] px-7 py-3.5">
              Get matched <ArrowRight size={14} />
            </button>
            <p className="mt-6 text-[12px] text-white/60 max-w-xl mx-auto">
              {siteConfig.serviceArea} · Vetted network · Free to businesses
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
