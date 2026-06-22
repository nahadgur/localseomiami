import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig, owner } from '@/data/site';
import { caseStudies, caseTotals } from '@/data/caseStudies';
import { personSchema, breadcrumbListSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About the matching service',
  description:
    'Local Miami SEO is a free matching service run by Vim, a working local-SEO specialist, connecting Miami businesses with vetted specialists. We are not an SEO agency, we introduce businesses to qualified specialists.',
  alternates: { canonical: '/about/' },
  robots: { index: true, follow: true },
};

const principles = [
  'Live ranking results and real Search Console data, never fabricated reviews or stats',
  'You pay only the specialist, at their rate, with no markup and no commission',
  'A real person reads and routes every enquiry',
  'Specialists re-verified every six months, paused or removed if their work goes stale',
];

export default function AboutPage() {
  const proof = [
    { v: caseTotals.rankingKeywords, l: 'keywords ranking on Google' },
    { v: caseTotals.page1Keywords, l: 'keywords on page one' },
    { v: caseTotals.top3Keywords, l: 'keywords in the top three' },
    { v: String(caseTotals.projects), l: 'projects built and grown' },
  ];
  const featured = caseStudies.slice(0, 3);
  const schema = [
    personSchema({ name: owner.name, jobTitle: owner.jobTitle, description: owner.bio }),
    breadcrumbListSchema([
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about/' },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="flex-grow bg-bone">
        <section className="bg-ink text-white">
          <div className="container-width pt-10 pb-14">
            <Breadcrumbs dark items={[{ label: 'About' }]} />
            <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-brand-300 mt-6 mb-4">About the service</p>
            <h1 className="font-display font-bold text-[34px] lg:text-[48px] leading-tight max-w-2xl mb-5">
              How we match Miami businesses with local SEO specialists
            </h1>
            <p className="text-[15px] lg:text-[17px] text-white/80 max-w-2xl leading-relaxed">
              {siteConfig.name} is a free matching service. We read your enquiry, connect you with up to three vetted local SEO specialists who have live ranking results in your sector and Miami sub-market, and step back. Businesses pay nothing for matching, only the specialist for the work.
            </p>
          </div>
        </section>

        {/* Who runs it */}
        <section className="container-width py-14 border-b border-ink/10">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 lg:items-center">
            <div className="bg-white border border-ink/10 rounded-lg p-7">
              <div className="flex items-center gap-4">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-brand-500 font-display text-3xl font-bold text-white">
                  {owner.name.charAt(0)}
                </span>
                <div>
                  <p className="font-display font-bold text-[20px] text-ink">{owner.name}</p>
                  <p className="text-[13px] text-brand-600">{owner.jobTitle}</p>
                </div>
              </div>
              <p className="mt-5 text-[14.5px] text-ink/70 leading-relaxed">{owner.bio}</p>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-ink/10 pt-5">
                {proof.slice(0, 2).map((s) => (
                  <div key={s.l}>
                    <div className="font-display font-bold text-[22px] text-brand-600">{s.v}</div>
                    <div className="mt-1 text-[11.5px] text-ink/50 leading-snug">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow mb-3">Who runs the network</p>
              <h2 className="font-display font-bold text-[26px] lg:text-[34px] text-ink leading-tight mb-4">
                Run by a working local-SEO specialist
              </h2>
              <p className="text-[15.5px] text-ink/75 leading-relaxed mb-6">
                You are not dealing with a faceless directory. {siteConfig.name} is run by {owner.name}, who builds and
                ranks local sites first-hand and vets every specialist in the network against that same standard. The
                monthly accountability is simple: live ranking work and real Search Console numbers, nothing inflated.
              </p>
              <ul className="space-y-2.5">
                {principles.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[14.5px] text-ink/80 leading-relaxed">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent-600" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Track record */}
        <section className="bg-ink text-white">
          <div className="container-width py-16">
            <div className="max-w-2xl">
              <p className="eyebrow text-brand-300 mb-3">The track record</p>
              <h2 className="font-display font-bold text-[26px] lg:text-[36px] leading-tight mb-4">
                The proof is in the search results
              </h2>
              <p className="text-[15px] lg:text-[16px] text-white/75 leading-relaxed">
                The clearest way to judge a local-SEO operator is the rankings they produce. Here is what recent
                portfolio projects have done, with every figure pulled straight from Google Search Console. The same bar
                is what we hold every Miami specialist in the network to.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {proof.map((s) => (
                <div key={s.l} className="rounded-lg border border-white/12 bg-white/[0.04] p-5">
                  <div className="font-display font-bold text-[26px] lg:text-[32px] text-brand-300">{s.v}</div>
                  <div className="mt-1.5 text-[12px] text-white/55 leading-snug">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {featured.map((c) => (
                <Link
                  key={c.slug}
                  href={`/case-studies/${c.slug}/`}
                  className="group flex flex-col rounded-lg border border-white/12 bg-white/[0.04] p-6 hover:border-brand-300/60 transition-colors"
                >
                  <div className="font-display font-bold text-[28px] text-white leading-none">{c.headline.value}</div>
                  <div className="mt-1.5 text-[12px] text-white/55">{c.headline.label}</div>
                  <p className="mt-4 font-display font-semibold text-[15px] text-white group-hover:text-brand-300 transition-colors">
                    {c.name}
                  </p>
                  <p className="mt-1 flex-1 text-[12.5px] text-white/55 leading-relaxed">{c.vertical} · {c.location}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[12px] font-bold text-brand-300">
                    Read the case study <ArrowRight size={11} />
                  </span>
                </Link>
              ))}
            </div>

            <Link href="/case-studies/" className="mt-8 inline-flex items-center gap-2 btn-on-dark text-[14px]">
              See all case studies <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        <article className="container-width py-14 max-w-3xl space-y-10 text-[15.5px] leading-relaxed text-ink/80">
          <Section title="What we are, and aren't">
            <p>
              We are a referral and introduction service. We are <strong>not</strong> a marketing agency, an SEO agency, or a service provider. We do not perform local SEO work ourselves, manage Google Business Profiles, or run review acquisition systems.
            </p>
            <p>
              What we do: we read your enquiry, identify which specialists in our network are best placed to help, and introduce you. Once an introduction is made, the relationship is between you and the specialist, including their fee, their service terms, and their track record accountability.
            </p>
          </Section>

          <Section title="How matching works">
            <ol>
              <li><strong>You submit the form.</strong> Company, website, Miami neighborhood, sector, current SEO maturity, and approximate monthly budget. Three minutes.</li>
              <li><strong>We triage and route.</strong> A real person reads every enquiry. We match based on sector experience, current Map Pack track record, monthly capacity, and pricing fit.</li>
              <li><strong>We make introductions.</strong> Up to three vetted specialists, with live examples of their current Map Pack ranking work in your sector. Each contacts you to schedule a free discovery call.</li>
              <li><strong>You choose.</strong> Compare proposals, ask questions, and engage whichever specialist you trust most, or none, if none are right. No obligation.</li>
            </ol>
          </Section>

          <Section title="How we vet specialists in our network">
            <p>Every specialist in our network is checked for:</p>
            <ul>
              <li><strong>Live ranking results.</strong> We require specific examples of current Miami clients ranking in the Map Pack for competitive queries, verifiable in real time.</li>
              <li><strong>Sector experience.</strong> A specialist who has ranked Brickell law firms is a different match from one who has ranked South Beach restaurants. We track sector-specific track record, not generic SEO experience.</li>
              <li><strong>Monthly capacity.</strong> Specialists at full capacity get paused from new matches until they have room. We don\'t introduce overcommitted specialists who will under-deliver.</li>
              <li><strong>Reasonable pricing.</strong> Specialists at the extreme high or low end of Miami market rates get scrutinized, extreme low usually means corner-cutting, extreme high usually means generic agency markup.</li>
            </ul>
            <p>
              We re-verify track record every six months. Specialists whose current ranking work is no longer current get paused or removed.
            </p>
          </Section>

          <Section title="What it costs you">
            <p>
              <strong>Nothing for the matching service.</strong> We are paid by the specialists in our network when an introduction leads to a contract. You pay only the specialist for the work, at their quoted rate. We add no markup, charge no commission, and never share your business details outside the matched specialists.
            </p>
            <p>
              Typical Miami local SEO pricing: small-business retainers run $750–$1,500/month, mid-market $1,500–$3,000/month, multi-location or competitive verticals $3,000–$6,000+/month. One-time audits run $500–$1,500. The matched specialist provides a written scope and quote before any contract.
            </p>
          </Section>

          <Section title="What we don't handle">
            <p>
              We don\'t match for national SEO (we focus on local, where the ranking factors are different and Miami specialism matters). We don\'t match for paid media (PPC, Meta ads, different specialism and budget mechanic). We don\'t match for full-service marketing agencies that bundle local SEO with other services (we keep the focus tight on local SEO specifically).
            </p>
          </Section>

          <Section title="How we handle your data">
            <p>
              We collect only what we need to make the introduction, see our <Link href="/privacy/">privacy notice</Link> for the full detail. The headline: company, contact, website, sector, neighborhood, budget range. Never sold, never shared outside the matched specialists you authorize.
            </p>
          </Section>

          <Section title="Get in touch">
            <p>
              Questions about how the service works, feedback about a matched specialist, or to discuss joining the network as a Miami specialist, our <Link href="/contact/">contact page</Link> lists the relevant channels.
            </p>
          </Section>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display font-semibold text-[22px] lg:text-[28px] text-ink leading-tight mb-4">{title}</h2>
      <div className="space-y-4 [&_a]:text-brand-600 [&_a]:underline [&_a:hover]:text-brand-700 [&_strong]:text-ink [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2">
        {children}
      </div>
    </section>
  );
}
