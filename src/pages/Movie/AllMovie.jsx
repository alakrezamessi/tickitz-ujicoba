import { useEffect, useRef, useState } from "react";
import bgAuth from "../../assets/images/bg-auth.png";
import MoreInfo from "../../components/layouts/MoreInfo";
import { FaSearch } from "react-icons/fa";
import { getPopularMovie } from "../../api/movie";
import Card from "../../components/elements/Card";
import Paginasion from "../../components/elements/Pagination";
import Skeleton from "../../components/elements/Skeleton";
import useTitle from "../../hooks/useTitle";

const AllMovie = () => {
  useTitle("All Tickitz");
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const movieRef = useRef();
  const scrollTo = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 30,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const getMovie = async () => {
      try {
        setIsLoading(true);
        const res = await getPopularMovie(page);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setDatas(data.results);
      } catch (err) {
        if (err instanceof Error) console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [page]);
  return (
    <section>
      <div
        className="min-h-[500px] bg-cover bg-center bg-black/70 relative"
        style={{ backgroundImage: `url(${bgAuth})` }}
      >
        <div className="absolute w-full h-full bg-black/70 ">
          <div className="text-white px-4 lg:px-8 md:px-12 xl:px-24 w-full h-full relative">
            <div className=" relative justify-center flex flex-col h-full">
              <p className="lg:font-bold text-2xl mb-2">
                LIST MOVIE OF THE WEEK
              </p>
              <p className="text-3xl lg:text-6xl lg:w-[60%]">
                Experience the Magic of Cinema: Book Your Tickets Today
              </p>
              <div className=" flex gap-4 w-[100%] justify-center absolute bottom-5">
                <div className="w-6 h-6 rounded-full bg-blue-600"></div>
                <div className="w-6 h-6 rounded-full bg-white"></div>
                <div className="w-6 h-6 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="px-4 lg:px-8 md:px-12 xl:px-24 min-h-[600px]"
        ref={movieRef}
      >
        <div className="w-full flex flex-col gap-3 lg:flex-row">
          <div className="flex-1 flex flex-col gap-4  justify-center items-center py-8">
            <p className="font-bold text-2xl">Cari Event</p>
            <div className="flex px-4 py-2 items-center gap-2 border-2 rounded-md">
              <FaSearch />
              <input
                type="text"
                placeholder="New Born Expert"
                className="outline-none w-full "
              />
            </div>
          </div>
          <div className="flex-3 flex flex-col gap-4 lg:py-8">
            <p className="font-bold hidden lg:block text-center lg:text-start  text-2xl">
              Filter
            </p>
            <div className="flex flex-wrap lg:gap-16 h-full lg:justify-normal justify-center gap-4 items-center lg:border-none border-2 px-4 py-4 lg:px-0 lg:py-0 rounded-md border-blue-600">
              <div className="bg-blue-600 text-white rounded-md px-4 py-2 font-bold cursor-pointer">
                Thriller
              </div>
              <div className="hover:bg-blue-600 hover:text-white rounded-md px-4 py-2 font-bold cursor-pointer">
                Horror
              </div>
              <div className="hover:bg-blue-600 hover:text-white rounded-md px-4 py-2 font-bold cursor-pointer">
                Romantic
              </div>
              <div className="hover:bg-blue-600 hover:text-white rounded-md px-4 py-2 font-bold cursor-pointer">
                Adventure
              </div>
              <div className="hover:bg-blue-600 hover:text-white rounded-md px-4 py-2 font-bold cursor-pointer">
                Sci-fi
              </div>
            </div>
          </div>
        </div>
        <div className="grid justify-center self-center 2xl:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6 gap-8 py-12">
          {isLoading ? (
            <>
              <Skeleton size={"w-80 h-96"} />
              <Skeleton size={"w-80 h-96"} />
              <Skeleton size={"w-80 h-96"} />
              <Skeleton size={"w-80 h-96"} />
              <Skeleton size={"w-80 h-96"} />
              <Skeleton size={"w-80 h-96"} />
              <Skeleton size={"w-80 h-96"} />
              <Skeleton size={"w-80 h-96"} />
              <Skeleton size={"w-80 h-96"} />
              <Skeleton size={"w-80 h-96"} />
              <Skeleton size={"w-80 h-96"} />
              <Skeleton size={"w-80 h-96"} />
              <Skeleton size={"w-80 h-96"} />
              <Skeleton size={"w-80 h-96"} />
              <Skeleton size={"w-80 h-96"} />
              <Skeleton size={"w-80 h-96"} />
              <Skeleton size={"w-80 h-96"} />
              <Skeleton size={"w-80 h-96"} />
              <Skeleton size={"w-80 h-96"} />
              <Skeleton size={"w-80 h-96"} />
            </>
          ) : datas.length !== 0 ? (
            datas.map((data, idx) => {
              return (
                <Card
                  key={idx}
                  title={data.title}
                  dataGenre={data.genre_ids}
                  src={data.poster_path}
                  size={"w-full h-96"}
                  id={data.id}
                  vote_average={data.vote_average}
                />
              );
            })
          ) : (
            <p>Nothing</p>
          )}
        </div>
      </div>
      <div className="w-full  min-h-32 flex justify-center items-center">
        <Paginasion
          setPage={setPage}
          page={page}
          scrollTo={scrollTo}
          movieRef={movieRef}
        />
      </div>
      <MoreInfo />
    </section>
  );
};

export default AllMovie;
