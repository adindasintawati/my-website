import React from "react";

const Number = ({ className = "", text = "-" }) => {
  return <p className={`text-[14px] text-white ${className}`}>{text}</p>;
};

export default Number;
