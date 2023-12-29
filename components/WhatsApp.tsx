import React from 'react';
import Image from 'next/image';
import whatsapp from '../public/whatsapp.svg'

const WhatsApp = () => {
  const handleWhatsAppClick = () => {
    // Replace the URL with your WhatsApp number or link
    window.location.href = 'https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER';
  };

  return (
    <div
      className="whatsapp-button"
      onClick={handleWhatsAppClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      }}
    >
      <img
        src={`/public/whatsapp.svg`} // Replace with the path to your WhatsApp SVG file
        alt={`whatsappIcon`}
        style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#25D366' }}
      />
    </div>
  );
};

export default WhatsApp;
