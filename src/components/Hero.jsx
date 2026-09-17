import { Container, CTAButton } from "./ui"

const stats = [
  { icon: "icon-builders", value: "25,000+", label: "Builders trained" },
  { icon: "icon-award", value: "Ratan Tata", label: "Business Excellence Awardee" },
  { icon: "icon-reviews", value: "4.8/5", label: "(16,000+ reviews)" },
  { icon: "icon-nocode", value: "Zero coding", label: "Required" },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-page">
      {/* faint blueprint grid + floating 3D objects from the design */}
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
      <img
        src="/assets/hero-bg.jpg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <img
        src="/assets/obj-robot.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-2 top-5 hidden w-40 lg:block xl:w-[225px]"
      />
      <img
        src="/assets/obj-magnifier.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-0 top-8 hidden w-32 lg:block xl:w-[178px]"
      />

      <Container className="relative py-8 lg:py-10">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/assets/logo.png"
            alt="Future Agents — AI Automation Agency"
            className="h-[52px] w-auto"
          />
        </div>

        {/* Live cohort badge */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-navy bg-[#6671c5]/20 px-4 py-1.5">
            <span className="text-[10px] text-[#ff7a2e]">●</span>
            <span className="text-xs font-semibold text-black">
              Live Cohort · Saturday, Aug 29, 2026 · 11 AM IST
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="mx-auto mt-6 max-w-5xl text-center text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-[63px]">
          <span className="text-gradient-blue">Build Your Business OS</span>
          <br />
          <span className="text-gradient-blue">With 12+ AI Tools In One Saturday</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg font-medium text-[#17122b] lg:text-xl">
          Not a tools tour. You'll build a working system that drafts your proposals, chases your
          follow-ups, pulls your reports and produces your content — set up live, on your business,
          before the day ends. 10,000+ owners have done it. Most say the first week back paid for
          the Saturday.
        </p>

        {/* Video thumbnail + stats */}
        <div className="mx-auto mt-12 flex max-w-5xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-14">
          <div className="relative w-full max-w-[372px] shrink-0 overflow-hidden rounded-lg border border-[#f0a84d]/60 shadow-[0_7px_15px_rgba(58,23,10,0.18)]">
            <div className="aspect-[372/206] w-full bg-[linear-gradient(120deg,#120906_0%,#072d56_100%)]" />
            <button
              type="button"
              aria-label="Play intro video"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-navy shadow-[0_8px_18px_rgba(0,0,0,0.25)]">
                <span className="ml-1 border-y-[12px] border-l-[24px] border-y-transparent border-l-white" />
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            {stats.map((s) => (
              <div key={s.value} className="flex items-center gap-2">
                <img src={`/assets/${s.icon}.png`} alt="" className="h-16 w-16 shrink-0" />
                <div className="text-left leading-tight">
                  <div className="text-2xl font-bold text-navy lg:text-[28px]">{s.value}</div>
                  <div className="text-[15px] font-semibold text-ink sm:whitespace-nowrap">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-12 flex justify-center">
          <CTAButton variant="dark" className="px-10 py-4">
            <span className="text-2xl">Build My First AI Agent →</span>
            <span className="text-[32px]">₹499</span>
          </CTAButton>
        </div>

        <p className="mt-4 text-center text-lg font-medium text-[#696675]">
          <span className="line-through">₹4,999</span> ₹499 + GST · 100% money-back · Instant access
        </p>

        <a
          href="#curriculum"
          className="mt-6 block text-center text-lg font-light text-navy hover:underline"
        >
          See everything you'll build ↓
        </a>
      </Container>
    </section>
  )
}
