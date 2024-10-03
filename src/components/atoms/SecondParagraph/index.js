import React from "react";

const SecondParagraph = ({ className, text = "-" }) => {
  return <p className={`text-[18px] text-[#1C1C21] ${className}`}>{text}</p>;
};

export default SecondParagraph;
