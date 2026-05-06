'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { services } from '@/data/services';

interface Props { area?: string; service?: string; }

const GAS_URL = 'https://script.google.com/macros/s/AKfycbxNQ_PkYQvyEb-mgPJMHxaILsVYK5IJ5AZcuX0lpQ8WhV8aWv0_EPGuzJOVruyMsPuj/exec';

const budgetRanges = [
  'Under $1,000/mo',
  '$1,000–$2,500/mo',
  '$2,500–$5,000/mo',
  '$5,000+/mo',
  'One-time audit only',
  'Not sure yet',
];

export function HeroLeadForm({ area, service }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [done,       setDone]       = useState(false);
  const [error,      setError]      = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    const form = formRef.current!;
    const consent = (form.querySelector('#hlf-consent') as HTMLInputElement)?.checked;
    if (!consent) {
      setError('Please confirm your consent to continue.');
      return;
    }

    setSubmitting(true);
    setError('');

    const payload = {
      name:    (form.querySelector('#hlf-name')    as HTMLInputElement).value.trim(),
      email:   (form.querySelector('#hlf-email')   as HTMLInputElement).value.trim(),
      company: (form.querySelector('#hlf-company') as HTMLInputElement).value.trim(),
      website: (form.querySelector('#hlf-website') as HTMLInputElement).value.trim(),
      service: (form.querySelector('#hlf-svc')     as HTMLSelectElement).value,
      budget:  (form.querySelector('#hlf-budget')  as HTMLSelectElement).value,
      area:    (form.querySelector('#hlf-area')    as HTMLInputElement)?.value?.trim() ?? area ?? '',
      page:    typeof window !== 'undefined' ? window.location.pathname : '',
      source:  'hero-form',
    };

    try {
      if (GAS_URL) {
        // URLSearchParams = form-encoded, no CORS preflight. Apps Script
        // reads e.parameter directly. Drop mode:'no-cors' so server-side
        // rejections (validation errors, etc.) actually surface.
        const res = await fetch(GAS_URL, {
          method: 'POST',
          body: new URLSearchParams(payload as Record<string, string>),
        });
        const json = await res.json().catch(() => ({ ok: false, error: 'Bad response' }));
        if (!json.ok) throw new Error(json.error || `HTTP ${res.status}`);
      } else {
        // eslint-disable-next-line no-console
        console.warn('GAS_URL not configured, payload:', payload);
      }
      setDone(true);
    } catch (err) {
      console.error('Lead submission failed:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="bg-bone border border-ink/10 rounded-xl p-6 text-center">
        <div className="w-10 h-10 rounded-full bg-accent-500/15 flex items-center justify-center mx-auto mb-3">
          <CheckCircle size={18} className="text-accent-600" />
        </div>
        <p className="font-display font-semibold text-[20px] text-ink mb-1">Request received</p>
        <p className="text-[13px] text-ink/65 leading-relaxed">
          We will match you with a vetted Miami local SEO specialist within 24 business hours and connect you for a free discovery call.
        </p>
      </div>
    );
  }

  const fieldClass =
    'w-full px-3.5 py-2.5 text-[14px] font-sans bg-bone border border-ink/15 rounded-md text-ink placeholder-ink/40 focus:outline-none focus:border-brand-500 focus:bg-white transition-colors';
  const labelClass = 'block text-[10px] font-mono uppercase tracking-[0.15em] text-ink/55 mb-1.5';

  return (
    <div className="bg-white border border-ink/10 rounded-xl p-5 lg:p-6 shadow-[0_8px_32px_-12px_rgba(11,18,32,0.18)]">
      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-600 mb-2">
        Free matching · 24-hour response
      </p>
      <p className="font-display font-semibold text-[22px] text-ink leading-tight mb-1">
        {area ? `Get matched in ${area}` : 'Get matched with a Miami specialist'}
      </p>
      <p className="text-[12px] text-ink/60 mb-5 leading-relaxed">
        Vetted specialists with live ranking results in your sector. Free, no obligation.
      </p>

      <form ref={formRef} onSubmit={submit} noValidate className="flex flex-col gap-3">
        <div>
          <label htmlFor="hlf-name" className={labelClass}>Your name *</label>
          <input id="hlf-name" type="text" required className={fieldClass} placeholder="e.g. Maria Rodriguez" autoComplete="name" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="hlf-email" className={labelClass}>Work email *</label>
            <input id="hlf-email" type="email" required className={fieldClass} placeholder="you@company.com" autoComplete="email" />
          </div>
          <div>
            <label htmlFor="hlf-company" className={labelClass}>Company *</label>
            <input id="hlf-company" type="text" required className={fieldClass} placeholder="Your business name" autoComplete="organization" />
          </div>
        </div>

        <div>
          <label htmlFor="hlf-website" className={labelClass}>
            Current website <span className="text-ink/40 normal-case tracking-normal">(if any)</span>
          </label>
          <input id="hlf-website" type="url" className={fieldClass} placeholder="https://example.com" autoComplete="url" />
        </div>

        <div>
          <label htmlFor="hlf-svc" className={labelClass}>Primary interest *</label>
          <select id="hlf-svc" required className={`${fieldClass} appearance-none cursor-pointer`} defaultValue={service ?? ''}>
            <option value="" disabled>Select the closest match...</option>
            {services.map(s => (
              <option key={s.slug} value={s.shortLabel}>{s.shortLabel}</option>
            ))}
            <option value="Full local SEO program">Full local SEO program</option>
            <option value="Not sure / discovery call">Not sure, want a discovery call</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="hlf-budget" className={labelClass}>Monthly budget *</label>
            <select id="hlf-budget" required className={`${fieldClass} appearance-none cursor-pointer`} defaultValue="">
              <option value="" disabled>Range...</option>
              {budgetRanges.map(b => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
          {!area && (
            <div>
              <label htmlFor="hlf-area" className={labelClass}>Miami neighborhood *</label>
              <input id="hlf-area" type="text" required className={fieldClass} placeholder="e.g. Brickell, Coral Gables" />
            </div>
          )}
        </div>

        <label htmlFor="hlf-consent" className="flex items-start gap-2 text-[11px] text-ink/65 leading-relaxed cursor-pointer mt-1">
          <input id="hlf-consent" type="checkbox" required className="mt-0.5 accent-brand-600" />
          <span>
            I consent to my details being shared with up to three vetted Miami local SEO specialists. See our{' '}
            <Link href="/privacy/" className="underline hover:text-ink">privacy notice</Link>.
          </span>
        </label>

        {error && (
          <p className="text-[12px] text-red-600">{error}</p>
        )}

        <button type="submit" disabled={submitting} className="btn-primary w-full justify-center mt-1">
          {submitting ? 'Sending…' : 'Match me with a specialist'}
        </button>

        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink/40 text-center">
          Free · Vetted network · 24h response
        </p>
      </form>
    </div>
  );
}
