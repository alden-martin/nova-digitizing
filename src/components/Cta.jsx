"use client";
import React from "react";
import CtaButton from "./CtaButton";
import { tawkToChat } from "@/utils/tawkToFunctions";

function Cta({ heading, text, button, contactButton }) {
  const handleClick = () => {
    tawkToChat();
  };
  return (
    <section className="bg-primary text-white-background flex flex-col items-center py-20 gap-y-5 justify-center text-center ">
      <h1 className="text-4xl text-white-background font-heading font-bold">
        {heading}
      </h1>
      <p className="text-xl text-white-background py-5">{text}</p>
      <div className="flex items-center gap-x-5">
        <CtaButton>{button}</CtaButton>
        {contactButton && (
          <button
            onClick={handleClick}
            className="border border-white-background px-6 py-3 font-body rounded-xl shadow-sm hover:scale-105 hover:bg-white/20 transition-all duration-300"
          >
            Contact Us
          </button>
        )}
      </div>
    </section>
  );
}

export default Cta;
