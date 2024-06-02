import React, { useState } from 'react';
import { ReactComponent as ArrowRightBtn } from '../assets/arrow-right-button.svg'
import { ReactComponent as ArrowLeftBtn} from '../assets/arrow-left-button.svg'
import "../styles/Carousel.css";

export function  Carousel ({ data }) {
    const [slide, setSlide] = useState(0);
  
    const nextSlide = () => {
      setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };
  
    const prevSlide = () => {
      setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };
  
    return (
      <div className="carousel">
        <ArrowLeftBtn onClick={prevSlide} className="arrow arrow-left" />
        {data.map((item, idx) => {
          return (
            <div
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
            > 
            <img src={item.src} alt={item.alt} className="small-rounded-image" />
            <h2>{item.user}</h2>
            <p>{item.description}</p>
          </div>
          );
        })}
        <ArrowRightBtn
          onClick={nextSlide}
          className="arrow arrow-right"
        />
        <span className="indicators">
          {data.map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slide === idx ? "indicator" : "indicator indicator-inactive"
                }
                onClick={() => setSlide(idx)}
              ></button>
            );
          })}
        </span>
      </div>
    );
  };



