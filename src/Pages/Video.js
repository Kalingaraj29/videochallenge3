import React, { useState } from "react";
import ReactPlayer from "react-player";
import download1 from "./Assets/1.jpg";
import download2 from "./Assets/2.jpg";
import download3 from "./Assets/3.jpg";
import download4 from "./Assets/4.jpg";
import download5 from "./Assets/5.jpg";
import download6 from "./Assets/6.jpg";
import download8 from "./Assets/8.jpg";
import download9 from "./Assets/9.jpg";
import "../App.css";

const Video = () => {
  const Data = [
    {
      url: "https://www.youtube.com/watch?v=7WXUjcbaHfo",
      thumbnail: download1,
    },
    {
      url: "https://www.youtube.com/watch?v=ANzPM5-lwXc&list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3",
      thumbnail: download2,
    },
    {
      url: "https://www.youtube.com/watch?v=ZezXKK-Q7hE&list=PLyYcNnaAVG5K7mTlMiRNwKiJrgRWsuiyY",
      thumbnail: download3,
    },
    {
      url: "https://www.youtube.com/watch?v=L4_jarMnB0c&list=PLu0W_9lII9ahwFDuExCpPFHAK829Wto2O",
      thumbnail: download4,
    },
    {
      url: "https://www.youtube.com/watch?v=7dmtMcYGmxU&list=PLucuzpTBeckvKLLJOFoiaacdJN4owWi7a",
      thumbnail: download5,
    },
    {
      url: "https://www.youtube.com/watch?v=PSGdZsKVSf4&list=PL7BQ4lqtgECRG2oWnM-m5d3oyoZ8zwbD2&index=1",
      thumbnail: download6,
    },
    {
      url: "https://www.youtube.com/watch?v=7dmtMcYGmxU&list=PLucuzpTBeckvKLLJOFoiaacdJN4owWi7a",
      thumbnail: download1,
    },
    {
      url: "https://www.youtube.com/watch?v=PSGdZsKVSf4&list=PL7BQ4lqtgECRG2oWnM-m5d3oyoZ8zwbD2&index=1",
      thumbnail: download3,
    },
    {
      url: "https://www.youtube.com/watch?v=pFvWwFua6mw",
      thumbnail: download8,
    },
    {
      url: "https://www.youtube.com/watch?v=7WXUjcbaHfo",
      thumbnail: download9,
    },
    {
      url: "https://www.youtube.com/watch?v=PSGdZsKVSf4&list=PL7BQ4lqtgECRG2oWnM-m5d3oyoZ8zwbD2&index=1 ",
      thumbnail: download1,
    },
  ];

  const [video, setvideo] = useState(Data[4].url);
  const handleclick = (url) => {
    setvideo(url);
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
      <ReactPlayer className="player" url={video} controls  onMouseOver={handlemouseover} onMouseLeave={handlemouseleave} />
      <div className="circleborder"  onMouseOver={handlemouseover}>
        {hover &&
          Data?.map((el, index) => {
            return (
              <div className="divcircle" key={index} onMou>
                <img
                  key={index}
                  src={el.thumbnail}
                  alt={`Thumbnail ${index}`}
                  className="thumbnail"
                  onClick={() => handleclick(el.url)}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Video;
