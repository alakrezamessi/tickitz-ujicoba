import { BiSolidCheckShield } from "react-icons/bi";
import { LuMessagesSquare } from "react-icons/lu";
import { RiCheckboxCircleFill } from "react-icons/ri";

const FituresContent = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start gap-3 items-center lg:items-start">
      <div>
        {icon === "shieldDone" && (
          <div className="px-4 py-4 bg-gray-200 rounded-full max-w-max">
            <BiSolidCheckShield className="text-blue-600 font-bold text-3xl" />
          </div>
        )}
        {icon === "checkCircle" && (
          <div className="px-4 py-4 bg-gray-200 rounded-full max-w-max">
            <RiCheckboxCircleFill className="text-blue-600 font-bold text-3xl" />
          </div>
        )}
        {icon === "message" && (
          <div className="px-4 py-4 bg-gray-200 rounded-full max-w-max">
            <LuMessagesSquare className="text-blue-600 font-bold text-3xl" />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 w-full md:items-start">
        <p className="font-bold text-2xl text-center md:text-start">{title}</p>
        <p className="text-gray-500 text-center md:text-start">{desc}</p>
      </div>
    </div>
  );
};

export default FituresContent;
