import React from "react";
import { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { getFormData } from "../../../utils/getFormData";
import { FaTrash } from "react-icons/fa6";
const SinglePost = ({ post, handleDelete }) => {
  const axiosSecure = useAxiosSecure();
  const { user, dbUser } = useAuth();
  const [comments, setComments] = useState(post?.comments);
  const [like, setLike] = useState(post?.likedBy.length);
  const [isLiked, setIsLiked] = useState(post?.likedBy.includes(user.email));
  const handleUpdate = () => {
    console.log(post._id);
  };
  const handleLike = (id) => {
    axiosSecure
      .patch(`/posts/like?id=${id}&email=${user.email}`)
      .then((res) => {
        if (res.data.liked === true) {
          setLike((prev) => prev + 1);
          setIsLiked(true);
        } else {
          setLike((prev) => prev - 1);
          setIsLiked(false);
        }
      })
      .catch((error) => console.log(error));
  };
  const handleComment = (e, id) => {
    console.log(id);
    e.preventDefault();
    const data = getFormData(e.target);
    data.name = dbUser?.name;
    data.proImage = dbUser?.proImage;
    data.id = new Date().getTime() + id;
    data.postId = post._id;
    axiosSecure
      .patch(`/posts/comment?email=${user.email}&id=${id}`, data)
      .then((res) => {
        if (res.data.modifiedCount) {
          setComments((prev) => [...prev, data]);
          e.target.reset();
        }
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };
  const handleDeleteComment = (id) => {
    console.log(id);
    axiosSecure
      .delete(`/posts/comment?email=${user.email}&id=${id}&postId=${post._id}`)
      .then((res) => {
        if (res.data.modifiedCount) {
          const filteredData = comments.filter((comment) => comment.id !== id);
          setComments(filteredData);
        }
      })
      .catch((error) => console.log(error));
  };
  console.log(comments);
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
        <details className="dropdown dropdown-end">
          <summary className="btn">
            <HiOutlineDotsHorizontal size={18} />
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <button onClick={handleUpdate}>Update</button>
            </li>
            <li>
              <button onClick={() => handleDelete(post._id)}>Delete</button>
            </li>
          </ul>
        </details>
      </div>
      <div className="w-full h-auto py-5 flex items-center justify-center text-center text-xl">
        <p className="my-3">{post.message}</p>
      </div>
      <div className="flex items-center gap-3 mt-5">
        <span
          onClick={() => handleLike(post._id)}
          className="text-base font-semibold btn border-none bg-white hover:bg-gray-100"
        >
          👍{isLiked ? "Liked" : "Like"} ({like})
        </span>
        <span className="text-base font-semibold btn border-none bg-white hover:bg-gray-100">
          💬Comments ({comments.length})
        </span>
      </div>
      {/* comments */}
      <div className="mt-5 w-full space-y-5">
        <div className="flex items-start gap-3 w-full">
          <img
            className="h-10 w-10 rounded-full"
            src={dbUser?.proImage}
            alt=""
          />
          <div className="w-full relative">
            <form onSubmit={(e) => handleComment(e, post?._id)}>
              <textarea
                name="comment"
                className="outline-none border border-slate-300 rounded-md w-full resize p-2 h-auto pr-10"
                placeholder="Add comments.."
              ></textarea>
              <button className="btn btn-style absolute top-3 right-3">
                Post
              </button>
            </form>
          </div>
        </div>
        <div className="space-y-2">
          {comments &&
            comments.map((comment) => (
              <div key={comment?.id} className="flex items-start gap-2">
                <img
                  className="h-10 w-10 rounded-full"
                  src={comment?.proImage}
                  alt=""
                />
                <div className="pl-5 pr-2 py-1 rounded-tl-none bg-gray-200 rounded-md">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-bold">{comment?.name}</h3>
                    <button
                      onClick={() => handleDeleteComment(comment?.id)}
                      className="text-xs p-1 cursor-pointer rounded btn-style text-white"
                    >
                      <FaTrash />
                    </button>
                  </div>{" "}
                  <p className="text-sm mt-1">{comment?.comment}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
