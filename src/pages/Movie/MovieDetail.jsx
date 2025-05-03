import Button from "../../components/elements/Button";
import ebuId from "../../assets/images/ebu-id.png";
import hiflix from "../../assets/images/hiflix.png";
import { useState } from "react";
import { getDetailsMovie } from "../../api/movie";
import { useNavigate, useParams } from "react-router";
import { FaRegClock } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { orderAction } from "../../redux/slices/orders";
import useTitle from "../../hooks/useTitle";
// import { orderContext } from "../context/orderContext";

const MovieDetail = () => {
  useTitle("Tickitz Details");
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [datas, setDatas] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [cinema, setCinema] = useState("");
  // const { _, setOrder } = useContext(orderContext);
  const [isLoading, setIsLoading] = useState(true);
  useState(() => {
    const getDetails = async () => {
      try {
        setIsLoading(true);
        const res = await getDetailsMovie(params.id);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        const dataArr = [];
        dataArr.push(data);
        setDatas(dataArr);
      } catch (error) {
        if (error instanceof Error) console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getDetails();
  }, []);

  const handleOrder = (datas) => {
    dispatch(orderAction.addOrder(datas));
    navigate("/order");
  };

  return (
    <section>
      {isLoading ? (
        <p>Loading...</p>
      ) : datas.length !== 0 ? (
        datas.map((data) => {
          return (
            <div key={data.id}>
              <div
                className="min-h-[400px] bg-cover bg-center bg-black/70 relative"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`,
                }}
              >
                <div className="absolute w-full h-full bg-black/70 "></div>
              </div>
              <div className="min-h-72 w-full flex flex-col py-4 lg:flex-row px-4 lg:px-8 md:px-12 xl:px-24">
                <div className="flex-1 h-full flex justify-center relative">
                  <div
                    className="h-96 w-60 sm:w-72 lg:w-72 absolute -top-36 bg-white bg-cover bg-center rounded-xl lg:rounded-sm"
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.poster_path})`,
                    }}
                  ></div>
                </div>
                <div className="flex-[3] w-full h-full py-4 pt-72 lg:pt-0 flex flex-col gap-4">
                  <p className="font-bold text-3xl text-center lg:text-start">
                    {data.original_title}
                  </p>
                  <div className="flex justify-center lg:justify-normal gap-4">
                    {data.genres !== 0 ? (
                      data.genres.map((data) => {
                        return (
                          <div
                            className="bg-gray-300 text-gray-600 rounded-md px-2"
                            key={data.id}
                          >
                            {data.name}
                          </div>
                        );
                      })
                    ) : (
                      <p>Nothing</p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 grid-rows-2 lg:gap-3 lg:w-max">
                    <div className="">
                      <p className="text-gray-400">Release date</p>
                      <p className="font-semibold">{data.release_date}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Directed by</p>
                      <p className="font-semibold">Jon Watss</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Duration</p>
                      <p className="font-semibold">{data.runtime}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Casts</p>
                      <p className="font-semibold">
                        Tom Holland, Michael Keaton, Robert Downey Jr
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 lg:px-8 md:px-12 xl:px-24 ">
                <p className="font-bold text-2xl mb-4">Synopsis</p>
                <p className="text-xl lg:w-[75%] text-gray-400 leading-8">
                  {data.overview}
                </p>
              </div>
              <div className="px-4 lg:px-8 md:px-12 xl:px-24 mt-16">
                <div>
                  <p className="font-bold text-4xl">Book Tickets</p>
                  <div className="mt-16 flex flex-col lg:flex-row justify-between gap-8">
                    <div className="flex flex-col gap-4 flex-1">
                      <p className="text-2xl font-bold">Choose Date</p>
                      <input
                        type="date"
                        className="w-full bg-gray-300 px-4 py-4 rounded-xl outline-none font-bold"
                        onChange={(e) => setDate(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col gap-4 flex-1">
                      <p className="text-2xl font-bold">Choose Time</p>
                      <div className="px-4 bg-gray-300 rounded-lg flex  items-center">
                        <FaRegClock className="text-2xl" />
                        <select
                          onChange={(e) => {
                            setTime(e.target.value);
                          }}
                          className="bg-gray-300 font-bold border border-gray-300 py-4 text-gray-900 text-sm  outline-none block w-full p-2.5 "
                        >
                          <option disabled selected className="w-full">
                            Choose Time
                          </option>
                          <option value="12:00">12:00 AM</option>
                          <option value="13:00">13:00 PM</option>
                          <option value="14:00">14:00 PM</option>
                          <option value="15:00 ">15:00 PM</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 flex-[2]">
                      <p className="text-2xl font-bold">Choose Location</p>
                      <div className="flex flex-col lg:flex-row gap-4">
                        <div className="px-4 bg-gray-300 rounded-lg flex w-full  items-center">
                          <FaMapLocationDot className="text-2xl" />
                          <select
                            onChange={(e) => {
                              setLocation(e.target.value);
                            }}
                            className="bg-gray-300 font-bold border border-gray-300 py-4 text-gray-900 text-sm  outline-none block w-full p-2.5 "
                          >
                            <option disabled selected className="w-full">
                              Choose Location
                            </option>
                            <option className="font-bold" value="Jakarta">
                              Jakarta
                            </option>
                            <option className="font-bold" value="Bogor">
                              Bogor
                            </option>
                            <option className="font-bold" value="Depok">
                              Depok
                            </option>
                            <option className="font-bold" value="Bekasi">
                              Bekasi
                            </option>
                          </select>
                        </div>
                        <Button
                          title={"Filter"}
                          classname={
                            "w-full bg-blue-600 text-white text-center font-bold shadow px-4 py-4 rounded-xl"
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-16 flex flex-col gap-8">
                    <div className="flex gap-8">
                      <p className="text-2xl font-bold">Choose Cinema</p>
                      <p className="text-2xl font-bold text-gray-400">
                        39 Result{" "}
                      </p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-12 justify-between">
                      <label className="w-full h-40 border-2 border-gray-400 flex justify-center items-center rounded-xl relative">
                        <input
                          onChange={(e) => setCinema(e.target.value)}
                          type="radio"
                          name="brand"
                          value="ebuId"
                          className="peer"
                        />
                        <img
                          src={ebuId}
                          alt="BRI Logo"
                          className="absolute z-10 "
                        />
                        <div className="w-full h-full peer-checked:border-blue-600 peer-checked:border-8 rounded-xl absolute"></div>
                      </label>
                      <label className="w-full h-40 border-2 border-gray-400 flex justify-center items-center rounded-xl relative">
                        <input
                          onChange={(e) => setCinema(e.target.value)}
                          type="radio"
                          name="brand"
                          value="ebuId"
                          className="peer"
                        />
                        <svg
                          width="204"
                          height="83"
                          viewBox="0 0 204 83"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute z-10 peer-checked:fill-blue-600 transition-all"
                        >
                          <g clipPath="url(#clip0_113_10284)">
                            <path
                              d="M35.001 67.1198C39.6151 67.1198 43.9713 64.8095 47.2671 62.4992C49.1586 61.1418 50.9354 59.6112 52.6263 57.8497L48.9293 53.9798C45.9488 56.8966 40.045 60.9974 35.4595 60.9974C33.9979 60.9974 33.0235 60.4777 31.8484 58.3694C38.5261 56.5211 43.4554 51.4096 43.4554 46.6445C43.4554 42.2838 40.1883 39.4247 35.9181 39.4247C28.0654 39.4247 24.2251 48.5506 24.2251 55.0773C24.2251 61.4595 27.8075 67.1198 35.001 67.1198ZM31.1893 53.5467C31.1893 50.9764 31.6478 44.9407 36.5486 44.9407C37.4657 44.9407 38.1821 46.1824 38.1821 47.9153C38.1821 50.341 33.9119 53.5467 31.1893 53.5467ZM57.336 43.5545C62.6667 37.0277 68.6851 28.4795 68.6851 21.1731C68.6851 15.946 67.7967 11.6719 61.9789 11.6719C54.2122 11.6719 49.6553 32.436 47.8211 43.7567C46.904 49.4169 46.4169 54.0664 46.1016 57.4453C45.9297 59.4091 45.815 61.1708 45.7578 62.7302C47.1334 63.5677 48.5663 64.2897 50.0852 64.9251C52.6932 66.0513 56.0177 67.1198 59.2562 67.1198H59.9727C60.6892 66.831 61.377 66.5422 62.0075 66.2245C63.1252 65.6758 64.3576 65.0117 65.0168 64.3474C70.4046 63.1057 74.3882 61.4018 78.6011 57.5609L76.3944 52.7958C73.3566 55.857 70.5479 57.1566 67.768 58.8026C70.032 55.2794 70.5193 52.2759 70.5193 48.3773C70.5193 43.6989 67.854 39.3959 63.3831 39.3959C61.6349 39.3959 59.944 41.1863 57.7946 43.8721L57.336 43.5545ZM60.3739 45.9804C63.3831 45.9804 64.0997 47.6842 64.0997 49.5901C64.0997 54.0087 62.4374 61.575 58.4824 61.575C57.3646 61.575 56.1037 61.344 54.9859 61.113C54.3555 60.9686 53.725 60.8242 53.0945 60.6221C53.1518 59.9578 53.2091 59.2359 53.2951 58.4562C53.4384 57.0988 53.6677 55.3371 54.0116 53.2579C54.8426 48.1173 57.7086 45.9804 60.3739 45.9804ZM63.1826 19.527C62.6093 27.7286 57.1354 35.2084 54.0116 41.273C54.9287 36.1902 58.5684 17.2167 61.7208 17.2167C63.0105 17.2167 63.1826 19.2093 63.1826 19.527ZM76.4039 58.6871C76.6333 62.3548 76.6905 67.4375 81.1327 67.4375C83.798 67.4375 87.3804 61.8927 89.6158 57.2432C89.7018 60.1311 92.1665 62.9324 96.2647 62.9324C98.7008 62.9324 101.509 61.8927 104.031 60.2755V53.4889C103.2 54.0376 102.398 54.5574 101.624 54.9905C100.277 55.7704 98.6436 56.4635 97.4971 56.4635C94.4019 56.4635 93.6282 54.5863 93.6282 52.738C93.6282 51.8428 93.7715 51.0053 93.972 50.341C94.0581 49.9656 94.1727 49.6191 94.316 49.2725C96.0069 45.4893 97.2106 43.9299 97.2106 41.8218C97.2106 40.4066 95.749 39.3959 93.5422 39.3959C91.8799 39.3959 90.4469 40.3778 90.2177 41.4463L82.6804 59.5535L82.279 59.5824L83.3968 41.3019C83.3682 40.2912 82.623 39.3959 81.3333 39.3959C81.1327 39.3959 80.9894 39.4247 80.7888 39.4536L77.3497 40.0023C76.1174 40.2044 75.8881 42.4859 75.8881 46.4424C75.8881 49.5035 76.1174 51.9872 76.3467 57.7629L76.4039 58.6871ZM118.571 61.6039C118.571 58.6004 116.909 56.9255 113.728 56.9255C110.031 56.9255 108.483 59.6402 108.483 62.4414C108.483 65.7336 110.375 67.1198 113.183 67.1198C118.485 67.1198 118.571 62.0949 118.571 61.6039ZM141.193 55.1061C138.671 57.1854 134.372 61.575 131.649 61.575C130.474 61.575 130.188 60.4777 130.188 58.7449C130.188 53.4023 134.028 43.6122 134.028 41.0419C134.028 40.0312 133.569 39.3959 131.965 39.3959C130.245 39.3959 127.293 40.2044 126.749 42.1971C125.373 47.9729 122.851 56.4345 122.851 61.3152C122.851 64.8095 124.198 67.1198 128.182 67.1198C132.595 67.1198 138.442 63.5099 141.193 60.9686V55.1061ZM128.382 31.2809C128.382 33.9377 129.958 35.6705 133.312 35.6705C137.209 35.6705 138.871 33.1002 138.871 30.501C138.871 27.6132 136.665 26.458 133.999 26.458C129.758 26.458 128.382 29.5192 128.382 31.2809ZM152.409 45.2871C152.523 45.1717 152.494 53.46 152.838 55.0195C152.409 56.1458 151.921 57.1276 151.377 58.0229C150.46 59.5535 149.141 61.0264 147.766 61.0264C145.1 61.0264 144.556 59.3225 144.556 57.7919C144.556 53.9221 147.335 47.7708 152.409 45.2871ZM171.265 54.7885C170.12 55.7704 169.03 56.6367 167.97 57.4164C166.108 58.7449 163.986 60.0444 162.553 60.0444C161.034 60.0444 160.548 58.0229 160.548 55.828C160.548 54.0954 161.034 51.8717 161.407 50.8319C165.391 41.1285 170.12 33.158 171.122 22.2416C171.18 21.5197 171.208 20.8266 171.208 20.1623C171.208 15.7438 169.89 11.6719 166.279 11.6719C159 11.6719 152.637 26.1692 152.294 40.9843C143.581 41.7928 137.677 50.2256 137.677 57.5897C137.677 62.4126 140.027 67.1198 144.957 67.1198C148.453 67.1198 152.036 64.7517 154.873 61.9793C156.707 66.4556 160.203 67.091 161.264 67.091C163.156 67.091 165.878 65.6758 168.113 64.2896C169.431 63.4521 170.779 62.528 172.125 61.4595L171.265 54.7885ZM165.878 24.3499C165.505 28.4218 163.843 33.62 162.295 37.8941C161.378 40.3778 160.375 42.8614 159.286 45.3739V45.0851C159.286 43.9299 159.286 40.6376 159.601 36.8257C159.831 34.0243 161.322 18.3718 164.99 18.3718C165.677 18.3718 166.05 19.0649 166.05 21.1442C166.05 21.924 165.993 22.9925 165.878 24.3499Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_113_10284">
                              <rect
                                width="155.55"
                                height="59.6562"
                                fill="white"
                                transform="translate(24.2251 11.6719)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <div className="w-full h-full peer-checked:border-blue-600 peer-checked:border-8 rounded-xl absolute"></div>
                      </label>
                      <label className="w-full h-40 border-2 border-gray-400 flex justify-center items-center rounded-xl relative">
                        <input
                          onChange={(e) => setCinema(e.target.value)}
                          type="radio"
                          name="brand"
                          value="hiflix"
                          className="peer"
                        />
                        <img
                          src={hiflix}
                          alt="BCA Logo"
                          className="absolute z-10 "
                        />
                        <div className="w-full h-full peer-checked:border-blue-600 peer-checked:border-8 rounded-xl absolute"></div>
                      </label>
                      <label className="w-full h-40 border-2 border-gray-400 flex justify-center items-center rounded-xl relative">
                        <input
                          onChange={(e) => setCinema(e.target.value)}
                          type="radio"
                          name="brand"
                          value="hiflix"
                          className="peer"
                        />
                        <img
                          src={hiflix}
                          alt="BCA Logo"
                          className="absolute z-10 "
                        />
                        <div className="w-full h-full peer-checked:border-blue-600 peer-checked:border-8 rounded-xl absolute"></div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center mt-16 gap-8">
                  <div className="px-4 py-2 border-2 bg-blue-600 text-white font-bold rounded-md cursor-pointer">
                    1
                  </div>
                  <div className="px-4 py-2 border-2 border-blue-600 font-bold rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
                    2
                  </div>
                  <div className="px-4 py-2 border-2 border-blue-600 font-bold rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
                    3
                  </div>
                  <div className="px-4 py-2 border-2 border-blue-600 font-bold rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
                    4
                  </div>
                </div>
                <div className="flex justify-center my-16">
                  <button
                    className="cursor-pointer w-40 text-center border font-bold text-white py-4 rounded-xl bg-blue-600"
                    onClick={() =>
                      handleOrder({
                        title: data.title,
                        genre: data.genres,
                        price: 10,
                        image: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
                        bookTickets: {
                          date,
                          time,
                          location,
                        },
                        cinema,
                      })
                    }
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>Nothing..</p>
      )}
    </section>
  );
};

export default MovieDetail;
