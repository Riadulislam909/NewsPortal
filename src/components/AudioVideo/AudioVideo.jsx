import updateVideo from "../../assets/newUpdate.mp4";
import HeadingTitle from "./../mainBody/headingTitle/HeadingTitle";
import "./audioVideo.scss";

const AudioVideo = () => {
  return (
    <>
      <div className="audioVideo">
        <div className="audoVideoWrapper">
          <HeadingTitle category="Audio &amp; Videos" />
          <div className="body">
            <div className="videoWrapper">
              <video width="640px" height="360px" controls autoPlay loop>
                <source src={updateVideo} />
              </video>{" "}
              <video width="640px" height="360px" controls autoPlay loop>
                <source src={updateVideo} />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioVideo;
