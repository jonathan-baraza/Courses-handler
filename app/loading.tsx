import React from "react";
import { ImSpinner2 } from "react-icons/im";

const LoadingPage = () => {
  return (
    <div className="w-full h-full  h-screen flex items-center justify-center">
      <ImSpinner2 size={30} className="animate-spin" />
    </div>
  );
};

export default LoadingPage;
