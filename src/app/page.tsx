import Hero from "@/components/Hero";
import ServiceModule from "@/components/ServiceModule";

const services = [
  {
    numberStr: "01",
    headline: "RFP Architecture & Bid Management",
    subHeadline: "Strategic positioning to win high-stakes public and private tenders.",
    process: "We guide companies through complex bidding landscapes, managing company presentations, validating internal requirements, and reframing past references to perfectly align with tender demands.",
    deliverables: [
      "Preparation of comprehensive bid documentation packages.",
      "Development of evaluation reports and customized decision matrices.",
      "End-to-end bid management for maximum conversion."
    ]
  },
  {
    numberStr: "02",
    headline: "Digital Performance & Growth Units",
    subHeadline: "Scalable acquisition systems and omnichannel go-to-market execution.",
    process: "We engineer high-potency marketing campaigns that dominate search and inbox environments, seamlessly connecting initial touchpoints to closed revenue.",
    deliverables: [
      "Full-suite Google Ads setup (keywords, ad copy, targeting) with 30-day performance reporting.",
      "Scaled cold email outreach and automated LinkedIn networking.",
      "Programmatic SEO and sophisticated lead nurturing automations."
    ]
  },
  {
    numberStr: "03",
    headline: "Web Infrastructure & Technical Optimization",
    subHeadline: "Professional, conversion-centric website development and digital ecosystems.",
    process: "We build high-performance web architecture integrated directly with your marketing stack, ensuring seamless data flow, advanced tracking, and absolute regulatory compliance.",
    deliverables: [
      "Custom website development with advanced forms and routing workflows.",
      "Deep-tier technical audits of conversion-relevant components.",
      "Implementation of Google Analytics, Google Tag Manager, and strict GDPR compliance frameworks.",
      "Delivery of campaign-specific ABM bundles, account briefs, and messaging templates."
    ]
  }
];

export default function Home() {
  return (
    <div className="flex flex-col w-full selection:bg-neutral-800 selection:text-white">
      <Hero />

      <div className="flex flex-col divide-y divide-border/30">
        {services.map((service, idx) => (
          <ServiceModule key={idx} {...service} />
        ))}
      </div>
    </div>
  );
}
