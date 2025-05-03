import React from "react";

const CardPayment = ({ image, title, setMethodPayment, methodPayment }) => {
  return (
    <label className="w-full lg:w-40 cursor-pointer py-10 lg:h-24  mt-8 lg:mt-0 border border-gray-200 shadow-2xl flex justify-center items-center rounded-xl relative">
      <input
        type="radio"
        checked={title === methodPayment}
        value={title}
        onChange={(e) => setMethodPayment(e.target.value)}
        className="peer"
      />
      <img src={image} className="absolute z-10 " />
      <div className="w-full h-full peer-checked:border-blue-600 peer-checked:border-8 rounded-xl absolute"></div>
    </label>
  );
};

export default CardPayment;
