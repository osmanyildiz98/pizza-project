import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import "../css/Banner.css";

const bannerImages = [
  "./banners/grilled-steak-banner.png",
  "./banners/bacon-cheeseburger-banner.png",
  "./banners/pepperoni-pizza-banner.png",
  "./banners/pesto-pasta-banner.png",
  "./banners/vegetarian-lasagna-banner.png",
];

function Banner() {
  const [index, setIndex] = useState(0);

  const handleIndexChange = () => {
    index === 4 ? setIndex(0) : setIndex(index + 1);
  };

  return (
    <section className="banner-section">
      <h1 className="banner-title">
        Taste in One Click,
        <br /> Happines in One Bite
      </h1>
      <div className="banner">
        <div className="banner-container">
          <img className="banner-image" src={`${bannerImages[index]}`}></img>
          <button className="previous-button" onClick={handleIndexChange}>
            <GrPrevious className="previous-icon" />
          </button>
          <button className="next-button" onClick={handleIndexChange}>
            <GrNext className="next-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
