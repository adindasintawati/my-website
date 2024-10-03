import SecondParagraph from "@/components/atoms/SecondParagraph";
import TextTitle from "@/components/atoms/TextTitle";
import React from "react";

const ListExperienceCard = ({
  className,
  imageUrl = "https://jonlamb.com/images/project2.jpg",
  title,
  desc,
}) => {
  return (
    <div
      className={`rounded-3xl overflow-hidden w-[500px] h-[500px] shadow-xl ${className}`}
    >
      <div>
        <img className="" src={imageUrl} alt="" />
      </div>
      <div className="p-10 flex flex-col gap-3 bg-white">
        <TextTitle text={title} />
        <SecondParagraph text={desc} />
      </div>
    </div>
  );
};

export default ListExperienceCard;
