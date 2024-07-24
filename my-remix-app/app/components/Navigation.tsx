import { Link } from "@remix-run/react";

function Navigation() {
  return (
    <>
     {/*  <nav classNameName="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/home"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
          
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Sydney Burrell{" "}
            </span>
          </Link>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  to="/home"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/web-development"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm  text-gray-900 dark:text-white hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
 
    
    <div className=" flex lg:flex-row justify-end p-5 bg-black text-white text-2xl">
    <Link to="/ux" className="mr-6 font-Bebas">UX Design</Link>
    <Link to="/Development" className="mr-6 font-Bebas">UI Development</Link>
      <div className="mr-6 font-Bebas">About</div>
      <div className="mr-6 font-Bebas">Contact</div>
      </div>
   
 
  </>
  );
}

export default Navigation;
