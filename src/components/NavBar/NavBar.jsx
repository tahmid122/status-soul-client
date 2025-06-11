import React from "react";
import { Link } from "react-router";
import { IoMdSettings } from "react-icons/io";
import { IoIosHelpBuoy } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa6";
import { IoMdSunny } from "react-icons/io";
import { BsMoonStars } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
const NavBar = () => {
  const { logOut, dbUser } = useAuth();
  const links = (
    <>
      <li>
        <a>Home</a>
      </li>

      <li>
        <a>Video</a>
      </li>
    </>
  );
  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Successfully Logout"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-white shadow-sm">
      <div className="navbar lg:w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to={"/"}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-black"
            >
              StatusSoul
            </Link>

            <form>
              <label
                htmlFor="search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full p-2 outline-none ps-10 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50"
                  placeholder="Search..."
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <Link
            to={"/"}
            className="w-10 h-10 rounded-md flex items-center justify-center bg-gray-200"
          >
            <MdMessage size={18} />
          </Link>
          <Link
            to={"/"}
            className="w-10 h-10 rounded-md flex items-center justify-center bg-gray-200"
          >
            <IoMdSettings size={18} />
          </Link>
          <Link
            to={"/"}
            className="w-10 h-10 rounded-md flex items-center justify-center bg-gray-200"
          >
            <FaBell size={18} />
          </Link>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="m-1">
              <img
                className="h-10 w-10 rounded-full cursor-pointer border-2 border-red-600"
                src={dbUser?.proImage}
                alt=""
              />
            </div>
            <div
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <div>
                <div className="flex items-center gap-2">
                  <img
                    className="h-12 w-12 rounded-lg cursor-pointer border-2 border-red-600"
                    src={dbUser?.proImage}
                    alt=""
                  />
                  <div>
                    <h4 className="text-xl font-bold">{dbUser?.name}</h4>
                    <h5 className="text-sm font-medium text-slate-600">
                      Web Developer
                    </h5>
                  </div>
                </div>
                <Link to={"/profile"}>
                  <button className="btn-style w-full py-2 px-1 font-bold rounded-md mt-2 text-xs cursor-pointer">
                    View Profile
                  </button>
                </Link>
              </div>
              <ul className="text-base font-semibold text-slate-600 mt-2 space-y-2">
                <Link to={"/"} className="flex items-center gap-1">
                  <IoMdSettings className="text-slate-600 block" size={23} />
                  <li>Setting & Privacy</li>
                </Link>
                <Link to={"/"} className="flex items-center gap-1">
                  <IoIosHelpBuoy className="text-slate-600 block" size={23} />
                  <li>Support</li>
                </Link>

                <hr className="mt-2 text-slate-300" />
                <Link className="flex items-center gap-2">
                  <FaPowerOff
                    className="text-slate-600 block ml-0.5"
                    size={19}
                  />
                  <li className="my-1" onClick={handleLogOut}>
                    Sign Out
                  </li>
                </Link>
                <hr className="mb-2 text-slate-300" />
              </ul>
              <div className="flex items-center gap-2">
                <h5 className="text-base font-semibold text-slate-600 mt-2">
                  Mode:
                </h5>
                <div className="flex items-center gap-2">
                  <span className="h-8 w-8 flex items-center justify-center rounded cursor-pointer btn-style">
                    <IoMdSunny size={20} />
                  </span>
                  <span className="h-8 w-8 flex items-center justify-center rounded cursor-pointer">
                    <BsMoonStars size={20} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
