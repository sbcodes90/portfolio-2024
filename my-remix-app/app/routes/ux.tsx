import { Link } from '@remix-run/react'
import React from 'react'
import mobileHeader from "../images/mobileheader.png";
import heroImage from "../images/darkbannr.png";
import mockups from "../images/Mockup.png";

import Navigation from '~/components/Navigation';

function ux() {
  return (
    <div>
    <section>
    <Link to="/home"><img src={heroImage} alt="Sydney Burrell, Designer and Developer" className=" w-[100%] h-auto hidden md:block lg:block xl:block" /></Link>
     <Link to="/home"><img src={mobileHeader} alt="mobile header" className="md:hidden lg:hidden "/></Link>
   </section>
   <Navigation />
   <header className='text-black text-center'>UX Projects</header>
   <section className='grid grid-cols-2 justify-center items-center text-center bg-gray-200 px-60 gap-10 py-60'>
    <div className='bg-black text-white py-32 rounded-3xl'>Siemens</div>
    <Link to="/brandy"><div className='bg-black text-white py-32 rounded-3xl'>Brandy</div></Link>
    <Link to="/Rep"><div className='bg-black text-white py-32 rounded-3xl'>Represent Me</div></Link>
    <div className='bg-black text-white py-32 rounded-3xl'>Project 4</div>
   </section>
   </div>
  )
}

export default ux