import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy notice',
  description:
    'How Local SEO Miami collects, uses, and protects personal data submitted through our matching service. CCPA-aware privacy notice covering enquiry data, cookies, and your rights.',
  alternates: { canonical: '/privacy/' },
  robots: { index: true, follow: true },
};

const LAST_REVIEWED = 'May 4, 2026';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-bone">
        <section className="bg-ink text-white">
          <div className="container-width pt-10 pb-14">
            <Breadcrumbs dark items={[{ label: 'Privacy' }]} />
            <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-brand-300 mt-6 mb-4">— Legal · Privacy notice</p>
            <h1 className="font-display font-bold text-[34px] lg:text-[46px] leading-tight max-w-2xl mb-5">
              Privacy notice
            </h1>
            <p className="text-[15px] text-white/80 max-w-2xl leading-relaxed mb-3">
              How {siteConfig.name} collects, uses, and protects personal data submitted through the matching service. Written to satisfy California Consumer Privacy Act (CCPA) and general US privacy expectations.
            </p>
            <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/40">
              Last reviewed · {LAST_REVIEWED}
            </p>
          </div>
        </section>

        <article className="container-width py-14 max-w-3xl space-y-10 text-[15.5px] leading-relaxed text-ink/80">
          <Section title="Plain-English summary">
            <p>
              We collect your name, work email, company, website, Miami neighborhood, and rough budget — solely to match you with up to three vetted local SEO specialists. We share your details only with those matched specialists. Never sold, never used for marketing without your explicit consent. You have rights under CCPA including the right to know, delete, and opt out.
            </p>
          </Section>

          <Section title="1. Who we are">
            <p>
              {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates {' '}
              <strong>{siteConfig.url.replace(/https?:\/\//, '')}</strong>{' '}
              as a free matching service connecting Miami businesses with vetted local SEO specialists. We are responsible for personal data submitted through this site.
            </p>
            <p>
              <strong>We are not a marketing agency.</strong> Once we share your enquiry with matched specialists, those specialists handle their own data practices for any further work you instruct them to do.
            </p>
          </Section>

          <Section title="2. What data we collect">
            <p>When you submit the matching form we collect:</p>
            <ul>
              <li><strong>Name</strong> — for the matched specialist to address you correctly.</li>
              <li><strong>Work email</strong> — for confirmation and follow-up.</li>
              <li><strong>Company name</strong> — to identify the business in our network.</li>
              <li><strong>Website URL</strong> — for the specialist to review before the discovery call.</li>
              <li><strong>Primary interest</strong> — the type of local SEO service you\'re interested in.</li>
              <li><strong>Monthly budget range</strong> — to match with specialists who fit the budget.</li>
              <li><strong>Miami neighborhood</strong> — to match with neighborhood-experienced specialists.</li>
              <li><strong>Page you submitted from</strong> — context for the matched specialist.</li>
            </ul>
            <p>
              We do <strong>not</strong> collect financial information (credit cards, bank details), social security or tax ID numbers, or any sensitive personal data through our forms.
            </p>
            <p>
              If you accept analytics cookies, we also collect anonymized browsing data through Google Analytics 4 — see &quot;Cookies&quot; below.
            </p>
          </Section>

          <Section title="3. Why we collect it">
            <p>
              We process enquiry data on the basis of <strong>your consent</strong> — you check a box on the form to confirm you want to be matched with up to three specialists. You can withdraw consent at any time by emailing us; withdrawal does not affect lawfulness of processing carried out before withdrawal.
            </p>
            <p>
              Once we share your enquiry with matched specialists, those specialists\' basis for follow-up contact is also your consent, plus their <strong>legitimate interest</strong> in responding to a referred enquiry.
            </p>
          </Section>

          <Section title="4. Who we share it with">
            <p>
              Your enquiry is shared with up to three vetted local SEO specialists from our Miami network. Each receives your name, contact, company, website, service interest, budget range, neighborhood, and any optional message. They are required to treat that information confidentially and use it only to respond to your enquiry.
            </p>
            <p>The form submission itself is processed using:</p>
            <ul>
              <li><strong>Google Apps Script</strong> (Google LLC) — receives the form submission and routes it to our enquiry record.</li>
              <li><strong>Google Workspace</strong> (Google LLC) — stores the enquiry record and sends notification email.</li>
            </ul>
            <p><strong>We do not sell or rent your data to third parties for marketing.</strong></p>
          </Section>

          <Section title="5. How long we keep it">
            <p>
              Enquiry records are kept for <strong>24 months</strong> from the date of submission, after which they are deleted. We keep them this long to handle re-matching requests, complaints, or follow-up questions.
            </p>
            <p>
              Anonymized analytics data is retained for 14 months in Google Analytics, then automatically deleted by Google.
            </p>
          </Section>

          <Section title="6. Cookies">
            <p>This site uses two categories of cookie:</p>
            <ul>
              <li>
                <strong>Strictly necessary</strong> — a small cookie that records your cookie-banner choice. No consent required.
              </li>
              <li>
                <strong>Analytics</strong> — Google Analytics 4 (cookies starting <code>_ga</code>) records anonymized page-view data so we can see which pages help businesses. Loaded only if you click &quot;Accept&quot; on the cookie banner.
              </li>
            </ul>
            <p>We do not use advertising, retargeting, or social-media tracking cookies.</p>
          </Section>

          <Section title="7. Your rights — CCPA and general">
            <p>If you are a California resident, the California Consumer Privacy Act (CCPA) gives you the following rights:</p>
            <ul>
              <li><strong>Right to know:</strong> request a copy of the personal data we hold about you.</li>
              <li><strong>Right to delete:</strong> ask us to delete your personal data (subject to limited exceptions).</li>
              <li><strong>Right to correct:</strong> ask us to correct inaccurate personal data.</li>
              <li><strong>Right to opt out:</strong> the right to opt out of the sale or sharing of personal data — though we do not sell or share for marketing in the first place.</li>
              <li><strong>Right to non-discrimination:</strong> we will not discriminate against you for exercising any CCPA right.</li>
            </ul>
            <p>
              We extend these rights to all users regardless of state of residence — they are good practice and we don\'t see value in distinguishing.
            </p>
            <p>
              To exercise any of these rights, contact us via the channels on our <Link href="/contact/">contact page</Link>. We respond within 30 days.
            </p>
          </Section>

          <Section title="8. Security">
            <p>
              Data submitted through the form is transmitted over HTTPS. Stored enquiry records are protected by Google Workspace account access controls (two-factor authentication enforced). Access is limited to the people responsible for processing matches.
            </p>
            <p>
              No system is perfectly secure. If we ever suffer a personal data breach that materially affects your rights, we will notify you and the relevant authorities as required by applicable law.
            </p>
          </Section>

          <Section title="9. Changes to this notice">
            <p>
              We review this notice at least once per year and whenever the matching service changes materially. The &quot;Last reviewed&quot; date at the top reflects the most recent revision.
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
      <div className="space-y-4 [&_a]:text-brand-600 [&_a]:underline [&_a:hover]:text-brand-700 [&_strong]:text-ink [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_code]:font-mono [&_code]:text-[13px] [&_code]:bg-ink/[0.06] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded">
        {children}
      </div>
    </section>
  );
}
