import BackgroundImage from "../assets/image3.png";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import PageHeader from "../Components/PageHeader/PageHeader";
import Title from "../Components/Title/Title";
import InlineContact from "../Components/Contact/InlineContact";
import ContactInfo from "../Components/Contact/ContactInfo";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        backgroundImage={BackgroundImage}
        title="Contact"
        focus="Contact Us"
      />

      <ContactInfo />

      <InlineContact />

      <Title title="Contact Us" subtitle="Get in Touch" />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;
