import React from 'react'
import avi from "../images/me.png";
import mbanner from "../images/mobile-banner.png";
import foodieApp from "../images/foodie-mobile.png";
import { Link } from "@remix-run/react";
import authappic from "../images/authapp.png";
import game from "../images/cardgame.png";
import bebesworld from "../images/bebesworld.png";
import heroImage from "../images/darkbannr.png";
import Navigation from "~/components/Navigation";
import mobileHeader from "../images/mobileheader.png";
import ui from "../images/ui.png";

function Development() {
  return (
    <div className='bg-gray-200 h-auto'>
    {/* <img src={mbanner} alt="banner" className=" h-full w-full " /> */}
    {/*   <section className=" bg-white grid grid-cols-1 lg:grid-cols-2 pt-14 lg:px-20 lg:py-10  place-items-center">
      <img src={avi} alt="me" />

      <p className="text-sm text-black px-20 font-medium mt-[50px] lg:pt-10 lg:px-[30px] lg:mt-[20px]  justify-normal">
        Hey there, I'm Sydney Burrell, and I've worn multiple hats in the
        tech and design field. I started out as a Graphic Designer,
        transitioned to UX Design, and then dabbled in Email Design,
        Development, and Deployment, Web Development, and finally found my
        niche in Software Development. With six years of experience as a
        Front End Developer specializing in React JS, I'm confident in my
        abilities to tackle any challenge that comes my way. I'm native to
        Philadelphia, PA, and I love to explore new restaurants and attend
        comedy shows around the city. Laughter is my medicine, and I truly
        believe in the quote
        <br></br>
        <strong>
          "A day without laughter is wasted" by Charlie Chapman.
        </strong>
        <div className="flex gap-[20px] mt-[20px] pt-[50px] pb-[50px] place-content-center">
          <button className="bg-transparent  hover:bg-black hover:text-white border-black text-black border-2 font-semibold py-2 px-10 rounded-2xl">
            Contact
          </button>
          <button className="bg-transparent hover:bg-black hover:text-white border-2 border-black text-black font-semibold py-2 px-10   rounded-2xl">
            Github
          </button>
        </div>
      </p>
    </section> */}

    <section>
      <Link to="home">
        <img
          src={heroImage}
          alt="Sydney Burrell, Designer and Developer"
          className=" w-[100%] h-auto hidden md:block lg:block xl:block"
        />
      </Link>
      <Link to="home">
        <img
          src={mobileHeader}
          alt="mobile header"
          className="md:hidden lg:hidden "
        />
      </Link>
    </section>
    <Navigation />

    {/* <section className='bg-black flex justify-center items-center'><img src={ui} alt="ui" /></section> */}
{/*     <section><header className='font-Bebas text-5xl text-black  flex justify-center items-center rounded-2xl p-7 pb-10 bg-gray-200'>UI Development</header></section>
 */}
    <section className=" md:px-[100px] lg:px-[100px] py-[100px] rounded-lg">

      <section className="md:rounded-3xl lg:rounded-3xl hover:shadow-gray-900 hover:shadow-2xl  hover:animate-wiggle hover:animate-infinite bg-purple-900 grid grid-cols-1 lg:grid-cols-2  justify-items-center">
        <div className="text-white grid-col-1 px-20">
          <p className="pt-40 text-2xl font-bold pb-5 text-left text-white hidden md:block lg:block">
            Bebe's World
          </p>
          <div className=" md:hidden lg:hidden">
            <img
              src={bebesworld}
              className=" mt-5 lg:w-[500px] grid-cols-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              alt="bebes world"
            />
          </div>
          <div>
            <p className="text-xl font-bold md:hidden lg:hidden text-white">
              Bebe's World
            </p>
            <p className="text-white font-bold">
              Tech Stack: React, Tailwind CSS
            </p>
            <p className=" text-justify md:text-left lg:text-left pt-5 md:pt-0 lg:pt-0 font-medium">
              A Quiz App aimed at teaching kids how to code. Bebe is my
              actual dog in real life so I decided to design the logo in
              Photoshop based off of her. More quizzes, and activities to
              come...
            </p>
          </div>
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-5 pt-10 md:pt-5 lg:pt-5 pb-20 lg:px-0">
            <Link
              className="text-white font-semibold bg-black text-center  md:px-10 py-3 rounded-2xl lg:px-0 lg:mt-5"
              to="https://bebesworld.netlify.app/"
              target="blank"
            >
              View
            </Link>

            <Link
              className=" text-center text-white font-semibold border-white border-2 px-2  md:px-10 lg:px-10 py-3 rounded-2xl lg:mt-5 lg:ml-5"
              to="https://github.com/sbcodes90/quiz-app"
              target="blank"
            >
              GitHub
            </Link>
          </div>
        </div>

        <div className="hidden md:block lg:block">
          <img
            src={bebesworld}
            className="pb-20 md:w-[500px] lg:pt-20 lg:w-[500px] grid-cols-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            alt="placeholder"
          />
        </div>
      </section>
    </section>
    <section className=" md:px-[100px] lg:px-[100px] py-[100px] m-10 ">
      <section className="md:rounded-3xl lg:rounded-3xl hover:shadow-gray-900 hover:shadow-2xl  hover:animate-wiggle hover:animate-infinite bg-teal-500 grid grid-cols-1 lg:grid-cols-2  justify-items-center">
        <div className="text-white grid-col-1 px-20">
          <p className="pt-40 text-2xl font-bold pb-5 text-left text-black hidden md:block lg:block">
            Authentication App
          </p>
          <div className=" md:hidden lg:hidden">
            <img
              src={authappic}
              className=" mt-5 lg:w-[500px] grid-cols-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              alt="bebes world"
            />
          </div>
          <div className="text-md font-medium text-black">
          <p>
            I have always been fascinated by the process of authentication
            on web applications, so I decided to take matters into my own
            hands and develop a full-stack web application. The application
            employs
          </p>
          <p className="font-bold text-teal-200">
            React, React Router 6, Tailwind CSS, and Node.js, and is
            connected to a MongoDB database.
          </p>
          <p className="pt-5">
            This application enables users to create and delete
            profiles, as well as sign up and log in with password encryption
            using bcrypt.js. To ensure a seamless user experience, the
            application includes form validations and a JWT token that
            unlocks access to a highly confidential database.
          </p>
        </div>
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-5 pt-10 md:pt-5 lg:pt-5 pb-20 lg:px-0">
            <Link
              className="text-white font-semibold bg-black text-center  md:px-10 py-3 rounded-2xl lg:px-0 lg:mt-5"
              to="https://sbcodes-auth-app.vercel.app/"
              target="blank"
            >
              View
            </Link>

            <Link
              className=" text-center text-white font-semibold border-white border-2 px-2  md:px-10 lg:px-10 py-3 rounded-2xl lg:mt-5 lg:ml-5"
              to="https://github.com/sbcodes90/react-mongo-tailwind-auth-app"
              target="blank"
            >
              GitHub
            </Link>
          </div>
        </div>

        <div className="hidden md:block lg:block">
          <img
            src={authappic}
            className="pb-20 md:w-[500px] lg:pt-20 lg:w-[500px] grid-cols-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            alt="placeholder"
          />
        </div>
      </section>
    </section>
{/*     <section className="bg-black grid grid-cols-1 lg:grid-cols-2  justify-items-center lg:py-20 lg:px-20">
      <div className="text-white grid-col-1 px-20">
        <p className="pt-20 text-xl font-bold pb-5 text-center lg:text-left md:text-left">
          Authentication App
        </p>
        <div className=" md:hidden lg:hidden">
          <img
            src={authappic}
            className=" mt-5 pb-10 lg:w-[500px] grid-cols-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            alt="placeholder"
          />
        </div>
        <div className="px-10 text-lg">
          <p>
            I have always been fascinated by the process of authentication
            on web applications, so I decided to take matters into my own
            hands and develop a full-stack web application. The application
            employs
          </p>
          <p className="font-bold text-teal-300">
            React, React Router 6, Tailwind CSS, and Node.js, and is
            connected to a MongoDB database.
          </p>
          <p className="pt-5">
            This feature-rich application enables users to create and delete
            profiles, as well as sign up and log in with password encryption
            using bcrypt.js. To ensure a seamless user experience, the
            application includes form validations and a JWT token that
            unlocks access to a highly confidential database. I invite you
            to explore this web application and experience its robust
            functionalities.
          </p>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-5 pt-10 md:pt-5 lg:pt-5 pb-20 px-20 lg:px-0">
          <button className="text-white border-white border-2  px-2  md:px-10 lg:px-10 py-2 rounded-2xl lg:mt-5">
            <Link to="https://sbcodes-auth-app.vercel.app/" target="blank">
              Check it out
            </Link>
          </button>
          <button className="text-white border-white border-2 px-2  md:px-10 lg:px-10 py-2 rounded-2xl lg:mt-5 lg:ml-5">
            <Link
              to="https://github.com/sbcodes90/react-mongo-tailwind-auth-app"
              target="blank"
            >
              GitHub
            </Link>
          </button>
        </div>
      </div>

      <div className="hidden md:block lg:block">
        <img
          src={authappic}
          className="pb-20 md:w-[500px] lg:pt-20 lg:w-[500px] grid-cols-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          alt="placeholder"
        />
      </div>
    </section> */}
    <section className=" md:px-[100px] lg:px-[100px] m-10 py-[100px]">
      <section className="md:rounded-3xl lg:rounded-3xl hover:shadow-gray-900 hover:shadow-2xl  hover:animate-wiggle hover:animate-infinite bg-gray-900 grid grid-cols-1 lg:grid-cols-2  justify-items-center">
        <div className="text-white grid-col-1 px-20">
          <p className="pt-40 text-2xl font-bold pb-5 text-left text-white hidden md:block lg:block">
            Meal App
          </p>
          <div className=" md:hidden lg:hidden">
            <img
              src={foodieApp}
              className=" mt-5 lg:w-[500px] grid-cols-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              alt="food app"
            />
          </div>
          <div>
            <p className="text-xl font-bold md:hidden lg:hidden text-white">
              Meal App
            </p>
            <p className="text-white font-bold">
              Tech Stack: React, Tailwind CSS
            </p>
            <p className=" text-justify md:text-left lg:text-left pt-5 md:pt-0 lg:pt-0 text-white">
              As a self proclaimed foodie, sometimes at home I want to try
              to random recipes, so I decided to make a application that
              browses for you. The Meal API app utilizes a free public API.
            </p>
          </div>
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-5 pt-10 md:pt-5 lg:pt-5 pb-20 lg:px-0">
            <Link
              className="text-white font-semibold bg-orange-500 text-center  md:px-10 py-3 rounded-2xl lg:px-0 lg:mt-5"
              to="https://65ab32bd70a8274031649eb1--mealappbysb.netlify.app/"                  
              target="blank"
            >
              View
            </Link>

            <Link
              className=" text-center text-white font-semibold border-white border-2 px-2  md:px-10 lg:px-10 py-3 rounded-2xl lg:mt-5 lg:ml-5"
              to="https://github.com/sbcodes90/Health-App"
              target="blank"
            >
              GitHub
            </Link>
          </div>
        </div>

        <div className="hidden md:block lg:block">
          <img
            src={foodieApp}
            className="pb-20 md:w-[500px] lg:pt-20 lg:w-[500px] grid-cols-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            alt="placeholder"
          />
        </div>
      </section>
    </section>


  {/*   <section className="lg:px-20 bg-black pb-10 lg:pb-0 ">
      <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 rounded-3xl ">
        <img
          src={game}
          className="grid-cols-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          alt="placeholder"
        />

        <div className="rounded-3xl shadow-2xl lg:mr-20 mx-10 bg-[#ffffff] border-black border-2">
          <p className="font-black text-center mt-5 text-black">
            Swift UI Mobile Card Game
          </p>
          <p className=" font-normal text-sm px-20 py-5 text-center lg:px-[50px] text-black">
            As my career grows my goal is to transition to mobile app
            development. This is my first project, using image assets from
            Chris Codes. In order to test you would need XCode. Code found
            on my github page. Link below.
          </p>

          <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-[20px] mt-[20px] pb-[50px] lg:place-content-center">
            <button className="bg-black text-white font-semibold py-2 px-[50px] border border-black hover:bg-black hover:text-white  rounded-2xl">
              <Link
                to="https://github.com/sbcodes90/Mobile-App-Swift-UI"
                target="blank"
              >
                Github
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section> */}

    <section className=" bg-[#000000] m-32 rounded-2xl ">
      <p className="text-center text-2xl font-black pt-[50px] text-white">
        D3.js Charts
      </p>
      <div className="grid grid-cols-1 gap-10 p-10">
        <div className="border-2 border-solid border-white rounded-2xl w-full h-full px-32 py-5">
          <p className="text-center">Line Graph</p>
          <iframe
            src="https://codesandbox.io/embed/n4qsf7?view=Editor+%2B+Preview&module=%2Fsrc%2FLineChart.js"
            className="w-[100%] h-[200px] md:h-[500px] lg:h-[500px] border-0 rounded-[4px] overflow-hidden"
            title="D3 line chart"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </div>
    </section>

  </div>
  )
}

export default Development