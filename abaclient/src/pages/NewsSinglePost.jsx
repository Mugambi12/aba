import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import NewsPost from "../Components/NewsRoom/NewsPost/NewsPost";
import PageHeader from "../Components/PageHeader/PageHeader";

const NewsSinglePost = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        BgImg="https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh&fit=crop&crop=entropy&ar=2:1&fm=jpg"
        title="News Post"
        focus="News Post"
      />
      <NewsPost img="https://images.pexels.com/photos/5420369/pexels-photo-5420369.jpeg?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh&fit=crop&crop=entropy&ar=1:1&fm=jpg" />

      <Footer />
    </>
  );
};

export default NewsSinglePost;
