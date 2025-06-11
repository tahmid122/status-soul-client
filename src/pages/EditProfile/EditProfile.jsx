import React from "react";
import useAuth from "../../hooks/useAuth";
import { getFormData } from "../../utils/getFormData";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const EditProfile = () => {
  const { user, dbUser, setDbUser } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = getFormData(e.target);
    axiosSecure
      .put(`/users?email=${user.email}`, data)
      .then((res) => {
        if (res.data.email) {
          setDbUser(res.data);
          toast.success("Profile Updated");
          navigate("/profile");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-white p-5 rounded-md">
      <h3 className="text-xl font-bold">Edit Profile</h3>
      <div className="mt-5">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Name
              </label>
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  defaultValue={dbUser?.name}
                  required
                  className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Email
              </label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  defaultValue={user.email}
                  readOnly
                  className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                  placeholder="Enter your name"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Location
              </label>
              <div className="relative flex items-center">
                <input
                  name="location"
                  type="text"
                  defaultValue={dbUser?.location}
                  required
                  className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                  placeholder="Enter your location"
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Role
              </label>
              <div className="relative flex items-center">
                <input
                  name="role"
                  type="text"
                  defaultValue={dbUser?.role}
                  required
                  className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                  placeholder="Enter your work position"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Profile Image
              </label>
              <div className="relative flex items-center">
                <input
                  name="proImage"
                  type="link"
                  required
                  defaultValue={dbUser?.proImage}
                  className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                  placeholder="Enter profile image url"
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Cover Image
              </label>
              <div className="relative flex items-center">
                <input
                  name="coverImage"
                  type="link"
                  required
                  defaultValue={dbUser?.coverImage}
                  className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                  placeholder="Enter cover image url"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Date of birth
              </label>
              <div className="relative flex items-center">
                <input
                  name="dob"
                  type="date"
                  required
                  defaultValue={dbUser?.dob}
                  className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                  placeholder="Enter your date of birth"
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Status
              </label>
              <div className="relative flex items-center">
                <select
                  name="status"
                  required
                  defaultValue={dbUser?.status}
                  className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                  placeholder="Enter cover image url"
                >
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                </select>
              </div>
            </div>
          </div>
          <button className="btn btn-style">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
