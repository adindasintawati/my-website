import Number from "@/components/atoms/Number";
import SecondParagraph from "@/components/atoms/SecondParagraph";
import TextHeading from "@/components/atoms/TextHeading";
import TextTitle from "@/components/atoms/TextTitle";
import React from "react";

const ListExpertiseCard = ({ number, desc }) => {
  return (
    <div className="flex gap-10 py-10">
      <Number className="pt-1" text={number} />
      <SecondParagraph className="text-white" text={desc} />
      <div></div>
    </div>
  );
};

export default ListExpertiseCard;
