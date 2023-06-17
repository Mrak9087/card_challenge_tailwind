import React, { useEffect } from "react";
import { FormInput } from "../FormInput/FormInput";
import { useForm } from "react-hook-form";
import { InputCardNumber } from "../InputCardNumber/InputCardNumber";

export const CardForm = ({ onSubmit, onShow }) => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isValid },
    control,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      userName: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
      cardCvc: "",
    },
  });

  const submit = (data) => {
    onShow(false);
  };

  useEffect(() => {
    const subscription = watch(
      ({ userName, cardNumber, cardMonth, cardYear, cardCvc }) => {
        onSubmit(userName, cardNumber, cardMonth, cardYear, cardCvc);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);
  return (
    <form
      className="w-full max-w-[382px] flex flex-col gap-y-6 font-medium text-xs sm:text-sm"
      action=""
      onSubmit={handleSubmit(submit)}
    >
      <label htmlFor="userName" className="uppercase flex flex-col gap-y-1 ">
        cardholder name
        <FormInput
          inputName="userName"
          inputPlaceholder="e.g. Jane Applessed"
          register={register}
          error={errors.userName}
        />
        {errors.userName && (
          <span className="normal-case text-red-400">
            {errors.userName.message}
          </span>
        )}
      </label>
      <label htmlFor="cardNumber" className="uppercase flex flex-col gap-y-1">
        card number
        <InputCardNumber
          inputName="cardNumber"
          inputPlaceholder="0000 0000 0000 0000"
          control={control}
          error={errors.cardNumber}
          rules={{
            pattern: {
              value: /(\d{4}([ ]|)\d{4}([ ]|)\d{4}([ ]|)\d{4})/,
              message: "Wrong format, numbers only",
            },
            minLength: {
              value: 16,
              message: "Wrong length",
            },
            maxLength: {
              value: 19,
              message: "Wrong length",
            },
          }}
        />
        {errors.cardNumber && (
          <span className="normal-case text-red-400">
            {errors.cardNumber.message}
          </span>
        )}
      </label>
      <div className="flex justify-between sm:gap-x-4">
        <div className="uppercase flex flex-col gap-y-1 ">
          exp. date (mm/yy)
          <div className="flex gap-x-1 items-center w-36">
            <FormInput
              width="w-1/2"
              inputName="cardMonth"
              inputPlaceholder="MM"
              register={register}
              error={errors.cardMonth}
            />
            <FormInput
              width="w-1/2"
              inputName="cardYear"
              inputPlaceholder="YY"
              register={register}
              error={errors.cardYear}
            />
          </div>
          {(errors.cardMonth || errors.cardYear) && (
            <span className="normal-case text-red-400">Can't be blank</span>
          )}
        </div>
        <div className="max-w-[110px] sm:max-w-none w-full">
          <label htmlFor="cardCvc" className="uppercase flex flex-col gap-y-1">
            cvc
            <FormInput
              inputName="cardCvc"
              inputPlaceholder="e.g. 123"
              register={register}
              error={errors.cardCvc}
            />
            {errors.cardCvc && (
              <span className="normal-case text-red-400">
                {errors.cardCvc.message}
              </span>
            )}
          </label>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="max-w-[378px] w-full bg-confirm text-white py-3 rounded-md font-medium text-base cursor-pointer">
          Confirm
        </button>
      </div>
    </form>
  );
};
