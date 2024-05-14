import { useState } from "react";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

import Header from "../Components/NewsRoom/Header/Header";
import News from "../Components/NewsRoom/News/News";
import Sidebar from "../Components/NewsRoom/Sidebar/Sidebar";

const NewsRoomPage = () => {
  const [videoPlayerState, setVideoPlayerState] = useState(false);

  return (
    <>
      <Navbar videoPlayerState={videoPlayerState} />
      <div className="landing-page">
        <Header />
        <div className="posts-summary">
          <News />
          <Sidebar />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NewsRoomPage;
