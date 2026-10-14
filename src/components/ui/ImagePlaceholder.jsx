/**
 * ImagePlaceholder.jsx
 * Elegant placeholder for all image slots.
 * ZERO Yellow: Corners and lotus are rendered in sacred red.
 */

export default function ImagePlaceholder({
  label = 'Temple Image',
  meta = 'Asset to be placed here',
  aspectRatio = '4/3',
  minHeight = '200px',
  className = '',
  style = {},
}) {
  return (
    <div
      className={`placeholder-box ${className}`}
      role="img"
      aria-label={label}
      style={{
        aspectRatio,
        minHeight,
        ...style,
      }}
    >
      {/* Decorative corner marks in sacred red — ZERO yellow */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          width: '20px',
          height: '20px',
          borderTop: '2px solid var(--color-red-sacred)',
          borderLeft: '2px solid var(--color-red-sacred)',
          opacity: 0.6,
        }}
      />
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          width: '20px',
          height: '20px',
          borderTop: '2px solid var(--color-red-sacred)',
          borderRight: '2px solid var(--color-red-sacred)',
          opacity: 0.6,
        }}
      />
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          width: '20px',
          height: '20px',
          borderBottom: '2px solid var(--color-red-sacred)',
          borderLeft: '2px solid var(--color-red-sacred)',
          opacity: 0.6,
        }}
      />
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          width: '20px',
          height: '20px',
          borderBottom: '2px solid var(--color-red-sacred)',
          borderRight: '2px solid var(--color-red-sacred)',
          opacity: 0.6,
        }}
      />

      {/* Lotus icon in sacred red */}
      <svg
        className="placeholder-box__icon"
        viewBox="0 0 48 48"
        fill="none"
        width="48"
        height="48"
        aria-hidden="true"
      >
        <ellipse cx="24" cy="24" rx="6" ry="15" fill="var(--color-red-sacred)" opacity="0.5" />
        <ellipse cx="24" cy="24" rx="6" ry="15" fill="var(--color-red-sacred)" opacity="0.5" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="6" ry="15" fill="var(--color-red-sacred)" opacity="0.5" transform="rotate(120 24 24)" />
        <ellipse cx="24" cy="24" rx="6" ry="15" fill="var(--color-red-sacred)" opacity="0.3" transform="rotate(30 24 24)" />
        <ellipse cx="24" cy="24" rx="6" ry="15" fill="var(--color-red-sacred)" opacity="0.3" transform="rotate(90 24 24)" />
        <ellipse cx="24" cy="24" rx="6" ry="15" fill="var(--color-red-sacred)" opacity="0.3" transform="rotate(150 24 24)" />
        <circle cx="24" cy="24" r="6" fill="var(--color-red-sacred)" opacity="0.7" />
      </svg>

      <span className="placeholder-box__label">{label}</span>
      <span className="placeholder-box__meta">{meta}</span>
    </div>
  );
}
