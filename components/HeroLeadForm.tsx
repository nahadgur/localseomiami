'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';

// area / service accepted for backward compatibility with existing callers;
// only used to tailor the heading copy, no longer collected as form fields.
interface Props { area?: string; service?: string; }

const GAS_URL = 'https://script.google.com/macros/s/AKfycbxNQ_PkYQvyEb-mgPJMHxaILsVYK5IJ5AZcuX0lpQ8WhV8aWv0_EPGuzJOVruyMsPuj/exec';

export function HeroLeadForm({ area }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [done,       setDone]       = useState(false);
  const [error,      setError]      = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  // Map server-side validation errors back to the input that needs attention.
  // Lower-case substring match keeps it forgiving if the wording shifts.
  function fieldIdForError(msg: string): string | null {
    const m = msg.toLowerCase();
    if (m.includes('name')) return 'hlf-name';
    if (m.includes('phone')) return 'hlf-phone';
    if (m.includes('email')) return 'hlf-email';
    if (m.includes('website') || m.includes('site')) return 'hlf-website';
    if (m.includes('message')) return 'hlf-message';
    return null;
  }

  function pulseField(el: HTMLElement | null) {
    if (!el) return;
    el.classList.remove('field-pulse');
    // Force reflow so re-adding the class restarts the animation.
    void el.offsetWidth;
    el.classList.add('field-pulse');
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => el.focus({ preventScroll: true }), 200);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    const form = formRef.current!;
    setError('');

    // Native HTML5 validation first, pulses the first invalid field
    // (empty required, invalid email format, etc.) and stops here.
    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector(':invalid') as HTMLElement | null;
      pulseField(firstInvalid);
      const labelText =
        firstInvalid && (firstInvalid as HTMLInputElement).labels?.[0]?.textContent?.replace(/\*$/, '').trim();
      setError(labelText ? `Please complete: ${labelText}` : 'Please fill in the highlighted field.');
      return;
    }

    setSubmitting(true);

    const payload = {
      name:    (form.querySelector('#hlf-name')    as HTMLInputElement).value.trim(),
      phone:   (form.querySelector('#hlf-phone')   as HTMLInputElement).value.trim(),
      email:   (form.querySelector('#hlf-email')   as HTMLInputElement).value.trim(),
      website: (form.querySelector('#hlf-website') as HTMLInputElement).value.trim(),
      message: (form.querySelector('#hlf-message') as HTMLTextAreaElement).value.trim(),
      page:    typeof window !== 'undefined' ? window.location.pathname : '',
      source:  'hero-form',
    };

    try {
      if (GAS_URL) {
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
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(msg);
      const fieldId = fieldIdForError(msg);
      if (fieldId) pulseField(form.querySelector(`#${fieldId}`) as HTMLElement | null);
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

      <form ref={formRef} onSubmit={submit} className="flex flex-col gap-3">
        <div>
          <label htmlFor="hlf-name" className={labelClass}>Your name *</label>
          <input id="hlf-name" type="text" required className={fieldClass} placeholder="e.g. Maria Rodriguez" autoComplete="name" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="hlf-phone" className={labelClass}>Phone *</label>
            <input id="hlf-phone" type="tel" required className={fieldClass} placeholder="(305) 555-0100" autoComplete="tel" />
          </div>
          <div>
            <label htmlFor="hlf-email" className={labelClass}>Email *</label>
            <input id="hlf-email" type="email" required className={fieldClass} placeholder="you@company.com" autoComplete="email" />
          </div>
        </div>

        <div>
          <label htmlFor="hlf-website" className={labelClass}>
            Website <span className="text-ink/40 normal-case tracking-normal">(optional)</span>
          </label>
          <input id="hlf-website" type="url" className={fieldClass} placeholder="https://example.com" autoComplete="url" />
        </div>

        <div>
          <label htmlFor="hlf-message" className={labelClass}>
            Message <span className="text-ink/40 normal-case tracking-normal">(optional)</span>
          </label>
          <textarea id="hlf-message" rows={3} className={`${fieldClass} resize-none`} placeholder="Tell us a little about your goals" />
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
