import React from "react";
import { hourglass } from "ldrs";

const Spinner = () => {
  hourglass.register();
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white z-20">
      <l-hourglass
        size="80"
        bg-opacity="0.1"
        speed="1.75"
        color="black"
      ></l-hourglass>
    </div>
  );
};

export default Spinner;

// Default values shown
