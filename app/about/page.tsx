import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'About the matching service',
  description:
    'Local SEO Miami is a free matching service connecting Miami businesses with vetted local SEO specialists. We are not an SEO agency, we introduce businesses to qualified specialists.',
  alternates: { canonical: '/about/' },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return (
    <>
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
