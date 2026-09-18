import { Container, CTAButton } from "./ui"

const stats = [
  {
    figure: "40%",
    body: "of enterprise apps will include task-specific AI agents by end of 2026 — up from under 5% in 2025.",
    source: "GARTNER",
    bg: "stat-blue",
    wash: "bg-white/45",
    figureClass: "from-[#1b2a9e] to-[#2a5ce6]",
  },
  {
    figure: "80%",
    body: "of software engineers will need to upskill because of AI by 2027.",
    source: "GARTNER",
    bg: "stat-purple",
    wash: "bg-white/35",
    figureClass: "from-[#5b1fb0] to-[#8f3bd2]",
  },
  {
    figure: "56%",
    body: "the wage premium workers with AI skills command over comparable peers. It was 25% the year before.",
    source: "PwC Global AI Jobs Barometer, 2025",
    bg: "stat-orange",
    wash: "bg-white/10",
    figureClass: "from-[#b8321a] to-[#e8532a]",
  },
]

export default function WhyNow() {
  return (
    <section className="relative overflow-hidden bg-[#11131a] py-24 text-white">
      <img
        src="/assets/whynow-bg.jpg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <Container className="relative">
        <p className="text-center text-[25px] font-semibold text-peri">WHY NOW</p>
        <h2 className="mt-3 text-center text-4xl font-extrabold text-white sm:text-5xl lg:text-[56px]">
          The 12-month window
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-center text-xl text-white/90">
          Every business is being handed AI tools. Very few have anyone who can actually make them
          run. That gap is the opportunity.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.figure}
              className="relative min-h-[280px] overflow-hidden rounded-[20px] border border-[#d5d9e2] bg-[#f0f2f7] px-8 py-7 text-ink"
            >
              <img
                src={`/assets/${s.bg}.jpg`}
                alt=""
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              />
              {/* soften the artwork so the copy stays legible, as in the design */}
              <div className={`pointer-events-none absolute inset-0 ${s.wash}`} />
              <div className="relative">
                <div
                  className={`bg-gradient-to-r ${s.figureClass} bg-clip-text text-7xl font-bold leading-[0.95] text-transparent sm:text-[88px]`}
                >
                  {s.figure}
                </div>
                <p className="mt-2 text-base leading-relaxed text-ink">{s.body}</p>
                <p className="mt-2 text-[19px] font-medium tracking-[-0.02em] text-ink">{s.source}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton variant="peri" size="lg" rounded="rounded-[33px]">
            Start Building This Saturday
          </CTAButton>
        </div>
      </Container>
    </section>
  )
}
