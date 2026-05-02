import Cta from "@/components/Cta";
import CtaButton from "@/components/CtaButton";
import ImageGallery from "@/components/ImageGallery";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Digitizing Portfolio | Embroidery & Vector Art Samples",
  description:
    "View our portfolio of embroidery digitizing, cap designs, 3D puff, vector art, and custom patches delivered for clients worldwide.",
};

function page() {
  const digitizingImages = [
    "/digitizing/1.jpeg",
    "/digitizing/2.jpeg",
    "/digitizing/3.jpeg",
    "/digitizing/4.jpeg",
    "/digitizing/5.jpeg",
    "/digitizing/6.jpeg",
    "/digitizing/7.jpeg",
    "/digitizing/8.jpeg",
    "/digitizing/9.jpeg",
  ];
  const vectorArt = [
    "/vector-art-sample/1.jpg",
    "/vector-art-sample/2.jpg",
    "/vector-art-sample/3.jpg",
    "/vector-art-sample/4.jpg",
    "/vector-art-sample/5.jpg",
    "/vector-art-sample/6.jpg",
    "/vector-art-sample/7.jpg",
    "/vector-art-sample/8.jpg",
    "/vector-art-sample/9.jpg",
  ];
  const customPatches = [
    "/costum-patch/1.jpg",
    "/costum-patch/2.jpg",
    "/costum-patch/3.jpg",
    "/costum-patch/4.jpg",
    "/costum-patch/5.jpg",
  ];
  const sublimation = ["/sublimation/1.png"];
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
      value: "99%",
      label: "Satisfaction Rate",
    },
  ];
  return (
    <div className="mt-24">
      {/* Hero */}
      <section className="flex flex-col items-center px-20 py-30 text-center bg-[url(/hero/order.jpg)] bg-cover bg-center relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/80 z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center">
          <h1 className="text-5xl text-white font-heading font-bold">
            Our Recent Work & Portfolio
          </h1>

          <p className="text-white/80 text-lg font-body mt-4">
            Explore our embroidery digitizing, vector art, 3D puff, cap designs,
            and custom patch work delivered for clients worldwide.
          </p>

          <div className="flex gap-4 font-body">
            <CtaButton className="mt-5">Get A Quote</CtaButton>
            <Link href="#gallery">
              <button className="bg-white  text-primary w-fit mt-5 px-6 py-3 font-body rounded-xl transition-all duration-150 cursor-pointer shadow-sm hover:scale-105 hover:bg-primary/90 hover:text-white border-primary  border-2">
                View Gallery
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Quality You Can See */}
      <section className="bg-white-background flex flex-col items-center justify-center padding-container">
        <h1 className="main-heading">Quality You Can See</h1>
        <p className="text-primary/80 text-lg font-body mt-4 text-center">
          Every project in our portfolio reflects precision stitch planning,
          clean detailing, and premium-quality execution. From simple logos to
          complex jacket back designs, our work is optimized for flawless
          machine embroidery and visual excellence.
        </p>
      </section>
      {/* Portfolio Gallery */}
      <section
        className="bg-gray-background flex flex-col items-center justify-center padding-container"
        id="gallery"
      >
        {/* Embroider Digitizing */}
        <div className="flex flex-col items-center">
          <h1 className="main-heading mb-5 ">Embroidery Digitizing</h1>
          <div className="flex justify-center">
            <ImageGallery images={digitizingImages} />
          </div>
        </div>
        <hr className="text-primary/80 w-full my-10" />
        {/* Vector Art Sample */}
        <div className="flex flex-col items-center">
          <h1 className="main-heading my-5 ">Vector Art Sample</h1>
          <div className="flex justify-center">
            <ImageGallery images={vectorArt} />
          </div>
        </div>
        <hr className="text-primary/80 w-full my-10" />
        {/* Costume Patches */}
        <div className="flex flex-col items-center">
          <h1 className="main-heading my-5 ">Costume Patches</h1>
          <div className="flex justify-center">
            <ImageGallery images={customPatches} />
          </div>
        </div>
        <hr className="text-primary/80 w-full my-10" />
        {/* Sublimation */}
        <div className="flex flex-col items-center">
          <h1 className="main-heading my-5 ">Sublimation</h1>
          <div className="flex justify-center">
            <ImageGallery images={sublimation} />
          </div>
        </div>
      </section>
      {/* Stats */}
      <section className="bg-gray-background flex flex-col items-center justify-center padding-container">
        <h1 className="main-heading">Trusted by Businesses Worldwide</h1>
        <p className="text-primary/80 text-base font-body mt-4 text-center">
          A decade of stitching excellence — delivered with speed, accuracy and
          care.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
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
      {/* Cta */}
      <Cta
        heading="Like What You See?"
        text="Send us your artwork and let’s create your next premium embroidery design."
        button={"Get A Quote"}
        contactButton={true}
      />
    </div>
  );
}

export default page;
