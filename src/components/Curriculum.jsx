import { Container, Emoji, Eyebrow } from "./ui"

const modules = [
  {
    n: "01",
    title: "Agent architecture: goals, memory, tools, prompts",
    body: "How agents actually think: goals, memory, tools, prompts. Master this once and you can build any agent you can imagine, long after today's tools change.",
    tag: "FOUNDATION",
    tagStyle: "bg-navy text-white",
    highlight: true,
  },
  {
    n: "02",
    title: "LinkedIn Content Agent — research → write → post",
    body: "Researches trending topics → writes the post → gets it ready to publish. Your first real agent, built by your own hands. (Our students' agents wrote the LinkedIn posts you'll see below. Unedited.)",
    tag: "Build with me", icon: "red-circle",
    tagStyle: "bg-line-peri text-navy",
  },
  {
    n: "03",
    title: "Email & Proposal Agent",
    body: "Reads the enquiry, drafts the reply, generates the proposal. The agent every service business asks for first.",
    tag: "Build with me", icon: "red-circle",
    tagStyle: "bg-line-peri text-navy",
  },
  {
    n: "04",
    title: "WhatsApp Support & Sales Agent",
    body: "Answers leads instantly, qualifies them, books calls. Businesses in India pay ₹50,000+ for exactly this one.",
    tag: "Build with me", icon: "red-circle",
    tagStyle: "bg-line-peri text-navy",
  },
  {
    n: "05",
    title: "AI Voice Agent — human-like calls & summaries",
    body: "Takes calls, sounds human, captures details, writes the summary. Watch it built end-to-end, take the blueprint home.",
    tag: "Live build + blueprint", icon: "eye",
    tagStyle: "bg-line-peri text-navy",
  },
  {
    n: "06",
    title: "Your AI Business OS — the skill of 2026",
    body: "Describe it in plain English, watch the software build itself. Walk out with a real app you can demo to a client on Monday.",
    tag: "Crown jewel", icon: "star",
    tagStyle: "bg-line-peri text-navy",
  },
  {
    n: "07",
    title: "Build your first AI app / MVP — without code",
    body: "All your agents wired into one system, marketing, sales, support and ops working like a team that never sleeps.",
    tag: "Build with me", icon: "red-circle",
    tagStyle: "bg-line-peri text-navy",
  },
  {
    n: "08",
    title: "Monetisation: pricing, packaging, finding your first buyer",
    body: "Exactly how people are getting paid for this: selling single agents, building the AI Business OS for clients, or launching your own SaaS. Pricing, positioning, where to find the first buyer.",
    tag: "Blueprint", icon: "money",
    tagStyle: "bg-line-peri text-navy",
  },
  {
    n: "09",
    title: "Live Q&A until your questions run out",
    body: null,
    tag: "Open floor",
    tagStyle: "bg-line-peri text-navy",
  },
]

function DayHeader({ label, rest }) {
  return (
    <p className="text-2xl font-extrabold leading-tight text-navy sm:text-[35px]">
      <span className="bg-navy px-3 py-0.5 text-white">{label}</span>
      <span> {rest}</span>
    </p>
  )
}

export default function Curriculum() {
  return (
    <section id="curriculum" className="bg-[#f7f8ff] py-24">
      <Container>
        <Eyebrow className="text-[28px]">CURRICULUM</Eyebrow>
        <h2 className="mt-4 text-center text-4xl font-medium text-black sm:text-5xl lg:text-[47px]">
          The complete <span className="whitespace-nowrap text-5xl sm:text-6xl lg:text-[71px]">2-day</span> build schedule
        </h2>

        {/* Day 1 */}
        <div
          className="mt-14 overflow-hidden rounded-[20px] border border-navy bg-[linear-gradient(115deg,#ffffff_8%,#f0f1ff_88%)] px-8 py-6 shadow-[0_12px_32px_0_rgba(20,26,116,0.07)] lg:px-14"
        >
          <DayHeader label="DAY 1" rest="· Self-paced · 3 hours · Watch anytime before Saturday" />
          <p className="mt-2.5 text-left text-lg leading-relaxed text-slate-900 lg:pl-3 lg:text-xl">
            Recorded setup + Agentic AI foundations. Tool accounts, n8n setup, how agents think.
            Guided, step-by-step, beginner-proof. Come to Saturday ready to build instead of ready to
            install.
          </p>
        </div>

        {/* Day 2 */}
        <div className="mt-9 overflow-hidden rounded-[20px] border border-line-peri bg-white p-6 pb-10 shadow-[0_12px_32px_0_rgba(20,26,116,0.07)] sm:p-8 sm:pb-12">
          <div className="lg:pl-7">
            <DayHeader label="DAY 2" rest="· LIVE · Saturday Aug 29, 11:00 AM IST · 6+ hours on Zoom" />
          </div>

          <div className="relative mt-16 space-y-3.5">
            {/* vertical rail running through the module numbers */}
            <div className="absolute -top-12 bottom-6 left-[46px] hidden w-[3px] rounded-full bg-line-peri sm:block" />
            {modules.map((m) => (
              <div
                key={m.n}
                className={`relative flex flex-col gap-4 rounded-2xl border border-line-peri px-5 py-4 sm:flex-row sm:items-center sm:py-5 ${
                  m.highlight ? "bg-[#dcdef9]" : "bg-[#f7f8ff]"
                }`}
              >
                <div className="text-[38px] font-extrabold leading-none text-navy sm:w-16 sm:shrink-0 sm:text-center">
                  {m.n}
                </div>
                <div className="flex-1 sm:pr-2">
                  <h3 className="text-xl font-bold text-slate-900">{m.title}</h3>
                  {m.body && <p className="mt-1.5 text-sm leading-relaxed text-[#62748d]">{m.body}</p>}
                </div>
                <div className="sm:w-[224px] sm:shrink-0">
                  <span
                    className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-5 py-2.5 text-base font-bold ${m.tagStyle}`}
                  >
                    {m.icon && <Emoji name={m.icon} size={16} />}
                    {m.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
