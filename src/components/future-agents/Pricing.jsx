import { CheckIcon, Container, CTAButton, Emoji } from "./ui";

const livePassFeatures = [
  { ok: true, text: "3-hour foundation video, yours before Saturday" },
  { ok: true, text: "Six hours live — building, not watching" },
  {
    ok: true,
    text: "Your Business OS built on your real business: 12+ tools, agents running",
  },
  { ok: true, text: "Setup guide, agent prompts, reusable templates" },
  { ok: true, text: "Live Q&A — stuck mid-build, unstuck same session" },
  { ok: true, text: "Participation certificate" },
  { ok: true, text: "25,000 premium LLM API tokens included" },
  { ok: false, text: "No recordings. Miss it, it's gone." },
  { ok: false, text: "No replay if you fall behind." },
  { ok: false, text: "No priority chat response." },
];

const proFeatures = [
  {
    bold: "30 days recording access",
    rest: " Every step, rewindable. Build on Saturday, rebuild on Wednesday. Miss it entirely and you still lose nothing. (₹3,000)",
  },
  {
    bold: "100,000 premium tokens — 4× the free tier",
    rest: " OpenAI, Claude and Gemini. Finish all 5 agents, then keep building for weeks on what's left. (₹4,000)",
  },
  {
    bold: "Priority support during the live session",
    rest: ", your questions get answered first, so you never sit stuck watching everyone move ahead. (worth ₹1,500)",
  },
  { bold: "Pro Builder Certificate", rest: " (worth ₹500)" },
];

const YES = "yes";
const NO = "no";
const comparisonRows = [
  ["Live bootcamp", YES, YES],
  ["API tokens", "25,000", "100,000 (4×)"],
  ["Enough tokens to finish all 5 agents", NO, YES],
  ["30-day recordings", NO, YES],
  ["If you miss Saturday", "You lose the class", "You lose nothing"],
  ["Priority Q&A", NO, YES],
  ["Certificate", "Participation Certificate", "Pro Builder Certificate"],
];

// Table cell: renders the design's tick/cross icons for YES/NO, plain text otherwise.
function Cell({ value }) {
  if (value === YES) return <Emoji name="check" alt="Included" size={16} />;
  if (value === NO) return <Emoji name="cross" alt="Not included" size={16} />;
  return value;
}

function Check({ ok }) {
  return <CheckIcon ok={ok} className="mt-0.5" />;
}

// Column template shared by the comparison table's header and body rows.
const tableCols =
  "grid grid-cols-[1fr_140px_160px] items-center gap-2 rounded-xl px-4 sm:grid-cols-[1fr_200px_220px] lg:grid-cols-[1fr_270px_377px]";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white pb-24 pt-[120px]">
      <Container>
        <h2 className="text-center text-4xl font-extrabold capitalize text-black sm:text-5xl lg:text-[56px]">
          Choose Your Seat
        </h2>

        {/* Pricing cards. Top padding on the Live card lines its price up with the Pro card,
            whose header carries the "9 out of 10" badge. */}
        <div className="mt-16 grid items-stretch gap-[27px] lg:grid-cols-[1fr_1.04fr]">
          {/* Live Pass */}
          <div className="flex flex-col rounded-3xl border border-line bg-card px-10 pb-14 pt-10 lg:pt-[98px]">
            <p className="text-center text-xl font-medium text-[#5e6472]">
              LIVE BOOTCAMP PASS
            </p>
            <p className="mt-3 text-center text-6xl font-black leading-none tracking-tight text-ink sm:text-7xl lg:text-[90px]">
              ₹499 + GST
            </p>
            <p className="mt-8 text-center text-3xl text-[#5e6472] line-through">
              ₹4,999
            </p>
            <p className="mt-8 text-lg text-ink">
              For: I'll definitely be free all Saturday and I only want the live
              session.
            </p>
            <div className="mt-6 space-y-[21px]">
              {livePassFeatures.map((f) => (
                <div key={f.text} className="flex items-start gap-3">
                  <Check ok={f.ok} />
                  <p className="text-[15px] font-medium text-ink">{f.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Builder */}
          <div className="relative flex flex-col rounded-3xl border-2 border-navy bg-page px-10 pb-9 pt-10 shadow-[14px_18px_44px_-10px_rgba(100,112,200,0.6)]">
            <div className="flex justify-center">
              <span className="rounded-full bg-navy px-6 py-1.5 text-lg font-medium text-white">
                <Emoji name="star" size={18} className="mr-1" />9 out of 10
                builders choose this
              </span>
            </div>
            <p className="mt-4 text-center text-xl font-medium text-[#111edd]">
              PRO BUILDER PASS
            </p>
            <p className="mt-3 text-center text-6xl font-black leading-none tracking-tight text-ink sm:text-7xl lg:text-[90px]">
              ₹999 + GST
            </p>
            <p className="mt-8 text-center text-3xl text-navy">
              <span className="line-through">₹9,999</span> · You save ₹9,000
            </p>
            <p className="mt-8 text-lg text-ink">
              For: I want to actually finish all 5 agents, and rewatch the parts
              I need.
            </p>

            <p className="mt-6 text-xs font-bold text-[#111edd]">
              Everything in the Live Pass, plus:
            </p>
            <div className="mt-5 space-y-5">
              {proFeatures.map((f) => (
                <div key={f.bold} className="flex items-start gap-3">
                  <Check ok />
                  <p className="text-[15px] leading-snug text-ink">
                    <span className="font-bold">{f.bold}</span>
                    <span className="font-medium">{f.rest}</span>
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-2xl font-extrabold text-navy sm:text-[32px]">
              Total value: ₹9,999 You pay: ₹999
            </p>
            <div className="mt-4">
              <CTAButton
                variant="navy"
                size="none"
                rounded="rounded-[30px]"
                className="w-full px-8 py-6 text-2xl sm:text-[32px]"
              >
                Join as a Pro Builder → ₹999
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div className="mt-[107px] rounded-[20px] border border-line bg-card p-8">
          <h3 className="text-center text-3xl font-extrabold text-ink sm:text-[39px]">
            ₹500 more. This is the entire difference:
          </h3>

          <div className="mt-5 overflow-x-auto">
            <div className="min-w-[600px] space-y-2">
              <div className={`${tableCols} bg-page py-4`}>
                <span />
                <span className="text-base font-bold text-ink">
                  Live Pass ₹499
                </span>
                <span className="text-base font-bold text-navy">
                  Pro Builder ₹999
                </span>
              </div>
              {comparisonRows.map((row) => (
                <div key={row[0]} className={`${tableCols} bg-white py-4`}>
                  <span className="text-lg text-ink">{row[0]}</span>
                  <span className="text-sm text-[#5e6472]">
                    <Cell value={row[1]} />
                  </span>
                  <span className="text-sm text-ink">
                    <Cell value={row[2]} />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-7 text-left text-xl leading-relaxed text-ink">
            Straight talk: ₹499 gets you into the room. ₹999 gets you out of it
            with all five agents actually finished, plus 30 days to rebuild
            anything you didn't catch.
          </p>
          <p className="mt-6 text-center text-xl font-medium text-[#5e6472]">
            <Emoji name="card" size={20} className="mr-1" />
            UPI · Credit Card · Net Banking · EMI available
          </p>
        </div>

        {/* Guarantee banner */}
        <div className="relative mt-[68px] overflow-hidden rounded-3xl bg-[linear-gradient(115deg,#ffffff_0%,#eef0ff_60%,#cfd9ff_100%)] p-10 lg:px-20 lg:py-12">
          <img
            src="/assets/guarantee-bg.jpg"
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative">
            <h3 className="text-4xl font-extrabold sm:text-5xl">
              <span className="text-black">Decide by lunch.</span>
              <span className="text-gradient-blue"> Zero risk.</span>
            </h3>
            <p className="mt-5 max-w-[896px] text-left text-[15px] leading-relaxed text-[#17122b]">
              Join live. Watch the first builds. Ask your questions. If by the
              lunch break you feel this wasn't worth your Saturday, tell us
              before the second half starts and we refund 100%. No questions. No
              form. No awkward email chain.
            </p>
            <p className="mt-3 max-w-[896px] text-left text-[15px] leading-relaxed text-[#17122b]">
              We can offer this because out of 25,000+ students, almost nobody
              has ever asked.
            </p>
            <p className="mt-5 text-left text-[21px] font-semibold text-[#17122b]">
              Your risk on this page is{" "}
              <span className="text-gradient-blue text-[27px] font-bold">
                ₹0
              </span>
              . Your only real risk is{" "}
              <span className="text-gradient-blue text-[25px] font-bold">
                another year of watching
              </span>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
