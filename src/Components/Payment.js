import React from "react";
import { useState } from "react";
import { BsFill1CircleFill } from "react-icons/bs";
import { BsFill2CircleFill } from "react-icons/bs";
import { MdCheckCircle } from "react-icons/md";
import { MdLens } from "react-icons/md";
import Clock from "../clock.svg"

export default function Payment() {
  const [toggle, settoggle] = useState(1);
  const toggleTab = (index) => {
    settoggle(index);
    let x = document.getElementById("total");
    let y = document.getElementById("fee");
    let z = document.getElementById("discount");
    if (index === 1) {
      x.innerText = "₹352";
      y.innerText = "₹18500";
      z.innerText = "- ₹18201";
    }
    else if (index === 2) {
      x.innerText = "₹235";
      y.innerText = "₹9500";
      z.innerText = "- ₹9301";
    }
    else if (index === 3) {
      x.innerText = "₹175";
      y.innerText = "₹5000";
      z.innerText = "- ₹4851";
    }
  };

  return (
    <div>
      <div className="bg-white mt-10 rounded-lg w-[600px]">
        <div className="flex space-x-32 py-5 ml-40">
          <div className="font-normal space-y-2">
            <BsFill1CircleFill className="flex justify-center ml-6 text-2xl cursor-default text-blue-600" />
            <h1 className="text-lg cursor-default">Sign Up</h1>
          </div>
          <div className=" font-normal space-y-2">
            <BsFill2CircleFill className="flex justify-center ml-7 text-2xl cursor-default text-blue-600" />
            <h1 className="text-lg cursor-default">Subscribe</h1>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold ml-40 mr-8 cursor-default">
            Select your Subscription plan
          </h1>
        </div>
        <div className="space-y-4 my-6">
          <div className="flex justify-between px-4 mx-11 border-2 border-gray-500 rounded-lg bg-gray-200 text-gray-500 pb-1">
            <div className="flex mt-3 space-x-4">
              <button>
                <MdLens className="text-3xl mb-1 text-gray-500 bg-inherit rounded-full py-1 px-1 border-2 border-gray-500" />
              </button>
              <div className="-mt-3">
              <p className="bg-red-500 border-none rounded-b-lg ml-1 text-base w-fit px-2 text-white cursor-default">
                    Offer expired
                  </p>
              <h3 className="text-[20px] font-semibold cursor-default">
                12 Month Subscription
              </h3>
              </div>
            </div>
            <div>
              <div className="flex text-base space-x-2 cursor-default">
                <p className="font-normal">Total</p>
                <p className="font-semibold text-base">₹99</p>
              </div>
              <div className="flex text-base space-x-2 cursor-default">
                <p className="font-semibold text-base">₹8</p>
                <p className="font-normal">/mo</p>
              </div>
            </div>
          </div>
          <div
            className={toggle === 1 ? "active-tab" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <div className="flex justify-between px-4 rounded-lg cursor-pointer">
              <div className="flex mt-3 space-x-4">
                <button>
                  <MdCheckCircle className="text-3xl mt-2" id="check-circle" />
                </button>
                <div className="-mt-3">
                  <p className="bg-green-500 border-none rounded-b-lg ml-1 text-base w-fit px-2 text-white">
                    Recommended
                  </p>
                  <h3 className="text-[20px] font-semibold cursor-pointer py-1">
                    12 Month Subscription
                  </h3>
                </div>
              </div>
              <div className="mt-1.5">
                <div className="flex text-lg space-x-3 cursor-pointer">
                  <p className="font-normal">Total</p>
                  <p className="font-semibold text-lg">₹299</p>
                </div>
                <div className="flex text-lg space-x-3 cursor-pointer">
                  <p className="font-semibold text-lg">₹25</p>
                  <p className="font-normal">/mo</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={toggle === 2 ? "active-tab" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <div className="flex justify-between px-4 rounded-lg cursor-pointer">
              <div className="flex mt-3 space-x-4">
                <button>
                  <MdCheckCircle className="text-3xl mb-1" id="check-circle" />
                </button>
                <h3 className="text-[20px] font-semibold cursor-pointer">
                  6 Month Subscription
                </h3>
              </div>
              <div>
                <div className="flex text-lg space-x-3 cursor-pointer">
                  <p className="font-normal">Total</p>
                  <p className="font-semibold text-lg">₹199</p>
                </div>
                <div className="flex text-lg space-x-3">
                  <p className="font-semibold text-lg">₹33</p>
                  <p className="font-normal">/mo</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={toggle === 3 ? "active-tab" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            <div className="flex justify-between px-4 rounded-lg cursor-pointer">
              <div className="flex mt-3 space-x-4 cursor-pointer">
                <button>
                  <MdCheckCircle className="text-3xl mb-1" id="check-circle" />
                </button>
                <h3 className="text-[20px] font-semibold">
                  3 Month Subscription
                </h3>
              </div>
              <div>
                <div className="flex text-lg space-x-3 cursor-pointer">
                  <p className="font-normal">Total</p>
                  <p className="font-semibold text-lg">₹149</p>
                </div>
                <div className="flex text-lg space-x-3 cursor-pointer">
                  <p className="font-semibold text-lg">₹50</p>
                  <p className="font-normal">/mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="px-11">
            <div className="flex border-t-2 border-gray-500 justify-between text-lg px-5 pt-3 cursor-default">
              <p>Subcription Fee</p>
              <p className="font-medium cursor-default" id="fee">₹18500</p>
            </div>
          </div>
          <div className="px-11">
            <div className="border-2 border-orange-500 rounded-md my-2 py-2 px-2 bg-orange-100 text-orange-500">
              <div className="flex justify-between px-5 text-xl font-medium cursor-default">
                <p>Limited time offer</p>
                <p className="text-2xl pl-16" id="discount">- ₹18201</p>
              </div>
              <div className="px-5 text-lg flex space-x-3 mt-1">
                <img
                  src={Clock}
                  alt="clock"
                  className="w-6 h-6 mt-1 text-orange-500"
                />
                <p className="cursor-default">
                  Offer valid till 25th March 2023
                </p>
              </div>
            </div>
          </div>
          <div className="px-11 pb-5">
            <div className="flex justify-between text-lg px-5 pt-1">
              <p className="cursor-default">
                <span className="font-medium">Total</span>&nbsp;(Incl. of 18%
                GST)
              </p>
              <p className="font-medium cursor-default" id="total">
                ₹352
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between px-10">
            <button className="text-xl text-orange-500 font-medium border-2 border-orange-500 bg-orange-100 px-20 py-2 rounded-md uppercase">
              Cancel
            </button>
            <button className="text-xl font-medium border-2 border-green-500 bg-green-500 px-14 py-2 text-white rounded-md uppercase">
              Proceed to Pay
            </button>
          </div>
          <div className="py-5 ml-11 cursor-default">
            <img
              src="https://cdn.razorpay.com/static/assets/merchant-badge/badge-dark.png"
              alt="razorpay"
              className="h-14 w-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
