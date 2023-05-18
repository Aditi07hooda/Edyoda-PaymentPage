import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex justify-between w-[1850px] mt-3 mb-4">
      <div className="flex space-x-20 ml-20">
        <h1 className="font-extrabold text-5xl cursor-default" id="edyoda">
          EDYODA
        </h1>
        <div className="flex space-x-12 align-middle mt-3">
          <p className="flex text-2xl font-semibold align-middle cursor-default">
            Courses <FaAngleDown className="mt-1 text-2xl font-light" />
          </p>
          <p className="flex text-2xl font-semibold align-middle cursor-default">
            Programs <FaAngleDown className="mt-1 text-2xl font-light" />
          </p>
        </div>
      </div>
      <div className="flex space-x-12 mr-20">
        <div>
          <FaSearch className="mt-4 text-2xl font-light" />
        </div>
        <div className="flex text-2xl font-semibold align-middle">
          <button>Log in</button>
        </div>
        <div className="flex text-2xl font-semibold align-middle bg-gradient-to-r from-cyan-500 to-blue-500 border-none rounded-full px-6 py-2 text-white ">
          <button>Join Now</button>
        </div>
      </div>
    </div>
  );
}
