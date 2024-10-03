import React from "react";

const Profile = ({
  className = "",
  imageUrl = "https://jonlamb.com/images/me.jpg",
}) => {
  return (
    <div
      className={`flex relative float-right mt-[-300px] h-[40vh] ${className}`}
    >
      <img src={imageUrl} alt="profile" />
    </div>
  );
};

export default Profile;
