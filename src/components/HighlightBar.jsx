import Image from "next/image";
import React from "react";

function HighlightBar() {
  return (
    <div className="bg-primary w-full flex flex-row justify-between text-white px-5 py-2 fixed top-0 z-999">
      <div className="flex flex-row gap-x-4 items-center">
        <a href="tel:+19416667462">+1 941-666-7462</a>
        <a href="mailto:novadigitizing1@gmail.com">novadigitizing1@gmail.com</a>
      </div>
      <div className="flex flex-row gap-x-4 items-center">
        <a href="https://www.instagram.com/nova.digitizing">
          <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
        </a>
        <a href="https://www.facebook.com/novadigitizing">
          <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
        </a>
      </div>
    </div>
  );
}

export default HighlightBar;
