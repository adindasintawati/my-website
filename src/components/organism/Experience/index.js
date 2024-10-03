import React from "react";

import TextHeading from "@/components/atoms/TextHeading";
import ListExperienceCard from "@/components/molecules/ListExperienceCard";

const cards1 = [
  {
    url: "https://jonlamb.com/images/project2.jpg",
    title: "Vodafone",
    desc: "I managed a product design team with a focus on driving commercial results through optimising the customer experience.",
  },
  {
    url: "https://jonlamb.com/images/project4.jpg",
    title: "AON",
    desc: "I led a user-centred design project to improve the information architecture and usability of a complex financial services application.",
  },
  {
    url: "https://jonlamb.com/images/project3.jpg",
    title: "BBC",
    desc: "I provided independent design consultancy services to support the in-house product design team across a number of different projects.",
  },
  {
    url: "https://jonlamb.com/images/project5.jpg",
    title: "McKinsey & Company",
    desc: "Using the design thinking methodology, I led a discovery process to uncover pain points, explore opportunities, and create user-focused solutions.",
  },
];

const cards2 = [
  {
    url: "https://jonlamb.com/images/project1.jpg",
    title: "Waitrose & Partners",
    desc: "I currently lead a team of Product Designers. Using design thinking, we create solutions that respond to changing customer needs.",
  },
  {
    url: "https://jonlamb.com/images/project7.jpg",
    title: "Arup",
    desc: "I oversaw the design and development of an interactive online annual report for a leading architectural design consulting firm.",
  },
  {
    url: "https://jonlamb.com/images/project6.jpg",
    title: "Imperial College",
    desc: "I collaborated with the in-house design team to enhance digital experiences and online marketing campaigns for the business school.",
  },
  {
    url: "https://jonlamb.com/images/project8.jpg",
    title: "Unilever",
    desc: "I consulted on mobile usability and best practices for an iOS app that provides data and performance insights to brand managers.",
  },
];

const Experience = () => {
  return (
    <div className="bg-gray-100 px-[120px] py-[80px] flex flex-col gap-10">
      <TextHeading text="Experience" />
      <div className="flex justify-between">
        <div className="flex flex-col gap-[80px]">
          {cards1.map((item, index) => (
            <div key={index}>
              <ListExperienceCard
                imageUrl={item.url}
                desc={item.desc}
                title={item.title}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[80px] pt-[120px]">
          {cards2.map((item, index) => (
            <div key={index}>
              <ListExperienceCard
                imageUrl={item.url}
                desc={item.desc}
                title={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
