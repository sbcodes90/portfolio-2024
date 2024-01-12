import { Link } from "@remix-run/react";
import { useState } from "react";
import samplePic from "../images/sampleImage.jpg";
import avi from "../images/me.png";
import foodieAppLogo from "../images/foodieAppLogo.png";

function WebDevelopment() {
    const [showChallenge, setshowChallenge] = useState<boolean>(false);
    return (
      <>
        <div className="ml-[50px] mr-[50px] h-auto p-[50px]">
          <img src={avi} alt="avatar" className="w-[200px] h-[160px]"/>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Software Developer II
            </span>
          </h1>
          <h3 className="text-2xl font-bold  mb-4">Focus: Front End Developer</h3>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation, and
            capital can unlock long-term value and drive economic growth.
          </p>
       
        </div>
       
  
  
        <section className="m-[50px] h-auto px-[50px] py-[30px] rounded-2xl">
          <div className="flex flex-col text-center mb-[5px] text-4xl font-bold	">
           Personal Projects
          </div>
          <div className="sm:grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="mt-[20px] mb-[20px] text-center">
              <div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <Link to="/">
                    <img className="rounded-t-lg" src={foodieAppLogo} alt="something" />
                  </Link>
                  <div className="p-5">
                    <Link to="/">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Meal App
                      </h5>
                    </Link>
                    <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 text-left">
                     <b>Purpose: A fun personal project</b><br /> <b>Whats it about?:</b> <br /> Not sure what to make for dinner? The Meal App is just for you. It utilizes the Meal API to generate random meal suggestions or you can simply browse the database for whatever your taste buds desire! (Hmm maybe I have a future in copywriting lol) 
                      Tools: React, Tailwind CSS, React Router v6 Check out the readme for whats to come
                    </p>
                    <Link
                      to="https://mealappbysb.netlify.app/"  target="_blank" rel="noreferrer"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Preview
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                    <Link
                      to="https://github.com/sbcodes90/Health-App"  target="_blank" rel="noreferrer"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Github
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[20px] mb-[20px] text-center">
              <div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <Link to="/">
                    <img className="rounded-t-lg" src={samplePic} alt="something" />
                  </Link>
                  <div className="p-5">
                    <Link to="/">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Auth App
                      </h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                    <Link
                      to="/"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Check it out!
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[20px] mb-[20px] text-center">
              <div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <Link to="/">
                    <img className="rounded-t-lg" src={samplePic} alt="something" />
                  </Link>
                  <div className="p-5">
                    <Link to="/">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Friends App
                      </h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                    <Link
                      to="/"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Check it out!
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section className="m-[50px] bg-white h-auto p-[50px] rounded-2xl shadow-lg">
          <div className="flex flex-col text-center mt-[15px] mb-[5px] text-4xl font-bold	">
            Swift Mobile Applications
          </div>
          <div className=" grid grid-cols-1 mt-[20px] mb-[20px] text-center">
            <div>BlackJack Game</div>
          </div>
        </section>
  
        <section className="m-[50px] bg-white h-auto px-[50px] py-[30px] rounded-2xl shadow-lg">
          <div className="flex flex-col text-center mt-[15px] mb-[5px] text-4xl font-bold	">
            D3.js Charts
          </div>
          <div className=" grid grid-cols-2 gap-2 mt-[20px] mb-[20px] text-center">
            <div>Line Chart
            <iframe src="https://codesandbox.io/embed/n4qsf7?view=Editor+%2B+Preview&module=%2Fsrc%2FLineChart.js"
       className="w-[100%] h-[500px] border-0 rounded-[4px] overflow-hidden"
       title="D3 line chart"
       allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
       sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
     ></iframe>
            </div>
            <div>Bar Chart</div>
          </div>
        </section>
  
        <section className="m-[50px] bg-white h-auto px-[50px] py-[30px] rounded-2xl shadow-lg">
          <div className="flex flex-col text-center mt-[15px] mb-[5px] text-4xl font-bold	">
            React Challenges
          </div>
          <div className="grid grid-cols-2 gap-2 mt-[20px] mb-[20px]">
            <button onClick={() => setshowChallenge(true)}>
              React Challenge 1
            </button>
            <button>React Challenge 2</button>
          </div>
          {showChallenge && (
            <div className="flex flex-col text-center">
              <iframe
                src="https://codesandbox.io/embed/rkxtsp?view=Editor+%2B+Preview&module=%2Fsrc%2Fapp.js"
                className="w-[100%] h-[500px] border:0 rounded-[4px]"
                title="Code Challenge ` (forked)"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              ></iframe>
              <button
                className="mt-[25px]"
                onClick={() => setshowChallenge(false)}
              >
                Close
              </button>
            </div>
          )}
        </section>
      </>
    );
  }


export default WebDevelopment