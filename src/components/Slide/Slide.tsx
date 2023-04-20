import Sdata from "./Sdata"
import './style.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import * as React from "react";


interface SdataItem {
  cover: string;
  category: string;
  title: string;
  desc?: string;
}

const Slide: React.FC = () => {

  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className='slide'>
        <Slider {...settings}>
          {Sdata.map((value: SdataItem, index: number) => {
            return (
              <div className='box' key={index}>
                <div className='img'>
                  <img src={value.cover} alt='' />
                </div>
                <div className='text'>
                  <span>{value.category}</span>
                  <h2>{value.title}</h2>
                  <p>{value.desc}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Slide;

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  arrows: boolean;
  slidesToShow: number;
  slidesToScroll: number;
}

