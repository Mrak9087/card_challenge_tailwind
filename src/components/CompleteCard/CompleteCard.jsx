import React from "react";
import { ReactComponent as IconComplete } from "../../images/icon-complete.svg";

export const CompleteCard = ({ onContinue, onShow }) => {
  const handlerClick = () => {
    onContinue("", "", "", "", "");
    onShow(true);
  };
  return (
    <div className="w-full max-w-[382px] flex flex-col items-center gap-y-10">
      <IconComplete />
      <div className="flex flex-col items-center gap-y-4">
        <h2 className="uppercase font-bold text-2xl">Thank you!</h2>
        <p className="text-gray-400">We've added your card details</p>
      </div>
      <button
        onClick={handlerClick}
        className="w-full bg-confirm text-white py-3 rounded-md font-medium text-base cursor-pointer"
      >
        Continue
      </button>
    </div>
  );
};
