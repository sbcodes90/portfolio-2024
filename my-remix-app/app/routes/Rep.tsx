import { Link } from "@remix-run/react";
import React from "react";
import mobileHeader from "../images/mobileheader.png";
import heroImage from "../images/darkbannr.png";
import Navigation from "~/components/Navigation";
import wireframes from "../images/Wireframes.png";
import mockups from "../images/Mockup.png";


function Rep() {
  return (
  <>
  <div className="bg-black flex flex-col justify-center items-center">
  <img src={heroImage} alt="logo" />
  </div>
  <Navigation />
  <div className="flex flex-col justify-center items-center">
    <header className="text-5xl font-bold p-20 font-Bebas">Google UX Design Certification Project</header>
    <div>Prompt: Design a app that.......</div>
    <header>UX Design Process</header>
  </div>
  
  </>
  );
}

export default Rep;
