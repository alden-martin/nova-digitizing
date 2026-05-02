"use client";
import { tawkToChat } from "@/utils/tawkToFunctions";
import React from "react";
import { useRouter } from "next/navigation";

function CtaButton({ children, className }) {
  const router = useRouter();
  const handleClick = () => {
    if (
      children &&
      (children.toLowerCase().includes("quote") ||
        children.toLowerCase().includes("contact"))
    ) {
      tawkToChat();
    }
  };
  return (
    <button
      className={`bg-cta text-white w-fit px-6 py-3 font-body rounded-xl transition-all duration-150 cursor-pointer shadow-sm hover:scale-105 hover:bg-cta/90 hover:text-white border-cta border-2 ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default CtaButton;
