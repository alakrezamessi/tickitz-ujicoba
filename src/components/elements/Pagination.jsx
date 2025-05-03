import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Paginasion = ({ page, setPage, scrollTo, movieRef }) => {
  const handlePage = (action) => {
    scrollTo(movieRef.current);
    if ((action === "prev") & (page !== 1)) {
      setPage(page - 1);
      return;
    }
    if (action === "next") {
      setPage(page + 1);
      return;
    }
  };
  return (
    <div className="flex gap-4 ">
      <div
        className={`${
          page === 1 ? "bg-gray-300" : "bg-blue-600"
        } px-2 py-2 rounded-full h-12 w-12  text-white font-bold flex justify-center items-center cursor-pointer hover:bg-blue-600`}
        onClick={() => handlePage("prev")}
      >
        <FaArrowLeftLong />
      </div>
      {page !== 1 && (
        <div className="px-2 py-2 rounded-full h-12 w-12 bg-gray-300 text-white font-bold flex justify-center items-center cursor-pointer">
          {page === 2 ? 1 : "..."}
        </div>
      )}
      <div className="px-2 py-2 rounded-full h-12 w-12 bg-blue-600 text-white font-bold flex justify-center items-center cursor-pointer">
        {page}
      </div>
      <div
        className="px-2 py-2 rounded-full h-12 w-12 bg-gray-300 text-white font-bold flex justify-center items-center cursor-pointer hover:bg-blue-600"
        onClick={() => handlePage("next")}
      >
        {page + 1}
      </div>
      <div
        className="px-2 py-2 rounded-full h-12 w-12 bg-blue-600 text-white font-bold flex justify-center items-center cursor-pointer"
        onClick={() => handlePage("next")}
      >
        <FaArrowRightLong />
      </div>
    </div>
  );
};

export default Paginasion;
