import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Terms of use',
  description:
    'Terms of use for Local Miami SEO, a free matching service connecting Miami businesses with vetted local SEO specialists.',
  alternates: { canonical: '/terms/' },
  robots: { index: true, follow: true },
};

const LAST_REVIEWED = 'May 4, 2026';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-bone">
        <section className="bg-ink text-white">
          <div className="container-width pt-10 pb-14">
            <Breadcrumbs dark items={[{ label: 'Terms' }]} />
            <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-brand-300 mt-6 mb-4">Legal · Terms of use</p>
            <h1 className="font-display font-bold text-[34px] lg:text-[46px] leading-tight max-w-2xl mb-5">Terms of use</h1>
            <p className="text-[15px] text-white/80 max-w-2xl leading-relaxed mb-3">
              The rules that apply when you use this site or submit an enquiry through the matching service.
            </p>
            <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/40">
              Last reviewed · {LAST_REVIEWED}
            </p>
          </div>
        </section>

        <article className="container-width py-14 max-w-3xl space-y-10 text-[15.5px] leading-relaxed text-ink/80">
          <Section title="1. About these terms">
            <p>
              These terms govern your use of {siteConfig.url.replace(/https?:\/\//, '')} and the matching service operated by {siteConfig.name}. By using the site or submitting an enquiry, you agree to these terms.
            </p>
            <p>
              We may update these terms from time to time. The &quot;Last reviewed&quot; date at the top reflects the most recent change.
            </p>
          </Section>

          <Section title="2. What we are">
            <p>
              {siteConfig.name} is a referral and introduction service. We connect you with vetted, independent local SEO specialists serving the Miami area.
            </p>
            <p>
              <strong>We are not a marketing agency or SEO service provider.</strong> We do not perform local SEO work, manage Google Business Profiles, run review acquisition systems, or provide marketing strategy directly. We make introductions; the work is done by the specialist you engage.
            </p>
          </Section>

          <Section title="3. The matching service is free to businesses">
            <p>
              You pay nothing for matching. We are paid by the specialists in our network when an introduction leads to a contract. You only pay the specialist for the work they do, on the terms agreed directly with them.
            </p>
          </Section>

          <Section title="4. No marketing or business advice">
            <p>
              Nothing on this site, including service descriptions, blog articles, or pricing ranges, constitutes specific marketing or business advice for your situation. Content is general information only. Local SEO strategy is highly business-specific; only a specialist who has reviewed your particular situation can advise you.
            </p>
          </Section>

          <Section title="5. No ranking guarantees">
            <p>
              Local SEO ranking is driven by Google\'s algorithm and is outside any specialist\'s direct control. Nothing on this site guarantees specific rankings, traffic levels, or business outcomes from any specialist engagement. Specialists in our network are vetted for live track record, but past performance does not guarantee future results.
            </p>
          </Section>

          <Section title="6. Your responsibilities">
            <p>When you use the service, you confirm that:</p>
            <ul>
              <li>You are authorized to act on behalf of the business you are submitting on behalf of.</li>
              <li>The information you provide is accurate and complete.</li>
              <li>You consent to your details being shared with up to three matched specialists.</li>
              <li>You will not use the site to submit malicious, fraudulent, or competitor-intelligence enquiries.</li>
            </ul>
          </Section>

          <Section title="7. Our role ends at introduction">
            <p>
              Once we have introduced you to a matched specialist, the relationship is between you and that specialist. The specialist is responsible for:
            </p>
            <ul>
              <li>Their own quote, contract terms, and execution.</li>
              <li>The strategy and tactical work they perform.</li>
              <li>Their professional standing and any complaints handling.</li>
              <li>Reporting and accountability for the work.</li>
            </ul>
            <p>
              We are not responsible for the work of matched specialists. If you encounter problems, please tell us, we use the feedback to maintain network standards and may re-match you with an alternative if appropriate.
            </p>
          </Section>

          <Section title="8. Limitation of liability">
            <p>
              To the extent permitted by law, our liability is limited to the introduction itself. We are not liable for:
            </p>
            <ul>
              <li>The accuracy, suitability, or quality of work performed by matched specialists.</li>
              <li>Disputes between you and a matched specialist.</li>
              <li>Loss arising from reliance on general information published on this site.</li>
              <li>Indirect, consequential, or special damages.</li>
            </ul>
            <p>
              Nothing in these terms excludes liability that cannot be excluded under applicable law.
            </p>
          </Section>

          <Section title="9. Intellectual property">
            <p>
              The text, design, code, and other content on this site are owned by {siteConfig.name} or licensed for our use. You may view and share pages for personal, non-commercial use, but not republish or commercially redistribute without permission.
            </p>
          </Section>

          <Section title="10. Privacy and cookies">
            <p>
              How we handle personal data is set out in our <Link href="/privacy/">privacy notice</Link>. The cookie banner lets you accept or reject the analytics cookie before any non-essential cookies load.
            </p>
          </Section>

          <Section title="11. Governing law">
            <p>
              These terms are governed by the laws of the State of Florida, United States. Disputes will be dealt with by the courts of Miami-Dade County, Florida.
            </p>
          </Section>

          <Section title="12. Contact">
            <p>
              Questions about these terms, see the channels on our <Link href="/contact/">contact page</Link>.
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
      <div className="space-y-4 [&_a]:text-brand-600 [&_a]:underline [&_a:hover]:text-brand-700 [&_strong]:text-ink [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  );
}
