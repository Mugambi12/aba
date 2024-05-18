import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import News from "../Components/NewsRoom/NewsRoom/NewsRoom";
import Sidebar from "../Components/NewsRoom/Sidebar/Sidebar";
import PageHeader from "../Components/PageHeader/PageHeader";
import Media from "../Components/NewsRoom/Media/Media";

const NewsRoomPage = () => {
  const data = [
    {
      BgImg:
        "https://images.pexels.com/photos/33153/raisting-sattelit-reception-signal.jpg?auto=compress&cs=tinysrgb&w=100dvw&h=100dvh&fit=crop&dpr=2",
      title: "News Room",
      focus: "Latest News",
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
