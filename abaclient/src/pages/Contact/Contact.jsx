import Navbar from "../../Components/Navbar/Navbar";
import PageHeader from "../../Components/PageHeader/PageHeader";
import ContactInfo from "../../Components/Contact/ContactInfo";
import InlineContact from "../../Components/Contact/InlineContact";
import Title from "../../Components/Title/Title";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

const ContactPage = () => {
  const headerData = {
    BgImg:
      "https://images.pexels.com/photos/798/bench-people-smartphone-sun.jpg?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh",
    title: "Contact Us",
    focus: "Get in Touch",
  };

  return (
    <>
      <Navbar />
      <PageHeader headerData={headerData} />

      <ContactInfo />

      <InlineContact />

      <Title title={headerData.title} subtitle={headerData.focus} />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;
