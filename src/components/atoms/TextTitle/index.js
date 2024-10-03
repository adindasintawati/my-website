import React from "react";

const TextTitle = ({ className, text = "-" }) => {
  return <p className={`text-[13px] text-[#1C1C21] ${className}`}>{text}</p>;
};

export default TextTitle;
