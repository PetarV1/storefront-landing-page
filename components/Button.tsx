import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-mainPurple hover:bg-purple-500 text-white text-md font-size: 0.75rem py-2 px-4 border-b-4 shadow-md border-mainBlack rounded transition duration-200 ease-in-out">
      {children}
    </button>
  );
};

export default Button;
