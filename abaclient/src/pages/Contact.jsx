import Navbar from "../Components/Navbar/Navbar";
import PageHeader from "../Components/PageHeader/PageHeader";
import ContactInfo from "../Components/Contact/ContactInfo";
import InlineContact from "../Components/Contact/InlineContact";
import Title from "../Components/Title/Title";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

const ContactPage = () => {
  const data = [
    {
      BgImg:
        "https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh&fit=crop&crop=entropy&ar=2:1&fm=jpg",
      title: "Contact Us",
      focus: "Get in Touch",
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

      <ContactInfo />

      <InlineContact />

      <Title title={data[0].title} subtitle={data[0].focus} />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;
