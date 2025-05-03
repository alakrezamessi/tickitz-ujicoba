import { MdDone } from "react-icons/md";
import bcaLogo from "../../assets/payment/Bank BCA Logo (SVG-240p) - FileVector69 1.png";
import briLogo from "../../assets/payment/Bank BRI (Bank Rakyat Indonesia) Logo (SVG-240p) - FileVector69 1.png";
import danaLogo from "../../assets/payment/Logo DANA (PNG-240p) - FileVector69 1.png";
import gopayLogo from "../../assets/payment/Logo GoPay (SVG-240p) - FileVector69 1.png";
import googlePayLogo from "../../assets/payment/logos_google-pay.png";
import paypalLogo from "../../assets/payment/logos_paypal.png";
import visaLogo from "../../assets/payment/logos_visa.png";
import ovoLogo from "../../assets/payment/Vector.png";
import { useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import CardPayment from "../../components/elements/CardPayment";
import Loader from "../../components/elements/Loader";
import { historyAction } from "../../redux/slices/history";
import { orderAction } from "../../redux/slices/orders";
import useTitle from "../../hooks/useTitle";

const Payment = () => {
  useTitle("Tickitz Payment");
  const [isModal, setIsModal] = useState(false);
  const orders = useSelector((state) => state.orders);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [methodPayment, setMethodPayment] = useState("googlePay");
  const dispatch = useDispatch();
  const [virtualAccount, _] = useState(
    orders.virtualAccount |
      Math.floor(1000000000000 + Math.random() * 9000000000000)
  );
  const modalRef = useRef();
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState({
    fullName: false,
    phone: false,
  });
  const fromRef = useRef(null);
  const logo = [
    {
      image: googlePayLogo,
      title: "googlePay",
    },
    {
      image: visaLogo,
      title: "Visa",
    },
    {
      image: bcaLogo,
      title: "BCA",
    },
    {
      image: briLogo,
      title: "BRI",
    },
    {
      image: danaLogo,
      title: "Dana",
    },
    {
      image: gopayLogo,
      title: "Gopay",
    },
    {
      image: paypalLogo,
      title: "paypal",
    },
    {
      image: ovoLogo,
      title: "ovo",
    },
  ];
  // let userActive = JSON.parse(localStorage.getItem("authContext")) || [];
  const userActive = useSelector((state) => state.auth);
  const scrollTo = (ref, offsetTop = 30) => {
    window.scrollTo({
      top: ref.offsetTop - offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleFromOrder = () => {
    setError({
      fullName: false,
      phone: false,
    });
    if (fullName === "") {
      scrollTo(fromRef.current);
      setMessage("Fullname Required");
      setError({
        fullName: true,
      });
      return;
    }
    if (phone === "") {
      scrollTo(fromRef.current);

      setMessage("Phone Number Required");
      setError({
        phone: true,
      });
      return;
    }
    setIsModal(true);
    setTimeout(() => {
      scrollTo(modalRef.current, 150);
    }, 100);
  };
  const handlePayment = () => {
    setIsloading(true);
    dispatch(
      historyAction.addHistory({
        ...orders,
        virtualAccount,
        orderStatus: "success",
        payment: {
          fullName,
          email: userActive.user.email,
          phoneNumber: phone,
          method: methodPayment,
        },
      })
    );
    setTimeout(() => {
      dispatch(orderAction.deleteOrder());
      navigate("/payment/succes");
    }, 4000);
  };

  const handlePayLatter = () => {
    setIsloading(true);
    dispatch(
      historyAction.addHistory({
        ...orders,
        virtualAccount,
        orderStatus: "pending",
        payment: {
          fullName,
          email: userActive.user.email,
          phoneNumber: phone,
          method: methodPayment,
        },
      })
    );
    setTimeout(() => {
      dispatch(orderAction.deleteOrder());
      navigate("/profile");
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gray-300 py-4 px-4 lg:px-8 md:px-12 xl:px-24 relative">
      <div className="w-full flex justify-center">
        <div className="lg:flex py-4 justify-center gap-4 w-[70%] hidden">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="h-12 w-12 flex justify-center items-center rounded-full bg-green-600">
              <MdDone className="text-white text-2xl font-bold" />
            </div>
            <p className="font-bold">Dates And Time</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-32 border-2 border-dashed"></div>
          </div>
          <div className=" flex flex-col justify-center items-center gap-2">
            <div className="h-12 w-12 flex justify-center items-center rounded-full bg-green-600">
              <MdDone className="text-white text-2xl font-bold" />
            </div>
            <p className="font-bold">Seat</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-32 border-2 border-dashed"></div>
          </div>
          <div className=" flex flex-col justify-center items-center gap-2">
            <div className="h-12 w-12 flex justify-center items-center rounded-full bg-blue-600 font-bold text-white">
              <p>3</p>
            </div>
            <p className="font-bold">Payment</p>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex justify-center">
        <div className="min-w-[50%] bg-white rounded-md shadow px-3 lg:px-8 py-12">
          <h1 className="font-bold  text-md lg:text-3xl mb-8">Payment Info</h1>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-4 border-b-2 pb-2 border-b-gray-300">
              <p className="text-gray-500 text-md font-semibold">DATE & TIME</p>
              <p className="font-bold  text-md lg:text-xl">
                {orders.bookTickets.location} - {orders.bookTickets.date} at{" "}
                {orders.bookTickets.time}
              </p>
            </div>
            <div className="flex flex-col gap-4 border-b-2 pb-2 border-b-gray-300">
              <p className="text-gray-500 text-md font-semibold">MOVIE TITLE</p>
              <p className="font-bold  text-md lg:text-xl">{orders.title}</p>
            </div>
            <div className="flex flex-col gap-4 border-b-2 pb-2 border-b-gray-300">
              <p className="text-gray-500 text-md font-semibold">CINEMA NAME</p>
              <p className="font-bold  text-md lg:text-xl">
                {orders.cinema} Cinema
              </p>
            </div>
            <div className="flex flex-col gap-4 border-b-2 pb-2 border-b-gray-300">
              <p className="text-gray-500 text-md font-semibold">
                NUMBER OF TICKETS
              </p>
              <div className="flex gap-8 font-bold  text-md lg:text-xl">
                <p>{orders.seat.length} pieces</p>
                <div className="flex gap-2">{orders.seat.join(",")}</div>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-b-2 pb-2 border-b-gray-300">
              <p className="text-gray-500 text-md font-semibold">
                TOTAL PAYMENT
              </p>
              <p className="font-bold  text-md lg:text-xl text-blue-600">
                ${orders.seat.length * 10}
              </p>
            </div>
          </div>
          <p className="font-bold text-xl lg:text-3xl mb-4 lg:mb-8 mt-8 ">
            Personal Information
          </p>
          <div className="flex flex-col gap-6" ref={fromRef} id="fromRef">
            <div
              className={`${
                message !== "" ? "visible animation-shake" : "invisible"
              } flex bg-red-600 text-white font-bold py-3 justify-center rounded-2xl `}
            >
              {message}
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-gray-500 text-md font-semibold">Full Name</p>
              <div
                className={`${
                  error.fullName
                    ? "border-red-600 animation-shake"
                    : fullName !== ""
                    ? "border-blue-600"
                    : "border-gray-400"
                } px-4 py-3 border-2  rounded-md`}
              >
                <input
                  type="text"
                  className={`w-full outline-none font-semibold`}
                  placeholder="Enter Your Name"
                  value={fullName}
                  onChange={(e) => {
                    setMessage("");
                    setError({
                      fullName: false,
                    });
                    setFullName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-gray-500 text-md font-semibold">Email</p>
              <div className="px-4 py-3 border-2 border-blue-600 rounded-md">
                <input
                  type="text"
                  className="w-full outline-none font-semibold"
                  value={userActive.user.email}
                  disabled
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-gray-500 text-md font-semibold">
                Phone Number
              </p>
              <div
                className={`${
                  error.phone
                    ? "border-red-600 animation-shake"
                    : phone !== ""
                    ? "border-blue-600"
                    : "border-gray-400"
                } px-4 py-3 border-2 rounded-md flex gap-4`}
              >
                <div className="h-full border-r-2 border-gray-300 px-4 flex justify-center items-center">
                  <p className="font-bold">+62</p>
                </div>
                <input
                  type="number"
                  className="w-full outline-none font-semibold "
                  placeholder="081201010101"
                  value={phone}
                  onChange={(e) => {
                    setMessage("");
                    setError({
                      phone: false,
                    });
                    setPhone(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="font-bold text-xl lg:text-3xl mb-8">Payment Method</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 min-h-40 gap-4 lg:gap-4">
              {logo.map((data, idx) => {
                return (
                  <CardPayment
                    image={data.image}
                    title={data.title}
                    key={idx}
                    setMethodPayment={setMethodPayment}
                    methodPayment={methodPayment}
                  />
                );
              })}
            </div>
            <div className="w-full mt-8">
              <button
                className="w-full py-2 lg:py-4 text-xl lg:text-2xl bg-blue-600 font-bold text-white rounded-xl"
                onClick={handleFromOrder}
              >
                Pay your order
              </button>
            </div>
          </div>
        </div>
      </div>
      {isModal && (
        <div
          className="w-full h-full px-4 absolute flex justify-center items-center top-0 right-0 z-10 bg-black/70"
          onClick={() => {
            setIsModal(false);
          }}
        >
          <div
            className="w-[600px] flex flex-col bg-white justify-center gap-6 items-center z-10 rounded-md px-6 py-6"
            ref={modalRef}
            id="modalRef"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h1 className="font-bold text-2xl mb-4">Payment Info</h1>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-between w-full">
              <div className="flex">
                <p className="font-semibold text-gray-400">
                  No. Rekening Virtual {"   "} :
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-bold">{virtualAccount}</p>
                <button className="px-4 py-2 border-2 border-blue-600 font-bold rounded-md text-blue-600">
                  Copy
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <p className="font-semibold text-gray-400">Total Payment</p>
              </div>
              <div>
                <p className="font-bold text-blue-600">
                  ${orders.seat.length * 10}
                </p>
              </div>
            </div>
            <p className="text-gray-400">
              Pay this payment bill before it is due, on{" "}
              <span className="font-bold text-red-500">
                {" "}
                {orders.bookTickets.date}
              </span>{" "}
              If the bill has not been paid by the specified time, it will be
              forfeited
            </p>
            {isLoading ? (
              <div className="py-12 w-full">
                <Loader />
              </div>
            ) : (
              <>
                <button
                  onClick={handlePayment}
                  className="w-full cursor-pointer py-4 bg-blue-600 rounded-md text-center text-white font-bold"
                >
                  Check Payment
                </button>
                <button
                  onClick={handlePayLatter}
                  className="text-blue-600 font-bold mb-8"
                >
                  Pay Later
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
