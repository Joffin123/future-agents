import { Container, CTAButton, Emoji } from "./ui"

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-white py-24">
      {/* blue swirl fading in from the right, as in the design */}
      <img
        src="/assets/guarantee-bg.jpg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[70%] object-cover object-left lg:block [mask-image:linear-gradient(to_right,transparent,black_35%)]"
      />
      <Container className="relative">
        <p className="text-left text-3xl font-bold text-navy">
          Saturday, Aug 29. Six hours. Five agents.
        </p>
        <h2 className="mt-6 max-w-[1197px] text-left text-4xl font-bold leading-tight text-[#10110d] sm:text-[44px]">
          Two kinds of people will read this. One will bookmark it. The other will spend Saturday
          building. Guess which one has a{" "}
          <span className="text-gradient-blue">business running on AI by Monday</span>
        </h2>

        {/* Bonuses bar */}
        <p className="mt-6 text-left font-medium">
          <span className="text-2xl text-[#165fa7]">25,000+</span>
          <span className="text-xl text-[#5e6472]"> Indians have already crossed that line.</span>
        </p>

        {/* Bonuses bar */}
        <div className="mt-8 flex max-w-[1032px] flex-col gap-4 rounded-[19px] border border-navy bg-peri px-8 py-4 text-white sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
          <p className="flex items-center gap-2 text-xl font-medium sm:text-[21px]">
            <Emoji name="gift" size={28} /> ₹5,000+ in bonuses
          </p>
          <p className="flex items-center gap-2 text-xl font-medium sm:text-[21px]">
            <Emoji name="clock" size={26} /> Only 5 seats left this cohort
          </p>
          <p className="flex items-center gap-2 text-xl font-medium sm:text-[21px]">
            <Emoji name="check" size={24} /> 100% money-back before lunch
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <CTAButton variant="navy" className="rounded-[21px] px-8 py-5">
            <span className="text-2xl">Join as a Pro Builder →</span>
            <span className="text-3xl">₹999</span>
          </CTAButton>
          <p className="text-xl text-navy">Or attend live only ₹499 (no recordings)</p>
        </div>

        <p className="mt-6 text-left text-xl font-medium text-[#5e6472]">
          Recommended · Everything included · 30-day recordings
        </p>
      </Container>
    </section>
  )
}
