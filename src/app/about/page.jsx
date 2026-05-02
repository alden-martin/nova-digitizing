import Cta from "@/components/Cta";
import CtaButton from "@/components/CtaButton";
import Testimonials from "@/components/Testimonials";
import {
  Award,
  CircleCheckBig,
  Clock,
  DollarSign,
  Headphones,
  Layers,
  PenTool,
  RefreshCw,
  Send,
  ShieldCheck,
  Upload,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "About Nova Digitizing | Expert Embroidery Digitizing Company",
  description:
    "Learn about Nova Digitizing, a trusted provider of embroidery digitizing and vector art services with fast delivery and premium stitch quality.",
};

function page() {
  const features = [
    {
      icon: Award,
      heading: "Expert Manual Digitizing",
      description:
        "Every design hand-crafted by skilled punchers — never auto-converted.",
    },
    {
      icon: Clock,
      heading: "Fast 2–6 Hour Delivery",
      description:
        "Industry-leading turnaround without ever compromising quality.",
    },
    {
      icon: RefreshCw,
      heading: "Unlimited Revisions",
      description:
        "We refine until your sew-out is absolutely perfect — no extra cost.",
    },
    {
      icon: Layers,
      heading: "All Machine Formats",
      description:
        "DST, PES, EXP, JEF, VP3, XXX and every major embroidery format.",
    },
    {
      icon: DollarSign,
      heading: "Affordable Pricing",
      description:
        "Premium quality at honest, transparent rates that scale with you.",
    },
    {
      icon: Headphones,
      heading: "24/7 Customer Support",
      description: "Real humans available around the clock — wherever you are.",
    },
  ];
  const stats = [
    {
      value: "10,000+",
      label: "Designs Completed",
    },
    {
      value: "5,000+",
      label: "Happy Clients",
    },
    {
      value: "24/7",
      label: "Global Support",
    },
    {
      value: "99%",
      label: "Client Satisfaction",
    },
  ];
  const processSteps = [
    {
      icon: Upload,
      step: "Step 1",
      heading: "Receive Artwork",
      description: "Upload your design in any format — JPG, PNG, PDF, AI.",
    },
    {
      icon: PenTool,
      step: "Step 2",
      heading: "Manual Expert Digitizing",
      description:
        "Our digitizers craft stitch paths by hand for perfect results.",
    },
    {
      icon: ShieldCheck,
      step: "Step 3",
      heading: "Quality Testing",
      description: "Every file is sew-tested and reviewed before delivery.",
    },
    {
      icon: Send,
      step: "Step 4",
      heading: "Fast File Delivery",
      description: "Receive your machine-ready files within 2–6 hours.",
    },
  ];
  return (
    <div className="mt-24">
      {" "}
      {/* Hero */}
      <section className="bg-white-background flex flex-col lg:flex-row justify-center items-center py-10">
        {/* Content */}
        <div className="w-full lg:w-1/2 ml-10 flex flex-col gap-4">
          <h1 className="font-heading text-5xl font-bold text-primary">
            About Our Digitizing Experts
          </h1>
          <p className="font-body text-lg text-primary/80">
            Delivering precision embroidery digitizing and vector art solutions
            trusted by businesses worldwide.
          </p>
          <p className="font-body text-lg text-primary/80">
            We are a dedicated team of professional digitizers and design
            specialists committed to transforming artwork into high-quality,
            machine-ready embroidery files with precision, speed, and
            reliability.
          </p>
          <div className="flex gap-4 font-body my-5">
            <CtaButton className="mt-5">Get A Free Quote</CtaButton>
            <Link href="/services">
              <button className="bg-white  text-primary w-fit mt-5 px-6 py-3 font-body rounded-xl transition-all duration-150 cursor-pointer shadow-sm hover:scale-105 hover:bg-primary/90 hover:text-white border-primary  border-2">
                View Services
              </button>
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center mt-2 ">
          <Image
            src="/hero/about.jpg"
            alt="About"
            width={450}
            height={450}
            className="shadow-2xl p-5"
          />
        </div>
      </section>
      {/* Who We Are */}
      <section className="bg-gray-background grid grid-cols-1 lg:grid-cols-2 padding-container gap-x-10 items-center">
        <div>
          <Image
            src="/who-we-are.jpg"
            width={650}
            height={650}
            alt="who-we-are"
            className="rounded-2xl shadow-xl mb-5 lg:mb-0"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="main-heading">Crafting Precision into Every Stitch</h1>
          <p className="text-primary/80 text-lg font-body mt-4">
            We specialize in embroidery digitizing, vector art conversion, 3D
            puff designs, cap digitizing, and custom patch development.
            <br />
            Our mission is to provide premium-quality digitizing solutions that
            help embroidery businesses, clothing brands, and custom apparel
            companies achieve flawless stitch results.
            <br />
            Every design is manually digitized by skilled professionals to
            ensure exceptional quality and smooth production.
          </p>
        </div>
      </section>
      {/* Our Mission */}
      <section className="bg-white-background flex flex-col items-center justify-center padding-container">
        <h1 className="main-heading">Built on Quality, Driven by Trust</h1>
        <p className="text-primary/80 text-lg font-body mt-4 text-center">
          Our mission is to deliver accurate, fast, and affordable digitizing
          services that help clients grow <br /> their embroidery and branding
          businesses.
        </p>
        <p className="text-primary/80 text-lg font-body  text-center mt-1">
          We believe in quality craftsmanship, clear communication, and
          long-term partnerships built on <br /> trust and consistency.
        </p>
      </section>
      {/* Why Us */}
      <section className="bg-gray-background flex flex-col items-center padding-container">
        <h1 className="main-heading">
          Why Businesses Trust Our Digitizing Experts
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-10 mt-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-start text-start p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <span className="bg-secondary/20 flex items-center justify-center p-3 rounded-2xl mb-4">
                  <Icon size={32} className="text-secondary " />
                </span>
                <h2 className="text-xl font-heading font-semibold text-primary ">
                  {feature.heading}
                </h2>
                <p className="text-secondary font-body mt-2 text-sm ">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      {/* Stats */}
      <section className="bg-white-background flex flex-col items-center justify-center padding-container">
        <h1 className="main-heading">Our Experience Speaks for Itself</h1>
        <p className="text-primary/80 text-base font-body mt-4 text-center">
          Numbers earned through years of consistency and craft.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:scale-110 transition-all duration-300 text-center"
            >
              <h2 className="text-5xl font-heading font-black text-primary">
                {stat.value}
              </h2>
              <p className="text-primary/80 text-base font-body mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Our Process */}
      <section className="bg-gray-background flex flex-col items-center padding-container">
        <h1 className="main-heading">How We Work</h1>
        <p>A simple, transparent four-step workflow.</p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-10 gap-y-10 mt-10">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 rounded-2xl"
              >
                <span className="bg-primary flex items-center justify-center p-5 rounded-2xl mb-1">
                  <Icon size={32} className="text-white " />
                </span>
                <h6 className="text-cta font-semibold text-xs mb-2">
                  {step.step.toLocaleUpperCase()}
                </h6>
                <h1 className="text-base font-heading font-semibold text-primary ">
                  {step.heading}
                </h1>
                <p className="text-primary/70 font-body mt-2 text-sm ">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      {/* Quality & Precision*/}
      <section className="bg-white-background flex flex-col items-center justify-center padding-container">
        <h1 className="main-heading">Committed to Quality & Precision</h1>
        <p className="text-primary/80 text-lg font-body mt-4 text-center">
          Every file we deliver is optimized for clean stitch paths, reduced
          thread breaks, proper density, <br />
          and professional embroidery output.
        </p>
        <p className="text-primary/80 text-lg font-body  text-center mt-1">
          Our commitment is not just fast delivery — it is delivering files that
          perform flawlessly on your <br /> machines.
        </p>
      </section>
      {/* Testimonials */}
      <Testimonials />
      {/* Cta */}
      <Cta
        heading="Let’s Bring Your Design to Life"
        text="Send us your artwork today and let our experts create premium embroidery-ready files for your business."
        button="Get a Quote"
        contactButton={true}
      />
    </div>
  );
}

export default page;
