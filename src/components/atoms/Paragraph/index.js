import React from "react";

const Paragraph = ({ className = "" }) => {
  return (
    <div
      className={`text-[20px] leading-[33px] relative w-3/4 float-left pr-[200px] ${className}`}
    >
      <p>
        I'm a design leader with a passion for simple and elegant solutions. I
        enjoy close collaboration, and support designers to create excellent
        work that's aligned to user needs and business goals.
      </p>
    </div>
  );
};

export default Paragraph;
