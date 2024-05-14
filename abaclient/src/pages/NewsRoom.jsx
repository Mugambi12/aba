import BackgroundImage from "../assets/image1.png";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import News from "../Components/NewsRoom/News/News";
import Sidebar from "../Components/NewsRoom/Sidebar/Sidebar";
import PageHeader from "../Components/PageHeader/PageHeader";
import Media from "../Components/NewsRoom/Media/Media";

const NewsRoomPage = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        backgroundImage={BackgroundImage}
        title="News Room"
        subtitle="Latest News"
      />

      <div className="landing-page">
        <div className="posts-summary">
          <News />
          <Sidebar />
        </div>
      </div>

      <Media />

      <Footer />
    </>
  );
};

export default NewsRoomPage;
