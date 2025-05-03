import { Link } from "react-router-dom";
import bgNotFount from "../assets/images/bg-not-found.png";
import useTitle from "../hooks/useTitle";

const Error = () => {
  useTitle("Not Found :(");
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-col items-center gap-8">
        <img src={bgNotFount} alt="Not Found" />
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-5xl font-bold">Not Found</p>
        <Link
          to="/"
          className="px-8 py-2 bg-blue-600 cursor-pointer font-bold text-white rounded-xl"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
