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
          color: light ? 'var(--color-cream-light)' : 'var(--color-text-primary)',
        }}
      >
        {title}
      </h2>

      {showDivider && (
        <div style={{ marginBlock: '1rem', display: 'flex', justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
          <OrnamentalDivider color={light ? 'var(--color-gold-pale)' : 'var(--color-gold)'} />
        </div>
      )}

      {subtitle && (
        <p
          className="section__subtitle"
          style={{
            color: light ? 'var(--color-cream-dark)' : 'var(--color-text-secondary)',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
