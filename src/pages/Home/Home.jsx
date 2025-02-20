import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="hero banner" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="hero title" className="caption-img" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque nam
            odio unde nisi sapiente minima accusantium sed praesentium ex
            similique?
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="play icon" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="info icon" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
