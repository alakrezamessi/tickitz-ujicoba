import React, { Fragment } from "react";
import Icon from "../../components/elements/Icon";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router";
import useTitle from "../../hooks/useTitle";

const ResultPayment = () => {
  useTitle("Success Order");
  const history = useSelector((state) => state.history.datas);
  return (
    <div className="min-h-screen flex lg:flex-row flex-col">
      <div
        className="flex-[5] min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://s3-alpha-sig.figma.com/img/0e4c/3c18/18a79468d72ed11ecff06ce23da1248d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MJzt~O~SJXevyBDqjV8g-vCykVP-Exye3qRB0A15edi-op0z3xcnmqqNDFlYmBk1f8BhyqIeOamCnzcoyCTIuqQJexR9CuZwoEVeBCbXkYVEDGsFCHq4TcpxZ2OSunu4akju9SKKSajbKUjlkAZng6HK9GmiBIIEj7KkU0L97w2R-bKhTEjzHEggAzBW1vujup2f5h09ZF7yClb9UC3kUmwPRxHy2-YBLr1xw-sf858QFTpJdEa8yrJ8zImv3iNJKwzxpJ3KsJwjzBPupnjVU3zAX7E5GKuWzfXycqnlw-BU1JilER6MNF-OsIqgKYlkgtB~AJ8Ye7YiLt2~On55Yg__)",
        }}
      >
        <div className="h-full w-full absolute top-0 right-0 bg-black/70 flex flex-col px-4 lg:px-8 md:px-12 xl:px-24 gap-4 justify-center">
          <Icon />
          <p className="text-white font-bold text-xl lg:text-5xl">
            Thankyou For Purchasing
          </p>
          <p className="text-gray-300 lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur. Quam pretium pretium tempor
            integer sed magna et.Lorem ipsum dolor sit amet consectetur. Quam
            pretium pretium tempor integer sed magna et.
          </p>
          <div className="flex gap-4">
            <p className="text-white font-bold">Please Download Your Ticket</p>
            <FaLongArrowAltRight className="text-white font-bold text-2xl" />
          </div>
        </div>
      </div>
      <div className="flex-[3] min-h-screen py-12   lg:py-0 bg-gray-300 flex flex-col gap-8 justify-center items-center">
        {[history[history.length - 1]].map((data, idx) => {
          console.log(`dari history`, data);
          return (
            <Fragment key={idx}>
              <div className="bg-white flex flex-col px-12 py-8">
                <div
                  className="w-52 sm:w-60 h-60 bg-center bg-cover"
                  style={{
                    backgroundImage:
                      "url(https://s3-alpha-sig.figma.com/img/09c9/4f8a/5c8639cbd11fc28260c6b0d752134f07?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XOyIS0nOG5x3fYYmf5S9nd~qWfzVj8RxDYhgFXBeLmssackGalX6AU9vQ7U4Qn26KInRhmeu7YkDhBPCFAUVsvRwPj0kUiygpNb6laEmb4WjukasjLYZGPSCffcMDM1xg7H~hdfjfPolj1vsp84I-ZfJQ26mtq-OH4ivhm2gCL2rN7FZWiM9oJR7Kb35akMIKA07KpJKtSX-BXhhHn-Tcw9QHhxrRQxrBkREzM5-8r-TpRKdgIscYnM7~ohkk7aqkJkLfPhA3SxGcY2Q-mmJGFKQpsycsDBykmIMEthAqs-GucQfnyZ-tymUtshEtPlnAIAhHsXv1i1AWBcJTooMJg__)",
                  }}
                ></div>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between">
                    <div className="flex items-start flex-col">
                      <p className="text-gray-400 font-semibold">Movie</p>
                      <p className="font-bold text-ellipsis whitespace-nowrap max-w-32 overflow-hidden">
                        {data.title}
                      </p>
                    </div>
                    <div className="flex items-end flex-col">
                      <p className="text-gray-400 font-semibold">Category</p>
                      <p className="font-bold">PG-13</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-start flex-col">
                      <p className="text-gray-400 font-semibold">Date</p>
                      <p className="font-bold">{data.bookTickets.date}</p>
                    </div>
                    <div className="flex items-end flex-col">
                      <p className="text-gray-400 font-semibold">Time</p>
                      <p className="font-bold">{data.bookTickets.time}</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-start flex-col">
                      <p className="text-gray-400 font-semibold">Count</p>
                      <p className="font-bold">{data.seat.length} pcs</p>
                    </div>
                    <div className="flex items-end flex-col">
                      <p className="text-gray-400 font-semibold">Seats</p>
                      <div className="flex font-bold">
                        {data.seat.join(",")}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full border-2 border-gray-400 shadow-2xl flex justify-between mt-6 rounded-md px-4 py-2">
                  <p className="font-bold">Total</p>
                  <p className="font-bold">${data.seat.length * 10}</p>
                </div>
              </div>
              <div className="w-[70%] md:w-[50%] xl:w-[70%] lg:w-[80%] text-blue-600 font-bold text-2xl  flex py-4 justify-center gap-4 items-center shadow-2xl border-2 border-blue-600 rounded-md">
                <MdFileDownload />
                <p>Download</p>
              </div>
              <Link
                to="/"
                replace
                className="w-[70%] md:w-[50%] xl:w-[70%] lg:w-[80%] lg:mb-0 text-white font-bold text-2xl flex py-4 justify-center gap-4 items-center  shadow-2xl bg-blue-600 rounded-md"
              >
                Done
              </Link>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ResultPayment;
