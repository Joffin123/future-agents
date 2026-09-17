import { useRef, useState } from "react"
import { Container } from "./ui"

const audiences = [
  {
    title: ["Working professionals &", "IT folks"],
    body: "You've watched AI get closer to your job description every quarter. You leave with a working AI Business OS you built yourself and the one skill your manager can't hire for: knowing which tools to connect, and how.",
    flip: false,
  },
  {
    title: ["Aspiring AI agency", "AI startup founders"],
    body: "You want to sell AI services but don't know what to sell or how to build it. You leave with a Business OS you can rebuild for any client in a weekend, plus the pricing blueprint behind it.",
    flip: true,
  },
]

function AudienceCard({ title, body, flip }) {
  return (
    <div className="relative h-full overflow-hidden rounded-[34px] border border-navy bg-white shadow-[0_20px_50px_-24px_rgba(20,26,116,0.35)]">
      {/* faded office photo behind the copy */}
      <img
        src="/assets/who-photo.jpg"
        alt=""
        aria-hidden
        className={`absolute inset-0 h-full w-full object-cover object-top ${flip ? "-scale-x-100" : ""}`}
      />
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative flex h-full flex-col items-center justify-center px-8 py-12 text-center sm:px-16">
        <h3 className="flex flex-col items-center gap-1 text-2xl font-black leading-tight text-white sm:text-3xl lg:text-[40px]">
          {title.map((line) => (
            <span key={line} className="bg-navy px-3 py-0.5">
              {line}
            </span>
          ))}
        </h3>
        <p className="mt-6 max-w-[704px] text-lg font-light leading-snug text-navy sm:text-xl lg:text-[25px]">
          {body}
        </p>
      </div>
    </div>
  )
}

export default function WhoIsThisFor() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  const onScroll = () => {
    const el = trackRef.current
    if (!el) return
    const slide = el.firstElementChild
    if (!slide) return
    setActive(Math.round(el.scrollLeft / slide.offsetWidth))
  }

  const goTo = (i) => {
    const el = trackRef.current
    const slide = el?.children[i]
    if (slide) el.scrollTo({ left: slide.offsetLeft - el.offsetLeft, behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(115deg,#ffffff_8%,#eef0ff_88%)] py-20">
      <img
        src="/assets/who-bg.jpg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90"
      />

      <Container className="relative">
        <h2 className="text-center text-4xl font-bold text-ink sm:text-5xl lg:text-[56px]">
          Who Is This For <span className="text-5xl sm:text-6xl lg:text-[75px]">?</span>
        </h2>
      </Container>

      {/* Horizontal carousel: first card centred, next card peeking in from the right */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="no-scrollbar relative mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 lg:px-[calc((100vw-846px)/2)]"
      >
        {audiences.map((a) => (
          <div
            key={a.title[0]}
            className="w-[88vw] max-w-[846px] shrink-0 snap-center lg:min-h-[394px]"
          >
            <AudienceCard {...a} />
          </div>
        ))}
      </div>

      <div className="relative mt-10 flex justify-center gap-2">
        {audiences.map((a, i) => (
          <button
            key={a.title[0]}
            type="button"
            aria-label={`Show audience ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              active === i ? "w-10 bg-[#6671c5]/50" : "w-6 bg-[#e9e9e9]"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
