import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import InlineContact from "../Components/Contact/InlineContact";
import PageHeader from "../Components/PageHeader/PageHeader";
import CEOMessage from "../Components/About/CEOMessage";
import Contribution from "../Components/About/Contribution";
import Leadership from "../Components/About/Leadership";
import PurposeStatement from "../Components/About/PurposeStatement";

const OurStory = () => {
  const data = [
    {
      BgImg:
        "https://images.pexels.com/photos/33153/raisting-sattelit-reception-signal.jpg?auto=compress&cs=tinysrgb&w=100dvw&h=100dvh&fit=crop&dpr=2",
      title: "Our Story",
      focus: "About Us",
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
