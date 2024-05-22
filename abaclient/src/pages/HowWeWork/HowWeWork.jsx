import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageHeader from "../../Components/PageHeader/PageHeader";

const HowWeWork = () => {
  const headerData = {
    BgImg:
      "https://images.pexels.com/photos/5420369/pexels-photo-5420369.jpeg?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh&fit=crop&crop=entropy&ar=1:1&fm=jpg",
    title: "How We Work",
    focus: "About Us",
  };

  return (
    <>
      <Navbar />
      <PageHeader headerData={headerData} />
      <h1>How We Work</h1>
      <p>How We Work content goes here</p>
    </>
  );
};

export default HowWeWork;
