'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AlertCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';

export default function ContactPage() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main className="flex-grow bg-bone">
        <section className="bg-ink text-white">
          <div className="container-width pt-10 pb-14">
            <Breadcrumbs dark items={[{ label: 'Contact' }]} />
            <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-brand-300 mt-6 mb-4">Get in touch</p>
            <h1 className="font-display font-bold text-[34px] lg:text-[46px] leading-tight max-w-2xl mb-5">
              How to reach Local Miami SEO
            </h1>
            <p className="text-[15px] lg:text-[17px] text-white/80 max-w-2xl leading-relaxed">
              The fastest route to a matched specialist is the form on the right. Other channels (general questions, privacy, network applications) are listed below.
            </p>
          </div>
        </section>

        <section className="container-width py-14">

          {/* CCPA / non-agency disclosure callout */}
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-md p-5 mb-10 max-w-4xl">
            <div className="flex items-start gap-3">
              <AlertCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-800 mb-2">We are a referral service, not an agency</p>
                <p className="text-[14px] text-ink/80 leading-relaxed">
                  Local Miami SEO matches your business with vetted specialists who do the actual SEO work. We do not bill, retain, or perform engagements ourselves. CCPA-aware: see our <Link href="/privacy/" className="text-brand-700 underline hover:text-brand-800">privacy notice</Link> for what we collect and how to request deletion.
                </p>
              </div>
            </div>
          </div>

          {/* Lead form + supporting channels */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Form, takes 7 cols */}
            <div className="lg:col-span-7">
              <p className="eyebrow text-brand-600 mb-2">Get matched</p>
              <h2 className="font-display font-semibold text-[26px] lg:text-[32px] text-ink leading-tight mb-3">
                Tell us about your business
              </h2>
              <p className="text-[14.5px] text-ink/70 leading-relaxed mb-6 max-w-xl">
                Free matching with up to three vetted Miami specialists, usually within 24 business hours. No obligation to engage anyone we introduce.
              </p>
              <HeroLeadForm />
            </div>

            {/* Sidebar, takes 5 cols, three secondary channels */}
            <aside className="lg:col-span-5 flex flex-col gap-4">
              <Card
                eyebrow="General questions"
                title="Email us"
                body="Questions about how the matching service works, complaints about a matched specialist, or feedback. We respond within two business days."
                email="hello@localmiamiseo.com"
              />

              <Card
                eyebrow="CCPA and privacy"
                title="Data requests"
                body="Subject access requests, data deletion requests, or any other privacy matter under CCPA or general US privacy law. We respond within 30 days."
                email="privacy@localmiamiseo.com"
                footer={<>See our full <Link href="/privacy/" className="text-brand-600 underline hover:text-brand-700">privacy notice</Link> for what we collect and your rights.</>}
              />

              <Card
                eyebrow="For specialists"
                title="Join the network"
                body="Local SEO specialists with verifiable Miami ranking work, get in touch about joining the matched network. We verify live track record, sector experience, and monthly capacity before accepting any new partner."
                email="partners@localmiamiseo.com"
              />
            </aside>
          </div>

          <p className="text-center text-[13px] text-ink/60 mt-10 max-w-2xl mx-auto leading-relaxed">
            We are not a marketing agency, we are a referral and introduction service. All SEO work is performed by specialists in our network. See our <Link href="/about/" className="text-brand-600 underline hover:text-brand-700">about page</Link> for how the service works, or <Link href="/terms/" className="text-brand-600 underline hover:text-brand-700">terms</Link> for the rules of using this site.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}

interface CardProps {
  eyebrow: string;
  title: string;
  body: string;
  email?: string;
  footer?: React.ReactNode;
}

function Card({ eyebrow, title, body, email, footer }: CardProps) {
  return (
    <div className="rounded-lg border p-5 bg-paper border-ink/10">
      <p className="eyebrow mb-2 text-ink/55">{eyebrow}</p>
      <h3 className="font-display font-semibold text-[18px] text-ink leading-tight mb-2">{title}</h3>
      <p className="text-[13.5px] text-ink/70 leading-relaxed mb-3">{body}</p>
      {email && (
        <p className="font-mono text-[13px] text-ink">{email}</p>
      )}
      {footer && <p className="text-[12px] text-ink/55 mt-3 leading-relaxed">{footer}</p>}
    </div>
  );
}
