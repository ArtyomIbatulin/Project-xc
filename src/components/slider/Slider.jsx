import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img1 from "../../assets/abstract01.jpg";
import img2 from "../../assets/abstract02.jpg";
import img3 from "../../assets/abstract03.jpg";
import img4 from "../../assets/abstract04.jpg";

export const SliderImg = () => {
  const imgArr = [img1, img2, img3, img4];

  const baseUrl = "../../assets";

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>Custom Paging</h2>
      <Slider {...settings}>
        {imgArr.map((item, index) => (
          <div key={index}>
            <img src={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
