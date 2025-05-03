import { Link } from "react-router";
import icon from "../../assets/svg/tickitz.svg";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import FormAuth from "../../components/fragments/FormAuth";
import useTitle from "../../hooks/useTitle";

const SignIn = () => {
  useTitle("Sign In Account");
  return (
    <section className="z-10 relative">
      <div className="flex justify-center">
        <div className=" px-4 mb-4 rounded-2xl">
          <img src={icon} alt="" className="w-40" />
        </div>
      </div>
      <div className="bg-white w-full px-4 md:px-8 xl:px-20 py-6 rounded-xl shadow-white flex flex-col gap-3  ">
        <div className="flex justify-between flex-col">
          <p className="text-xl md:text-3xl font-bold mb-4">Welcome Back👋</p>
          <p className="text-sm xl:text-xl text-gray-400">
            Sign in with your data that you entered during <br /> your
            registration
          </p>
        </div>
        <FormAuth type={"login"} />
        <p className="text-center text-gray-400">
          Already have an account?
          <Link to={"/auth/new"} className="text-blue-600 font-bold">
            {" "}
            Sign Up
          </Link>
        </p>
        <div className="flex gap-4 items-center">
          <div className="flex-1 h-[2px] bg-gray-300"></div>
          <p className="text-gray-400">Or</p>
          <div className="flex-1 h-[2px] bg-gray-300"></div>
        </div>
        <div className="flex gap-8 flex-col md:flex-row">
          <Link
            to={""}
            className="flex-1 flex shadow-2xl active:scale-95 justify-center items-center gap-4 px-2 py-2 md:py-3"
          >
            <FcGoogle className="text-3xl" />
            <p className=" font-bold">Google</p>
          </Link>
          <Link
            to={""}
            className="flex-1 flex shadow-2xl active:scale-95 justify-center items-center gap-4 px-2 py-2 md:py-3"
          >
            <FaFacebook className="text-3xl saturate-200 text-blue-600 " />
            <p className=" font-bold">Facebook</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
