import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt, faMapMarkerAlt, faHotel, faUtensils, faShower, faTint, faWifi, faUsers, faSoap, faShieldAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';



const AccommodationCard= () => {
  return (
    <div className="flex flex-col items-center bg-red-50 rounded-lg shadow-md text-center p-20">
      <h2 className="text-3xl font-bold mb-6 py-10">DISCOVER A COMPLETE STUDENT LIVING EXPERIENCE RIGHT AT YOUR DOORSTEP!</h2>
      <p className="text-lg mb-8">Experience the epitome of student living excellence in the finest accommodation South Africa has to offer!</p>
      <div className='flex py-15 px-10'>
      <ul className=' bg-red-50 text-left px-20'>
        <li className='px-2'><FontAwesomeIcon icon={faExpandArrowsAlt} /> Spacious environment</li>
        <li className='px-2'><FontAwesomeIcon icon={faMapMarkerAlt} /> Prime location near Union Buildings gardens</li>
        <li className='px-2'><FontAwesomeIcon icon={faHotel} /> World-class hospitality</li>
        <li className='px-2'><FontAwesomeIcon icon={faHotel} /> Fully furnished rooms</li>
        <li className='px-2'><FontAwesomeIcon icon={faUtensils} /> Communal kitchen and bathroom</li>
        <li className='px-2'><FontAwesomeIcon icon={faTint} /> Water and electricity included</li>
        </ul>
         
         <ul className=' bg-red-50 text-left px-5'>
        <li className='px-2'><FontAwesomeIcon icon={faWifi} /> High-speed Wi-Fi</li>
        <li className='px-2'><FontAwesomeIcon icon={faUsers} /> Coworking spaces</li>
        <li className='px-2'><FontAwesomeIcon icon={faSoap} /> Laundry</li>
        <li className='px-2'><FontAwesomeIcon icon={faShieldAlt} /> 24/7 security</li>
        <li className='px-2'><FontAwesomeIcon icon={faCalendarAlt} /> Weekly events, such as movie nights and social gaming</li>
        </ul>
            
         </div>
        
  
    </div>
  );
};

export default AccommodationCard;

