import React from "react";

const Heading = ({ className = "" }) => {
  return (
    <div
      className={`text-[#1C1C21] mt-[130px] mb-[50px] text-[82px] flex flex-col ${className}`}
    >
      <h1>User-centred design</h1>
      <h1 className="-mt-[20px]">that works beautifully</h1>
    </div>
  );
};

export default Heading;
