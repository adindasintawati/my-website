import Heading from "@/components/atoms/Heading";
import Logo from "@/components/atoms/Logo";
import Paragraph from "@/components/atoms/Paragraph";
import Profile from "@/components/atoms/Profile/idex";
import ListCartExperience from "@/components/molecules/ListExperienceCard";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="pb-[150px]">
        <Logo className="w-[130px] mt-[80px] ml-[80px]" />
        <Heading className="ml-[80px] mt-[100px] text-[80px]" />
        <Profile className="mr-[100px]" />
        <Paragraph className="ml-[80px] pr-[350px]" />
      </div>
    </>
  );
};

export default Header;
