import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const SinglePost = ({ post }) => {
  return (
    <div className="bg-white rounded-md p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="h-14 w-14 rounded-full" src={post.proImage} alt="" />
          <div className="leading-2">
            <div className="flex items-center gap-2">
              <h5 className="font-bold text-base">{post.name}</h5>{" "}
              <span className="text-sm">. {post.postedAt.split("T")[0]}</span>
            </div>
            <small className="text-sm">{post.role}</small>
          </div>
        </div>
        <button className="cursor-pointer">
          <HiOutlineDotsHorizontal size={18} />
        </button>
      </div>
      <div className="w-full h-auto py-5 flex items-center justify-center text-center text-xl">
        <p className="my-3">{post.message}</p>
      </div>
      <div className="flex items-center gap-3 mt-5">
        <span className="text-base font-semibold btn border-none bg-white hover:bg-gray-100">
          👍Likes (56)
        </span>
        <span className="text-base font-semibold btn border-none bg-white hover:bg-gray-100">
          💬Comments (12)
        </span>
      </div>
      {/* <div className="mt-5 w-full space-y-5">
        <div className="flex items-start gap-3 w-full">
          <img
            className="h-10 w-10 rounded-full"
            src="https://stackbros.in/social/assets/images/avatar/12.jpg"
            alt=""
          />
          <div className="w-full relative">
            <textarea
              name="comment"
              className="outline-none border border-slate-300 rounded-md w-full resize p-2 h-auto"
              placeholder="Add comments.."
            ></textarea>
            <button className="btn btn-style absolute top-3 right-3">
              Post
            </button>
          </div>
        </div>
        <div className="space-y-5">
          <div className="flex items-start gap-5">
            <img
              className="h-10 w-10 rounded-full"
              src="https://stackbros.in/social/assets/images/avatar/12.jpg"
              alt=""
            />
            <div className="px-5 py-3 rounded-tl-none bg-gray-200 rounded-md">
              <h3 className="text-lg font-bold">Eve Paul</h3>
              <p className="text-sm mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, ad nesciunt! Earum dolore debitis ipsam! Velit ad
                provident laudantium voluptatem doloribus accusamus officiis
                consequatur asperiores incidunt, vel minus, itaque adipisci!
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <img
              className="h-10 w-10 rounded-full"
              src="https://stackbros.in/social/assets/images/avatar/12.jpg"
              alt=""
            />
            <div className="px-5 py-3 rounded-tl-none bg-gray-200 rounded-md">
              <h3 className="text-lg font-bold">Eve Paul</h3>
              <p className="text-sm mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, ad nesciunt! Earum dolore debitis ipsam! Velit ad
                provident laudantium voluptatem doloribus accusamus officiis
                consequatur asperiores incidunt, vel minus, itaque adipisci!
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SinglePost;
