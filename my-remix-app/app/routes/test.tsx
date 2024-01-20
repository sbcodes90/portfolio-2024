import React from "react";
import banner from "../images/newbanner.png";
import TEST from "../images/TEST.png";
import header from "../images/header.png";
import projects from "../images/ProjectsHeader.png";
import avi from "../images/me.png";
import mbanner from "../images/mobile-banner.png";
import placeholderImage from "../images/placeholder.png";
import foodieApp from "../images/foodie-mobile.png";
import variantPrint from "../images/yellow-variant-background.png";

function test() {
  return (
    <>
      <div className=" w-full">
        <img src={mbanner} alt="banner" className=" h-full" />
        <section className="bg-[#221408e0] grid grid-cols-1 lg:px-[100px] lg:py-[25px] lg:grid-cols-2  place-items-center">
        <span className="lg:hidden font-regular text-white mt-[50px]">ABOUT</span>
        <img src={avi} alt="me" />

          <p className="text-md text-white font-normmal mt-[50px] px-[30px] lg:px-[0px] lg:mt-[20px] text-center">
            
            I'm Sydney Burrell, a Software Developer with focus on Front End
            Development. I'm a native of Philadelphia, PA, and you can always
            find me me around the city trying out new foodie spots, or at a
            comedy show. <br></br>
            <br></br>~ "A day without laughter is wasted."-Charlie Chapman
            <div className="flex gap-[20px] mt-[20px] pt-[50px] pb-[50px] place-content-center">
              <button className="bg-transparent text-white font-semibold py-2 px-4 border border-white  rounded">
                Contact
              </button>
              <button className="bg-transparent text-white font-semibold py-2 px-4 border border-white  rounded">
                See Work
              </button>
            </div>
          </p>
        </section>

        <section className="pt-[100px]  bg-[#e3bb05]">
          <p className="text-2xl font-black text-center">
            Personal Projects
          </p>
          <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 bg-[#e3bb05]">
            <img src={foodieApp} alt="placeholder" />
            <p>Meal App</p>
            <div className="flex gap-[20px] mt-[20px] pb-[50px] place-content-left">
              <button className="bg-transparent text-black font-semibold py-2 px-10 border border-black  hover:bg-black hover:text-white  rounded">
                Preview
              </button>
              <button className="bg-transparent text-black font-semibold py-2 px-10 border border-black hover:bg-black hover:text-white  rounded">
                Github
              </button>
            </div>

          </div>
        </section>
        <section className="lg:pt-[50px] bg-[#e6d06b]">
          <div className="grid grid-cols-1 place-items-center lg:grid-cols-2">
          <p>Auth App</p>
          <div>
           <img src={variantPrint} alt="placeholder" />
           <button className="bg-transparent text-black font-semibold py-2 px-10 border border-black hover:bg-black hover:text-white float-right rounded">
                Github
              </button>
              </div>
         </div>
        </section>
        <section className="h-screen  bg-[#e3bb05]">
          <p className="text-center text-2xl font-black pt-[100px]">D3.js Charts</p>
        </section>
      </div>
    </>
  );
}

export default test;
