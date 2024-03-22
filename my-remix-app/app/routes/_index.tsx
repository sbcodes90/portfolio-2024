import avi from "../images/me.png";
import mbanner from "../images/mobile-banner.png";
import foodieApp from "../images/foodie-mobile.png";
import variantPrint from "../images/yellow-variant-background.png";
import { Link } from "@remix-run/react";
import reactlogo from "../images/reactlogo.png";
import javascriptLogo from "../images/js.png";
import html5 from "../images/html5.png";
import figma from "../images/figma.png";
import css from "../images/css.png";
import mongodb from "../images/Mongodb.png";
import bootstrapcss from "../images/bootstrap.png";
import materialUi from "../images/materialuilogo.png";
import nodejs from "../images/nodejs.png";
import reactRemix from "../images/remix.png";
import reactRouter from "../images/reactrouter.png";
import nextJs from "../images/nextjs.png";
import aws from "../images/aws.png";
import java from "../images/java.png";
import springboot from "../images/springboot.png";
import adobe from "../images/adobe.png";




function Index() {
  return (
    <>
      <div className="w-full">
        <img src={mbanner} alt="banner" className=" h-full w-full" />
        <section className=" bg-[#e6d06b] grid grid-cols-1 pt-14 lg:px-[100px] lg:py-[75px] lg:grid-cols-2  place-items-center">
          <img src={avi} alt="me" />

          <p className="text-md text-black font-medium mt-[50px] px-[30px] lg:mt-[20px] text-center">
            Hey there, I'm Sydney Burrell, and I've worn multiple hats in the
            tech and design field. I started out as a Graphic Designer,
            transitioned to UX Design, and then dabbled in Email Design,
            Development, and Deployment, Web Development, and finally found my
            niche in Software Development. With five years of experience as a
            Front End Developer specializing in React JS, I'm confident in my
            abilities to tackle any challenge that comes my way. I'm native to
            Philadelphia, PA, and I love to explore new restaurants and attend
            comedy shows around the city. Laughter is my medicine, and I truly
            believe in the quote,{" "}
            <strong>
              "A day without laughter is wasted" by Charlie Chapman.
            </strong>
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
        <p className="text-4xl text-white font-bold text-center pt-20 bg-black">
            Tech Stack
          </p> 
        <section className="h-screen bg-black  grid grid-cols-5 gap-4 place-items-center px-40 pt-20 ">
         

          <img src={reactlogo} alt="react" className="w-20 h-20" />
          <img src={javascriptLogo} alt="javascript" className="w-20 h-20" />
          <img src={html5} alt="html5" className="w-20 h-20" />
          <img src={figma} alt="figma" className="w-20 h-20" />
          <img src={css} alt="css" className="w-20 h-20" />
          <img src={materialUi} alt="material-ui" className="w-30 h-20" />
          <img src={nodejs} alt="node-js" className="w-40 h-40" />
          <img src={bootstrapcss} alt="bootstrap-css" className="w-30 h-20" />
          <img src={reactRemix} alt="react-remix" className="w-30 h-20" />
          <img src={mongodb} alt="mongodb" className="w-30 h-20" />
          <img src={reactRouter} alt="react-router" className="w-40 h-40" />
          <img src={nextJs} alt="nextjs" className="w-20 h-20" />
          <img src={java} alt="java" className="w-20 h-20" />
          <img src={springboot} alt="springboot" className="w-40 h-10" />
          <img src={adobe} alt="adobe-creative-suite" className="w-40 h-40" />



        </section>

        <section className="pt-[100px]  bg-[#e3bb05]">
          <p className="text-2xl font-black text-center">Personal Projects</p>
          <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 bg-[#e3bb05]">
            <img src={foodieApp} className="w-[500px]" alt="placeholder" />
            <div>
              <p className="font-black text-center">Meal App</p>
              <p className="px-[50px] py-[25px] font-medium lg:px-[100px]">
                As a self proclaimed foodie, sometimes at home I want to try to
                random recipes, so I decided to make a application that browses
                for you. The Meal API app utilizes a free public API (insert
                here)
              </p>

              <div className="flex gap-[20px] mt-[20px] pb-[50px] place-content-center">
                <button className="bg-transparent text-black font-semibold py-2 px-10 border border-black  hover:bg-black hover:text-white  rounded">
                  <Link
                    to="https://65ab32bd70a8274031649eb1--mealappbysb.netlify.app/"
                    target="blank"
                  >
                    Preview
                  </Link>
                </button>

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
              <img src={variantPrint} className="w-[500px]" alt="placeholder" />
              <button className="bg-transparent text-black font-semibold py-2 px-10 border border-black hover:bg-black hover:text-white rounded">
                Github
              </button>
            </div>
          </div>
        </section>
        <section className="pt-[100px]  bg-[#e3bb05]">
          <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 bg-[#e3bb05]">
            <img src={foodieApp} className="w-[500px]" alt="placeholder" />
            <div>
              <p className="font-black text-center">Friends App</p>
              <p className="px-[50px] py-[25px] font-medium lg:px-[100px]">
                As a self proclaimed foodie, sometimes at home I want to try to
                random recipes, so I decided to make a application that browses
                for you. The Meal API app utilizes a free public API (insert
                here)
              </p>

              <div className="flex gap-[20px] mt-[20px] pb-[50px] place-content-center">
                <button className="bg-transparent text-black font-semibold py-2 px-10 border border-black  hover:bg-black hover:text-white  rounded">
                  <Link
                    to="https://65ab32bd70a8274031649eb1--mealappbysb.netlify.app/"
                    target="blank"
                  >
                    Preview
                  </Link>
                </button>

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
              <img src={variantPrint} className="w-[500px]" alt="placeholder" />
              <button className="bg-transparent text-black font-semibold py-2 px-10 border border-black hover:bg-black hover:text-white rounded">
                Github
              </button>
            </div>
          </div>
        </section>

        <section className="h-screen  bg-[#e3bb05]">
          <p className="text-center text-2xl font-black pt-[100px]">
            D3.js Charts
          </p>
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

        <section className="pt-[100px]  bg-black h-screen">
          <p className="text-2xl text-white font-bold text-center">Footer</p>
        </section>
      </div>
    </>
  );
}

export default Index;
