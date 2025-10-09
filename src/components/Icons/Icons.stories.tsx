
export const SuggestedUsage = () => {
  const snippet = `import { Home, Search } from 'lucide-react';

export const Example = () => (
  <div>
    <Home size={20} />
    <Search color="#93B97A" />
  </div>
);`;

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <div>
        <h2 style={{ margin: 0, marginBottom: 8 }}>Lucide Icons (suggested usage)</h2>
        <p style={{ margin: 0, color: 'var(--gray-7)' }}>
          Install and import icons directly from <code>lucide-react</code>. This library does not
          bundle or re-export icons to keep bundles lean and tree-shaking effective.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        {/* Inline SVG placeholders to preview layout without lucide-react dependency */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gray-12)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Home icon">
            <path d="M3 10.5L12 3l9 7.5" />
            <path d="M9 21V12h6v9" />
          </svg>
          <span>Home</span>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green-9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Search icon">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span>Search</span>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '8px 0' }}>Install</h3>
        <pre style={{ background: 'var(--gray-4)', padding: 12, borderRadius: 8, overflowX: 'auto' }}>
{`pnpm add lucide-react`}
        </pre>
      </div>

      <div>
        <h3 style={{ margin: '8px 0' }}>Use</h3>
        <pre style={{ background: 'var(--gray-4)', padding: 12, borderRadius: 8, overflowX: 'auto' }}>
{snippet}
        </pre>
      </div>

      <a
        href="https://lucide.dev/icons"
        target="_blank"
        rel="noreferrer"
        style={{ color: 'var(--green-9)', textDecoration: 'underline', width: 'fit-content' }}
      >
        Browse all icons in Lucide docs
      </a>
    </div>
  );
};




