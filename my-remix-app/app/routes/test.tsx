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
import { Link } from "@remix-run/react";

function test() {
  return (
    <>
      <div className="w-full">
        <img src={mbanner} alt="banner" className=" h-full w-full" />
        <section className=" bg-[#e6d06b] grid grid-cols-1 lg:px-[100px] lg:py-[75px] lg:grid-cols-2  place-items-center">
        <span className="lg:hidden font-regular text-white mt-[50px]">ABOUT</span>
        <img src={avi} alt="me" />

          <p className="text-md text-black font-medium mt-[50px] px-[30px] lg:mt-[20px] text-center">
            
            Hey I'm Sydney Burrell. I've worn many hats in the tech and design field. I started out in Graphic Design, transitioned to UX Design, dabbled in Email Design, Development, and Deployment, to Web Development then finally finding my home in Software Development. I am a Front End
            Developer specializing in React JS for the past 5 years. I'm a native of Philadelphia, PA with a love for food, and cooking. You can always catch me
            somewhere around the city trying out new restaurants, or at a comedy show. I love to laugh. <br></br>
            <br></br><div className="font-black">~ "A day without laughter is wasted."-Charlie Chapman</div>
            <div className="flex gap-[20px] mt-[20px] pt-[50px] pb-[50px] place-content-center">
              <button className="bg-transparent  hover:bg-black hover:text-white border border-black text-black font-semibold py-2 px-10 rounded-2xl">
                Contact
              </button>
              <button className="bg-transparent hover:bg-black hover:text-white border border-black text-black font-semibold py-2 px-10   rounded-2xl">
                See Work
              </button>
            </div>
          </p>
        </section>
        <section className="pt-[100px]  bg-black h-screen">
          <p className="text-2xl text-white font-bold text-center">
            Tech Stack
          </p>
          
        </section>

        <section className="pt-[100px]  bg-[#e3bb05]">
          <p className="text-2xl font-black text-center">
            Personal Projects
          </p>
          <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 bg-[#e3bb05]">

            <img src={foodieApp} className="w-[500px]" alt="placeholder" />
            <div>
            <p className="font-black text-center">Meal App</p>
            <p className="px-[50px] py-[25px] font-medium lg:px-[100px]">As a self proclaimed foodie, sometimes at home I want to try to random recipes, so I decided to make a application that browses for you. The Meal API app utilizes a free public API (insert here)</p>
   
            <div className="flex gap-[20px] mt-[20px] pb-[50px] place-content-center">
              <button className="bg-transparent text-black font-semibold py-2 px-10 border border-black  hover:bg-black hover:text-white  rounded">
                <Link to="https://65ab32bd70a8274031649eb1--mealappbysb.netlify.app/" target="blank">Preview</Link></button>
        
              <button className="bg-transparent text-black font-semibold py-2 px-10 border border-black hover:bg-black hover:text-white  rounded">
                Github
              </button>
            </div>
            </div>

          </div>
        </section>
        <section className="lg:pt-[50px] bg-[#e6d06b] pb-[100px]">
          <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 pt-[100px]">
          <p>Auth App</p>
          <div>
           <img src={variantPrint} className="w-[500px]"  alt="placeholder" />
           <button className="bg-transparent text-black font-semibold py-2 px-10 border border-black hover:bg-black hover:text-white rounded">
                Github
              </button>
              </div>
         </div>
        </section>
        <section className="pt-[100px]  bg-[#e3bb05]">
          <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 bg-[#e3bb05]">

            <img src={foodieApp} className="w-[500px]"  alt="placeholder" />
            <div>
            <p className="font-black text-center">Friends App</p>
            <p className="px-[50px] py-[25px] font-medium lg:px-[100px]">As a self proclaimed foodie, sometimes at home I want to try to random recipes, so I decided to make a application that browses for you. The Meal API app utilizes a free public API (insert here)</p>
   
            <div className="flex gap-[20px] mt-[20px] pb-[50px] place-content-center">
              <button className="bg-transparent text-black font-semibold py-2 px-10 border border-black  hover:bg-black hover:text-white  rounded">
                <Link to="https://65ab32bd70a8274031649eb1--mealappbysb.netlify.app/" target="blank">Preview</Link></button>
        
              <button className="bg-transparent text-black font-semibold py-2 px-10 border border-black hover:bg-black hover:text-white  rounded">
                Github
              </button>
            </div>
            </div>

          </div>
        </section>
        <section className="lg:pt-[50px] bg-[#e6d06b] pb-[100px]">
          <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 pt-[100px]">
          <p>Swift UI App</p>
          <div>
           <img src={variantPrint} className="w-[500px]"  alt="placeholder" />
           <button className="bg-transparent text-black font-semibold py-2 px-10 border border-black hover:bg-black hover:text-white rounded">
                Github
              </button>
              </div>
         </div>
        </section>
     
        <section className="h-screen  bg-[#e3bb05]">
          <p className="text-center text-2xl font-black pt-[100px]">D3.js Charts</p>
          <div className="grid grid-cols-1 gap-10 p-10 lg:grid-cols-2">
            <div className="border-2 border-solid border-white rounded-2xl w-full h-full px-10 py-5">
              <p className="text-center">Line Graph</p>
              <iframe
              src="https://codesandbox.io/embed/n4qsf7?view=Editor+%2B+Preview&module=%2Fsrc%2FLineChart.js"
              className="w-[100%] h-[500px] border-0 rounded-[4px] overflow-hidden"
              title="D3 line chart"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
            </div>
            <div className="border-2 border-solid border-white rounded-2xl">
              <p className="text-center">Bar Graph</p>
            </div>

          </div>
        </section>
     
    
      </div>
    </>
  );
}

export default test;
