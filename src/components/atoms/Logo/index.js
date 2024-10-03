import React from "react";

const Logo = ({
  className = "w-[129px] mt-[70px] pl-[45px]",
  imageUrl = "https://jonlamb.com/images/logo-light.png",
}) => {
  return (
    <div className={className}>
      <img src={imageUrl} alt="logo" />
    </div>
  );
};

export default Logo;
