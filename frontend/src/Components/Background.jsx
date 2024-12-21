import { useState, useRef, useEffect } from "react";

import img0 from "/src/assets/images/background-0.jpg";
import img1 from "/src/assets/images/background-1.jpg";
import img2 from "/src/assets/images/background-2.jpg";
import img3 from "/src/assets/images/background-3.jpg";
import "./Background.css";



const Background = () => {
  const images = [img0, img1, img2, img3];
  const [currentSlide, setCurrentSlide] = useState(0);
  let sliderInterval = useRef();
  let switchImages = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };
  useEffect(() => {
    sliderInterval = setInterval(() => {
      switchImages();
    }, 5000);
    return () => {
      clearInterval(sliderInterval);
    };
  });
  return (
    <div>
        <div className="imgWrapper">
          {images.map((img, index) => {
            return (
              <img
                src={img}
                className={
                  index === currentSlide ? "imageActive homeImage" : "image"
                }
              />
            );
          })}
        </div>
    </div>
  );
};

export default Background;