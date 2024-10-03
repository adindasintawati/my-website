import React from "react";

const TestimonialParagraph = ({ className = "", text = "-" }) => {
  return (
    <p
      className={`text-[20px] text-[#1C1C21] leading-[33px] ${className}
  `}
    >
      {text}
    </p>
  );
};

export default TestimonialParagraph;
