import { MdDone } from "react-icons/md";
import Button from "../../components/elements/Button";
import hiflix from "../../assets/images/hiflix.png";
import ebuId from "../../assets/images/ebu-id.png";
import { useDispatch, useSelector } from "react-redux";
import Seat from "../../components/fragments/Seat";
import { useEffect, useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { orderAction } from "../../redux/slices/orders";
import { useNavigate } from "react-router";
import useTitle from "../../hooks/useTitle";
const MovieOrder = () => {
  useTitle("Tickitz Orders");
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [seat, setSeat] = useState(orders.seat);
  const [message, setMessage] = useState("");
  const handleOrder = () => {
    if (seat.length === 0) return setMessage("please select a seat");
    dispatch(orderAction.addOrder({ seat }));
    navigate("/payment");
  };
  useEffect(() => {
    (() => {
      if (orders.title === "") {
        navigate("/movie");
      }
    })();
  }, [orders.title, navigate]);
  return (
    <section className="min-h-screen bg-gray-300 py-8 px-4 lg:px-8 md:px-12 xl:px-24">
      <div className="w-full flex justify-center">
        <div className=" py-4 justify-center gap-4 w-[70%] hidden lg:flex">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="h-12 w-12 flex justify-center items-center rounded-full bg-green-600">
              <MdDone className="text-white text-2xl font-bold" />
            </div>
            <p className="font-bold">Dates And Time</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-16 lg:w-32 border-2 border-dashed"></div>
          </div>
          <div className=" flex flex-col justify-center items-center gap-2">
            <div className="h-12 w-12 flex justify-center items-center rounded-full bg-blue-600 text-white">
              <p>2</p>
            </div>
            <p className="font-bold">Seat</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-16 lg:w-32 border-2 border-dashed"></div>
          </div>
          <div className=" flex flex-col justify-center items-center gap-2">
            <div className="h-12 w-12 flex justify-center items-center rounded-full bg-gray-500 text-white">
              <p>3</p>
            </div>
            <p className="font-bold">Payment</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-4">
        <div className="flex-[5] flex flex-col gap-4 bg-white rounded-md shadow-2xl px-4 py-8">
          <div className="border-2 border-gray-300 flex flex-col md:flex-row px-4 py-4 gap-4">
            <div
              className="w-full md:w-60 min-h-36 lg:max-h-36 flex-1 rounded-xl  bg-cover"
              style={{
                backgroundImage: `url(${orders.image})`,
              }}
            ></div>
            <div className="flex flex-[3] flex-col gap-4">
              <p className="text-2xl font-bold text-center lg:text-start">
                {orders.title}
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                {orders.genre.map((data) => {
                  return (
                    <div
                      className="px-2 py-1 bg-gray-300 rounded-md text-gray-500"
                      key={data.id}
                    >
                      {data.name}
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-0 gap-4 lg:justify-between w-full">
                <p className="font-semibold text-xl">
                  Regular - {orders.bookTickets.time}
                </p>
                <Button
                  title={"Change"}
                  classname={
                    "bg-blue-600 text-white font-bold px-4 py-2 rounded-md"
                  }
                />
              </div>
            </div>
          </div>
          <p className="font-bold text-2xl">Choose Your Seat</p>
          {/* seat */}
          <div className="flex flex-col gap-4">
            <p className="text-center block font-bold text-gray-400">Screen</p>
            <Seat seat={seat} setSeat={setSeat} setMessage={setMessage} />
          </div>
          <p className="font-bold text-xl ">Seating key</p>
          <div className="flex justify-between lg:justify-between lg:px-16 mt-6">
            <div className="flex flex-col items-center lg:items-start lg:flex-row gap-2">
              <div className="h-12 w-12 bg-gray-300 rounded-xl"></div>
              <p className="font-bold">Available</p>
            </div>
            <div className="flex flex-col items-center lg:items-start lg:flex-row gap-2">
              <div className="h-12 w-12 bg-blue-600 rounded-xl"></div>
              <p className="font-bold">Selected</p>
            </div>
            <div className="flex flex-col items-center lg:items-start lg:flex-row gap-2">
              <div className="h-12 w-12 bg-gray-500 rounded-xl"></div>
              <p className="font-bold">Sold</p>
            </div>
          </div>
        </div>
        <div className="flex-[3] flex flex-col gap-8 h-max">
          <div className="flex bg-white rounded-md shadow-2xl flex-col px-2 py-8 gap-4 items-center">
            <div className="bg-center bg-cover">
              {/* <img src={hiflix} alt="" /> */}
              {orders.cinema === "hiflix" ? (
                <img src={hiflix} alt="" />
              ) : (
                <img src={ebuId} alt="" />
              )}
            </div>
            <p className="font-bold">{orders.cinema} Cinema</p>
            <div className="w-full flex flex-col gap-4 border-b-2 border-gray-500 pb-8">
              <div className="w-full flex justify-between">
                <p>Movie selected</p>
                <p className="font-bold text-end max-w-32 text-ellipsis whitespace-nowrap overflow-hidden">
                  {orders.title}
                </p>
              </div>
              <div className="w-full flex justify-between">
                <p>{orders.bookTickets.date}</p>
                <p className="font-bold">{orders.bookTickets.time}</p>
              </div>
              <div className="w-full flex justify-between">
                <p>One ticket price</p>
                <p className="font-bold">${orders.price}</p>
              </div>
              <div className="w-full flex justify-between">
                <div className="flex-1">
                  <p>Seat choosed</p>
                </div>
                <div className="flex flex-1 justify-end flex-wrap gap-1 font-bold">
                  {seat.join(",")}
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <p className="font-bold">Total Payment</p>
              <p className="font-bold">${seat.length * 10}</p>
            </div>
          </div>

          <div
            className={`${
              message ? "visible" : "invisible"
            } w-full  flex justify-center items-center gap-4 rounded-md bg-red-600 text-white py-2 font-bold text-center`}
          >
            <FaExclamationCircle className="text-xl" />
            <div className="flex justify-center items-center text-xl">
              {message}
            </div>
          </div>

          <button
            className={
              "w-full bg-blue-600 cursor-pointer active:scale-95 text-white px-4 py-4 text-center font-bold rounded-md shadow-2"
            }
            onClick={handleOrder}
          >
            Checkout now
          </button>
        </div>
      </div>
    </section>
  );
};

export default MovieOrder;
