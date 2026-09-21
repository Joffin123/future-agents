import { CTAButton, Emoji } from "./ui"

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#eef1ff] py-16 lg:py-[90px]">
      {/* Full-bleed blue swirl. The design reuses the guarantee artwork, scaled up and
          shifted so its bright centre band sweeps across the right half of the section. */}
      <img
        src="/assets/guarantee-bg.jpg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[-47%] top-[-43%] w-[185%] max-w-none"
      />

      {/* This section hugs the page edge (60px) instead of the content column */}
      <div className="relative mx-auto w-full max-w-[1440px] px-6 lg:px-[60px]">
        <p className="text-left text-2xl font-bold text-navy sm:text-[30px]">
          Saturday, Aug 29. Six hours. Five agents.
        </p>
        <h2 className="mt-5 max-w-[1197px] text-left text-4xl font-bold leading-[1.2] text-[#10110d] sm:text-[44px] lg:pl-2">
          Two kinds of people will read this. One will bookmark it. The other will spend Saturday
          building. Guess which one has a{" "}
          <span className="text-gradient-blue">business running on AI by Monday</span>
        </h2>

        <p className="mt-7 text-left font-medium lg:pl-7">
          <span className="text-2xl font-semibold text-[#165fa7]">25,000+</span>
          <span className="text-xl text-[#5e6472]"> Indians have already crossed that line.</span>
        </p>

        {/* Bonuses bar */}
        <div className="mt-8 flex w-fit max-w-full flex-col gap-4 rounded-[19px] border border-navy bg-peri px-7 py-4 text-white sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 lg:ml-2 lg:flex-nowrap">
          <p className="flex items-center gap-2 text-xl font-medium sm:text-[22px] lg:whitespace-nowrap">
            <Emoji name="gift" size={30} /> ₹5,000+ in bonuses
          </p>
          <p className="flex items-center gap-2 text-xl font-medium sm:text-[22px] lg:whitespace-nowrap">
            <Emoji name="clock" size={28} /> Only 5 seats left this cohort
          </p>
          <p className="flex items-center gap-2 text-xl font-medium sm:text-[22px] lg:whitespace-nowrap">
            <Emoji name="check" size={26} /> 100% money-back before lunch
          </p>
        </div>

        <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8 lg:ml-1.5">
          <CTAButton
            variant="navy"
            size="none"
            rounded="rounded-[21px]"
            className="px-8 py-6 text-2xl sm:text-[30px]"
          >
            Join as a Pro Builder → ₹999
          </CTAButton>
          <p className="text-xl text-navy">Or attend live only ₹499 (no recordings)</p>
        </div>

        <p className="mt-7 text-left text-xl font-medium text-[#5e6472] lg:pl-3">
          Recommended · Everything included · 30-day recordings
        </p>
      </div>
    </section>
  )
}
