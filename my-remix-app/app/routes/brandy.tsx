import React from 'react'
import u2 from "../images/brandy-user-persona-2.png"
import userPersona3 from "../images/user-persona-frank-sr.png"
import { Link } from '@remix-run/react'
import mobileHeader from "../images/mobileheader.png";
import heroImage from "../images/darkbannr.png";
import Navigation from '~/components/Navigation';
import logo from "../images/Bee.png"
function brandy() {
  return (
    <div>
            <section>
    <Link to="/home"><img src={heroImage} alt="Sydney Burrell, Designer and Developer" className=" w-[100%] h-auto hidden md:block lg:block xl:block" /></Link>
     <Link to="/home"><img src={mobileHeader} alt="mobile header" className="md:hidden lg:hidden "/></Link>
   </section>
   <Navigation />
   <section className='flex flex-col justify-center items-center'>
   <header>Brand Logo Design</header>
   <img src={logo}  alt="logo" className='w-[200px]' />
   </section>
   <section className= 'flex flex-col justify-center items-center'>
   <header>User Personas</header>
        <div className='flex flex-col-3 gap-5 justify-center items-center pt-10 pb-20'>
            <img src={u2} alt="user-persona-2" className='w-[400px] rounded-3xl shadow-xl shadow-black' />
            <img src={userPersona3} alt="user-persona-3" className='w-[400px] rounded-3xl shadow-xl shadow-black' />
        </div>
    </section>

    </div>

  )
}

export default brandy