import Image from 'next/image'
import Slideshow from './Slideshow';
import AccommodationCard from './AccomodationCard';
import WhatsApp from './Whatsapp';


const Header = () => {

  return (
    <div className='py-20'>
      <Slideshow />
      <AccommodationCard/>
      <WhatsApp/>
    </div>
  );
};

export default Header;
