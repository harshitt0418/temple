/**
 * SectionLabel.jsx
 * Reusable section eyebrow + heading + subtitle component
 * Keeps visual hierarchy consistent across all sections
 */

import OrnamentalDivider from './OrnamentalDivider';

export default function SectionLabel({
  eyebrow,
  title,
  subtitle,
  align = 'center', // 'center' | 'left'
  light = false,    // true when on dark burgundy backgrounds
  showDivider = true,
  className = '',
}) {
  const alignStyle = {
    textAlign: align,
    ...(align === 'left' ? {} : {}),
  };

  return (
    <div className={`section__header ${className}`} style={alignStyle}>
      {eyebrow && (
        <span className="section__eyebrow">{eyebrow}</span>
      )}

      <h2
        className="section__title"
        style={{
          color: light ? 'var(--color-cream-light)' : 'var(--color-green-dark)',
        }}
      >
        {title}
      </h2>

      {showDivider && (
        <div style={{ marginBlock: '0.75rem', display: 'flex', justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
          <OrnamentalDivider color={light ? 'var(--color-cream-border)' : 'var(--color-red-sacred)'} />
        </div>
      )}

      {subtitle && (
        <p
          className="section__subtitle"
          style={{
            color: light ? 'rgba(250, 246, 238, 0.85)' : 'var(--color-telugu)',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
