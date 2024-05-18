import Navbar from "../Components/Navbar/Navbar";
import PageHeader from "../Components/PageHeader/PageHeader";
import Footer from "../Components/Footer/Footer";

const OurCompaign = () => {
  const data = [
    {
      BgImg:
        "https://images.pexels.com/photos/7944396/pexels-photo-7944396.jpeg?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh&fit=crop&crop=entropy&ar=2:1&fm=jpg",
      title: "Our Compaign",
      focus: "Our Compaign",
    },
  ];

  return (
    <>
      <Navbar />
      <PageHeader
        BgImg={data[0].BgImg}
        title={data[0].title}
        focus={data[0].focus}
      />
      <Footer />
    </>
  );
};

export default OurCompaign;
