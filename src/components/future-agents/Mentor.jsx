import { Container, Eyebrow } from "./ui"
import mentorBackground from "@/assets/mentor-bg.jpg.asset.json"

const stats = [
  { value: "206K", label: "YouTube subscribers" },
  { value: "52.6K", label: "Instagram followers" },
  { value: "4.8★", label: "across 16,000+ reviews" },
]

const testimonials = [
  {
    name: "Aarav Shah",
    role: "Mumbai, Founder",
    quote: "“The build made the whole thing click for me.”",
    gradient: "from-[#ff5a5a] to-[#833ab4]",
    bar: "border-accent",
    tail: "from-[#ff4d2e] to-[#8f42d9]",
  },
  {
    name: "Sana Khan",
    role: "Delhi, Consultant",
    quote: "“Clear, practical, and easy to follow in class.”",
    gradient: "from-[#2563eb] to-[#38bdf8]",
    bar: "border-[#0a66c2]",
    tail: "from-[#0a66c2] to-[#32a5ff]",
  },
]

// Navy "viewfinder" corners around the mentor photo, as in the design.
const corners = [
  "left-0 top-0 rounded-tl-[26px] border-l-2 border-t-2",
  "right-0 top-0 rounded-tr-[26px] border-r-2 border-t-2",
  "bottom-0 left-0 rounded-bl-[26px] border-b-2 border-l-2",
  "bottom-0 right-0 rounded-br-[26px] border-b-2 border-r-2",
]

export default function Mentor() {
  return (
    <section className="relative overflow-hidden bg-[#f3f5ff] pb-16 pt-24 lg:pb-[70px] lg:pt-[120px]">
      {/* Pale swirl artwork, scaled up and offset as in the design, fading into the section colour */}
      <img
        src={mentorBackground.url}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[-15%] top-[-14%] w-[170%] max-w-none opacity-80 [mask-image:linear-gradient(to_bottom,black_80%,transparent)]"
      />

      <Container className="relative">
        <Eyebrow className="text-3xl">MEET YOUR MENTOR</Eyebrow>
        <h2 className="mt-3 text-center text-4xl font-extrabold leading-[1.2] sm:text-5xl lg:text-[47px]">
          <span className="text-ink">You're learning from someone </span>
          <span className="whitespace-nowrap bg-[#091678] px-2 text-white">who runs this,</span>
          <span className="text-ink"> not someone who reads about it.</span>
        </h2>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[410px_1fr] lg:gap-14 lg:px-[68px]">
          {/* Photo inside navy corner brackets */}
          <div className="relative mx-auto w-full max-w-[410px] p-2.5">
            {corners.map((c) => (
              <span
                key={c}
                aria-hidden
                className={`pointer-events-none absolute h-[110px] w-[110px] border-navy ${c}`}
              />
            ))}
            <div className="aspect-[389/476] overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#dcdef9_0%,#cbcef6_100%)]">
              <img
                src="/assets/mentor-photo.webp"
                alt="Pritam Nagrale, Founder & CEO of Future Agents"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="text-left">
            <h3 className="text-4xl font-extrabold text-ink">Pritam Nagrale</h3>
            <p className="mt-3 text-[17px] font-medium text-navy">Founder & CEO, Future Agents</p>
            <p className="mt-5 text-[17px] leading-relaxed text-ink">
              20+ years in digital business. 200,000+ students since 2005. 25,000+ trained live in
              AI. ₹45 Cr+ generated for clients using AI agents. Ratan Tata Business Excellence
              Awardee.
            </p>
            <p className="mt-5 text-[17px] leading-relaxed text-ink">
              Pritam isn't a course seller who discovered AI last year. He runs a 7-figure AI
              automation business, ships production agents for enterprise clients, and teaches only
              what's already running in real systems — his own and his clients'.
            </p>

            <div className="mt-6 grid max-w-[604px] grid-cols-1 gap-2.5 sm:grid-cols-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="relative flex min-h-[97px] flex-col justify-center overflow-hidden rounded-[13px] border border-line bg-white px-1 py-4 text-center"
                >
                  <img
                    src="/assets/stat-peach.jpg"
                    alt=""
                    aria-hidden
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="relative text-[32px] font-extrabold leading-none text-navy">{s.value}</div>
                  <div className="relative mt-1.5 text-sm font-semibold text-ink sm:text-[15px] lg:whitespace-nowrap">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[17px] font-medium leading-relaxed text-navy">
              Specialisms: Custom AI agents · Voice AI systems · Marketing automation · Backend
              process automation · AI strategy consulting
            </p>
            <p className="mt-4 text-[17px] font-light leading-relaxed text-[#080619]">
              Featured across podcasts, radio and news platforms · Corporate trainer and speaker at
              premier colleges · Ran a 156-attendee live event at Radisson Blu, Pune
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mx-20">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative min-h-[300px] rounded-2xl border border-line bg-white p-7 pt-10 shadow-[0_7px_22px_0_rgba(0,0,0,0.12)]"
            >
              <div className="flex items-center gap-4">
                <div className={`h-[60px] w-[60px] shrink-0 rounded-full bg-gradient-to-r ${t.gradient}`} />
                <div className="text-left">
                  <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="mt-1 text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
              <div className={`mt-8 border-l-4 pl-4 text-left ${t.bar}`}>
                <p className="text-[15px] font-semibold text-gray-700">{t.quote}</p>
                <div className="mt-3 space-y-2.5 text-xs text-slate-500">
                  <p>Dummy testimonial text for layout.</p>
                  <p>Used as placeholder content only.</p>
                  <p>Replace with your final testimonial copy.</p>
                </div>
              </div>
              <div
                className={`absolute bottom-6 right-7 h-1 w-11 rounded-full bg-gradient-to-r ${t.tail}`}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
