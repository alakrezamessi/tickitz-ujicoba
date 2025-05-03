import { FaStar } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import AccountSetting from "../../components/fragments/AccountSetting";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TiketResultPending from "../../components/fragments/TiketResultPending";
import TiketResultSuccess from "../../components/fragments/TiketResultSuccess";
import TiketResult from "../../components/fragments/TiketResult";
import { authAction } from "../../redux/slices/auth";
import { useNavigate } from "react-router";
import Loader from "../../components/elements/Loader";
import useTitle from "../../hooks/useTitle";

const Profile = () => {
  useTitle("My Profile");
  const userActive = useSelector((state) => state.auth);
  const history = useSelector((state) => state.history);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [modalLogout, setModalLogout] = useState(false);
  const dispatch = useDispatch();
  const [selectedSection, setSelecredSection] = useState("Account Settings");
  const handleLogOut = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/", { replace: true });
    }, 2000);
    setTimeout(() => {
      dispatch(authAction.logOut());
    }, 3000);
  };
  console.log(history);
  return (
    <div className="min-h-screen relative flex flex-col lg:flex-row gap-4  bg-gray-300 py-4 px-4 lg:px-8 md:px-12 xl:px-24">
      <div className="flex-1 bg-white px-4 min-h-screen lg:max-h-screen rounded-2xl  shadow-2xl py-12">
        <div className="flex flex-col gap-8 ">
          <div className="flex w-full font-bold text-2xl justify-between pr-4">
            <p>INFO</p>
            <p className="text-blue-600">...</p>
          </div>
          <div className="flex flex-col gap-6 justify-center w-full items-center border-b-2 border-gray-400 pb-8">
            <div
              style={{
                backgroundImage:
                  "url(https://s3-alpha-sig.figma.com/img/da2e/614d/3799d67a276c348dcf1023204c6d2712?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hKjjffOdbVXY6iRTa9vQKRHqKE4kowsF1ZKT9PQOOjlu~UI1D4z3EldRSAekEy7vbPT3ju2emL2R7k1x~~UGOcBW56N9k99-yzuhRiQwQHcI2gDEQOks8tpOdAZZlAES9pDrFD53sV04PeAjzKW77--S3GvyXTH24tEJDaKUsid6d1LliBfM3roDZ6dTWR6pNaOxucq3rFPxtJHZZCc147z6UgmvPzRRGO0ZDNYS0KLbjUujGaXYaEt0MQZyDeaIt-v0EAIzj2vtJ4HZh-MS1O1eaI3jzYbU~41~n3avnYLDiZUoQecjiHNSvVcNEBIDK4XsRv4TlqBoBSamAga~2Q__)",
              }}
              className="w-32 h-32 shadow-white bg-cover bg-center rounded-full"
            ></div>
            <div className="w-full flex flex-col items-center">
              <p className="font-bold text-xl">Jonas El Rodriguez</p>
              <p className="font-semibold text-gray-400">Moviegoers</p>
            </div>
          </div>
          <div className="flex flex-col gap-8 min-h-32">
            <p className="font-bold text-xl">Loyalty Points</p>
            <div className="flex flex-col justify-between w-full min-h-32 bg-center relative bg-blue-600 rounded-2xl px-4 py-4 text-white">
              <div className="flex justify-between">
                <div className="text-xl font-bold">Moviegoers</div>
                <FaStar className="text-4xl text-yellow-300 rotate-12" />
              </div>
              <div className="flex gap-2 items-end">
                <p className="text-3xl font-semibold">320 </p>
                <p>points</p>
              </div>
            </div>
          </div>
          <p className="text-center font-bold">180 points become a master</p>
          <div className="w-full min-h-6 border-2 shadow-2xl border-gray-300 bg-gray-300  rounded-xl">
            <div className="bg-blue-600 w-[70%] min-h-6 rounded-xl"></div>
          </div>
          <button
            className="w-full px-4 py-2 bg-red-300 cursor-pointer text-red-500 font-bold rounded-xl"
            onClick={() => setModalLogout(!modalLogout)}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex-[4] flex flex-col gap-8">
        <div className="rounded-xl bg-white px-8 flex gap-8 shadow-2xl">
          <div
            className={`${
              selectedSection === "Account Settings"
                ? "border-b-2 border-blue-600 font-bold"
                : "text-gray-500"
            } py-6 font-bold  hover:text-black cursor-pointer`}
            onClick={() => setSelecredSection("Account Settings")}
          >
            Account Settings
          </div>
          <div
            className={`${
              selectedSection === "Order History"
                ? "border-b-2 border-blue-600 font-bold"
                : "text-gray-500"
            } py-6 font-bold hover:text-black  cursor-pointer`}
            onClick={() => setSelecredSection("Order History")}
          >
            Order History
          </div>
        </div>
        {selectedSection === "Account Settings" ? (
          <AccountSetting />
        ) : history.datas.length !== 0 ? (
          history.datas.filter(
            (item) => item.payment.email === userActive.user.email
          ).length !== 0 ? (
            <>
              {history.datas
                .filter((item) => item.payment.email === userActive.user.email)
                .filter((item) => item.orderStatus === "pending")
                .map((data, idx) => {
                  return (
                    <Fragment key={idx}>
                      <TiketResultPending datas={data} />
                    </Fragment>
                  );
                })}
              {history.datas
                .filter((item) => item.payment.email === userActive.user.email)
                .filter((item) => item.orderStatus === "success")
                .map((data, idx) => {
                  return (
                    <Fragment key={idx}>
                      <TiketResultSuccess datas={data} />
                    </Fragment>
                  );
                })}
            </>
          ) : (
            <div className="w-full bg-white rounded-xl min-h-[400px] justify-center flex items-center">
              <p className="text-5xl font-bold">No History {":("}</p>
            </div>
          )
        ) : (
          <div className="w-full bg-white rounded-xl min-h-[400px] justify-center flex items-center">
            <p className="text-5xl font-bold">No History {":("}</p>
          </div>
        )}
      </div>
      {modalLogout && (
        <div
          className="w-full h-full bg-black/60 absolute top-0 right-0 flex justify-center items-center"
          onClick={() => setModalLogout(!modalLogout)}
        >
          <div
            className="min-w-[600px] min-h-[400px] rounded-2xl bg-white flex flex-col gap-12 justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-3xl font-bold text-red-400 ">
              are you sure you want to logout ?
            </p>
            <div className="flex gap-8">
              {loading ? (
                <Loader />
              ) : (
                <>
                  <button
                    className="px-8 py-2 bg-red-400 text-white font-bold rounded-xl cursor-pointer"
                    onClick={() => setModalLogout(!modalLogout)}
                  >
                    No
                  </button>
                  <button
                    className="px-8 py-2 bg-blue-600 text-white font-bold rounded-xl cursor-pointer"
                    onClick={handleLogOut}
                  >
                    Yes
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
