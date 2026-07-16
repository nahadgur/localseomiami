'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  // Accepted for backward compatibility with existing callers; no longer rendered.
  defaultService?: string;
  defaultArea?: string;
}

const GAS_URL = 'https://script.google.com/macros/s/AKfycbxNQ_PkYQvyEb-mgPJMHxaILsVYK5IJ5AZcuX0lpQ8WhV8aWv0_EPGuzJOVruyMsPuj/exec';

export function LeadFormModal({ isOpen, onClose }: Props) {
  const [mounted,    setMounted]    = useState(false);
  const [submitted,  setSubmitted]  = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error,      setError]      = useState('');
  const dialogRef    = useRef<HTMLDivElement>(null);
  const firstInputRef= useRef<HTMLInputElement>(null);
  const triggerRef   = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement | null;
      setMounted(true); setSubmitted(false); setError('');
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstInputRef.current?.focus(), 60);
    } else if (mounted) {
      document.body.style.overflow = '';
      setMounted(false);
      triggerRef.current?.focus?.();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    if (!mounted) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0]; const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mounted, onClose]);

  if (!mounted) return null;

  function fieldIdForError(msg: string): string | null {
    const m = msg.toLowerCase();
    if (m.includes('name')) return 'm-name';
    if (m.includes('phone')) return 'm-phone';
    if (m.includes('email')) return 'm-email';
    if (m.includes('website') || m.includes('site')) return 'm-website';
    if (m.includes('message')) return 'm-message';
    return null;
  }

  function pulseField(el: HTMLElement | null) {
    if (!el) return;
    el.classList.remove('field-pulse');
    void el.offsetWidth;
    el.classList.add('field-pulse');
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => el.focus({ preventScroll: true }), 200);
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    setError('');

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
      name:    (form.querySelector('#m-name')    as HTMLInputElement).value.trim(),
      phone:   (form.querySelector('#m-phone')   as HTMLInputElement).value.trim(),
      email:   (form.querySelector('#m-email')   as HTMLInputElement).value.trim(),
      website: (form.querySelector('#m-website') as HTMLInputElement).value.trim(),
      message: (form.querySelector('#m-message') as HTMLTextAreaElement).value.trim(),
      page:    window.location.pathname,
      source:  'modal',
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
      setSubmitted(true);
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

  const fieldClass =
    'w-full px-3.5 py-2.5 text-base font-sans bg-bone border border-ink/15 rounded-md text-ink placeholder-ink/40 focus:outline-none focus:border-brand-500 focus:bg-white transition-colors';
  const labelClass = 'block text-[10px] font-mono uppercase tracking-[0.15em] text-ink/55 mb-1.5';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-ink/70 p-3 sm:p-4"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        ref={dialogRef}
        className="w-full sm:max-w-lg bg-bone rounded-t-2xl sm:rounded-xl border border-ink/10 shadow-2xl max-h-[92vh] overflow-y-auto"
      >
        <div className="flex items-start justify-between px-6 pt-5 pb-4 border-b border-ink/8">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-600 mb-1">Free matching · 24h response</p>
            <h2 id="modal-title" className="font-display font-semibold text-[20px] text-ink leading-tight">
              Get matched with a Miami specialist
            </h2>
          </div>
          <button onClick={onClose} aria-label="Close" className="p-1 -mt-1 -mr-1 text-ink/45 hover:text-ink">
            <X size={18} />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-12 h-12 rounded-full bg-accent-500/15 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={22} className="text-accent-600" />
              </div>
              <p className="font-display font-semibold text-[22px] text-ink mb-2">Request received</p>
              <p className="text-[14px] text-ink/65 leading-relaxed max-w-sm mx-auto">
                We will match you with a vetted Miami local SEO specialist within 24 business hours and connect you for a free discovery call.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-3">
              <div>
                <label htmlFor="m-name" className={labelClass}>Your name *</label>
                <input ref={firstInputRef} id="m-name" type="text" required className={fieldClass} placeholder="e.g. Maria Rodriguez" autoComplete="name" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="m-phone" className={labelClass}>Phone *</label>
                  <input id="m-phone" type="tel" required className={fieldClass} placeholder="(305) 555-0100" autoComplete="tel" />
                </div>
                <div>
                  <label htmlFor="m-email" className={labelClass}>Email *</label>
                  <input id="m-email" type="email" required className={fieldClass} placeholder="you@company.com" autoComplete="email" />
                </div>
              </div>

              <div>
                <label htmlFor="m-website" className={labelClass}>
                  Website <span className="text-ink/40 normal-case tracking-normal">(optional)</span>
                </label>
                <input id="m-website" type="url" className={fieldClass} placeholder="https://example.com" autoComplete="url" />
              </div>

              <div>
                <label htmlFor="m-message" className={labelClass}>
                  Message <span className="text-ink/40 normal-case tracking-normal">(optional)</span>
                </label>
                <textarea id="m-message" rows={3} className={`${fieldClass} resize-none`} placeholder="Tell us a little about your goals" />
              </div>

              <label htmlFor="m-consent" className="flex items-start gap-2 text-[11px] text-ink/65 leading-relaxed cursor-pointer mt-1">
                <input id="m-consent" type="checkbox" required className="mt-0.5 accent-brand-600" />
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
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
