import React, { useMemo, useState } from "react";
import CardFront from "../CardFront";
import CardBack from "../CardBack";
import CardForm from "../CardForm";
import CompleteCard from "../CompleteCard";

export const MainSection = () => {
  const [cardInfo, setCardInfo] = useState({
    holder: "",
    cardNumber: "",
    mm: "",
    yy: "",
    cvc: "",
  });

  const [isShowForm, setIsShowForm] = useState(true);

  const handlerCardInfo = (holder, cardNumber, mm, yy, cvc) => {
    setCardInfo({
      holder,
      cardNumber,
      mm,
      yy,
      cvc,
    });
  };
  return (
    <div className="w-full min-h-screen h-full flex flex-col xl:justify-between xl:flex-row">
      <div className="w-full relative sm:static xl:w-1/2 xl:min-h-screen flex flex-col sm:gap-y-9 justify-center items-end px-4 pb-12 sm:pb-0 sm:px-0 sm:items-center pt-8 xl:pt-0 xl:items-end mb-20 xl:mb-0 bg-mobile xl:bg-desktop bg-white bg-no-repeat bg-cover xl:bg-contain">
        <CardFront
          cardNumber={cardInfo.cardNumber}
          holder={cardInfo.holder}
          mm={cardInfo.mm}
          yy={cardInfo.yy}
        />
        <CardBack cvc={cardInfo.cvc} />
      </div>
      <div className="w-full xl:w-1/2 min-h-full flex flex-col justify-center items-center px-6">
        {isShowForm ? (
          <CardForm onSubmit={handlerCardInfo} onShow={setIsShowForm} />
        ) : (
          <CompleteCard onContinue={handlerCardInfo} onShow={setIsShowForm} />
        )}
      </div>
    </div>
  );
};
