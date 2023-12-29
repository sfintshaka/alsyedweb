// components/Slideshow.js
import { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (values) => {
    setCurrentIndex(values[0]);
  };

  return (
    <div className="slideshow">
      <img src={`/assets/${images[currentIndex]}`} alt={`Slide ${currentIndex + 1}`} />

      <div className="range-slider">
        <Range
          step={1}
          min={0}
          max={images.length - 1}
          values={[currentIndex]}
          onChange={handleSlideChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '6px',
                width: '100%',
                backgroundColor: '#ccc',
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '16px',
                width: '16px',
                backgroundColor: '#007bff',
                borderRadius: '50%',
              }}
            />
          )}
        />
      </div>
    </div>
  );
};

export default Slideshow;
