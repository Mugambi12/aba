import BackgroundImage from "../assets/image1.png";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import InlineContact from "../Components/Contact/InlineContact";
import PageHeader from "../Components/PageHeader/PageHeader";
import Title from "../Components/Title/Title";
import Summery from "../Components/ThematicAreas/Summery";

const ThematicAreas = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        backgroundImage={BackgroundImage}
        title="Thematic Areas"
        subtitle="Our Focus"
      />

      <Title title="Our Focus" subtitle="Thematic Areas" />

      <Summery />

      <InlineContact />
      <Footer />
    </>
  );
};

export default ThematicAreas;
