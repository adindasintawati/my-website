import Number from "@/components/atoms/Number";
import TestimonialParagraph from "@/components/atoms/TestimonialParagraph";
import React from "react";

const ListTestimonialsCard = ({ paragraph, textName, textJobdesk }) => {
  return (
    <div>
      <TestimonialParagraph className="text-justify" text={paragraph} />
      <Number className="text-black pt-[20px]" text={textName} />
      <Number className="text-[#747B89] pt-[5px]" text={textJobdesk} />
    </div>
  );
};

export default ListTestimonialsCard;
