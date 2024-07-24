import React from "react";
import logo from "../images/logo.png";
import { Link } from "@remix-run/react";
import heroImage from "../images/darkbannr.png";
import mobileHeader from "../images/mobileheader.png";

export default function home() {
  return (
    <div className="pb-10 bg-black">
    <div className=" h-screen flex flex-col col-span-2 justify-center items-center">

        <div>
        <Link to="/home"><img src={heroImage} alt="Sydney Burrell, Designer and Developer" className=" w-[100%] h-auto hidden md:block lg:block xl:block" /></Link>
     <Link to="/home"><img src={mobileHeader} alt="mobile header" className="md:hidden lg:hidden "/></Link>
        </div>
        <div className="">
          <Link to="/ux"><button className="px-10 py-5 bg-white text-black rounded-3xl font-bold">User Experience Design</button> </Link>
          <Link to="/" className="font-bold text-white px-10 py-5">UI Development </Link>
        </div>
    
    </div>
    </div>
  );
}
