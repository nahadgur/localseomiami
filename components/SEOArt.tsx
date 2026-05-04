// Custom SEO-domain visualizations. Lifted as a visual pattern from the
// 2026-05-04 design handoff so the homepage *demonstrates* technical
// fluency (geo-grid, Local Pack, GBP, citations) instead of just claiming
// it. These are proof artifacts, not brand chrome — kept on a coral
// secondary accent so they read as data, not marketing.

const ART = {
  ink:    '#0b1220',
  text:   '#33394a',
  muted:  '#6b7488',
  line:   '#e6e8ee',
  card:   '#ffffff',
  bg:     '#fafaf7',
  coral:  '#ff6b4a',
  green:  '#0f9d58',
  yellow: '#fbbc04',
  red:    '#ea4335',
};

export function GeoGrid({ size = 260 }: { size?: number }) {
  // Sample rank data — concentric improvement around centre. 1–3 green,
  // 4–10 yellow, 11+ red. Mirrors how a real Local Falcon scan reads.
  const ranks: number[][] = [
    [3, 2, 1, 4, 7],
    [2, 1, 1, 3, 9],
    [1, 1, 1, 2, 12],
    [4, 2, 1, 5, 15],
    [8, 6, 4, 9, 20],
  ];
  const colorFor = (r: number) => (r <= 3 ? ART.green : r <= 10 ? ART.yellow : ART.red);
  const cell = size / 5;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-label="Geo-grid sample showing top 3 rankings across 25 search points">
      <defs>
        <pattern id="seo-gridmap" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" stroke="#d8dde6" strokeWidth="0.5" fill="none" />
        </pattern>
      </defs>
      <rect width={size} height={size} fill="#eef2f7" />
      <rect width={size} height={size} fill="url(#seo-gridmap)" />
      <path d={`M0 ${size * 0.45} L${size} ${size * 0.4}`} stroke="#fff" strokeWidth="3" />
      <path d={`M${size * 0.4} 0 L${size * 0.5} ${size}`} stroke="#fff" strokeWidth="2.5" />
      {ranks.map((row, y) =>
        row.map((r, x) => (
          <g key={`${x}-${y}`}>
            <circle
              cx={x * cell + cell / 2}
              cy={y * cell + cell / 2}
              r={cell * 0.36}
              fill={colorFor(r)}
              opacity="0.92"
              stroke="#fff"
              strokeWidth="1.5"
            />
            <text
              x={x * cell + cell / 2}
              y={y * cell + cell / 2 + 4}
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="#fff"
              fontFamily="ui-monospace, 'JetBrains Mono', monospace"
            >
              {r}
            </text>
          </g>
        ))
      )}
      <circle cx={size / 2} cy={size / 2} r={cell * 0.4} fill="none" stroke={ART.ink} strokeWidth="2" />
    </svg>
  );
}

export function LocalPackMockup() {
  return (
    <div className="bg-white border border-ink/10 rounded-lg p-4 font-sans">
      <p className="text-[11px] font-mono text-ink/50 mb-2">google.com / results</p>
      <div className="bg-[#f8f9fa] rounded-md p-3">
        <p className="text-[11px] font-semibold text-ink mb-2">Local results for &quot;plumber miami&quot;</p>

        <div
          className="h-16 rounded mb-3 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #d6e7d6 0%, #c8d8e6 100%)' }}
        >
          <svg width="100%" height="100%" viewBox="0 0 200 60" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 30 Q50 20 100 35 T200 30" stroke="#fff" strokeWidth="2" fill="none" />
            <path d="M0 50 L200 45" stroke="#fff" strokeWidth="1.5" />
          </svg>
          <span className="absolute" style={{ left: '30%', top: '28%', color: ART.coral, fontSize: 18 }}>📍</span>
          <span className="absolute" style={{ left: '60%', top: '55%', color: ART.muted, fontSize: 14 }}>📍</span>
          <span className="absolute" style={{ left: '78%', top: '20%', color: ART.muted, fontSize: 14 }}>📍</span>
        </div>

        {[
          { n: 'Reyes Plumbing Co.',    r: '4.9', c: '284', h: 'Open · Closes 8 PM',  you: true },
          { n: 'Aqua Pro Miami',        r: '4.6', c: '192', h: 'Open · 24 hours',     you: false },
          { n: 'South Beach Plumbers',  r: '4.4', c: '98',  h: 'Closed · Opens 7 AM', you: false },
        ].map((row, i) => (
          <div
            key={row.n}
            className={`py-2.5 ${i === 0 ? '' : 'border-t border-ink/10'} ${row.you ? '-mx-2.5 px-2.5 rounded' : ''}`}
            style={row.you ? { background: '#fff8f5' } : undefined}
          >
            <p className="text-[13px] font-semibold text-ink leading-tight">
              {row.n}
              {row.you && (
                <span
                  className="ml-1.5 align-middle text-[9px] font-bold tracking-wider px-1.5 py-0.5 rounded text-white font-mono"
                  style={{ background: ART.coral }}
                >
                  YOU
                </span>
              )}
            </p>
            <p className="text-[11px] text-ink/70 mt-0.5 flex items-center gap-1.5">
              <span style={{ color: ART.yellow }}>★</span>
              <span className="font-semibold">{row.r}</span>
              <span className="text-ink/50">({row.c})</span>
              <span className="text-ink/50">·</span>
              <span style={{ color: row.h.startsWith('Open') ? ART.green : ART.muted }}>{row.h}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GBPCard() {
  return (
    <div className="bg-white border border-ink/10 rounded-xl overflow-hidden font-sans">
      <div
        className="h-[70px] relative"
        style={{ background: 'linear-gradient(120deg, #ff6b4a 0%, #ff9a6b 100%)' }}
      >
        <div
          className="absolute left-3.5 grid place-items-center bg-white text-xl"
          style={{ bottom: -16, width: 44, height: 44, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
          aria-hidden="true"
        >
          🔧
        </div>
      </div>
      <div className="pt-6 pb-3.5 px-3.5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[14px] font-bold text-ink">Reyes Plumbing Co.</p>
            <p className="text-[11px] text-ink/55 mt-0.5">Plumber in Miami, FL</p>
          </div>
          <span
            className="text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded text-white"
            style={{ background: ART.green }}
          >
            ✓ VERIFIED
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-2">
          <span className="text-[13px] font-bold text-ink">4.9</span>
          <span className="text-[12px]" style={{ color: ART.yellow }}>★★★★★</span>
          <span className="text-[11px] text-ink/55">(284 reviews)</span>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {[
            { l: 'Profile views',      v: '12,847', d: '+34%' },
            { l: 'Direction requests', v: '428',    d: '+18%' },
            { l: 'Calls',              v: '612',    d: '+52%' },
            { l: 'Website clicks',     v: '1,204',  d: '+27%' },
          ].map(s => (
            <div key={s.l} className="bg-[#f8f9fa] p-2 rounded-md">
              <p className="text-[10px] font-mono text-ink/55 tracking-wide">{s.l}</p>
              <p className="text-[16px] font-bold text-ink mt-0.5 leading-none">{s.v}</p>
              <p className="text-[10px] font-semibold mt-1" style={{ color: ART.green }}>{s.d} 30d</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TrafficGraph({ width = 340, height = 150 }: { width?: number; height?: number }) {
  const data = [120, 180, 240, 290, 380, 510, 720, 980, 1240, 1580, 1920, 2340];
  const max = 2400;
  const w = width - 30;
  const h = height - 30;
  const points = data.map((v, i) => [
    20 + (i / (data.length - 1)) * w,
    height - 20 - (v / max) * h,
  ] as [number, number]);
  const path = points.map(([x, y], i) => (i === 0 ? `M${x} ${y}` : `L${x} ${y}`)).join(' ');
  const last = points[points.length - 1];
  const first = points[0];
  const area = `${path} L${last[0]} ${height - 20} L${first[0]} ${height - 20} Z`;

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet" aria-label="Sample organic traffic curve over 12 months">
      <defs>
        <linearGradient id="seo-traffic-grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"   stopColor={ART.coral} stopOpacity="0.35" />
          <stop offset="100%" stopColor={ART.coral} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map(p => (
        <line key={p} x1="20" x2={width - 10} y1={20 + p * h} y2={20 + p * h} stroke="#232733" strokeDasharray="2 3" />
      ))}
      <path d={area} fill="url(#seo-traffic-grad)" />
      <path d={path} stroke={ART.coral} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={last[0]} cy={last[1]} r="6"   fill={ART.coral} opacity="0.25" />
      <circle cx={last[0]} cy={last[1]} r="3.5" fill={ART.coral} stroke="#fff" strokeWidth="1.5" />
      {['Jan', 'Apr', 'Jul', 'Oct', 'Jan'].map((l, i) => (
        <text
          key={i}
          x={20 + (i / 4) * w}
          y={height - 4}
          fontSize="9"
          fill="#8d96aa"
          fontFamily="ui-monospace, 'JetBrains Mono', monospace"
          textAnchor="middle"
        >
          {l}
        </text>
      ))}
    </svg>
  );
}

export function RankBar({ before, after, label, max = 100 }: { before: number; after: number; label: string; max?: number }) {
  const pct = (v: number) => `${(v / max) * 100}%`;
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between text-[11px]">
        <span className="text-ink/75 font-medium">{label}</span>
        <span className="font-mono text-ink/55">
          #{before} → <span className="font-bold" style={{ color: ART.green }}>#{after}</span>
        </span>
      </div>
      <div className="relative h-[18px] rounded-sm overflow-hidden" style={{ background: '#f0f1f4' }}>
        <div className="absolute left-0 top-0 h-full opacity-70" style={{ width: pct(max - before), background: '#cdd2dc' }} />
        <div className="absolute left-0 top-0 h-full"             style={{ width: pct(max - after),  background: ART.coral }} />
      </div>
    </div>
  );
}

type CitationStatus = 'listed' | 'inconsistent' | 'missing';

const STATUS_MAP: Record<CitationStatus, { c: string; t: string; icon: string }> = {
  listed:       { c: ART.green,  t: 'Listed',       icon: '✓' },
  inconsistent: { c: ART.yellow, t: 'NAP mismatch', icon: '!' },
  missing:      { c: ART.red,    t: 'Missing',      icon: '✕' },
};

export function CitationRow({ name, status }: { name: string; status: CitationStatus }) {
  const stat = STATUS_MAP[status];
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-3 px-3.5 py-3 border-t border-ink/10">
      <p className="text-[13px] text-ink font-medium">{name}</p>
      <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold" style={{ color: stat.c }}>
        <span
          className="grid place-items-center text-white text-[9px] font-extrabold"
          style={{ width: 14, height: 14, borderRadius: 999, background: stat.c }}
          aria-hidden="true"
        >
          {stat.icon}
        </span>
        {stat.t}
      </div>
    </div>
  );
}
