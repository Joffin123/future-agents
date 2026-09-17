// Shared presentational primitives for the landing page.

export function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-[1248px] px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

// Primary pill CTA. `size` controls the padding/scale.
export function CTAButton({ children, href = "#pricing", variant = "dark", className = "" }) {
  const variants = {
    dark: "bg-[#0a0a0a] text-white hover:bg-black",
    navy: "bg-navy text-white hover:bg-[#0f1560]",
    peri: "bg-peri text-white hover:bg-[#5561bd]",
  }
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-bold shadow-lg transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

// Small section eyebrow label (e.g. "WHY NOW", "CURRICULUM").
export function Eyebrow({ children, className = "" }) {
  return (
    <p className={`text-center text-2xl font-bold tracking-wide text-navy ${className}`}>
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
