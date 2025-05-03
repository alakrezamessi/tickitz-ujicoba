import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import hiflix from "../../assets/images/hiflix.png";
import ebuId from "../../assets/images/ebu-id.png";
import { useRef, useState } from "react";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { historyAction } from "../../redux/slices/history";
import Loader from "../elements/Loader";

const TiketResultPending = ({ datas }) => {
  // console.log(datas);
  const [showDetails, setShowDetails] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  // const [isModal, setIsModal] = useState(false);
  // const modalRef = useRef();
  // const scrollTo = (ref, offsetTop = 30) => {
  //   window.scrollTo({
  //     top: ref.offsetTop - offsetTop,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // };
  const dispatch = useDispatch();
  const handlePayment = () => {
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
      dispatch(historyAction.editHistory({ ...datas }));
    }, 3000);
  };
  return (
    <div className="bg-white rounded-xl py-12 shadow-2xl">
      <div className="flex lg:flex-row flex-col gap-8 lg:gap-0 justify-between px-8 mb-4">
        <div className="flex flex-col items-center lg:items-start gap-4">
          <p className="font-semibold text-gray-400">
            {datas.bookTickets.date} - {datas.bookTickets.time}
          </p>
          <p className="font-bold text-xl lg:text-3xl">{datas.title}</p>
        </div>
        <div className="flex justify-center items-center">
          {datas.cinema === "hiflix" ? (
            <img src={hiflix} />
          ) : (
            <img src={ebuId} />
          )}
        </div>
      </div>
      <div className="w-full h-1 bg-gray-300"></div>
      <div className="px-8  flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-0 mt-8 justify-between">
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
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 w-full justify-between items-center">
            <div className="text-gray-400 font-semibold">
              No. Rekening Virtual :
            </div>
            <div className="flex gap-4 items-center">
              <p className="font-bold">{datas.virtualAccount}</p>
              <button className="px-4 rounded-md py-3 hover:bg-blue-600 hover:text-white cursor-pointer border border-blue-600 text-blue-600">
                Copy
              </button>
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="font-semibold text-gray-400">Total Payment :</div>
            <div className="font-bold text-blue-600">
              ${datas.seat.length * 10}
            </div>
          </div>
          <div className="text-gray-400 font-semibold text-xl">
            Pay this payment bill before it is due, on{" "}
            <span className="font-bold text-red-400">
              {datas.bookTickets.date}
            </span>{" "}
            If the bill has not been paid by the specified time, it will be
            forfeited
          </div>
          <div>
            {isLoading ? (
              <Loader />
            ) : (
              <button
                onClick={handlePayment}
                className="px-8 py-4 border rounded-xl bg-blue-600 text-white font-bold cursor-pointer"
              >
                Lanjutkan Pembayaran
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiketResultPending;
