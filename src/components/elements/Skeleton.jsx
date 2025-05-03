const Skeleton = ({ size }) => {
  return (
    <div className={` flex flex-col gap-2 justify-between  px-4 py-2 `}>
      <div
        className={`${size} w-56 h-72 border-2  border-gray-300 animate-pulse rounded-md hover:scale-105 transition-all`}
      >
        <div className="flex space-x-4 w-full h-full">
          <div className="bg-gray-200 w-full h-full"></div>
        </div>
      </div>
      <div className="h-8 w-56 animate-pulse bg-gray-200"></div>
      <div className="flex gap-2 justify-between flex-wrap h-12">
        <div className="bg-gray-200 h-6 w-16 flex justify-center animate-pulse items-center px-1 py-1 rounded-md text-gray-500"></div>
        <div className="bg-gray-200 h-6 w-16 flex justify-center animate-pulse items-center px-1 py-1 rounded-md text-gray-500"></div>
        <div className="bg-gray-200 h-6 w-16 flex justify-center animate-pulse items-center px-1 py-1 rounded-md text-gray-500"></div>
      </div>
    </div>
  );
};

export default Skeleton;
