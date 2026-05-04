'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { getServiceContent } from '@/data/serviceContent';
import { siteConfig, FAQS_SERVICES } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';

const PAIRS_WITH: Record<string, { slug: string; reason: string }> = {
  'google-business-profile': {
    slug: 'review-management',
    reason: 'GBP optimization and review acquisition together produce most of the Map Pack ranking lift. Bundling them in the same engagement aligns the work and simplifies the reporting.',
  },
  'local-citation-building': {
    slug: 'google-business-profile',
    reason: 'Citations confirm the same NAP data your GBP advertises. Cleaning up citation inconsistencies while optimizing the GBP avoids duplicate work and produces faster ranking gains.',
  },
  'review-management': {
    slug: 'google-business-profile',
    reason: 'Reviews surface in the GBP listing directly — review velocity and GBP optimization compound. Most strong specialists treat these as a single workstream.',
  },
  'on-page-local-seo': {
    slug: 'local-content-strategy',
    reason: 'On-page schema and neighborhood landing pages need ongoing content fed into them to compound. The schema is the foundation; the content is what ranks on it.',
  },
  'local-link-building': {
    slug: 'local-content-strategy',
    reason: 'Quality local links are usually built on the back of quality content — the link prospect responds because the content is genuinely useful or because it cites their work. Content + links is the proven combination.',
  },
  'map-pack-optimization': {
    slug: 'google-business-profile',
    reason: 'Map Pack ranking strategy without GBP optimization is incomplete. The strategy frames; the GBP execution delivers. Most clients buy them as a single integrated engagement.',
  },
  'local-content-strategy': {
    slug: 'on-page-local-seo',
    reason: 'Content needs proper on-page foundation (schema, internal linking, page structure) to rank. Building content without these foundations leaves significant ranking value on the table.',
  },
};

const COMMON_MISTAKES: Record<string, { headline: string; mistakes: { what: string; why: string }[] }> = {
  'google-business-profile': {
    headline: 'Three GBP mistakes that hold most Miami businesses back',
    mistakes: [
      {
        what: 'Wrong primary category',
        why: 'Generic categories ("Lawyer", "Restaurant") rank materially worse than specific ones ("Personal Injury Attorney", "Cuban Restaurant") for the relevant queries. Most Miami GBPs were category-set at signup years ago and never revisited.',
      },
      {
        what: 'Service-area-business address showing publicly',
        why: 'Service-area businesses (plumbers, electricians, mobile services) violate Google\'s policy if their address is showing publicly. The policy violation invites GBP suspension and the public-address display weakens search visibility regardless.',
      },
      {
        what: 'Q&A unmonitored and unseeded',
        why: 'Anyone can post questions to your GBP — including competitors. Most Miami businesses have unanswered questions sitting on their listings, sometimes with intentionally-misleading framing. Seeding Q&A with the FAQs you want answered publicly prevents this and creates a search asset.',
      },
    ],
  },
  'local-citation-building': {
    headline: 'Three citation mistakes that waste Miami SEO budget',
    mistakes: [
      {
        what: 'Buying "100+ citations" packages',
        why: 'Most directories pass no link value and are penalized by Google. The right citation set is 30–60 high-quality directories — Apple Maps, Yelp, BBB, sector-specific (Avvo, Healthgrades, Houzz), and Miami-area business directories. Quantity over quality is the wrong frame.',
      },
      {
        what: 'Building before cleaning up',
        why: 'Existing citation inconsistencies dilute everything you build on top. Specialists clean up first (correct duplicates, fix NAP inconsistencies, claim abandoned listings) before building new citations. Building before cleanup is like fertilizing weeds.',
      },
      {
        what: 'Letting aggregators silently re-introduce bad data',
        why: 'Data aggregators (Acxiom, Infogroup, Localeze) periodically push their data into directories. Without ongoing monitoring, they re-introduce old addresses, old phone numbers, and inconsistent business names. Quarterly audits prevent slow erosion.',
      },
    ],
  },
  'review-management': {
    headline: 'Three review mistakes that get Miami businesses penalized',
    mistakes: [
      {
        what: 'Incentivizing reviews',
        why: 'Google\'s review policy explicitly prohibits offering anything of value (discounts, freebies, contest entries) in exchange for reviews. Violations risk GBP suspension. The "leave us a review and get 10% off" approach is one of the most common policy violations and one of the most damaging when caught.',
      },
      {
        what: 'Review gating',
        why: '"Asking customers privately if they\'re happy and only routing happy customers to public reviews" was banned by Google in 2018. Still common in Miami business operations but explicitly policy-violating and increasingly easy for Google to detect.',
      },
      {
        what: 'Buying reviews from third-party services',
        why: 'Fake review services produce policy-violating reviews from sock puppet accounts. Detection algorithms are increasingly effective. The result is GBP suspension, weeks of removed reviews, and reputational damage.',
      },
    ],
  },
  'on-page-local-seo': {
    headline: 'Three on-page mistakes that flatten Miami local SEO',
    mistakes: [
      {
        what: 'Token-swap neighborhood pages',
        why: 'Pages where "Brickell" is replaced with "Wynwood" and called done are penalized as thin/duplicate content. Real differentiation matters — neighborhood-specific testimonials, photos, local landmarks, and genuinely different content produces ranking; templates do not.',
      },
      {
        what: 'No schema or wrong schema',
        why: 'Most Miami small business sites have either no schema markup or wrong schema. Schema is structured data telling Google explicitly "this is a LocalBusiness, this is its address, these are its hours." High-leverage technical work that most agencies skip.',
      },
      {
        what: 'Mobile page-speed below 50',
        why: 'Most Miami local search is mobile, and mobile page speed is a confirmed ranking factor. PageSpeed Insights scores below 50 on mobile actively suppress ranking. Largest Contentful Paint, Cumulative Layout Shift, and image optimization are non-negotiable.',
      },
    ],
  },
  'local-link-building': {
    headline: 'Three link-building mistakes that waste Miami budget',
    mistakes: [
      {
        what: 'Treating local link building like national link building',
        why: 'A guest post in TechCrunch passes more domain authority than one in the Miami New Times — but for Map Pack rankings, the New Times is worth more. Local relevance beats generic authority. Most agencies optimize for the wrong metric.',
      },
      {
        what: 'Paid directory submissions to low-quality directories',
        why: '"Pay $50 to be listed in 100 directories" services pass nothing — Google has long since discounted those. Quality local links require relationship-driven outreach, not catalog submissions.',
      },
      {
        what: 'Expecting fast results',
        why: 'Most quality local links take 3–6 months from outreach to publication. Monthly reports showing 10+ link placements are usually low-quality directory submissions, not real outreach success. 1–3 quality placements per month is realistic for serious campaigns.',
      },
    ],
  },
  'map-pack-optimization': {
    headline: 'Three Map Pack ranking mistakes',
    mistakes: [
      {
        what: 'Believing "guaranteed page 1" promises',
        why: 'Map Pack rankings cannot be guaranteed. Algorithm changes, competitor activity, and proximity effects are all outside any specialist\'s control. Guarantees are sales fiction and usually precede contract clauses that make the guarantee unenforceable.',
      },
      {
        what: 'Tracking Map Pack ranking with generic tools',
        why: 'Ahrefs and SEMrush measure ranking from a single fixed location and miss the geographic variation that defines Map Pack ranking. Local-specific tools (Local Falcon, BrightLocal Local Search Grid) track across geographic grids and reveal the proximity-driven blind spots generic tools cannot.',
      },
      {
        what: 'Single-tactic strategies',
        why: 'Map Pack ranking requires the integrated stack — GBP, reviews, citations, on-page, links — not any single tactic in isolation. Engagements that focus on "we\'ll just build citations" or "we\'ll just optimize your GBP" leave most of the available ranking lift on the table.',
      },
    ],
  },
  'local-content-strategy': {
    headline: 'Three local content mistakes',
    mistakes: [
      {
        what: 'AI-generated content as the primary output',
        why: 'Pure AI-generated local content underperforms — not because Google detects AI per se, but because AI content is generic, light on specific local detail, and doesn\'t answer the specific questions Miami searchers are asking. AI as an editor and ideation tool works; AI as the writer doesn\'t.',
      },
      {
        what: 'Inconsistent publishing cadence',
        why: 'Three posts in the first month, then nothing for six months, kills momentum. Local content compounds with sustained publishing — once-per-week or once-per-fortnight, sustained for 12+ months, produces materially better results than burst-and-abandon patterns.',
      },
      {
        what: 'No internal linking strategy',
        why: 'New content published with no internal links from existing high-traffic pages, and no internal links forward to service or location pages, sits in isolation and ranks slowly. Internal linking is half the value of a content program.',
      },
    ],
  },
};

export default function ServicePage({ params }: { params: { serviceSlug: string } }) {
  const [modal, setModal] = useState(false);
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) notFound();

  const content = getServiceContent(service.slug);
  const pair = PAIRS_WITH[service.slug];
  const pairedService = pair ? services.find(s => s.slug === pair.slug) : undefined;
  const mistakes = COMMON_MISTAKES[service.slug];
  const otherServices = services.filter(s => s.slug !== service.slug);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Services',     url: '/services/' },
    { name: service.title,  url: `/services/${service.slug}/` },
  ]);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/services/${service.slug}/#service`,
    name: `${service.title} — Miami local SEO matching`,
    url: `${siteConfig.url}/services/${service.slug}/`,
    description: service.description,
    provider: { '@id': `${siteConfig.url}/#organization` },
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    areaServed: {
      '@type': 'City',
      name: 'Miami',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Florida' },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} defaultService={service.shortLabel} />
      <Header onOpenModal={() => setModal(true)} />

      <main className="flex-grow bg-bone">

        <section className="bg-ink text-white">
          <div className="container-width pt-10 pb-14 lg:pt-14 lg:pb-20">
            <Breadcrumbs dark items={[{ label: 'Services', href: '/services/' }, { label: service.title }]} />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mt-6">
              <div className="lg:col-span-7">
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-brand-300 mb-4">
                  Miami local SEO service
                </p>
                <h1 className="font-display font-bold text-[34px] lg:text-[48px] leading-tight text-white mb-5">
                  {service.title}
                </h1>
                <p className="text-[15px] lg:text-[17px] leading-relaxed text-white/80 max-w-2xl mb-6">
                  {service.description}
                </p>
              </div>
              <div className="lg:col-span-5">
                <HeroLeadForm service={service.shortLabel} />
              </div>
            </div>
          </div>
        </section>

        <div className="container-width py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            <article className="lg:col-span-2 space-y-12">

              <section>
                <p className="eyebrow mb-3">— What this is</p>
                <h2 className="font-display font-bold text-[28px] lg:text-[36px] leading-tight text-ink mb-5">
                  {service.title}: what it covers
                </h2>
                <div className="space-y-4 text-[15px] lg:text-[16px] leading-relaxed text-ink/80">
                  {content.intro.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </section>

              <section>
                <p className="eyebrow mb-3">— Why specialist matching matters</p>
                <h2 className="font-display font-bold text-[26px] lg:text-[32px] leading-tight text-ink mb-5">
                  What good {service.title.toLowerCase()} looks like
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content.benefits.map((b, i) => (
                    <div key={i} className="bg-white border border-ink/10 rounded-lg p-5">
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle size={16} className="text-accent-600 flex-shrink-0 mt-0.5" />
                        <h3 className="font-semibold text-[15px] text-ink leading-tight">{b.title}</h3>
                      </div>
                      <p className="text-[13.5px] text-ink/70 leading-relaxed pl-7">{b.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {mistakes && (
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle size={16} className="text-red-600" />
                    <p className="eyebrow text-red-600 m-0">— Common mistakes</p>
                  </div>
                  <h2 className="font-display font-bold text-[26px] lg:text-[32px] leading-tight text-ink mb-5">
                    {mistakes.headline}
                  </h2>
                  <div className="space-y-4">
                    {mistakes.mistakes.map((m, i) => (
                      <div key={i} className="bg-paper border-l-4 border-red-500 rounded-r-md p-5">
                        <p className="font-display font-semibold text-[18px] text-ink mb-2 leading-tight">
                          {i + 1}. {m.what}
                        </p>
                        <p className="text-[14px] text-ink/70 leading-relaxed">{m.why}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {pairedService && pair && (
                <section>
                  <div className="bg-brand-50 border-l-4 border-brand-500 rounded-r-md p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <ArrowRight size={14} className="text-brand-600" />
                      <p className="eyebrow text-brand-600 m-0">— Pairs well with</p>
                    </div>
                    <h3 className="font-display font-semibold text-[22px] text-ink mb-3 leading-tight">
                      {pairedService.title}
                    </h3>
                    <p className="text-[14.5px] text-ink/75 leading-relaxed mb-4">{pair.reason}</p>
                    <Link href={`/services/${pairedService.slug}/`} className="text-[13px] font-bold text-brand-600 inline-flex items-center gap-1 hover:text-brand-700">
                      Read about {pairedService.title.toLowerCase()} <ArrowRight size={12} />
                    </Link>
                  </div>
                </section>
              )}

              <section>
                <p className="eyebrow mb-3">— Who it suits</p>
                <h2 className="font-display font-bold text-[26px] lg:text-[32px] leading-tight text-ink mb-3">
                  Is {service.title.toLowerCase()} right for your Miami business?
                </h2>
                <p className="text-[15px] text-ink/70 mb-5 leading-relaxed">{content.candidateIntro}</p>
                <div className="bg-white border border-ink/10 rounded-lg p-6">
                  <ul className="space-y-3">
                    {content.candidates.map((c, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={14} className="text-accent-600 flex-shrink-0 mt-1" />
                        <span className="text-[14.5px] text-ink/80 leading-relaxed">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <p className="eyebrow mb-3">— The matching process</p>
                <h2 className="font-display font-bold text-[26px] lg:text-[32px] leading-tight text-ink mb-5">
                  How {service.title.toLowerCase()} matching works
                </h2>
                <div className="space-y-3">
                  {content.process.map((step, i) => (
                    <div key={i} className="flex gap-4 items-start bg-white border border-ink/10 rounded-lg p-5">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-500 text-white rounded-full flex items-center justify-center font-bold text-[13px]">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-[15px] text-ink mb-1">{step.title}</p>
                        <p className="text-[13.5px] text-ink/70 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <FAQ faqs={[...service.faqs, ...FAQS_SERVICES]} title={`${service.title} — common questions`} />
              </section>
            </article>

            <aside>
              <div className="lg:sticky lg:top-24 space-y-5">
                <div className="bg-white border border-ink/10 rounded-lg p-5">
                  <p className="eyebrow mb-2">Get matched</p>
                  <h3 className="font-display font-semibold text-[20px] text-ink leading-tight mb-2">
                    Free Miami matching
                  </h3>
                  <p className="text-[13px] text-ink/65 mb-4 leading-relaxed">
                    Vetted specialists with live ranking results in your sector. Most introductions within 24 business hours.
                  </p>
                  <button onClick={() => setModal(true)} className="btn-primary w-full justify-center">
                    Get matched <ArrowRight size={14} />
                  </button>
                </div>

                <div className="bg-paper border border-ink/10 rounded-lg p-5">
                  <p className="eyebrow mb-3">Other services</p>
                  <ul className="space-y-2">
                    {otherServices.map(s => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}/`} className="flex items-start gap-2 text-[13.5px] text-ink/75 hover:text-brand-600 transition-colors">
                          <ArrowRight size={11} className="text-brand-500 flex-shrink-0 mt-1" />
                          <span>{s.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <section className="bg-brand-600 text-white py-14 lg:py-18 text-center">
          <div className="container-width max-w-3xl">
            <h2 className="font-display font-bold text-[28px] lg:text-[40px] leading-tight mb-3">
              Get matched for {service.title.toLowerCase()}
            </h2>
            <p className="text-[15px] text-white/85 max-w-xl mx-auto mb-6 leading-relaxed">
              Tell us about your Miami business — vetted match within 24 business hours.
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
