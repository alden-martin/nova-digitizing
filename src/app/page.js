import Cta from "@/components/Cta";
import CtaButton from "@/components/CtaButton";
import Testimonials from "@/components/Testimonials";
import {
  CircleCheckBig,
  Clock,
  Target,
  RefreshCcw,
  DollarSign,
  FileTypeCorner,
  Headphones,
  Sparkles,
  Pencil,
  Dumbbell,
  HardHat,
  Shirt,
  Layers,
  Upload,
  Cpu,
  ShieldCheckIcon,
  Send,
  Check,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const stats = [
    {
      icon: Clock,
      heading: "Fast Turnaround",
      description: "2–6 hour delivery on most orders",
    },
    {
      icon: Target,
      heading: "Precision Stitching",
      description: "Clean and optimized embroidery files",
    },
    {
      icon: RefreshCcw,
      heading: "Unlimited Revisions",
      description: "No extra cost until you're satisfied",
    },
    {
      icon: DollarSign,
      heading: "Affordable Pricing",
      description: "Competitive rates for all budgets",
    },
    {
      icon: FileTypeCorner,
      heading: "Multi-Format Delivery",
      description: "DST, PES, EMB and more",
    },
    {
      icon: Headphones,
      heading: "24/7 Support",
      description: "We're always here to help",
    },
  ];
  const coreServices = [
    {
      icon: Sparkles,
      heading: "Embroidery Digitizing",
    },
    {
      icon: HardHat,
      heading: "Cap Digitizing",
    },
    {
      icon: Shirt,
      heading: "Jacket Back Digitizing",
    },
    {
      icon: Layers,
      heading: "3D Puff Digitizing",
    },
    {
      icon: Pencil,
      heading: "Vector Art Conversion",
    },
    {
      icon: Dumbbell,
      heading: "Custom Embroidery Patches",
    },
  ];
  const process = [
    {
      icon: Upload,
      heading: "Submit Your Design",
      description: "Upload your artwork in any format",
    },
    {
      icon: Cpu,
      heading: "Expert Digitizing Process",
      description: "Our specialists create precise stitch files",
    },
    {
      icon: ShieldCheckIcon,
      heading: "Quality Testing & Sew-Out",
      description: "Every file is tested for perfection",
    },
    {
      icon: Send,
      heading: "File Delivery Within Hours",
      description: "Receive production-ready files fast",
    },
  ];
  return (
    <div className="mt-24">
      {/* Hero */}
      <section className="bg-white-background flex flex-col lg:flex-row justify-center items-center py-10">
        {/* Content */}
        <div className="w-full lg:w-1/2 ml-10 flex flex-col gap-4 items-start">
          <h1 className="font-heading text-5xl font-bold text-primary">
            Premium Embroidery Digitizing & Vector Art Services
          </h1>
          <p className="font-body text-lg text-primary/80">
            Transform your logos, artwork, and designs into production-ready
            embroidery files with unmatched precision, fast turnaround, and
            professional stitch quality.
          </p>
          <p className="font-body text-lg text-primary/80">
            We specialize in embroidery digitizing, vector art conversion, 3D
            puff designs, cap digitizing, jacket back digitizing, and custom
            patch services.
          </p>
          <div className="flex gap-4 font-body my-5">
            <CtaButton className="mt-5">Get A Free Quote</CtaButton>

            <button className="bg-white  text-primary w-fit mt-5 px-6 py-3 font-body rounded-xl transition-all duration-150 cursor-pointer shadow-sm hover:scale-105 hover:bg-primary/90 hover:text-white border-primary  border-2">
              Order Now
            </button>
          </div>
          <div className="flex gap-4 font-body my-5 justify-center">
            {["Fast Delivery", "Quality Guaranteed", "Unlimited Revisions"].map(
              (item, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 text-secondary"
                >
                  <CircleCheckBig size={16} />
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center mt-2 ">
          <Image
            src="/hero/home-hero.png"
            alt="Hero"
            width={250}
            height={250}
            className="shadow-2xl p-5"
          />
        </div>
      </section>
      {/* Stats */}
      <section className="bg-gray-background flex flex-col items-center padding-container">
        <h1 className="main-heading">
          Why Businesses Trust Our Digitizing Experts
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-10 mt-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-start text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <span className="bg-secondary/20 flex items-center justify-center p-3 rounded-2xl mb-4">
                  <Icon size={32} className="text-secondary " />
                </span>
                <h2 className="text-xl font-heading font-semibold text-primary">
                  {stat.heading}
                </h2>
                <p className="text-secondary font-body mt-2 text-sm">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      {/* Explore Services */}
      <section className="bg-white-background grid grid-cols-1 lg:grid-cols-2 px-10 py-20 gap-x-10 items-center">
        <div>
          <Image
            src="/explore.jpg"
            width={650}
            height={650}
            alt="explore-services"
            className="rounded-2xl shadow-xl mb-5 lg:mb-0"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="main-heading">
            Professional Digitizing <br /> Solutions for Every Industry
          </h1>
          <p className="text-primary/80 text-lg font-body mt-4 text-center lg:text-start">
            We help brands, embroidery shops, and businesses convert artwork
            into machine-ready embroidery files with perfect stitch accuracy.
            Whether you need a simple logo or a complex multi-color design, our
            team delivers flawless results every time.
          </p>
          <Link href="/services">
            <CtaButton className="w-full lg:w-fit mt-5">
              Explore Services
            </CtaButton>
          </Link>
        </div>
      </section>
      {/* Core Services */}
      <section className="flex flex-col items-center py-20 bg-gray-background">
        <h1 className="main-heading">Our Core Services</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-5 my-10 px-10">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center px-20 py-8 bg-white rounded-2xl  hover:shadow-xl transition"
              >
                <span className="bg-secondary/20 flex items-center justify-center p-3 rounded-2xl mb-4">
                  <Icon size={32} className="text-secondary " />
                </span>
                <h3 className="text-lg font-heading font-semibold text-primary cursor-pointer">
                  {service.heading}
                </h3>
              </div>
            );
          })}
        </div>
        <CtaButton>View All Services</CtaButton>
      </section>
      {/* Costume Sublimation   */}
      <section className="bg-white-background grid grid-cols-1 lg:grid-cols-2 px-10 py-20 gap-x-10 items-center">
        <div className="flex flex-col">
          <h1 className="main-heading">Custom Sublimation Apparel</h1>
          <p className="text-primary/80 text-base leading-relaxed font-body mt-4">
            Turn your designs into vibrant, high-quality apparel that stands
            out.
          </p>
          <p className="text-primary/80 text-base leading-relaxed font-body mt-4">
            At Nova Digitizing, we offer premium custom sublimation apparel with
            full-color, fade-resistant printing. From t-shirts and hoodies to
            sportswear and accessories, we create apparel that looks bold, feels
            comfortable, and lasts long.
          </p>
          <p className="text-primary/80 text-base leading-relaxed font-body mt-4">
            Perfect for brands, teams, events, and promotional merchandise.
          </p>
          {/* Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 my-5">
            {/* col 1 */}
            <div className="flex flex-col gap-2 text-primary/80">
              {[
                "Unlimited colors & photo-quality prints",
                "Fade-resistant & long-lasting designs",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="text-secondary" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            {/* col 2 */}
            <div className="flex flex-col gap-2 text-primary/80 mt-2 lg:mt-0">
              {[
                "Perfect for teams, brands & events",
                "Fast turnaround & bulk orders available",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="text-secondary" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <Link href={"/services"}>
            <CtaButton>Explore Apparel Service</CtaButton>
          </Link>
        </div>
        <div>
          <Image
            src="/home-sub.png"
            width={650}
            height={650}
            alt="cap-hat-digitizing"
            className="rounded-2xl shadow-xl mt-5 lg:mt-0 "
          />
        </div>
      </section>
      {/* Portfolio */}
      <section className="flex flex-col items-center bg-white-background py-20 px-4">
        {/* Heading */}
        <h1 className="main-heading text-center">Recent Work & Portfolio</h1>

        <p className="text-primary/80 text-lg font-body mt-4 text-center max-w-2xl">
          Showcase of high-quality embroidery digitizing and vector art work.
        </p>

        {/* Grid */}
        <div className="grid w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          {/* Big Left */}
          <div className="relative w-full h-[250px] sm:h-[300px] lg:h-full lg:row-span-2">
            <Image
              src="/portfolio/portfolio3.jpg"
              alt="Portfolio 3"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>

          {/* Top Middle */}
          <div className="relative w-full h-[200px] sm:h-[250px]">
            <Image
              src="/portfolio/portfolio1.jpg"
              alt="Portfolio 1"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>

          {/* Big Right */}
          <div className="relative w-full h-[250px] sm:h-[300px] lg:h-full lg:row-span-2">
            <Image
              src="/portfolio/portfolio4.jpg"
              alt="Portfolio 4"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>

          {/* Bottom Middle */}
          <div className="relative w-full h-[200px] sm:h-[250px]">
            <Image
              src="/portfolio/portfolio2.jpg"
              alt="Portfolio 2"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* CTA */}
        <Link href={"/portfolio"}>
          <CtaButton>View All Portfolio</CtaButton>
        </Link>
      </section>
      {/* Process */}
      <section className="flex flex-col items-center bg-gray-background py-20">
        <h1 className="main-heading">Simple 4-Step Process</h1>
        <div className="flex flex-wrap flex-col lg:flex-row gap-10 my-10">
          {process.map((step, index) => {
            const Icon = step.icon;
            return (
              <div className="flex-col flex items-center" key={index}>
                <span className="bg-secondary/20 flex items-center justify-center p-3 rounded-full mb-4 w-fit relative">
                  <Icon size={32} className="text-secondary " />
                  <span className="absolute -top-2 -right-2 bg-cta text-white w-fit px-2 rounded-full">
                    {index + 1}
                  </span>
                </span>
                <h3 className="text-lg font-heading font-semibold text-primary cursor-pointer">
                  {step.heading}
                </h3>
                <p className="text-primary/80 text-sm font-body mt-2">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      {/* Testimonials */}
      <Testimonials />
      {/* CTA */}
      <Cta
        heading="Ready to Transform Your Design into Perfect Embroidery?"
        text="Upload your artwork today and get premium digitized files fast."
        button="Get a Quote"
        contactButton={true}
      />
    </div>
  );
}
