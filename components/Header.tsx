'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface Props { onOpenModal?: () => void; }

const navLinks = [
  { href: '/services/', label: 'Services' },
  { href: '/location/', label: 'Neighborhoods' },
  { href: '/blog/',     label: 'Insights' },
  { href: '/about/',    label: 'About' },
];

export function Header({ onOpenModal }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-bone/95 backdrop-blur border-b border-ink/8">
      <nav className="container-width flex items-center justify-between h-16" aria-label="Site navigation">
        <Link href="/" className="font-display font-semibold text-[19px] text-ink leading-none tracking-tight">
          Local SEO <span className="text-brand-500">Miami</span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-[14px] text-ink/75">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} className="hover:text-brand-600 transition-colors">
              {l.label}
            </Link>
          ))}
          {onOpenModal && (
            <button onClick={onOpenModal} className="btn-primary text-[13px]">
              Get matched
            </button>
          )}
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink/8 bg-bone">
          <div className="container-width py-4 flex flex-col gap-2">
            {navLinks.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="py-2 text-[15px] text-ink/85 hover:text-brand-600"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            {onOpenModal && (
              <button
                onClick={() => { setOpen(false); onOpenModal(); }}
                className="btn-primary text-[14px] mt-2 self-start"
              >
                Get matched
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
