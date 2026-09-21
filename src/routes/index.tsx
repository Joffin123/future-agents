import { createFileRoute } from "@tanstack/react-router";

// @ts-expect-error JSX components have no type declarations
import Hero from "@/components/future-agents/Hero";
// @ts-expect-error JSX components have no type declarations
import WhoIsThisFor from "@/components/future-agents/WhoIsThisFor";
// @ts-expect-error JSX components have no type declarations
import SocialProof from "@/components/future-agents/SocialProof";
// @ts-expect-error JSX components have no type declarations
import WhyNow from "@/components/future-agents/WhyNow";
// @ts-expect-error JSX components have no type declarations
import Curriculum from "@/components/future-agents/Curriculum";
// @ts-expect-error JSX components have no type declarations
import Mentor from "@/components/future-agents/Mentor";
// @ts-expect-error JSX components have no type declarations
import Pricing from "@/components/future-agents/Pricing";
// @ts-expect-error JSX components have no type declarations
import FAQ from "@/components/future-agents/FAQ";
// @ts-expect-error JSX components have no type declarations
import FinalCTA from "@/components/future-agents/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Future Agents — Build Your Business OS With 12+ AI Tools In One Saturday",
      },
      {
        name: "description",
        content:
          "A one-day live workshop where you build a complete AI-powered business operating system with 12+ AI tools — no coding required.",
      },
      {
        property: "og:title",
        content:
          "Future Agents — Build Your Business OS With 12+ AI Tools In One Saturday",
      },
      {
        property: "og:description",
        content:
          "A one-day live workshop where you build a complete AI-powered business operating system with 12+ AI tools — no coding required.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <WhoIsThisFor />
      <SocialProof />
      <WhyNow />
      <Curriculum />
      <Mentor />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
