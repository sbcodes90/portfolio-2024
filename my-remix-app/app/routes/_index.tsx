import avi from "../images/me.png";
import mbanner from "../images/mobile-banner.png";
import foodieApp from "../images/foodie-mobile.png";
import variantPrint from "../images/yellow-variant-background.png";
import { Link } from "@remix-run/react";
import TechStack from "~/components/TechStack";
import authappic from "../images/authapppic.png"




function Index() {
  return (
    <>
      <div className="w-full">
        <img src={mbanner} alt="banner" className=" h-full w-full" />
        <section className=" bg-[#d3b00c] grid grid-cols-1 pt-14 lg:px-[100px] lg:py-[75px] lg:grid-cols-2  place-items-center">
          <img src={avi} alt="me" />

          <p className="text-sm text-black font-medium mt-[50px] px-[30px] lg:mt-[20px] text-center">
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
              <button className="bg-transparent  hover:bg-black hover:text-white border-black text-black border-2 font-semibold py-2 px-10 rounded-2xl">
                Contact
              </button>
              <button className="bg-transparent hover:bg-black hover:text-white border-2 border-black text-black font-semibold py-2 px-10   rounded-2xl">
                See Work
              </button>
            </div>
          </p>
        </section>
   

        <section className=" bg-cyan pb-[100px] px-20 pt-10">
          <p className="text-2xl font-black text-center pb-10 text-black">Personal Projects</p>
          {/* <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-3xl py-10"> */}
            <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 bg-[#ffffff] rounded-3xl py-10 shadow-2xl"> 

            <img src={foodieApp} className="pb-5" alt="placeholder" />
            <div className="bg-white rounded-3xl shadow-2xl lg:mr-20 mx-10  border-black border-1">
              <p className="font-black text-center mt-5 text-black">Meal App</p>
              <p className=" font-normal text-sm px-5 py-5 text-center lg:px-[50px] text-black">
                As a self proclaimed foodie, sometimes at home I want to try to
                random recipes, so I decided to make a application that browses
                for you. The Meal API app utilizes a free public API (insert
                here)
              </p>

              <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-[20px] mt-[20px] pb-[50px] lg:place-content-center">
                <button className="bg-transparent text-black font-semibold py-2 px-[45px] mb-2 border border-black  hover:bg-black hover:text-white  rounded">
                  <Link
                    to="https://65ab32bd70a8274031649eb1--mealappbysb.netlify.app/"
                    target="blank"
                  >
                    Preview
                  </Link>
                </button>

                <button className="bg-transparent text-black font-semibold py-2 px-[50px] border border-black hover:bg-black hover:text-white  rounded">
                  Github
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="lg:pt-[50px] bg-[#e6d06b] pb-[100px] px-20">
          <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 pt-[100px]">
            <p><strong>Authentication</strong>
            <br></br> I have always been fascinated by the process of authentication on web applications, so I decided to take matters into my own hands and develop a full-stack web application. The application employs <strong>React, React Router 6, Tailwind CSS, and Node.js</strong>, and is connected to a <strong>MongoDB database. </strong> This feature-rich application enables users to create and delete profiles, as well as sign up and log in with password encryption using bcrypt.js. To ensure a seamless user experience, the application includes form validations and a JWT token that unlocks access to a highly confidential database. I invite you to explore this web application and experience its robust functionalities.</p>
            <div>
              <img src={authappic} className="w-[500px]" alt="placeholder" />
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
<TechStack />
      </div>
    </>
  );
}

export default Index;
