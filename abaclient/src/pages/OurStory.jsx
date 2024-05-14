import BackgroundImage from "../assets/image2.png";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import InlineContact from "../Components/Contact/InlineContact";
import PageHeader from "../Components/PageHeader/PageHeader";
import CEOMessage from "../Components/About/CEOMessage";
import Contribution from "../Components/About/Contribution";
import Leadership from "../Components/About/Leadership";

const OurStory = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        backgroundImage={BackgroundImage}
        title="Our Story"
        subtitle="About Us"
      />
      <CEOMessage />
      <Contribution />
      <Leadership />
      <InlineContact />
      <Footer />
    </>
  );
};

export default OurStory;
