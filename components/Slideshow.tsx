'use client'
// components/Slideshow.js
import { useState, useEffect, SetStateAction } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'alysyed.webp',
    'reception.webp',
    'security.webp',
    // Add more image filenames as needed
  ];

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 5000); // Auto-scroll every 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <button className="arrow prev" onClick={goToPrevSlide}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </button>
      <div className="slider-wrapper">
        {images.map((image, index) => (
          <div key={index} className={`slider-slide ${index === currentIndex ? 'active' : ''}`}>
            <img
              src={`/assets/${image}`}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button className="arrow next" onClick={goToNextSlide}>
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </button>
      <div className="navigation-circles">
        {images.map((_, index) => (
          <span
            key={index}
            className={`circle ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <style jsx>{`
        .slider-container {
          padding:10;
          position: relative;
          width: 100vw;
          height: 90vh;
          overflow: hidden;
        }

        .slider-wrapper {
          display: flex;
          transition: transform 0.5s ease-in-out;
          transform: translateX(-${currentIndex * 100}%);
        }

        .slider-slide {
          flex: 0 0 100%;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .arrow {
          position: absolute;
          top: 50%;
          font-size: 24px;
          background-color: transparent;
          border: none;
          color: #5555;
          cursor: pointer;
          outline: none;
          transition: color 0.3s;
        }

        .arrow:hover {
          color: #EAC4DF; /* Change color on hover */
        }

        .prev {
          left: 10px;
        }

        .next {
          right: 10px;
        }

        .navigation-circles {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }

        .circle {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #5555;
          margin: 0 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .circle:hover,
        .circle.active {
          background-color: #EAC4DF;
        }
      `}</style>
    </div>
  );
};

export default Slideshow;
