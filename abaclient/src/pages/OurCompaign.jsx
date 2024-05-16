import Navbar from "../Components/Navbar/Navbar";
import PageHeader from "../Components/PageHeader/PageHeader";
import Footer from "../Components/Footer/Footer";
import BackgroundImage from "../assets/image2.png";

const OurCompaign = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        backgroundImage={BackgroundImage}
        title="Our Compaign"
        subtitle="Our Compaign"
      />
      <Footer />
    </>
  );
};

export default OurCompaign;
