import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import PageHeader from "../Components/PageHeader/PageHeader";
import Publication from "../Components/NewsRoom/Publication/Publication";
import Title from "../Components/Title/Title";
import Footer from "../Components/Footer/Footer";

const Publications = () => {
  const headerData = {
    title: "Publications",
    focus: "Our publications",
    BgImg:
      "https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=100dvw&h=100dvh",
  };

  const publicationData = [
    {
      authors: "John Doe",
      date: "2021-09-01",
      file: "/src/assets/image1.png",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla nec mi vehicula ultricies",
      title: "Publication 1",
    },
    {
      authors: "Jane Doe",
      date: "2021-11-09",
      file: "https://drive.google.com/file/d/1QZ7RGqmoSoeIIt4MpJqyYIZFyCwBH_CO/view?usp=sharing",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla nec mi vehicula ultricies",
      title: "Publication 2",
    },
    {
      authors: "John Doe",
      date: "2021-11-15",
      file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla nec mi vehicula ultricies",
      title: "Publication 3",
    },
    {
      authors: "Jane Doe",
      date: "2021-11-20",
      file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla nec mi vehicula ultricies",
      title: "Publication 4",
    },
    {
      authors: "John Doe",
      date: "2021-11-25",
      file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla nec mi vehicula ultricies",
      title: "Publication 5",
    },
    {
      authors: "Jane Doe",
      date: "2021-11-30",
      file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla nec mi vehicula ultricies",
      title: "Publication 6",
    },
  ];

  return (
    <>
      <Navbar />
      <PageHeader headerData={headerData} />
      <Title title={headerData.focus} subtitle={headerData.title} />
      <Publication publicationData={publicationData} />
      <Footer />
    </>
  );
};

export default Publications;
