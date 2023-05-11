import { useState, useEffect } from "react";
import "./Slider.css";
import { FcNext, FcPrevious } from "react-icons/fc";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const slides = [
    "https://picsum.photos/id/500/800",
    "https://picsum.photos/id/257/800",
    "https://picsum.photos/id/789/800",
  ];

  const nextSlide = () => {
    setActiveIndex((index) => (index + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((index) => (index + slides.length - 1) % slides.length);
  };

  const handlePrevNextClick = () => {
    clearInterval(intervalId);
  };

  useEffect(() => {
    const id = setInterval(() => {
      nextSlide();
    }, 3000);

    setIntervalId(id);

    return () => clearInterval(id);
  }, [activeIndex]);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <img
          key={slide}
          src={slide}
          alt={`Slider Image ${index}`}
          style={{
            opacity: index === activeIndex ? 1 : 0,
          }}
        />
      ))}
      <button
        className="prev-btn slider-btn"
        onClick={() => {
          prevSlide();
          handlePrevNextClick();
        }}
      >
        <FcPrevious />
      </button>
      <button
        className="next-btn slider-btn"
        onClick={() => {
          nextSlide();
          handlePrevNextClick();
        }}
      >
        <FcNext />
      </button>
    </div>
  );
};

export default Slider;
