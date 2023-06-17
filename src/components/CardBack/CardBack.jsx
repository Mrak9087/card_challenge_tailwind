import React from "react";

export const CardBack = ({ cvc = "" }) => {
  return (
    <div className="bg-cardBack card  items-center pb-1 order-1 xl:order-2">
      <div className="w-full text-sm sm:text-2xl tracking-widest sm:font-bold text-white flex justify-end sm:pr-5">
        <span>{cvc || "000"}</span>
      </div>
    </div>
  );
};
