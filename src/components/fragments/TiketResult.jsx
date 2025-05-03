import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import hiflix from "../../assets/images/hiflix.png";
import ebuId from "../../assets/images/ebu-id.png";
import { useState } from "react";
const TiketResult = ({ datas }) => {
  const [showDetails, setShowDetails] = useState(false);
  console.log(datas);
  return (
    <>
      <div className="bg-white rounded-xl py-12 shadow-2xl">
        <div className="flex justify-between px-8 mb-4">
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-gray-400">
              Tuesday, 07 July 2020 - 04:30pm
            </p>
            <p className="font-bold text-3xl">Spider-Man: Homecoming</p>
          </div>
          <div className="flex justify-center items-center">
            <img src={hiflix} />
          </div>
        </div>
        <div className="w-full h-1 bg-gray-300"></div>
        <div className="px-8  flex flex-col gap-8">
          <div className="flex mt-8 justify-between">
            <div className="bg-red-200 text-red-500 font-bold w-44 rounded-xl flex justify-center py-4">
              Not Paid
            </div>
            <div
              className="flex gap-4 justify-center items-center cursor-pointer font-bold"
              onClick={() => setShowDetails(!showDetails)}
            >
              <p>Show Details</p>
              {showDetails ? (
                <IoIosArrowUp className="font-bold" />
              ) : (
                <IoIosArrowDown className="font-bold" />
              )}
            </div>
          </div>
          <div
            className={`${
              showDetails
                ? "top-0 transition-all delay-300 flex"
                : "-top-60 hidden"
            } flex-col gap-8 relative`}
          >
            <p className="font-bold text-2xl">Ticket Information</p>
            <div className="flex w-full justify-between items-center">
              <div className="text-gray-400 font-semibold">
                No. Rekening Virtual :
              </div>
              <div className="flex gap-4 items-center">
                <p className="font-bold">12321328913829724</p>
                <button className="px-4 rounded-md py-3 hover:bg-blue-600 hover:text-white cursor-pointer border border-blue-600 text-blue-600">
                  Copy
                </button>
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="font-semibold text-gray-400">Total Payment :</div>
              <div className="font-bold text-blue-600">$30</div>
            </div>
            <div className="text-gray-400 font-semibold text-xl">
              Pay this payment bill before it is due, on{" "}
              <span className="font-bold text-red-400">June 23, 2023.</span> If
              the bill has not been paid by the specified time, it will be
              forfeited
            </div>
            <div>
              <button className="px-8 py-4 border rounded-xl bg-blue-600 text-white font-bold cursor-pointer">
                Cek Pembayaran
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl py-12 shadow-2xl">
        <div className="flex justify-between px-8 mb-4">
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-gray-400">
              Tuesday, 07 July 2020 - 04:30pm
            </p>
            <p className="font-bold text-3xl">Spider-Man: Homecoming</p>
          </div>
          <div className="flex justify-center items-center">
            <img src={hiflix} />
          </div>
        </div>
        <div className="w-full h-1 bg-gray-300"></div>
        <div className="px-8  flex flex-col gap-8">
          <div className="flex mt-8 justify-between">
            <div className="bg-blue-200 text-blue-500 font-bold w-44 rounded-xl flex justify-center py-4">
              Paid
            </div>
            <div
              className="flex gap-4 justify-center items-center cursor-pointer font-bold"
              onClick={() => setShowDetails(!showDetails)}
            >
              <p>Show Details</p>
              {showDetails ? (
                <IoIosArrowUp className="font-bold" />
              ) : (
                <IoIosArrowDown className="font-bold" />
              )}
            </div>
          </div>
        </div>
        <div
          className={`${
            showDetails
              ? "top-0 transition-all delay-300 flex"
              : "-top-60 hidden"
          } flex-col px-8 mt-8 gap-8 relative`}
        >
          <p className="font-bold text-2xl">Ticket Information</p>
          <div className="flex gap-20">
            <div
              className="h-52 w-52 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://s3-alpha-sig.figma.com/img/09c9/4f8a/5c8639cbd11fc28260c6b0d752134f07?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VaPoqcNGqpS~F1LLuLaR2aU9tSfbPM4oghlYqu3i5BUsipx74yLthwRTZoU7uZEOD7MeFwWHtLpcifrcT~xMWMJBPGF2-0EwoKyOGIKD09Wib9Ii9McpNgk~2yl2fdy-Bsw1H929Os9otjWTi2Hprv53n~M0K09SXLQk5RKBzGvxaEDyk-PUiIcrmEWbEno8OZa6IE~-TeCsE~bnnTJARh70B84nI0yXS84TJFkY-zG~ozZ~lH6tozokP~0NbE97lCUQvIMKy32II0GLW9gE28s39Tb-dDeMQ5nalHwqL0dJMu8gXf76ed50nGLNBrdREYR6VzpYGO0bjX8f5KFq~A__)",
              }}
            ></div>

            <div className="grid grid-cols-3 items-center gap-4">
              <div className="">
                <p className="font-semibold text-gray-400">Category</p>
                <p className="font-bold ">PG-13</p>
              </div>
              <div className="">
                <p className="font-semibold text-gray-400">Time</p>
                <p className="font-bold ">2:00pm</p>
              </div>
              <div className="">
                <p className="font-semibold text-gray-400">Seats</p>
                <div className="font-bold ">C4, C5, C6</div>
              </div>

              <div className="">
                <p className="font-semibold text-gray-400">Movie</p>
                <p className="font-bold text-ellipsis whitespace-nowrap overflow-hidden max-w-24">
                  Spider-asdasdas
                </p>
              </div>
              <div className="">
                <p className="font-semibold text-gray-400">Date</p>
                <p className="font-bold ">07 Jul</p>
              </div>
              <div className="">
                <p className="font-semibold text-gray-400">Count</p>
                <div className="font-bold ">3 pcs</div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p>Total</p>
              <p className="font-bold text-4xl">$30.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TiketResult;
