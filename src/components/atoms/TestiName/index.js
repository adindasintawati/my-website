import React from "react";

const TestiName = ({ classname = "-", name = "-" }) => {
  return <p classname={`text-[14px] text-black ${classname}`}>{name}</p>;
};

export default TestiName;
