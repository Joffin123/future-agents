import { useRef } from "react"
import { Container } from "./ui"

const posts = [
  { name: "Harshal Singh", file: "harshal-singh" },
  { name: "Jasmeet Singh Gandhi", file: "jasmeet-singh-gandhi" },
  { name: "Kuldeep M", file: "kuldeep-m" },
  { name: "Mac Joy", file: "mac-joy" },
  { name: "Naveenkumar Anandan", file: "naveenkumar-anandan" },
  { name: "Naveenkumar Anandan", file: "naveenkumar-anandan-2" },
  { name: "Omprakash Sharma", file: "omprakash-sharma" },
  { name: "Prateek Biradar", file: "prateek-biradar" },
  { name: "Prateek Srivastava", file: "prateek-srivastava" },
  { name: "Sriram R", file: "sriram-r" },
]

function LinkedInBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0a66c2] px-3 py-1 shadow-md">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden>
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7c0-1.67-.03-3.82-2.33-3.82-2.33 0-2.69 1.82-2.69 3.7V24h-4V8z" />
      </svg>
      <span className="text-xs font-semibold text-white">LinkedIn</span>
    </span>
  )
}

function ArrowButton({ dir, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "left" ? "Previous posts" : "Next posts"}
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0a66c2] bg-white text-[#0a66c2] shadow-sm transition-colors hover:bg-[#0a66c2] hover:text-white ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        {dir === "left" ? (
          <path d="M9 14.4 3.8 9 9 3.8M14.4 9H3.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M3.8 9h10.6M9 3.8 14.4 9 9 14.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  )
}

export default function SocialProof() {
  const trackRef = useRef(null)
  const scrollBy = (dir) => {
    const el = trackRef.current
    if (el) el.scrollBy({ left: dir * 409, behavior: "smooth" })
  }

  return (
    <section className="bg-[#f0f2fe] py-24">
      <Container>
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:justify-between">
          <h2 className="max-w-[900px] text-left text-4xl font-extrabold leading-[1.12] text-ink sm:text-5xl lg:text-[56px]">
            These posts were written and published by AI agents.
            <br />
            <span className="text-gradient-blue">Built by students. In class.</span>{" "}
            <span className="inline-block rounded-[11px] bg-navy px-3 leading-[1.15] text-white">
              Live
            </span>
          </h2>
          <p className="max-w-[261px] shrink-0 border-l-[5px] border-accent pl-5 text-left text-[15.5px] font-light leading-relaxed text-ink lg:mt-3">
            Not testimonials we collected afterward. Real posts, published in real time, by agents
            students built during the session, many of whom had never automated anything before that
            morning.
          </p>
        </div>

        {/* Horizontal scrolling gallery. Arrows sit outside the content column on wide screens
            (as in the design) and drop below the cards on narrower ones. */}
        <div className="relative mt-14">
          <ArrowButton
            dir="left"
            onClick={() => scrollBy(-1)}
            className="absolute -left-[54px] top-1/2 hidden -translate-y-1/2 min-[1400px]:flex"
          />
          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x gap-[19px] overflow-x-auto px-4 pb-2"
          >
            {posts.map((p) => (
              <div
                key={p.file}
                className="relative w-[390px] shrink-0 snap-start overflow-hidden rounded-[18px] border border-gray-200 bg-white p-3.5 pb-10 shadow-[0_5px_23px_-9px_rgba(25,29,46,0.12)]"
              >
                <img
                  src={`/assets/linkedin/${p.file}.jpg`}
                  alt={`LinkedIn post by ${p.name}, published by an agent built at the Future Agents bootcamp`}
                  className="h-[307px] w-full rounded-[14px] object-contain"
                  loading="lazy"
                />
                <div className="absolute right-6 top-6">
                  <LinkedInBadge />
                </div>
              </div>
            ))}
          </div>
          <ArrowButton
            dir="right"
            onClick={() => scrollBy(1)}
            className="absolute -right-[54px] top-1/2 hidden -translate-y-1/2 min-[1400px]:flex"
          />
          <div className="mt-6 flex justify-center gap-3 min-[1400px]:hidden">
            <ArrowButton dir="left" onClick={() => scrollBy(-1)} />
            <ArrowButton dir="right" onClick={() => scrollBy(1)} />
          </div>
        </div>

        <p className="mt-6 text-center text-lg font-bold text-[#62748d]">
          Swipe → every one of these was posted by an agent its author built that same day.
        </p>
      </Container>
    </section>
  )
}
