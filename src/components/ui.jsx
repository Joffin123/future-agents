// Shared presentational primitives for the landing page.

// Design content column is 1248px wide at 1440 (96px side margins). The extra
// 48px on max-width is eaten by the horizontal padding on narrower screens.
export function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-[1296px] px-6 ${className}`}>
      {children}
    </div>
  )
}

// Primary CTA. Sizing/radius come from `size` + `rounded` so callers can override
// them without fighting the base classes (Tailwind doesn't dedupe conflicting utilities).
const buttonSizes = {
  md: "px-8 py-4 text-lg",
  lg: "px-8 py-4 text-2xl",
  none: "",
}

export function CTAButton({
  children,
  href = "#pricing",
  variant = "dark",
  size = "md",
  rounded = "rounded-full",
  className = "",
}) {
  const variants = {
    dark: "bg-[#0a0a0a] text-white hover:bg-black",
    navy: "bg-navy text-white hover:bg-[#0f1560]",
    peri: "bg-peri text-white hover:bg-[#5561bd]",
  }
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 font-bold shadow-lg transition-colors ${rounded} ${buttonSizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

// Small section eyebrow label (e.g. "WHY NOW", "CURRICULUM").
export function Eyebrow({ children, className = "" }) {
  return (
    <p className={`text-center font-bold tracking-wide text-navy ${className}`}>
      {children}
    </p>
  )
}

// Inline emoji rendered from the design's own icon set so it looks the same on every OS.
export function Emoji({ name, alt = "", size = 18, className = "" }) {
  return (
    <img
      src={`/assets/emoji/${name}.png`}
      alt={alt}
      width={size}
      height={size}
      className={`inline-block align-[-0.2em] ${className}`}
    />
  )
}

// Bold tick / cross used in the pricing feature lists.
export function CheckIcon({ ok = true, className = "" }) {
  return ok ? (
    <svg viewBox="0 0 24 24" className={`h-6 w-6 shrink-0 text-navy ${className}`} aria-hidden>
      <path
        d="M4 12.5l5 5L20 6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" className={`h-6 w-6 shrink-0 text-[#111edd] ${className}`} aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}
