import React from "react";
import Live from "../live.svg";
import Course from "../course.svg";
import Scholarship from "../Screenshot (248).svg";
import Ads from "../ads.svg";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function SideBody() {
  return (
    <>
      <div>
        <div className="pb-[225px] pl-20 pt-20">
          <div>
            <h1 className="text-5xl text-white font-bold leading-relaxed cursor-default">
              Access curated courses worth
              <br />
              <p>
                ₹&nbsp;
                <span className=" line-through decoration-red-600 decoration-8 text-6xl">
                  18,500
                </span>
                &nbsp;at just&nbsp;
                <span className="text-blue-500 text-6xl">₹ 99</span>&nbsp;per
                year!
              </p>
            </h1>
          </div>
          <div className="flex-col space-y-7 ml-12 mt-6">
            <div className="flex space-x-6">
              <img src={Course} alt="read" className="w-14 h-14" />
              <p className="flex text-3xl text-white font-semibold cursor-default">
                <p className="text-blue-500">100+</p>&nbsp;Job relevant courses{" "}
              </p>
            </div>
            <div className="flex space-x-6">
              <AiOutlineClockCircle className="text-white w-14 h-14" />
              <p className="flex text-3xl text-white font-semibold cursor-default ">
                <p className="text-blue-500">20,000+</p>&nbsp;Hours of content
              </p>
            </div>
            <div className="flex space-x-6">
              <img src={Live} alt="read" className="w-14 h-14" />
              <p className="flex text-3xl text-white font-semibold cursor-default">
                <p className="text-blue-500">Exclusive </p>&nbsp;webinar access
              </p>
            </div>
            <div className="flex space-x-6">
              <img src={Scholarship} alt="read" className="w-14 h-14" />
              <p className="flex text-3xl text-white font-semibold cursor-default">
                Scholarship worth&nbsp;
                <span className="text-blue-500">₹94,500</span>
              </p>
            </div>
            <div className="flex space-x-6">
              <img src={Ads} alt="read" className="w-14 h-14" />
              <p className="flex text-3xl text-white font-semibold cursor-default">
                <p className="text-blue-500">Ad Free </p>&nbsp;learning
                experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
