'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowRight, MapPin, AlertCircle, Briefcase, Users,
  Building2, Star, Shield, TrendingUp, Search, FileText, Pencil,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AREA_HUBS, getAreaHubBySlug } from '@/data/locations';
import { areaContent } from '@/data/areaContent';
import { locationProfiles } from '@/data/locationProfiles';
import { services } from '@/data/services';
import { siteConfig, FAQS_LOCATION } from '@/data/site';
import { getCityDeepContent } from '@/data/cityDeepContent';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';

const SERVICE_ICON: Record<string, LucideIcon> = {
  'google-business-profile': MapPin,
  'local-citation-building': FileText,
  'review-management':       Star,
  'on-page-local-seo':       Shield,
  'local-link-building':     Search,
  'map-pack-optimization':   TrendingUp,
  'local-content-strategy':  Pencil,
};

function buildFallbackFaqs(name: string, zip: string) {
  return [
    {
      question: `How quickly can I be matched with a ${name} local SEO specialist?`,
      answer: `Most ${name} matches are made within 24 business hours. We connect you with a vetted specialist who has live ranking results in ${name} and your sector. Discovery call typically follows within a working day.`,
    },
    {
      question: `Which Miami specialists typically serve ${name} businesses?`,
      answer: `Specialists with active client work in the ${zip} area and adjacent zip codes. We match by sector-and-neighborhood combination, a ${name} restaurant gets a different match than a ${name} law firm, even though both are in the same area.`,
    },
    {
      question: `Is the matching service really free for ${name} businesses?`,
      answer: `Yes. We are paid by the specialists in our network when an introduction leads to a contract. ${name} businesses pay only the specialist for the work they do, never us, and never any markup on the specialist's quoted fee.`,
    },
  ];
}

export default function AreaPage({ params }: { params: { area: string } }) {
  const [modal, setModal] = useState(false);
  const hub = getAreaHubBySlug(params.area);
  if (!hub) notFound();

  const ac = areaContent[hub.slug];
  const lp = locationProfiles[hub.slug];
  const deep = getCityDeepContent(hub.slug);
  const otherAreas = AREA_HUBS.filter(a => a.slug !== hub.slug);

  const faqs = ac?.faqOverride ?? buildFallbackFaqs(hub.name, hub.zip);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Neighborhoods', url: '/location/' },
    { name: hub.name,        url: `/location/${hub.slug}/` },
  ]);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/location/${hub.slug}/#service`,
    name: `${siteConfig.name} — ${hub.name}`,
    url: `${siteConfig.url}/location/${hub.slug}/`,
    description: `Free local SEO matching service for ${hub.name} (${hub.zip}) businesses. Vetted specialists across Miami metro.`,
    provider: { '@id': `${siteConfig.url}/#organization` },
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    areaServed: {
      '@type': 'Place',
      name: hub.name,
      containedInPlace: { '@type': 'City', name: 'Miami' },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} defaultArea={hub.name} />
      <Header onOpenModal={() => setModal(true)} />

      <main className="flex-grow bg-bone">

        {/* HERO */}
        <section className="bg-ink text-white">
          <div className="container-width pt-10 pb-14 lg:pt-14 lg:pb-20">
            <Breadcrumbs dark items={[{ label: 'Neighborhoods', href: '/location/' }, { label: hub.name }]} />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mt-6">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-brand-300 px-2 py-1 bg-brand-500/15 border border-brand-300/30 rounded">
                    {hub.area}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/55">
                    {hub.zip}
                  </span>
                </div>
                <h1 className="font-display font-bold text-[34px] lg:text-[48px] leading-tight text-white mb-5">
                  Local SEO in <span className="text-brand-300">{hub.name}</span>
                </h1>
                <p className="text-[15px] lg:text-[17px] leading-relaxed text-white/80 max-w-2xl mb-6">
                  {ac?.heroParagraph ?? `Free matching with vetted local SEO specialists for ${hub.name} (${hub.zip}) businesses. Most introductions within 24 business hours.`}
                </p>
                {lp && (
                  <p className="font-display italic font-medium text-[16px] text-brand-300/85 max-w-xl leading-relaxed">
                    {lp.character}
                  </p>
                )}
              </div>
              <div className="lg:col-span-5">
                <HeroLeadForm area={hub.name} />
              </div>
            </div>
          </div>
        </section>

        {/* Single full-width content column, no sidebar */}
        <article className="container-width py-14 lg:py-20 max-w-4xl space-y-14">

          {/* Section 1: PROFILE CARDS — dominant business type + key challenge */}
          {lp && (
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative overflow-hidden bg-white border border-ink/10 rounded-xl p-5">
                <div className="pointer-events-none absolute -top-4 -right-4 text-brand-500 opacity-[0.08]" aria-hidden="true">
                  <Briefcase className="w-28 h-28" />
                </div>
                <div className="relative">
                  <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-brand-600 mb-2 flex items-center gap-1.5">
                    <Briefcase size={11} /> Dominant business type
                  </p>
                  <p className="text-[14px] text-ink/85 leading-relaxed">{lp.dominantBusinessType}</p>
                </div>
              </div>
              <div className="relative overflow-hidden bg-white border border-ink/10 rounded-xl p-5">
                <div className="pointer-events-none absolute -top-4 -right-4 text-red-500 opacity-[0.08]" aria-hidden="true">
                  <AlertCircle className="w-28 h-28" />
                </div>
                <div className="relative">
                  <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-brand-600 mb-2 flex items-center gap-1.5">
                    <AlertCircle size={11} /> Key SEO challenge
                  </p>
                  <p className="text-[14px] text-ink/85 leading-relaxed">{lp.keyChallenge}</p>
                </div>
              </div>
            </section>
          )}

          {/* Section 2: INTRO */}
          {ac && (
            <section>
              <p className="eyebrow mb-3">— {hub.name} in detail</p>
              <h2 className="font-display font-bold text-[28px] lg:text-[36px] leading-tight text-ink mb-5">
                {ac.introHeading}
              </h2>
              <div className="space-y-4 text-[15px] lg:text-[16px] leading-relaxed text-ink/80">
                {ac.introParagraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </section>
          )}

          {/* Section 3: LOCAL MARKET LANDSCAPE — bespoke deep content */}
          {deep && deep.localNarrative.length > 0 && (
            <section>
              <p className="eyebrow mb-3">— Local market landscape</p>
              <h2 className="font-display font-bold text-[26px] lg:text-[32px] leading-tight text-ink mb-5">
                Inside the {hub.name} local SEO landscape
              </h2>
              <div className="space-y-4 text-[15px] lg:text-[16px] leading-relaxed text-ink/80">
                {deep.localNarrative.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </section>
          )}

          {/* Section 4: WHY SPECIALISM MATTERS HERE */}
          {deep && deep.whyMattersHere.length > 0 && (
            <section>
              <p className="eyebrow mb-3">— Where specialism moves the needle</p>
              <h2 className="font-display font-bold text-[26px] lg:text-[32px] leading-tight text-ink mb-5">
                Where specialism moves the needle in {hub.name}
              </h2>
              <div className="space-y-4 text-[15px] lg:text-[16px] leading-relaxed text-ink/80">
                {deep.whyMattersHere.map((p, i) => (
                  <div key={i} className="bg-paper border-l-4 border-brand-500 rounded-r-md p-5">
                    <p>{p}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 5: RECENT ENGAGEMENTS — case-numbered cards */}
          {deep && deep.localExamples.length > 0 && (
            <section>
              <p className="eyebrow mb-3">— Recent engagements</p>
              <h2 className="font-display font-bold text-[26px] lg:text-[32px] leading-tight text-ink mb-5">
                Recent {hub.name} engagement scenarios
              </h2>
              <p className="text-[14.5px] text-ink/65 mb-6 leading-relaxed">
                Composite scenarios drawn from real {hub.name} matched-specialist engagements. Names and identifying details are anonymized; budget ranges and outcomes reflect typical patterns.
              </p>
              <div className="space-y-4">
                {deep.localExamples.map((ex, i) => (
                  <div key={i} className="relative overflow-hidden bg-white border border-ink/10 rounded-xl p-6">
                    <div className="pointer-events-none absolute -top-4 -right-4 text-brand-500 opacity-[0.08]" aria-hidden="true">
                      <Building2 className="w-28 h-28" />
                    </div>
                    <div className="relative">
                      <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-brand-600 mb-2">
                        {hub.name} · Case {String(i + 1).padStart(2, '0')}
                      </p>
                      <h3 className="font-display font-semibold text-[20px] text-ink mb-3 leading-tight">
                        {ex.title}
                      </h3>
                      <p className="text-[14px] text-ink/75 leading-relaxed">{ex.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 6: WHY-SPECIALIST-MATTERS callout (template content from areaContent) */}
          {ac?.whySpecialistMatters && (
            <section>
              <div className="bg-brand-50 border-l-4 border-brand-500 rounded-r-md p-6">
                <p className="eyebrow text-brand-600 mb-2">— Why a specialist matters here</p>
                <p className="text-[15px] text-ink/80 leading-relaxed italic">{ac.whySpecialistMatters}</p>
              </div>
            </section>
          )}

          {/* Section 7: BUSINESS PROFILE */}
          {ac?.businessProfile && (
            <section>
              <p className="eyebrow mb-3">— Business profile</p>
              <h2 className="font-display font-bold text-[26px] lg:text-[32px] leading-tight text-ink mb-5">
                {ac.businessProfile.heading}
              </h2>
              <div className="bg-white border border-ink/10 rounded-lg p-6">
                <ul className="space-y-3">
                  {ac.businessProfile.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14.5px] text-ink/80 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0 mt-2" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Section 8: COMMON OPPORTUNITIES */}
          {ac?.commonOpportunities && ac.commonOpportunities.length > 0 && (
            <section>
              <p className="eyebrow mb-3">— Common opportunities</p>
              <h2 className="font-display font-bold text-[26px] lg:text-[32px] leading-tight text-ink mb-5">
                Common SEO opportunities for {hub.name} businesses
              </h2>
              <ul className="space-y-2.5">
                {ac.commonOpportunities.map((t, i) => (
                  <li key={i} className="bg-paper border border-ink/10 rounded-md px-4 py-3 text-[14px] text-ink/80">
                    {t}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Section 9: COVERAGE */}
          <section>
            <p className="eyebrow mb-3">— Coverage</p>
            <h2 className="font-display font-bold text-[26px] lg:text-[32px] leading-tight text-ink mb-2">
              {hub.name} sub-areas we cover
            </h2>
            <p className="text-[14.5px] text-ink/65 mb-5 leading-relaxed">
              Sub-neighborhoods of {hub.name} typically served by the matched specialist network:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {hub.subAreas.map(s => (
                <div key={s.name} className="bg-white border border-ink/10 rounded-md p-4">
                  <p className="font-semibold text-[14px] text-ink mb-0.5">{s.name}</p>
                  {s.zip && <p className="text-[11px] font-mono text-brand-600 mb-1">{s.zip}</p>}
                  {s.note && <p className="text-[12.5px] text-ink/65 leading-relaxed">{s.note}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Section 10: BUSINESS MIX from locationProfile */}
          {lp && (
            <section>
              <p className="eyebrow mb-3">— Businesses we typically match</p>
              <h2 className="font-display font-bold text-[26px] lg:text-[32px] leading-tight text-ink mb-5">
                Who we connect to {hub.name} specialists
              </h2>
              <div className="relative overflow-hidden bg-white border border-ink/10 rounded-xl p-6">
                <div className="pointer-events-none absolute -top-4 -right-4 text-brand-500 opacity-[0.08]" aria-hidden="true">
                  <Users className="w-28 h-28" />
                </div>
                <div className="relative">
                  <ul className="space-y-2.5">
                    {lp.businessMix.map((m, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px] text-ink/80 leading-relaxed">
                        <ArrowRight size={14} className="text-brand-500 flex-shrink-0 mt-1" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Section 11: LOCAL CONTEXT */}
          {ac?.localContext && (
            <section className="bg-paper border border-ink/10 rounded-lg p-6">
              <p className="eyebrow mb-3">— {hub.name} in context</p>
              <p className="text-[15px] text-ink/80 leading-relaxed">{ac.localContext}</p>
            </section>
          )}

          {/* Section 12: SERVICES IN {cityName} — links back to /services/[slug], NOT combo */}
          <section>
            <p className="eyebrow mb-3">— Services in {hub.name}</p>
            <h2 className="font-display font-bold text-[26px] lg:text-[32px] leading-tight text-ink mb-3">
              Local SEO services in {hub.name}
            </h2>
            <p className="text-[14.5px] text-ink/65 mb-5 leading-relaxed max-w-xl">
              Each service maps to a vetted Miami specialist who can run that work for {hub.name} ({hub.zip}) businesses. Specialists typically combine these into integrated retainers; one-off project scopes are also available.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map(s => {
                const Icon = SERVICE_ICON[s.slug] ?? Search;
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}/`}
                    className="relative overflow-hidden bg-white border border-ink/10 rounded-xl p-5 group hover:border-brand-300 transition-colors"
                  >
                    <div className="pointer-events-none absolute -top-4 -right-4 text-brand-500 opacity-[0.08]" aria-hidden="true">
                      <Icon className="w-28 h-28" />
                    </div>
                    <div className="relative">
                      <p className="font-semibold text-[14.5px] text-ink group-hover:text-brand-600 transition-colors leading-tight mb-1">
                        {s.title} in {hub.name}
                      </p>
                      <p className="text-[11px] font-mono uppercase tracking-[0.12em] text-ink/45 mb-2">
                        {hub.zip}
                      </p>
                      <p className="text-[12.5px] text-ink/65 leading-relaxed line-clamp-2">
                        {s.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Section 13: FAQ */}
          <FAQ faqs={faqs} title={`${hub.name} local SEO — common questions`} />
        </article>

        {/* Other neighborhoods strip */}
        <section className="bg-paper py-14 lg:py-18 border-t border-ink/8">
          <div className="container-width">
            <p className="eyebrow mb-3">— Other neighborhoods</p>
            <h2 className="font-display font-bold text-[24px] lg:text-[30px] leading-tight text-ink mb-6">
              Other Miami neighborhoods we cover
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {otherAreas.map(a => (
                <Link
                  key={a.slug}
                  href={`/location/${a.slug}/`}
                  className="bg-white border border-ink/10 rounded-md p-4 group hover:border-brand-300 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={13} className="text-brand-500 flex-shrink-0" />
                    <span className="font-semibold text-[14px] text-ink group-hover:text-brand-600 transition-colors">{a.name}</span>
                  </div>
                  <p className="text-[11px] font-mono text-ink/45">{a.zip}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-brand-600 text-white text-center py-14 lg:py-18">
          <div className="container-width max-w-3xl">
            <h2 className="font-display font-bold text-[28px] lg:text-[40px] leading-tight mb-3">
              Get matched in {hub.name}
            </h2>
            <p className="text-[15px] text-white/85 max-w-xl mx-auto mb-6 leading-relaxed">
              Tell us about your business, vetted match within 24 business hours.
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
