import React from "react";
import { Link } from "react-router";
import { FiPlus } from "react-icons/fi";
import SinglePost from "./SinglePost/SinglePost";
const Home = () => {
  return (
    <div className="lg:w-10/12 mx-auto p-2 lg:p-0">
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-3 bg-white rounded-t-md overflow-hidden mb-5 rounded-md shadow cursor-pointer max-h-[80vh]">
          <img
            className="h-15 w-full"
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <img
              className="w-20 h-20 border-4 border-white rounded-md mx-auto -translate-y-5"
              src="https://stackbros.in/social/assets/images/avatar/07.jpg"
              alt=""
            />
            <div className="text-center px-5">
              <h5 className="font-bold text-xl">Sam Lanson</h5>
              <p className="text-sm">Web Developer at StackBros</p>
              <p className="mt-2">
                I'd love to change the world, but they won’t give me the source
                code.
              </p>
            </div>
          </div>
          <div className="px-2">
            <div className="mt-2 flex items-center justify-between py-5 text-center border-b border-slate-400">
              <div className="px-5 flex flex-col border-r border-slate-400">
                <span className="text-balance font-bold">258</span>
                <small className="text-sm">Post</small>
              </div>
              <div className="px-5 flex flex-col border-r border-slate-400">
                <span className="text-balance font-bold">2.5k</span>
                <small className="text-sm">Followers</small>
              </div>
              <div className="px-5 flex flex-col">
                <span className="text-balance font-bold">365</span>
                <small className="text-sm">Following</small>
              </div>
            </div>
          </div>
          <ul className="my-5 px-5 space-y-3">
            <li className="text-base font-bold flex items-center gap-1 cursor-pointer">
              <span>🏠</span>Feed
            </li>
            <li className="text-base font-bold flex items-center gap-1 cursor-pointer">
              <span>👤</span>Connections
            </li>
            <li className="text-base font-bold flex items-center gap-1 cursor-pointer">
              <span>🌏</span>Latest News
            </li>
            <li className="text-base font-bold flex items-center gap-1 cursor-pointer">
              <span>👥</span>Groups
            </li>
            <li className="text-base font-bold flex items-center gap-1 cursor-pointer">
              <span>🛞</span>Settings
            </li>
          </ul>
          <div className="text-center w-full border-t border-slate-400 py-2 text-sm font-semibold text-red-700">
            View Profile
          </div>
        </div>
        <div className="col-span-6 mb-5">
          <div className="bg-white rounded-md p-4">
            <div className="flex items-center gap-5">
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://stackbros.in/social/assets/images/avatar/07.jpg"
                alt=""
              />
              <input
                type="text"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                placeholder="Share your thoughts.."
                className="border-none outline-none focus:outline-none text-base py-2"
              />
            </div>
            <div className="flex items-center gap-2 mt-5">
              <button className="flex items-center justify-center gap-1 bg-slate-100 p-1 px-2 rounded text-sm">
                <span className="text-xl flex items-center -mt-1 justify-center">
                  📸
                </span>{" "}
                Photo
              </button>
              <button className="flex items-center justify-center gap-1 bg-slate-100 p-1 px-2 rounded text-sm">
                <span className="text-xl flex items-center -mt-1 justify-center">
                  📽️
                </span>{" "}
                Video
              </button>
              <button className="flex items-center justify-center gap-1 bg-slate-100 p-1 px-2 rounded text-sm">
                <span className="text-xl flex items-center -mt-1 justify-center">
                  😊
                </span>{" "}
                Feeling/activity
              </button>
            </div>
          </div>
          <div className="mt-5 space-y-5">
            <SinglePost />
            <SinglePost />
          </div>
        </div>
        <div className="col-span-3 rounded-md">
          <div className="bg-white p-5 rounded-md">
            <h4 className="text-xl font-bold">Who to follow</h4>
            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    className="h-14 w-14 rounded-full"
                    src="https://stackbros.in/social/assets/images/avatar/02.jpg"
                    alt=""
                  />
                  <div className="leading-2">
                    <h5 className="font-bold text-base">Judy Nguyen</h5>
                    <small className="text-sm">News anchor</small>
                  </div>
                </div>
                <button className="bg-gray-100 h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
                  <FiPlus size={20} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    className="h-14 w-14 rounded-full"
                    src="https://stackbros.in/social/assets/images/avatar/04.jpg"
                    alt=""
                  />
                  <div className="leading-2">
                    <h5 className="font-bold text-base">Judy Nguyen</h5>
                    <small className="text-sm">Web Developer</small>
                  </div>
                </div>
                <button className="bg-gray-100 h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
                  <FiPlus size={20} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    className="h-14 w-14 rounded-full"
                    src="https://stackbros.in/social/assets/images/avatar/11.jpg"
                    alt=""
                  />
                  <div className="leading-2">
                    <h5 className="font-bold text-base">Billy Vasquez</h5>
                    <small className="text-sm">News anchor</small>
                  </div>
                </div>
                <button className="bg-gray-100 h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
                  <FiPlus size={20} />
                </button>
              </div>
              <button className="btn w-full btn-style">View More</button>
            </div>
          </div>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-0">
          <form
            method="dialog"
            className="flex items-center justify-between p-5"
          >
            <h3 className="font-bold text-lg">Create Post</h3>
            <button className="btn btn-sm btn-circle btn-ghost">✕</button>
          </form>
          <hr className="mb-5 text-slate-300 w-full" />
          <form className="px-5 pb-5">
            <div className="flex items-start gap-3">
              <img
                className="h-12 w-12 object-cover rounded-full"
                src="https://stackbros.in/social/assets/images/avatar/07.jpg"
                alt=""
              />
              <div className="leading-0">
                <h5 className="font-bold text-base">Sam Lanson</h5>
                <span className="text-sm ">Public</span>
              </div>
            </div>
            <textarea
              name="message"
              className="w-full mt-3 py-3 outline-none border-none min-h-[200px]"
              placeholder="Share your thoughts.."
            ></textarea>
            <div className="flex items-center gap-2">
              <span className="text-base h-8 w-8 flex items-center justify-center rounded-full bg-green-200 cursor-pointer">
                📸
              </span>
              <span className="text-base h-8 w-8 flex items-center justify-center rounded-full bg-blue-200 cursor-pointer">
                📽️
              </span>
              <span className="text-base h-8 w-8 flex items-center justify-center rounded-full bg-pink-200 cursor-pointer">
                😊
              </span>
            </div>
            <div className="text-right">
              <button className="btn btn-style">POST</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Home;
