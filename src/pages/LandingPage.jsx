import { Link } from "react-router";
import FituresSection from "../components/layouts/FituresSection";
import HeroSection from "../components/layouts/HeroSection";
import PopularMovie from "../components/layouts/PopularMovie";
import { FaArrowRightLong } from "react-icons/fa6";
import UpcomingMovie from "../components/layouts/UpcomingMovie";
import MoreInfo from "../components/layouts/MoreInfo";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { genresAction } from "../redux/slices/genres";
import { getPopularMovie, getUpcomingMovie } from "../api/movie";
import useTitle from "../hooks/useTitle";

const LandingPage = () => {
  useTitle("Welcome To Tickitz");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [dataPopularMovie, setDataPopularMovie] = useState([]);
  const [dataUpComing, setDataUpComing] = useState([]);
  useEffect(() => {
    const getAllFetch = async () => {
      try {
        setIsLoading(true);
        const getGenres = dispatch(genresAction.getGenresThunk());
        const [resultGenres, resultPopularMovie, resultUpComingMovie] =
          await Promise.all([getGenres, getPopularMovie(), getUpcomingMovie()]);
        const dataPopular = await resultPopularMovie.json();
        const dataUpComing = await resultUpComingMovie.json();
        console.log({
          genres: resultGenres.payload.genres,
          popular: dataPopular,
          upComing: dataUpComing,
        });
        setDataPopularMovie(dataPopular.results);
        setDataUpComing(dataUpComing.results);
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getAllFetch();
  }, [dispatch]);
  return (
    <section className="">
      <HeroSection />
      <FituresSection />
      <PopularMovie datas={dataPopularMovie} isLoading={isLoading} />
      <UpcomingMovie datas={dataUpComing} isLoading={isLoading} />
      <MoreInfo />
    </section>
  );
};

export default LandingPage;
