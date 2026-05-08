"use client";

import { useState } from "react";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import CtaButton from "./CtaButton";
import QuoteModal from "./QuoteModal";

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Swiper */}
      <div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="bg-gray-background"
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <section className="bg-white-background flex flex-col lg:flex-row justify-center items-center py-10">
              {/* Content */}
              <motion.div
                className="w-full lg:w-1/2 ml-10 flex flex-col gap-4 items-start"
                initial={{ opacity: 0, x: -50 }}
                animate={
                  activeSlide === 0
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -50 }
                }
                transition={{ duration: 1 }}
              >
                <h1 className="font-heading text-5xl font-bold text-primary">
                  Premium Embroidery Digitizing & Vector Art Services
                </h1>

                <p className="font-body text-lg text-primary/80">
                  Transform your logos, artwork, and designs into
                  production-ready embroidery files with unmatched precision,
                  fast turnaround, and professional stitch quality.
                </p>

                <p className="font-body text-lg text-primary/80">
                  We specialize in embroidery digitizing, vector art conversion,
                  3D puff designs, cap digitizing, jacket back digitizing, and
                  custom patch services.
                </p>

                <div className="flex gap-4 font-body my-5">
                  <div onClick={() => setOpen(true)}>
                    <CtaButton
                      className="mt-5"
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        activeSlide === 0
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 1.2, delay: 0.2 }}
                    >
                      Get A Free Quote
                    </CtaButton>
                  </div>

                  <button className="bg-white text-primary w-fit mt-5 px-6 py-3 font-body rounded-xl transition-all duration-150 cursor-pointer shadow-sm hover:scale-105 hover:bg-primary/90 hover:text-white border-primary border-2">
                    Order Now
                  </button>
                </div>

                <motion.div
                  className="flex gap-4 font-body my-5 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    activeSlide === 0
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  {[
                    "Fast Delivery",
                    "Quality Guaranteed",
                    "Unlimited Revisions",
                  ].map((item, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 text-secondary"
                    >
                      <CircleCheckBig size={16} />
                      {item}
                    </span>
                  ))}
                </motion.div>
              </motion.div>

              {/* Image */}
              <motion.div
                className="w-full lg:w-1/2 flex justify-center mt-2"
                initial={{ opacity: 0, x: 50 }}
                animate={
                  activeSlide === 0
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: 50 }
                }
                transition={{ duration: 1, delay: 0.2 }}
              >
                <Image
                  src="/hero/home-hero.png"
                  alt="Hero"
                  width={250}
                  height={250}
                  className="shadow-2xl p-5"
                />
              </motion.div>
            </section>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <section className="bg-white-background flex flex-col lg:flex-row justify-center items-center py-10">
              <motion.div
                className="w-full lg:w-1/2 ml-10 flex flex-col gap-4 items-start"
                initial={{ opacity: 0, x: -50 }}
                animate={
                  activeSlide === 1
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -50 }
                }
                transition={{ duration: 1 }}
              >
                <h1 className="font-heading text-5xl font-bold text-primary">
                  Custom Patch Design & Manufacturing
                </h1>

                <p className="font-body text-lg text-primary/80 font-bold">
                  Premium patches crafted with precision, durability, and
                  standout detail.
                </p>

                <p className="font-body text-lg text-primary/80">
                  At Nova Digitizing, we create high-quality custom patches
                  tailored to your design requirements.
                </p>

                <div className="flex gap-4 font-body my-5">
                  <div onClick={() => setOpen(true)}>
                    <CtaButton className="mt-5">Get A Free Quote</CtaButton>
                  </div>

                  <button className="bg-white text-primary w-fit mt-5 px-6 py-3 font-body rounded-xl transition-all duration-150 cursor-pointer shadow-sm hover:scale-105 hover:bg-primary/90 hover:text-white border-primary border-2">
                    Order Now
                  </button>
                </div>
              </motion.div>

              <motion.div
                className="w-full lg:w-1/2 flex justify-center mt-2"
                initial={{ opacity: 0, x: 50 }}
                animate={
                  activeSlide === 1
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: 50 }
                }
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src="/costum-patch/1.jpg"
                  alt="Custom Patch"
                  width={500}
                  height={500}
                  className="shadow-2xl rounded-2xl"
                />
              </motion.div>
            </section>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <section className="bg-white-background flex flex-col lg:flex-row justify-center items-center py-10">
              <motion.div
                className="w-full lg:w-1/2 ml-10 flex flex-col gap-4 items-start"
                initial={{ opacity: 0, x: -50 }}
                animate={
                  activeSlide === 2
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -50 }
                }
                transition={{ duration: 1 }}
              >
                <h1 className="font-heading text-5xl font-bold text-primary">
                  Custom Sublimation Apparel
                </h1>

                <p className="font-body text-lg text-primary/80 font-bold">
                  Bring your design to life with vibrant fade-resistant prints.
                </p>

                <div className="flex gap-4 font-body my-5">
                  <div onClick={() => setOpen(true)}>
                    <CtaButton className="mt-5">Get A Free Quote</CtaButton>
                  </div>

                  <button className="bg-white text-primary w-fit mt-5 px-6 py-3 font-body rounded-xl transition-all duration-150 cursor-pointer shadow-sm hover:scale-105 hover:bg-primary/90 hover:text-white border-primary border-2">
                    Order Now
                  </button>
                </div>
              </motion.div>

              <motion.div
                className="w-full lg:w-1/2 flex justify-center mt-2"
                initial={{ opacity: 0, x: 50 }}
                animate={
                  activeSlide === 2
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: 50 }
                }
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src="/costum-patch/1.jpg"
                  alt="Custom Patch"
                  width={500}
                  height={500}
                  className="shadow-2xl rounded-2xl"
                />
              </motion.div>
            </section>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Modal OUTSIDE Swiper */}
      <QuoteModal open={open} setOpen={setOpen} />
    </>
  );
}
