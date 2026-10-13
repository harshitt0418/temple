/**
 * OrnamentalDivider.jsx
 * Reusable sacred ornamental divider — lotus + line motif
 * Used to separate sections with cultural authenticity
 */

export default function OrnamentalDivider({ color = 'var(--color-gold)', className = '' }) {
  return (
    <div
      className={`ornamental-divider ${className}`}
      aria-hidden="true"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        padding: '0.25rem 0',
      }}
    >
      {/* Left line with dots */}
      <svg width="120" height="12" viewBox="0 0 120 12" fill="none">
        <line x1="0" y1="6" x2="90" y2="6" stroke={color} strokeWidth="1" strokeDasharray="4 3" />
        <circle cx="100" cy="6" r="2" fill={color} />
        <circle cx="110" cy="6" r="1.5" fill={color} />
        <circle cx="118" cy="6" r="1" fill={color} />
      </svg>

      {/* Centre lotus */}
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        {/* Lotus petals — stylised sacred geometry */}
        <ellipse cx="16" cy="16" rx="4" ry="10" fill={color} opacity="0.9" />
        <ellipse cx="16" cy="16" rx="4" ry="10" fill={color} opacity="0.9" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="4" ry="10" fill={color} opacity="0.9" transform="rotate(120 16 16)" />
        <ellipse cx="16" cy="16" rx="4" ry="10" fill={color} opacity="0.5" transform="rotate(30 16 16)" />
        <ellipse cx="16" cy="16" rx="4" ry="10" fill={color} opacity="0.5" transform="rotate(90 16 16)" />
        <ellipse cx="16" cy="16" rx="4" ry="10" fill={color} opacity="0.5" transform="rotate(150 16 16)" />
        <circle cx="16" cy="16" r="4" fill={color} />
        <circle cx="16" cy="16" r="2" fill="var(--color-cream)" />
      </svg>

      {/* Right line with dots */}
      <svg width="120" height="12" viewBox="0 0 120 12" fill="none">
        <circle cx="2" cy="6" r="1" fill={color} />
        <circle cx="10" cy="6" r="1.5" fill={color} />
        <circle cx="20" cy="6" r="2" fill={color} />
        <line x1="30" y1="6" x2="120" y2="6" stroke={color} strokeWidth="1" strokeDasharray="4 3" />
      </svg>
    </div>
  );
}
