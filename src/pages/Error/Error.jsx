import React from "react";
import Lottie from "lottie-react";
import error from "../../assets/error.json";
const Error = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Lottie animationData={error} loop={true} size={"100"} />
    </div>
  );
};

export default Error;
