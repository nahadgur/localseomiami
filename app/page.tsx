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

export default function HomePage() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main className="flex-grow bg-bone">

        {/* ─── Hero with above-fold form ─────────────────────────── */}
        <section className="bg-ink text-white relative overflow-hidden">
          <div className="container-width pt-12 pb-16 lg:pt-20 lg:pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

              <div className="lg:col-span-7">
                <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-brand-300 mb-5 flex items-center gap-3">
                  <span className="w-8 h-px bg-brand-300/60" />
                  {heroContent.eyebrow}
                </p>
                <h1 className="font-display font-bold text-[36px] sm:text-[46px] lg:text-[58px] leading-[1.05] tracking-tight text-white mb-6">
                  {heroContent.title}
                </h1>
                <p className="text-[15px] lg:text-[17px] leading-relaxed text-white/80 max-w-2xl mb-8">
                  {heroContent.subtitle}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-2">
                  {[
                    { icon: <CheckCircle size={16} />, text: 'Vetted network' },
                    { icon: <TrendingUp size={16} />, text: 'Map Pack focus' },
                    { icon: <MapPin size={16} />, text: 'Miami-specific' },
                    { icon: <DollarSign size={16} />, text: 'Free to you' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[12px] text-white/75">
                      <span className="text-brand-300">{item.icon}</span>
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
                <p className="eyebrow mb-3">— Reality check</p>
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

        {/* ─── Service catalogue ─────────────────────────────────── */}
        <section className="bg-paper py-16 lg:py-24">
          <div className="container-width">
            <div className="mb-10 lg:mb-12">
              <p className="eyebrow mb-3">— Seven services</p>
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

        {/* ─── How matching works ────────────────────────────────── */}
        <section className="bg-ink text-white py-16 lg:py-24">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
              <div className="lg:col-span-7">
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-brand-300 mb-3">— How it works</p>
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

        {/* ─── Why matching service ──────────────────────────────── */}
        <section className="bg-bone py-16 lg:py-24">
          <div className="container-width">
            <div className="mb-10 lg:mb-12 max-w-2xl">
              <p className="eyebrow mb-3">— Why us</p>
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
              <p className="eyebrow mb-3">— Coverage</p>
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
            <p className="eyebrow mb-3">— Common questions</p>
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
