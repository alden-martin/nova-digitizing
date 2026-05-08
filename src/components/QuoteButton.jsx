"use client";
import React, { useEffect } from "react";
import CtaButton from "./CtaButton";
import QuoteModal from "./QuoteModal";

function QuoteButton({ className }) {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div>
      <button
        className={`bg-cta text-white w-fit px-6 py-3 font-body rounded-xl transition-all duration-150 cursor-pointer shadow-sm hover:scale-105 hover:bg-cta/90 hover:text-white border-cta border-2 ${className}`}
        onClick={() => {
          setModalOpen(true);
          console.log("Quote button clicked");
        }}
      >
        Get a Quote
      </button>
      <QuoteModal open={modalOpen} setOpen={setModalOpen} />
    </div>
  );
}

export default QuoteButton;
