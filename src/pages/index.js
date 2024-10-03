import React from "react";

import Header from "@/components/organism/Header";
import Experience from "@/components/organism/Experience";
import Expertise from "@/components/organism/Expertise";
import Testimonials from "@/components/organism/Testimonials";
import Footer from "@/components/organism/Footer";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Experience />
      <Expertise />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
