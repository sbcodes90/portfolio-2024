import React from "react";
import banner from "../images/newbanner.png";
import TEST from "../images/TEST.png";
import header from "../images/header.png";
import projects from "../images/ProjectsHeader.png";
import avi from "../images/me.png";
import mbanner from "../images/mobile-banner.png";
import placeholderImage from "../images/placeholder.png";

function test() {
  return (
    <>
      <div className=" w-full">
        <img src={mbanner} alt="banner" className="" />

        <section className="bg-[#221408e0] grid grid-cols-1 lg:px-[100px] lg:py-[25px] lg:grid-cols-2  place-items-center">
          <p className="text-md text-white font-normmal mt-[50px] px-[30px] lg:px-[0px] lg:mt-[20px]">
            I'm Sydney Burrell, a Software Developer with focus on Front End
            Development. I'm a native of Philadelphia, PA, and you can always
            find me me around the city trying out new foodie spots, or at a
            comedy show. <br></br><br></br>~ "A day without laughter is wasted."-Charlie Chapman
          </p>
          <img src={avi} alt="me" />
        </section>

        <section className="h-screen lg:px-[100px] lg:py-[100px] bg-white">
          <p className="text-2xl font-black mt-[100px] text-center">Personal Projects</p>
          <div className="grid grid-cols-1 place-items-center lg:grid-cols-2">
            <img src={placeholderImage} alt="placeholder" />
            <p>Meal App</p>
          </div>
        </section>
        <section className="h-screen lg:px-[100px] lg:py-[100px] bg-white">
          <div className="grid grid-cols-1 place-items-center lg:grid-cols-2">
            <img src={placeholderImage} alt="placeholder" />
            <p>Meal App</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default test;
