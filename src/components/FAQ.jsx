import { useState } from "react"
import { Container } from "./ui"

const faqs = [
  {
    q: "Do I need coding or a technical background?",
    a: "None. Zero. We use no-code tools, n8n, Make.com, Vapi, ManyChat. If you can use a smartphone and follow steps on a screen, you can build every agent in this bootcamp. Most of our best builders come from sales, HR, teaching and small business, not engineering.",
  },
  {
    q: "What exactly will I own when it's over?",
    a: "A working AI Business OS built on your real business — 12+ tools connected and 5 agents running — plus the setup guides, prompts and templates to rebuild or extend any of them.",
  },
  {
    q: "What if I can't attend live?",
    a: "The Pro Builder Pass includes 30 days of recording access, so you can build on Saturday and rebuild any part on your own schedule. The Live Pass has no recordings.",
  },
  {
    q: "I'm not sure I can keep up with a live build.",
    a: "The Day 1 self-paced foundation gets everyone to the same starting line, and live Q&A means you get unstuck in the same session. Pro Builders also get priority support and replays.",
  },
  {
    q: "Can I really earn from this?",
    a: "Many students sell single agents, build the AI Business OS for clients, or launch their own SaaS. Module 8 covers pricing, packaging and finding your first buyer.",
  },
  {
    q: "What do I need to have ready?",
    a: "A laptop, a stable internet connection, and a few free tool accounts we help you set up on Day 1. That's it.",
  },
  {
    q: "AI changes so fast, will this still be useful next year?",
    a: "We teach how agents think — goals, memory, tools, prompts — not just today's buttons. That foundation carries over no matter which tools come next.",
  },
  {
    q: "How is this different from every other AI course right now?",
    a: "You build a real, working system on your own business, live, in one Saturday — not a library of videos you never finish. You leave with something running, not just notes.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes. Decide by the lunch break on Saturday — if it isn't worth your time, tell us before the second half and we refund 100%. No questions, no forms.",
  },
]

function Item({ q, a, open, onToggle }) {
  return (
    <div
      className={`rounded-2xl border transition-colors ${
        open ? "border-[#6671c5] bg-[#e4e6f5]" : "border-line bg-white"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-6 p-6 text-left"
        aria-expanded={open}
      >
        <span className="text-2xl font-extrabold leading-tight text-ink sm:text-[27px]">{q}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl font-medium ${
            open ? "bg-[#6671c5]/25 text-ink" : "border border-line bg-card text-[#6671c5]"
          }`}
        >
          {open ? "–" : "+"}
        </span>
      </button>
      {open && a && (
        <p className="-mt-2 max-w-[1040px] px-6 pb-6 text-left text-base leading-relaxed text-[#5e6472]">{a}</p>
      )}
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="bg-page pb-24 pt-[110px]">
      <Container>
        <h2 className="text-center text-4xl font-extrabold text-navy sm:text-5xl lg:text-[56px]">FAQ</h2>
        <div className="mt-[70px] space-y-[13px]">
          {faqs.map((f, i) => (
            <Item
              key={f.q}
              q={f.q}
              a={f.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
