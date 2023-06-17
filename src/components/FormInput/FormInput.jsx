import React from "react";

export const FormInput = ({
  width = "",
  inputName,
  inputPlaceholder,
  register,
  error,
  rules = {},
}) => {
  return (
    <div className={` ${width || "w-full"} flex flex-col`}>
      <input
        className={`formInput ${
          error ? "border-pink-500 focus:border-pink-500" : "border-slate-300 "
        }`}
        type="text"
        {...register(inputName, {
          required: "Can't be blank",
          ...rules,
        })}
        id={inputName}
        placeholder={inputPlaceholder}
      />
    </div>
  );
};
