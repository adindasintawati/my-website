import TextHeading from "@/components/atoms/TextHeading";
import ListExpertiseCard from "@/components/molecules/ListExpertiseCard";
import React from "react";

const list1 = [
  {
    number: "1",
    desc: "Design leadership",
  },
  {
    number: "2",
    desc: "Building teams",
  },
  {
    number: "3",
    desc: "Optimisation",
  },
  {
    number: "4",
    desc: "Agile methodology",
  },
];

const list2 = [
  {
    number: "5",
    desc: "Workshops",
  },
  {
    number: "6",
    desc: "Product design",
  },
  {
    number: "7",
    desc: "Coaching",
  },
  {
    number: "8",
    desc: "Design Thinking",
  },
];

const Expertise = () => {
  return (
    <div className="flex gap-40 bg-black px-[120px] py-[80px]">
      <TextHeading className="text-white" text="Expertise" />
      {list1.map((item, index) => (
        <div key={index}>
          <ListExpertiseCard number={item.number} desc={item.desc} />
        </div>
      ))}
      {list2.map((item, index) => (
        <div key={index}>
          <ListExpertiseCard number={item.number} desc={item.desc} />
        </div>
      ))}
    </div>
  );
};

export default Expertise;
