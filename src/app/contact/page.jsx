import Cta from "@/components/Cta";
import CtaButton from "@/components/CtaButton";
import FaqCard from "@/components/FaqCard";
import QuoteButton from "@/components/QuoteButton";
import { tawkToChat } from "@/utils/tawkToFunctions";
import {
  ArrowRight,
  Check,
  Clock,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Contact Nova Digitizing | Get Support & Inquiries",
  description:
    "Contact Nova Digitizing for embroidery digitizing services, support, bulk orders, or inquiries. Available 24/7 for fast response.",
};

function page() {
  const contacts = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 941-666-7462",
      description: "Available 24/7 for urgent orders",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "  novadigitizing1@gmail.com",
      description: "Response within 30 minutes",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      value: "+1 941-666-7462",
      description: "Quick responses for quotes & support",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon – Sun",
      description: "24/7 Customer Support",
    },
  ];
  const FAQ = [
    {
      question: "How quickly do you respond?",
      answer: "Most messages are answered within 15–30 minutes.",
    },
    {
      question: "Can I discuss bulk or agency pricing?",
      answer:
        "Yes, please use the subject “Bulk Order Inquiry” when contacting us.",
    },
    {
      question: "Can I contact support for an existing order?",
      answer:
        "Absolutely. Please mention your order number in your message so we can assist you quickly.",
    },
  ];
  return (
    <div className="mt-24">
      {/* Hero */}
      <section className="bg-white-background flex flex-col lg:flex-row justify-center items-center py-10">
        {/* Content */}
        <div className="w-full lg:w-1/2 ml-10 flex flex-col gap-4">
          <h1 className="font-heading text-5xl font-bold text-primary">
            Let's Discuss Your Design Needs
          </h1>
          <p className="font-body text-lg text-primary/80">
            Have questions, need support, or want to discuss a custom project?
            Our team is here to help.
          </p>
          <p className="font-body text-lg text-primary/80">
            From general inquiries and pricing questions to bulk orders and
            partnership opportunities — we respond fast and treat every project
            with care.
          </p>
          <div className="flex gap-4 font-body my-5">
            <CtaButton>Get A Free Quote</CtaButton>
            <Link href="tel:+19416667462">
              <button className="bg-white  text-primary w-fit  px-6 py-3 font-body rounded-xl transition-all duration-150 cursor-pointer shadow-sm hover:scale-105 hover:bg-primary/90 hover:text-white border-primary  border-2">
                Call Now
              </button>
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center mt-2 ">
          <Image
            src="/hero/contact-hero.jpg"
            alt="Contact"
            width={550}
            height={550}
            className="shadow-2xl p-5"
          />
        </div>
      </section>
      {/* Get In Touch */}
      <section className="bg-gray-background flex flex-col items-center py-20">
        <h1 className="main-heading">
          Why Businesses Trust Our Digitizing Experts
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-10 gap-y-10 mt-10 mx-5">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-start text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <span className="bg-secondary/20 flex items-center justify-center p-3 rounded-2xl mb-4">
                  <Icon size={32} className="text-secondary " />
                </span>
                <h2 className="text-xl font-heading font-semibold text-primary">
                  {contact.title}
                </h2>
                <h3 className="text-lg font-heading  text-primary">
                  {contact.value}
                </h3>
                <p className="text-secondary font-body mt-2 text-sm text-start">
                  {contact.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      {/* Contact Form */}
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-white-background padding-container gap-x-20  ">
        {/* Form */}
        <div className="bg-white p-5 rounded-2xl shadow-lg w-full lg:w-[110%]">
          <h1 className="text-2xl font-heading font-semibold text-primary">
            Send Us a Message
          </h1>
          <p className="text-primary/80">
            Fill in the form and we'll be in touch shortly.
          </p>
          <form className="mt-5">
            <div className="grid sm:grid-cols-2 gap-5 ">
              <div className="space-y-2 mb-2">
                <label className="text-sm font-medium text-primary">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  required
                  className="w-full h-11 px-3 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#4DA8DA]"
                />
              </div>

              <div className="space-y-2 mb-2">
                <label className="text-sm font-medium text-primary">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  required
                  className="w-full h-11 px-3 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#4DA8DA]"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mb-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full h-11 px-3 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#4DA8DA]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">
                  Subject
                </label>
                <select className="w-full h-11 px-3 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#4DA8DA]">
                  <option value="">Select topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="pricing">Pricing Question</option>
                  <option value="support">Support Request</option>
                  <option value="bulk">Bulk Order Inquiry</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="existing">Existing Order Follow-Up</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2 mb-2">
              <label className="text-sm font-medium text-primary">
                Message *
              </label>
              <textarea
                rows="6"
                placeholder="Tell us about your project..."
                required
                className="w-full px-3 py-2 rounded-xl border border-gray-300 bg-white text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#4DA8DA]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto h-12 px-8 rounded-xl bg-[#F97316] text-white font-medium flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Send Message
              <ArrowRight />
            </button>
          </form>
        </div>
        {/* Why Contact Us */}
        <div className="p-5 w-full lg:w-[80%] flex flex-col items-stretch h-full gap-y-5">
          <h1 className="main-heading">Why Contact Us?</h1>
          <p className="text-primary/80">
            We pride ourselves on world-class service and attention to detail.
          </p>
          <div className="flex flex-col gap-y-2 my-3">
            {[
              "Fast Response Time",
              "Dedicated Support Team",
              "Expert Design Consultation",
              "Bulk Order Assistance",
              "24/7 Availability",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 ">
                <span className="rounded-full p-1 bg-primary/10">
                  <Check size={18} className="text-primary" />
                </span>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
          {/* Response Card */}
          <div className="bg-linear-to-r from-primary to-secondary rounded-xl p-4">
            <p className="text-white text-sm">Average response time</p>
            <h1 className="text-white text-2xl">&lt; 30 mins</h1>
          </div>
        </div>
      </section>
      {/* Ready */}
      <section className="bg-gray-background flex  items-center justify-center text-center padding-container">
        <div className="bg-white-background shadow to-white   lg:flex-row justify-between p-10 rounded-2xl gap-x-10 w-[80%] items-center flex flex-col">
          {/* Text */}
          <div className="w-[60%] text-start flex flex-col mb-5 lg:mb-0">
            <h1 className="main-heading">Ready to Start Your Order Instead?</h1>
            <p className="text-primary/80">
              If you already have your design files ready, use our dedicated
              quote page for faster processing.
            </p>
          </div>
          {/* Button Container */}
          <div className="flex flex-col gap-y-2 items-start w-fit">
            <QuoteButton />
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
      {/* Location */}
      <section className="bg-white-background flex flex-col items-center padding-container">
        <h1 className="main-heading">Where We Serve</h1>
        <p className="text-base text-primary/80">
          Serving clients across USA and worldwide.
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.359171789342!2d67.0578134!3d24.9234312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fc41f145231%3A0xe50360c50906ee9c!2sPakistan&#39;s%20First%20E-Sports%20Academy!5e1!3m2!1sen!2s!4v1776770076118!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullscreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
      {/* Cta */}
      <Cta
        text="Upload your design and get expert pricing quickly."
        heading="Need a Fast Quote?"
        button="Get A Free Quote"
      />
    </div>
  );
}

export default page;
