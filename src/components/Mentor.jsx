import { Container, Eyebrow } from "./ui"

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

export default function Mentor() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <img
        src="/assets/mentor-bg.jpg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-right-bottom opacity-35"
      />

      <Container className="relative">
        <Eyebrow className="text-3xl">MEET YOUR MENTOR</Eyebrow>
        <h2 className="mt-4 text-center text-4xl font-bold leading-tight sm:text-5xl lg:text-[52px]">
          <span className="text-ink">You're learning from someone </span>
          <span className="whitespace-nowrap bg-[#091678] px-2 text-white">who runs this,</span>
          <span className="text-ink"> not someone who reads about it.</span>
        </h2>

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-[413px_1fr] lg:gap-8">
          {/* Photo inside a dashed navy frame */}
          <div className="relative mx-auto w-full max-w-[413px]">
            <div className="rounded-[26px] border-[3px] border-dashed border-navy p-3">
              <div className="aspect-[389/476] overflow-hidden rounded-[21px] bg-[linear-gradient(180deg,#dcdef9_0%,#cbcef6_100%)]">
                <img
                  src="/assets/mentor-photo.webp"
                  alt="Pritam Nagrale, Founder & CEO of Future Agents"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="text-left lg:pt-1">
            <h3 className="text-4xl font-bold text-ink">Pritam Nagrale</h3>
            <p className="mt-3 text-base font-medium text-navy">Founder & CEO, Future Agents</p>
            <p className="mt-4 text-base text-ink">
              20+ years in digital business. 200,000+ students since 2005. 25,000+ trained live in
              AI. ₹45 Cr+ generated for clients using AI agents. Ratan Tata Business Excellence
              Awardee.
            </p>
            <p className="mt-3 text-base text-ink">
              Pritam isn't a course seller who discovered AI last year. He runs a 7-figure AI
              automation business, ships production agents for enterprise clients, and teaches only
              what's already running in real systems — his own and his clients'.
            </p>

            <div className="mt-6 grid max-w-[610px] grid-cols-1 gap-2.5 sm:grid-cols-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="relative overflow-hidden rounded-[13px] border border-line bg-white px-1 py-4 text-center"
                >
                  <img
                    src="/assets/stat-peach.jpg"
                    alt=""
                    aria-hidden
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="relative text-3xl font-bold text-navy">{s.value}</div>
                  <div className="relative mt-1 text-sm font-medium text-ink sm:text-[15px] lg:whitespace-nowrap">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-base font-medium text-navy">
              Specialisms: Custom AI agents · Voice AI systems · Marketing automation · Backend
              process automation · AI strategy consulting
            </p>
            <p className="mt-3 text-base font-light text-[#080619]">
              Featured across podcasts, radio and news platforms · Corporate trainer and speaker at
              premier colleges · Ran a 156-attendee live event at Radisson Blu, Pune
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl border border-line bg-white p-7 shadow-[0_7px_22px_0_rgba(0,0,0,0.12)]"
            >
              <div className="flex items-center gap-4">
                <div className={`h-14 w-14 shrink-0 rounded-full bg-gradient-to-r ${t.gradient}`} />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
              <div className={`mt-5 border-l-4 pl-4 text-left ${t.bar}`}>
                <p className="font-semibold text-gray-700">{t.quote}</p>
                <div className="mt-3 space-y-1.5 text-sm text-slate-500">
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
