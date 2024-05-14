import "./Media.css";

const Media = () => {
  return (
    <>
      <div class="youtube-area">
        <div class="youtube-container">
          <div class="video-items-active">
            <div class="video-items active">
              <video controls>
                <source src="/src/assets/video/news2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div class="video-items-row">
            <div class="video-items">
              <video controls>
                <source src="/src/assets/video/news1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div class="video-items">
              <video controls>
                <source src="/src/assets/video/news3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div class="video-items">
              <video controls>
                <source src="/src/assets/video/news2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div class="video-items">
              <video controls>
                <source src="/src/assets/video/news1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Media;
