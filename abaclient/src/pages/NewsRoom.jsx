import Navbar from "../Components/Navbar/Navbar";
import PageHeader from "../Components/PageHeader/PageHeader";
import News from "../Components/NewsRoom/NewsRoom/NewsRoom";
import Sidebar from "../Components/NewsRoom/Sidebar/Sidebar";
import Media from "../Components/NewsRoom/Media/Media";
import Footer from "../Components/Footer/Footer";

const NewsRoomPage = () => {
  const headerData = {
    BgImg:
      "https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh&fit=crop&crop=entropy&ar=5:2&fm=jpg",
    title: "News Room",
    focus: "Latest News",
  };

  return (
    <>
      <Navbar />
      <PageHeader headerData={headerData} />

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
