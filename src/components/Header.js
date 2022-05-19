import { Link, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button1 } from "./Buttons";
import { useState, useEffect } from "react";

export default function Header() {
  const [dropDown, setDropDown] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const [countdown, setCountdown] = useState(true);

  // useEffect(() => {    // Update the document title using the browser API    document.title = `You clicked ${count} times`;  });/*  */

  const location = useLocation();
  // console.log(currentPage)
  // console.log(location.pathname)

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <>
      <div className="bg-concert-yellow text-black h-12 justify-between items-center px-8 flex z-10 font-bold text-sm w-full">
        <p>
          20-27 JUL / <span>DARUPVEJ 4000 ROSKILDE</span>
        </p>
        <ul className="hidden md:flex space-x-8">
          <li
            className={`${
              currentPage === "/account" && "underline"
            } decoration-2`}
          >
            <Link to={"/account"}>Account</Link>
          </li>
          <li>
            <span>EN</span>/<span>DK</span>
          </li>
        </ul>
      </div>
      <div className="w-full sticky top-0 z-10">
        <nav className="bg-black font-bold text-lg w-full text-concert-yellow px-4 phone:px-8 py-3 h-26 flex items-center phone:items-end justify-between">
          <ul className="flex items-end md:space-x-6 lg:space-x-12">
            <li>
              <Link to={"/"} className=" text-sm phone:text-xl">
                <h2 className="font-acier text-4xl phone:text-5.5xl font-extralight">
                  Asgård
                </h2>
                <p>FESTIVAL</p>
              </Link>
            </li>
            <li className="hidden md:block">
              <Link
                to={"/shop"}
                className={`${
                  currentPage === "/shop" && "underline"
                } decoration-2 leading-8 underline-offset-4 hidden md:block`}
              >
                Book
              </Link>
            </li>
            <li className="hidden md:block">
              <Link
                to={"/lineup"}
                className={`${
                  currentPage === "/lineup" && "underline"
                } decoration-2 leading-8 underline-offset-4 hidden md:block`}
              >
                Lineup
              </Link>
            </li>
          </ul>
          <div className="flex items-center md:pb-1 leading-8 space-x-2 phone:space-x-4 md:space-x-8">
            <Link to={"/shop"} className="hidden phone:block">
              <Button1 label="Buy ticket" />
            </Link>
            <Link to={"/purchases"}>
              {/* <div className="flex items-center space-x-6 pl-2 bg-red-500">
              <p className="text-black">09:15 to complete order</p>
              <MdOutlineShoppingCart className="text-3xl phone:text-4xl" />
            </div> */}
              <MdOutlineShoppingCart className="text-3xl phone:text-4xl" />
            </Link>
            <GiHamburgerMenu
              onClick={() => {
                setDropDown(!dropDown);
              }}
              className="text-4xl phone:text-5xl md:hidden"
            />
          </div>
        </nav>
        {countdown && (
          <div className="w-full fidex bg-red-500 leading-8 md:leading-10 px-8 font-bold md:text-xl">
            <p className="text-center phone:text-right">
              09:15 to complete order
            </p>
          </div>
        )}
        <div className=" w-full">{dropDown && <DropdownMenu />}</div>
      </div>
      {/* <nav className="flex justify-around bg-gray-500">
        <Link to={"/"} className="font-montserrat font-bold">Home</Link>
        <Link to={"/lineup"}>Lineup</Link>
        <Link to={"/artist"}>Artist</Link>
        <Link to={"/schedule"}>Schedule</Link>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/purchases"}>Purchase</Link>
        <Link to={"/account"}>Account</Link>
      </nav> */}
    </>
  );
}

function DropdownMenu({ active }) {
  return (
    <div className="w-full bg-concert-l-dark px-4 pt-4 phone:px-8 top-0 flex flex-col items-end font-bold">
      <div className="w-fit ml-auto flex flex-col space-y-4 items-end ">
        <Link
          to={"/shop"}
          className="w-full px-8 bg-concert-b-green text-center hover:bg-concert-pink"
        >
          Tickets
        </Link>
        <Link
          to={"/lineup"}
          className="w-full bg-concert-yellow text-center hover:bg-concert-pink"
        >
          Lineup
        </Link>
        <Link
          to={"/shop"}
          className="w-full bg-concert-yellow text-center hover:bg-concert-pink"
        >
          Book
        </Link>
        <Link
          to={"/account"}
          className="w-full bg-concert-yellow text-center hover:bg-concert-pink"
        >
          Account
        </Link>
        <p className="w-full text-center bg-concert-yellow">
          <span>EN</span>/<span>DK</span>
        </p>
      </div>
      <p className="w-full text-center text-lig text-concert-yellow py-8">
        20-27 JUL / <span>DARUPVEJ 4000 ROSKILDE</span>
      </p>
    </div>
  );
}
