import React from "react";
import { FaRegEye } from "react-icons/fa6";

const AccountSetting = () => {
  return (
    <>
      <div className="bg-white flex flex-col gap-4 rounded-xl py-12 shadow-2xl px-8">
        <div className="border-b-2 border-gray-400 pb-8">
          <p className="font-bold text-2xl">Details Information</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 mb-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="font-bold">First Name</p>
            <input
              type="text"
              placeholder="Jonas"
              className="px-4 py-3 rounded-xl border-2 border-gray-400 font-bold outline-none shadow-2xl "
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <p className="font-bold">Last Name</p>
            <input
              type="text"
              placeholder="Jonas"
              className="px-4 py-3 rounded-xl border-2 border-gray-400 font-bold outline-none shadow-2xl "
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 flex flex-col gap-4">
            <p className="font-bold">E-mail</p>
            <input
              type="text"
              placeholder="Jonas"
              className="px-4 py-3 rounded-xl border-2 border-gray-400 font-bold outline-none shadow-2xl "
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <p className="font-bold">Phone Number</p>
            <input
              type="text"
              placeholder="Jonas"
              className="px-4 py-3 rounded-xl border-2 border-gray-400 font-bold outline-none shadow-2xl "
            />
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col gap-4 rounded-xl py-12 shadow-2xl px-8">
        <div className="border-b-2 border-gray-400 pb-8">
          <p className="font-bold text-2xl">Account and Privacy</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 pt-4">
          <div className="flex-1 flex flex-col gap-4">
            <p className="font-bold">New Password</p>
            <div className="flex px-4 py-3 rounded-xl items-center border-2 border-gray-400 font-bold outline-none shadow-2xl ">
              <input
                type="password"
                placeholder="Write your password"
                className="w-full text-sm lg:text-xl outline-none"
              />
              <FaRegEye className="text-xl text-gray-500" />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <p className="font-bold">Confirm Password</p>
            <div className="flex px-4 py-3 rounded-xl items-center border-2 border-gray-400 font-bold outline-none shadow-2xl ">
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full text-sm lg:text-xl outline-none"
              />
              <FaRegEye className="text-xl text-gray-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8 flex justify-center lg:justify-start">
        <button className="px-16 py-3 w-full lg:w-max bg-blue-600 font-bold text-white cursor-pointer rounded-xl">
          Update changes
        </button>
      </div>
    </>
  );
};

export default AccountSetting;
