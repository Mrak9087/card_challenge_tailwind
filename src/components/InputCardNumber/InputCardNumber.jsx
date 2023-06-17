import React, { useRef, useState } from "react";
import { useController } from "react-hook-form";

export const InputCardNumber = ({
  width = "",
  inputName,
  inputPlaceholder,
  control,
  error,
  rules = {},
}) => {
  const { field } = useController({
    name: inputName,
    control,
    rules: {
      required: "Can't be blank",
      ...rules,
    },
  });
  const [num, setNum] = useState("");

  const countChar = useRef(0);

  const addSpace = (s) => {
    const cardNumberParts =
      s.replace(/\W/g, "").match(/(\w{1,4})(\w{0,4})(\w{0,4})(\w{0,4})/) || [];
    const result = !cardNumberParts[2]
      ? cardNumberParts[1] || ""
      : `${cardNumberParts[1]} ${cardNumberParts[2] || ""} ${
          cardNumberParts[3] || ""
        } ${cardNumberParts[4 || ""]}`;
    return result.trim();
  };

  const handlerInput = (e) => {
    let locNum = e.target.value;
    let res = addSpace(locNum);
    field.onChange(res);
    setNum(res);
  };

  const handlerPaste = (e) => {
    e.preventDefault();
    countChar.current = 0;
    let s = e.clipboardData.getData("text/plain");
    s = s.trim();
    let val = addSpace(s);
    field.onChange(val);
    setNum(val);
  };
  return (
    <div className={` ${width || "w-full"} flex flex-col`}>
      <input
        className={`formInput ${
          error ? "border-pink-500 focus:border-pink-500" : "border-slate-300 "
        }`}
        type="text"
        {...field}
        id={inputName}
        value={num}
        placeholder={inputPlaceholder}
        onChange={handlerInput}
        onPaste={handlerPaste}
      />
    </div>
  );
};
