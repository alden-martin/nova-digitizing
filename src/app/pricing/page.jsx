import Cta from "@/components/Cta";
import CtaButton from "@/components/CtaButton";
import FaqCard from "@/components/FaqCard";
import PricingCard from "@/components/PricingCard";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Digitizing Pricing | Embroidery Starts from $8 | Nova Digitizing",
  description:
    "Affordable embroidery digitizing pricing starting from $8. Cap, jacket back, 3D puff, and vector art packages available. Get a free quote.",
};

function page() {
  const heroStats = [
    {
      value: "2-6h",
      label: "Fast Turnaround",
    },
    {
      value: "100%",
      label: "Quality Guaranteed",
    },
    {
      value: "∞",
      label: "Unlimited Revisions",
    },
    {
      value: "24/7",
      label: "Support",
    },
  ];
  const EmbroideryDigitizing = [
    {
      title: "Basic",
      subtitle: "Simple logos & text designs",
      features: [
        "Up to 5,000 stitches",
        "Left chest logo",
        "1 file format",
        "Delivery in 6–8 hours",
        "1 revision",
      ],
      price: 10,
      popular: false,
    },
    {
      title: "Standard",
      subtitle: "Medium complexity designs",
      features: [
        "Up to 10,000 stitches",
        "Logo + minor detailing",
        "3 file formats",
        "4–6 hour delivery",
        "Unlimited revisions",
      ],
      price: 20,
      popular: true,
    },
    {
      title: "Premium",
      subtitle: "Complex artwork & high-detail logos",
      features: [
        "Up to 20,000 stitches",
        "Complex fill and details",
        "All machine formats",
        "Rush delivery",
        "Unlimited revisions",
        "Priority support",
      ],
      price: 35,
      popular: false,
    },
  ];
  const CapDigitizing = [
    {
      title: "Basic",
      subtitle: "Simple front cap logo",
      features: [
        "Simple front logo",
        "Up to 6,000 stitches",
        "6 hour delivery",
        "1 revision",
      ],
      price: 15,
      popular: false,
    },
    {
      title: "Standard",
      subtitle: "Detailed cap branding",
      features: [
        "Detailed logo + side embroidery",
        "All standard formats",
        "Unlimited revisions",
        "4 hour delivery",
      ],
      price: 25,
      popular: true,
    },
    {
      title: "Premium",
      subtitle: "3D puff & complex caps",
      features: [
        "3D puff + complex design",
        "All machine formats",
        "Same day delivery",
        "Priority support",
      ],
      price: 40,
      popular: false,
    },
  ];
  const PuffDigitizing = [
    {
      title: "Basic",
      subtitle: "Simple 3D puff lettering",
      features: [
        "Clean foam lift",
        "Up to 8,000 stitches",
        "1 file format",
        "6 hour delivery",
      ],
      price: 20,
      popular: false,
    },
    {
      title: "Standard",
      subtitle: "Mixed 2D + 3D designs",
      features: [
        "Combined flat + puff areas",
        "3 file formats",
        "Unlimited revisions",
        "4 hour delivery",
      ],
      price: 30,
      popular: true,
    },
    {
      title: "Premium",
      subtitle: "Complex 3D puff artwork",
      features: [
        "Multi-height puff zones",
        "All machine formats",
        "Rush delivery",
        "Priority support",
      ],
      price: 50,
      popular: false,
    },
  ];
  const JacketBackDigitizing = [
    {
      title: "Basic",
      subtitle: "Simple jacket back design",
      features: [
        "Up to 25,000 stitches",
        "1 file format",
        "12 hour delivery",
        "1 revision",
      ],
      price: 30,
      popular: false,
    },
    {
      title: "Standard",
      subtitle: "Detailed back artwork",
      features: [
        "Up to 50,000 stitches",
        "3 file formats",
        "Unlimited revisions",
        "8 hour delivery",
      ],
      price: 50,
      popular: true,
    },
    {
      title: "Premium",
      subtitle: "Large complex back pieces",
      features: [
        "Unlimited stitch count",
        "All machine formats",
        "Rush delivery",
        "Priority support",
      ],
      price: 80,
      popular: false,
    },
  ];
  const VectorArtConversion = [
    {
      title: "Basic",
      subtitle: "Simple logo vectorization",
      features: [
        "Up to 3 colors",
        "AI / EPS / SVG",
        "6 hour delivery",
        "1 revision",
      ],
      price: 10,
      popular: false,
    },
    {
      title: "Standard",
      subtitle: "Detailed vector recreation",
      features: [
        "Unlimited colors",
        "All vector formats",
        "Unlimited revisions",
        "4 hour delivery",
      ],
      price: 20,
      popular: true,
    },
    {
      title: "Premium",
      subtitle: "Complex artwork & illustrations",
      features: [
        "Color separation included",
        "Print ready files",
        "Rush delivery",
        "Priority support",
      ],
      price: 35,
      popular: false,
    },
  ];
  const PatchPricing = [
    {
      title: "Basic",
      subtitle: "Simple patch design",
      price: 15,
      features: ["1 size variant", "merrowed border", "1 mockup", "1 revision"],
      popular: false,
    },
    {
      title: "Standard",
      subtitle: "Detailed custom patches",
      price: 25,
      features: [
        "multiple size variants",
        "border options",
        "3 mockups",
        "unlimited revisions",
      ],
      popular: true,
    },
    {
      title: "Premium",
      subtitle: "Premium iron-on / velcro patches",
      price: 40,
      features: [
        "3D + textured options",
        "production ready files",
        "rush delivery",
        "priority support",
      ],
      popular: false,
    },
  ];
  const FAQ = [
    {
      question: "How fast is the delivery?",
      answer:
        "Most standard designs are delivered within 2–6 hours. Rush and same-day options are available on Premium plans.",
    },
    {
      question: "Do you offer unlimited revisions?",
      answer:
        "Yes, our Standard and Premium plans include unlimited revisions to ensure you get exactly what you need.",
    },
    {
      question: "What file formats do you provide?",
      answer:
        "We provide all major embroidery and vector formats including DST, PES, EXP, AI, EPS, and SVG depending on your package.",
    },
  ];
  return (
    <div className="mt-24">
      {/* Hero */}
      <section className="flex flex-col items-center padding-container text-center bg-white-background">
        {/* Heading */}
        <h1 className="text-5xl text-primary font-heading font-bold">
          Affordable Pricing for Every
          <br />
          <span className="text-secondary">Digitizing Need</span>
        </h1>
        {/* Description */}
        <p className="text-primary/80 text-lg font-body mt-4">
          Choose the perfect package for your embroidery, vector, and custom
          design requirements.
        </p>
        {/* Subtitle */}
        <p className="text-primary/70 text-sm font-body mt-4">
          Transparent pricing with fast turnaround, expert quality, and
          unlimited revisions.
        </p>
        {/* Buttons Container */}
        <div className="flex gap-4 font-body ">
          <CtaButton className="mt-5">Get A Free Quote</CtaButton>
          <Link href="/services">
            <button className="bg-white  text-primary w-fit mt-5 px-6 py-3 font-body rounded-xl transition-all duration-150 cursor-pointer shadow-sm hover:scale-105 hover:bg-primary/90 hover:text-white border-primary  border-2">
              View Services
            </button>
          </Link>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-25 mt-10">
          {heroStats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h2 className="text-3xl font-bold">{stat.value}</h2>
              <p className="text-primary/70 text-sm font-body">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Embroidery Digitizing Packages  */}
      <section className="bg-gray-background flex flex-col items-center justify-center padding-container">
        <h6 className="text-secondary text-xs font-body ">
          {`Most Requested`.toUpperCase()}
        </h6>
        <h1 className="main-heading">Embroidery Digitizing Packages</h1>
        <p className="text-base text-primary/80 mt-2">
          Production-ready files for any machine, with stitch counts optimized
          for clean output.
        </p>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 my-10 items-start">
          {EmbroideryDigitizing.map((packageItem, index) => (
            <PricingCard
              key={index}
              title={packageItem.title}
              subtitle={packageItem.subtitle}
              features={packageItem.features}
              price={packageItem.price}
              popular={packageItem.popular}
            />
          ))}
        </div>
      </section>
      {/* Cap Digitizing Packages       */}
      <section className="bg-white-background flex flex-col items-center justify-center padding-container">
        <h6 className="text-secondary text-xs font-body ">
          {`Headwear`.toUpperCase()}
        </h6>
        <h1 className="main-heading">Cap Digitizing Packages</h1>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 my-10 items-start">
          {CapDigitizing.map((packageItem, index) => (
            <PricingCard
              key={index}
              title={packageItem.title}
              subtitle={packageItem.subtitle}
              features={packageItem.features}
              price={packageItem.price}
              popular={packageItem.popular}
            />
          ))}
        </div>
      </section>
      {/* 3D Puff Digitizing Packages */}
      <section className="bg-gray-background flex flex-col items-center justify-center padding-container">
        <h6 className="text-secondary text-xs font-body ">
          {`Raised Texture`.toUpperCase()}
        </h6>
        <h1 className="main-heading">3D Puff Digitizing Packages</h1>
        <p className="text-base text-primary/80">
          Foam-lifted designs with crisp edges and clean push-down stitching.
        </p>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 my-10 items-start">
          {PuffDigitizing.map((packageItem, index) => (
            <PricingCard
              key={index}
              title={packageItem.title}
              subtitle={packageItem.subtitle}
              features={packageItem.features}
              price={packageItem.price}
              popular={packageItem.popular}
            />
          ))}
        </div>
      </section>
      {/* Jacket Back Digitizing */}
      <section className="bg-white-background flex flex-col items-center justify-center padding-container">
        <h6 className="text-secondary text-xs font-body ">
          {`Large Format`.toUpperCase()}
        </h6>
        <h1 className="main-heading">Jacket Back Digitizing</h1>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 my-10 items-start">
          {JacketBackDigitizing.map((packageItem, index) => (
            <PricingCard
              key={index}
              title={packageItem.title}
              subtitle={packageItem.subtitle}
              features={packageItem.features}
              price={packageItem.price}
              popular={packageItem.popular}
            />
          ))}
        </div>
      </section>
      {/* Vector Art Conversion
       */}
      <section className="bg-gray-background flex flex-col items-center justify-center padding-container">
        <h6 className="text-secondary text-xs font-body ">
          {`Print Ready`.toUpperCase()}
        </h6>
        <h1 className="main-heading">Vector Art Conversion</h1>
        <p className="text-base text-primary/80">
          Convert any image to scalable, print-perfect vector files.
        </p>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 my-10 items-start">
          {VectorArtConversion.map((packageItem, index) => (
            <PricingCard
              key={index}
              title={packageItem.title}
              subtitle={packageItem.subtitle}
              features={packageItem.features}
              price={packageItem.price}
              popular={packageItem.popular}
            />
          ))}
        </div>
      </section>
      {/* Custom Patch Design */}
      <section className="bg-white-background flex flex-col items-center justify-center padding-container">
        <h6 className="text-secondary text-xs font-body ">
          {`Branded Identity`.toUpperCase()}
        </h6>
        <h1 className="main-heading">Custom Patch Design</h1>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 my-10 items-start">
          {PatchPricing.map((packageItem, index) => (
            <PricingCard
              key={index}
              title={packageItem.title}
              subtitle={packageItem.subtitle}
              features={packageItem.features}
              price={packageItem.price}
              popular={packageItem.popular}
            />
          ))}
        </div>
      </section>
      {/* Bulk Order */}
      <section className="bg-white-background flex  items-center justify-center text-center padding-container">
        <div className="bg-gradient-to-tr from-cta/30 shadow to-white flex flex-col lg:flex-row justify-center py-10 rounded-2xl gap-x-10 items-center">
          {/* Text */}
          <div className="w-full lg:w-1/3 text-start px-5 mb-5 lg:mb-0 lg:px-0">
            <h1 className="main-heading">Need Bulk or Custom Pricing?</h1>
            <p className="text-primary/80">
              We offer custom pricing plans for high-volume embroidery shops,
              brands, and agencies. Let's build a package that scales with you.
            </p>
          </div>
          {/* Button Container */}
          <div className="flex flex-col gap-y-2 items-start w-fit">
            <CtaButton>Request Custom Quote </CtaButton>
            <button className="bg-white  text-primary w-fit  px-6 py-3 font-body rounded-xl transition-all duration-150 cursor-pointer shadow-sm hover:scale-105 hover:bg-primary/90 hover:text-white border-primary  border-2">
              View Services
            </button>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="bg-gray-background flex flex-col items-center justify-center padding-container">
        <h1 className="main-heading">Frequently Asked Questions</h1>
        <div className="w-full flex flex-col gap-y-5 mt-5">
          {FAQ.map((faq, index) => (
            <FaqCard key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
      {/* Cta */}
      <Cta
        heading="Ready to Get Started?"
        text="Select your package and send us your artwork today."
        contactButton={true}
        button="Get A Quote"
      />
    </div>
  );
}

export default page;
