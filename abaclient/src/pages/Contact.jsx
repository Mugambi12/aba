import BackgroundImage from "../assets/image3.png";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import PageHeader from "../Components/PageHeader/PageHeader";
import Title from "../Components/Title/Title";
import InlineContact from "../Components/Contact/InlineContact";
import ContactInfo from "../Components/Contact/ContactInfo";

const ContactPage = () => {
  const data = [
    {
      BgImg:
        "https://images.pexels.com/photos/33153/raisting-sattelit-reception-signal.jpg?auto=compress&cs=tinysrgb&w=100dvw&h=100dvh&fit=crop&dpr=2",
      title: "Contact Us",
      focus: "Get in Touch",
    },
  ];

  return (
    <>
      <Navbar />
      <PageHeader
        backgroundImage={data[0].BgImg}
        title={data[0].title}
        focus={data[0].focus}
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
