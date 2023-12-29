import Image from 'next/image'
// pages/index.js
import Slideshow from './Slideshow';

const Header = () => {
  const images = [
    'APPLICATIONS ARE NOW.png',
  ];

  return (
    <div>
      <h1>Welcome to My Slideshow</h1>
      <Slideshow images={images} />
    </div>
  );
};

export default Header;
