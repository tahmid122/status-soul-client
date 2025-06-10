import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const About = () => {
  return (
    <div>
      <h1 className="font-bold text-xl">Profile Info</h1>
      <div className="border border-slate-300 rounded p-3 mt-3">
        <h3 className="font-bold text-base">Overview</h3>
        <p>
          He moonlights difficult engrossed it, sportsmen. Interested has all
          Devonshire difficulty gay assistance joy. Handsome met debating sir
          dwelling age material. As style lived he worse dried. Offered related
          so visitors we private removed. Moderate do subjects to distance.
        </p>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-4">
        <div className="flex items-center justify-between py-3 px-4 border border-slate-300 rounded-md">
          <div className="text-base flex items-center justify-center gap-2">
            <span>🗓️ Born: </span>
            <span className="font-semibold">April 4, 2005</span>
          </div>
          <div>
            <button className="cursor-pointer">
              <HiOutlineDotsHorizontal size={18} />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between py-3 px-4 border border-slate-300 rounded-md">
          <div className="text-base flex items-center justify-center gap-2">
            <span>♥️ Status: </span>
            <span className="font-semibold">Married</span>
          </div>
          <div>
            <button className="cursor-pointer">
              <HiOutlineDotsHorizontal size={18} />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between py-3 px-4 border border-slate-300 rounded-md">
          <div className="text-base flex items-center justify-center gap-2">
            <span>💼 Work: </span>
            <span className="font-semibold">Lead Developer</span>
          </div>
          <div>
            <button className="cursor-pointer">
              <HiOutlineDotsHorizontal size={18} />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between py-3 px-4 border border-slate-300 rounded-md">
          <div className="text-base flex items-center justify-center gap-2">
            <span>🏠 Lives In: </span>
            <span className="font-semibold">New York, USA</span>
          </div>
          <div>
            <button className="cursor-pointer">
              <HiOutlineDotsHorizontal size={18} />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between py-3 px-4 border border-slate-300 rounded-md">
          <div className="text-base flex items-center justify-center gap-2">
            <span>🕰️ Join On: </span>
            <span className="font-semibold">November 10, 2020</span>
          </div>
          <div>
            <button className="cursor-pointer">
              <HiOutlineDotsHorizontal size={18} />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between py-3 px-4 border border-slate-300 rounded-md">
          <div className="text-base flex items-center justify-center gap-2">
            <span>📩 Email: </span>
            <span className="font-semibold">tahmid@gmail.com</span>
          </div>
          <div>
            <button className="cursor-pointer">
              <HiOutlineDotsHorizontal size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
