import React, { useEffect, useRef, useState } from "react";
import { getFormData } from "../../../utils/getFormData";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import SinglePost from "../../Home/SinglePost/SinglePost";

const Posts = () => {
  const { dbUser, user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [posts, setPosts] = useState([]);
  const buttonRef = useRef();
  const handlePost = (e) => {
    e.preventDefault();
    const data = getFormData(e.target);
    data.email = dbUser.email;
    data.name = dbUser.name;
    data.proImage = dbUser.proImage;
    data.role = dbUser.role;
    data.postedAt = new Date();
    axiosSecure
      .post(`/posts?email=${user.email}`, data)
      .then((res) => {
        buttonRef.current.click();
        if (res.data) {
          setPosts(res.data.reverse());
          toast.success("Successfully Posted");
        }
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    axiosSecure
      .get(`/user-posts?email=${user.email}`)
      .then((res) => {
        if (res.data) {
          setPosts(res.data.reverse());
        }
      })
      .catch((error) => console.log(error));
  }, [axiosSecure, user]);
  return (
    <div>
      <div className="bg-white rounded-md p-4">
        <div className="flex items-center gap-5">
          <img
            className="h-10 w-10 object-cover rounded-full"
            src={dbUser?.proImage}
            alt=""
          />
          <input
            type="text"
            onClick={() => document.getElementById("my_modal_3").showModal()}
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
        {posts.map((post) => (
          <SinglePost key={post._id} post={post} />
        ))}
      </div>
      {/* modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-0">
          <form
            method="dialog"
            className="flex items-center justify-between p-5"
          >
            <h3 className="font-bold text-lg">Create Post</h3>
            <button ref={buttonRef} className="btn btn-sm btn-circle btn-ghost">
              ✕
            </button>
          </form>
          <hr className="mb-5 text-slate-300 w-full" />
          <form onSubmit={handlePost} className="px-5 pb-5">
            <div className="flex items-start gap-3">
              <img
                className="h-12 w-12 object-cover rounded-full"
                src={dbUser?.proImage}
                alt=""
              />
              <div className="leading-0">
                <h5 className="font-bold text-base">{dbUser?.name}</h5>
                <span className="text-sm ">Public</span>
              </div>
            </div>
            <textarea
              name="message"
              required
              className="w-full mt-3 py-3 outline-none border-none"
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
              <button type="submit" className="btn btn-style">
                POST
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Posts;
