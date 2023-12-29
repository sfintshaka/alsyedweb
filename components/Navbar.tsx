// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import logo from '../public/logo.svg'

// const Navbar = () => {
//   return (
//     <div className='flex items-center justify-start'>
//     <div className='logo p-8 flex gap-2'>
//       <Link href='/'>
//         <Image src={logo}
//         width={50}
//         height={50}
//          alt="Al-syed logo"/>
//       </Link>
//     </div>

//     <div  className='links flex justify-evenly'>
//       <div><Link href='/about'>About Us</Link></div>
//       <div><Link href='/student'>Student Life</Link></div>
//       <div><Link href='/contact'> Contact Us</Link></div>
//       <div><Link href='/apply'>Apply Now </Link></div>
//     </div>
//     </div>
//   )
// }

// export default Navbar

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../public/logo.svg';

const Navbar = () => {
  return (
    <div className='bg-red-50 flex items-center justify-between p-8'>
      <div className='logo'>
        <Link href='/'>
          <Image
            src={logo}
            width={50}
            height={50}
            alt='Al-syed logo'
          />
        </Link>
      </div>

      <div className='flex-grow flex justify-evenly items-center text-lg font-bold text-gray-500'>
        <div>
          <Link href='/about'>ABOUT US</Link>
        </div>
        <div>
          <Link href='/student'>STUDENT LIFE</Link>
        </div>
        <div>
          <Link href='/contact'>CONTACT US</Link>
        </div>
        <div className='bg-red-500 text-white apply-link'>
          <Link href='/apply'>APPLY NOW</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

