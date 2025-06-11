import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoBagSharp } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendarPlus } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router";
const Profile = () => {
  return (
    <div className="lg:w-10/12 mx-auto p-2 gap-6">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <div className="rounded-md bg-white overflow-hidden">
            <div className="w-full h-[250px] object-cover">
              <img
                className="w-full h-full"
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="flex items-center justify-between px-4 -translate-y-8">
              <div className="flex items-center gap-3">
                <img
                  className="h-[120px] w-[120px]  rounded-full border-4 border-white"
                  src="https://stackbros.in/social/assets/images/avatar/07.jpg"
                  alt=""
                />
                <div>
                  <h4 className="font-bold text-xl">Sam Lanson</h4>
                  <p className="text-[15px]">250 connections</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="btn btn-style">Edit profile</button>
                <button className="flex items-center justify-center btn bg-gray-100 border-none outline-none font-bold">
                  <HiOutlineDotsHorizontal size={18} />
                </button>
              </div>
            </div>
            <div className="px-4 -mt-5">
              <ul className="flex items-center gap-4">
                <li className="flex items-center gap-1 text-slate-600">
                  <span className="flex items-center justify-center">
                    <IoBagSharp size={24} />
                  </span>
                  <span className="text-base">Lead Developer</span>
                </li>
                <li className="flex items-center gap-1 text-slate-600">
                  <span className="flex items-center justify-center">
                    <IoLocationOutline size={24} />
                  </span>
                  <span className="text-base">New York</span>
                </li>
                <li className="flex items-center gap-1 text-slate-600">
                  <span className="flex items-center justify-center">
                    <FaRegCalendarPlus size={24} />
                  </span>
                  <span className="text-base">Joined on November 13, 2020</span>
                </li>
              </ul>
            </div>
            <hr className="my-2 text-slate-300" />
            <div>
              <ul className="flex items-center gap-4 px-4 proNav">
                <li className="text-base font-semibold py-4">
                  <NavLink to={"posts"}>Posts</NavLink>
                </li>
                <li className="text-base font-semibold py-4">
                  <NavLink to={"about"}>About</NavLink>
                </li>
                <li className="text-base font-semibold py-4">
                  <NavLink to={"connections"}>Connections</NavLink>
                </li>
                <li className="text-base font-semibold py-4">
                  <NavLink to={"media"}>Media</NavLink>
                </li>
                <li className="text-base font-semibold py-4">
                  <NavLink to={"videos"}>Videos</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-5">
            <Outlet />
          </div>
        </div>
        <div className="col-span-4 space-y-5">
          <div className="bg-white  rounded-md p-4 space-y-5">
            <h4 className="text-xl font-bold">About</h4>
            <p>
              He moonlights difficult engrossed it, sportsmen. Interested has
              all Devonshire difficulty gay assistance joy.
            </p>
            <ul className="space-y-1 mt-5">
              <li className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-base">
                  <BsCalendar2Date size={20} />
                  Born:
                </span>
                <span className="font-bold text-base">April 3, 2005</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-base">
                  <FaRegHeart size={20} /> Status:
                </span>
                <span className="font-bold text-base">Married</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-base">
                  <MdOutlineEmail size={20} /> Email:
                </span>
                <span className="font-bold text-base">tahmid@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-md p-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold">Photos</h4>
              <button className="btn btn-style">See all photo</button>
            </div>
            <div className="grid grid-cols-6 gap-2 mt-5">
              <div className="col-span-3">
                <img
                  className="h-40 w-full rounded-xl object-cover"
                  src="https://stackbros.in/social/assets/images/albums/01.jpg"
                  alt=""
                />
              </div>
              <div className="col-span-3">
                <img
                  className="h-40 w-full rounded-xl object-cover"
                  src="https://stackbros.in/social/assets/images/albums/02.jpg"
                  alt=""
                />
              </div>
              <div className="col-span-2">
                <img
                  className="h-28 w-full rounded-xl"
                  src="https://stackbros.in/social/assets/images/albums/03.jpg"
                  alt=""
                />
              </div>
              <div className="col-span-2">
                <img
                  className="h-28 w-full rounded-xl"
                  src="https://stackbros.in/social/assets/images/albums/04.jpg"
                  alt=""
                />
              </div>
              <div className="col-span-2">
                <img
                  className="h-28 w-full rounded-xl"
                  src="https://stackbros.in/social/assets/images/albums/05.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md p-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold">Friends</h4>
              <button className="btn btn-style">See all friends</button>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-5">
              <div className="border border-slate-300 rounded p-2 text-center">
                <img
                  className="h-[90px] w-[90px] rounded-full object-cover mx-auto"
                  src="https://stackbros.in/social/assets/images/avatar/02.jpg"
                  alt=""
                />
                <div className="mt-2">
                  <h5 className="text-lg font-bold">Amanda Reed</h5>
                  <p className="text-sm">16 mutual connections</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <button className="btn-style h-7 w-7 flex items-center justify-center rounded cursor-pointer">
                      <MdOutlineMessage size={16} />
                    </button>
                    <button className="btn-style h-7 w-7 flex items-center justify-center rounded cursor-pointer">
                      <FaUserPlus size={16} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="border border-slate-300 rounded p-2 text-center">
                <img
                  className="h-[90px] w-[90px] rounded-full object-cover mx-auto"
                  src="https://stackbros.in/social/assets/images/avatar/03.jpg"
                  alt=""
                />
                <div className="mt-2">
                  <h5 className="text-lg font-bold">Samuel Bishop</h5>
                  <p className="text-sm">22 mutual connections</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <button className="btn-style h-7 w-7 flex items-center justify-center rounded cursor-pointer">
                      <MdOutlineMessage size={16} />
                    </button>
                    <button className="btn-style h-7 w-7 flex items-center justify-center rounded cursor-pointer">
                      <FaUserPlus size={16} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="border border-slate-300 rounded p-2 text-center">
                <img
                  className="h-[90px] w-[90px] rounded-full object-cover mx-auto"
                  src="https://stackbros.in/social/assets/images/avatar/01.jpg"
                  alt=""
                />
                <div className="mt-2">
                  <h5 className="text-lg font-bold">Bryan Knight</h5>
                  <p className="text-sm">1 mutual connections</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <button className="btn-style h-7 w-7 flex items-center justify-center rounded cursor-pointer">
                      <MdOutlineMessage size={16} />
                    </button>
                    <button className="btn-style h-7 w-7 flex items-center justify-center rounded cursor-pointer">
                      <FaUserPlus size={16} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="border border-slate-300 rounded p-2 text-center">
                <img
                  className="h-[90px] w-[90px] rounded-full object-cover mx-auto"
                  src="https://stackbros.in/social/assets/images/avatar/05.jpg"
                  alt=""
                />
                <div className="mt-2">
                  <h5 className="text-lg font-bold">Eve Paul</h5>
                  <p className="text-sm">7 mutual connections</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <button className="btn-style h-7 w-7 flex items-center justify-center rounded cursor-pointer">
                      <MdOutlineMessage size={16} />
                    </button>
                    <button className="btn-style h-7 w-7 flex items-center justify-center rounded cursor-pointer">
                      <FaUserPlus size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
