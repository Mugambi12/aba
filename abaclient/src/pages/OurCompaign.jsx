import Navbar from "../Components/Navbar/Navbar";
import PageHeader from "../Components/PageHeader/PageHeader";
import Footer from "../Components/Footer/Footer";

const OurCompaign = () => {
  const data = [
    {
      BgImg:
        "https://images.pexels.com/photos/33153/raisting-sattelit-reception-signal.jpg?auto=compress&cs=tinysrgb&w=100dvw&h=100dvh&fit=crop&dpr=2",
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
