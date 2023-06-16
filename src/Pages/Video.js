import React, { useState } from "react";
import ReactPlayer from "react-player";
import download from "./download.jpg";
import download1 from "./download (1).jpg";
import "../App.css";

const Video = () => {
  const Data = [
    {
      url: "https://www.youtube.com/watch?v=7WXUjcbaHfo",
      thumbail: download,
    },
    {
      url: "https://www.youtube.com/watch?v=_DWLy9fFh5U",
      thumbail: download1,
    },
  ];

  const [video1, setvideo1] = useState(Data[0].url);
  const handleclick = (url) => {
    setvideo1(url);
  };

  const [hover, setHover] = useState(false);
  const handlemouseover = () => {
    setHover(true);
  };
  const handlemouseleave = () => {
    setHover(false);
  };
  return (
    <div className="ontainer">
      <ReactPlayer className="player" url={video1} controls />
      <button onMouseOver={handlemouseover} className="thumbnail_button">
        Thumbnail
      </button>
      <div className="thumbnails-container" onMouseLeave={handlemouseleave}>
        {hover &&
          Data.map((el, index) => (
            <img
              key={index}
              src={el.thumbail}
              alt={`Thumbnail ${index}`}
              className="thumbnail"
              onClick={() => handleclick(el.url)}
            />
          ))}
      </div>
    </div>
  );
};

export default Video;
