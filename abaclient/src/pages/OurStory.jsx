import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import InlineContact from "../Components/Contact/InlineContact";
import PageHeader from "../Components/PageHeader/PageHeader";
import CEOMessage from "../Components/OurStory/CEOMessage";
import Contribution from "../Components/OurStory/Contribution";
import Leadership from "../Components/OurStory/Leadership";
import PurposeStatement from "../Components/OurStory/PurposeStatement";

const OurStory = () => {
  const headerData = {
    BgImg:
      "https://images.pexels.com/photos/5420369/pexels-photo-5420369.jpeg?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh&fit=crop&crop=entropy&ar=1:1&fm=jpg",
    title: "Our Story",
    focus: "About Us",
  };

  return (
    <>
      <Navbar />
      <PageHeader headerData={headerData} />
      <CEOMessage />
      <Contribution />
      <PurposeStatement />
      <InlineContact />
      <Leadership />
      <Footer />
    </>
  );
};

export default OurStory;
