import BackgroundImage from "../assets/image1.png";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import InlineContact from "../Components/Contact/InlineContact";
import PageHeader from "../Components/PageHeader/PageHeader";

const ThematicAreas = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        backgroundImage={BackgroundImage}
        title="Thematic Areas"
        subtitle="Our Focus"
      />
      <InlineContact />
      <Footer />
    </>
  );
};

export default ThematicAreas;
