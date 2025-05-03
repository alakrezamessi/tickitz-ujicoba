import { FaUser } from "react-icons/fa6";
import Button from "../../components/elements/Button";
import Icon from "../../components/elements/Icon";
import { Link, NavLink } from "react-router";
import { useState } from "react";
import { TbXboxX } from "react-icons/tb";
import { useSelector } from "react-redux";
import MovieList from "../../components/fragments/MovieList";

const MovieAdmin = () => {
  const userActive = useSelector((state) => state.auth);
  const [hamburger, setHamburger] = useState(false);
  return (
    <div>
      <header className="border-b-2 border-gray-300 sticky top-0 z-20 bg-white">
        <div className="px-4 md:px-24  py-4 flex justify-between">
          <div className="flex-1 items-center flex">
            <Icon />
          </div>
          <div className="flex-1 md:flex justify-evenly items-center hidden">
            <NavLink
              to={"/admin"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-blue-600 font-bold text-xl px-4 py-2 "
                  : "text-blue-300 font-bold text-xl hover:bg-blue-600 px-4 py-2 rounded-md hover:text-white hover:font-bold"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to={"/admin/movie"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-blue-600 font-bold text-xl px-4 py-2 "
                  : "text-blue-300 font-bold text-xl hover:bg-blue-600 px-4 py-2 rounded-md hover:text-white hover:font-bold"
              }
            >
              Movie
            </NavLink>
          </div>
          <div className="flex-1 lg:flex hidden items-center justify-end gap-8">
            {userActive.isLogin ? (
              <Link to={"/profile"} className="flex gap-4 items-center">
                <div className="border-2 rounded-full border-blue-600 shadow-2xl px-4 py-4">
                  <FaUser className="text-2xl" />
                </div>
                <p className="text-xl font-bold">Users</p>
              </Link>
            ) : (
              <>
                <Button
                  title="Sign In"
                  classname="border-blue-600 border-2 px-4 py-2 rounded-md text-blue-600"
                  to="auth"
                />
                <Button
                  title="Sign Up"
                  classname="bg-blue-600 border-2 px-4 py-2 rounded-md text-white border-blue-600"
                  to="auth/new"
                />
              </>
            )}
          </div>
          <div
            className={`${
              hamburger ? "right-0" : "-right-[100%]"
            } min-h-screen w-full bg-white fixed z-10 lg:hidden top-0 transition-all`}
          >
            <div className="w-full h-full flex flex-col justify-center gap-8 items-center py-16 relative">
              <div className="w-full flex justify-end px-12 ">
                <TbXboxX
                  className="font-bold text-4xl text-blue-600 cursor-pointer"
                  onClick={() => setHamburger(false)}
                />
              </div>
              <div className="flex-1 items-center flex  px-4 py-4 rounded-2xl">
                <Icon />
              </div>
              <div className="flex-1 flex-col flex w-full justify-center items-center gap-16">
                <NavLink
                  onClick={() => setHamburger(false)}
                  to={"/"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-blue-600 font-bold text-xl px-4 py-2 "
                      : "text-blue-300 font-bold text-xl hover:bg-blue-600 px-4 py-2 rounded-md hover:text-white hover:font-bold"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={() => setHamburger(false)}
                  to={"/movie"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-blue-600 font-bold text-xl px-4 py-2 "
                      : "text-blue-300 font-bold text-xl hover:bg-blue-600 px-4 py-2 rounded-md hover:text-white hover:font-bold"
                  }
                >
                  Movie
                </NavLink>
                <NavLink
                  onClick={() => setHamburger(false)}
                  to={"/order"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-blue-600 font-bold text-xl px-4 py-2 "
                      : "text-blue-300 font-bold text-xl hover:bg-blue-600 px-4 py-2 rounded-md hover:text-white hover:font-bold"
                  }
                >
                  Buy Ticket
                </NavLink>
              </div>
            </div>
            <div className="flex-1 flex justify-center  gap-8">
              {userActive.isLogin ? (
                <Link
                  to={"/profile"}
                  className="flex flex-col gap-4 items-center"
                >
                  <div className="rounded-full bg-white shadow-2xl px-4 py-4">
                    <FaUser className="text-2xl" />
                  </div>
                  <p className="text-xl font-bold ">Users</p>
                </Link>
              ) : (
                <>
                  <Button
                    title="Sign In"
                    classname="border-white shadow-white border-2 px-4 py-2 rounded-md bg-white font-bold text-blue-600"
                    to="auth"
                  />
                  <Button
                    title="Sign Up"
                    classname="bg-blue-600 shadow-white border-2 px-4 py-2 rounded-md text-white border-blue-600"
                    to="auth/new"
                  />
                </>
              )}
            </div>
          </div>
          <div
            className="flex-1 flex justify-end items-center md:hidden"
            onClick={() => setHamburger(true)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5H19C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6C20 6.26522 19.8946 6.51957 19.7071 6.70711C19.5196 6.89464 19.2652 7 19 7H5C4.73478 7 4.48043 6.89464 4.29289 6.70711C4.10536 6.51957 4 6.26522 4 6Z"
                fill="black"
              />
              <path
                d="M4 18C4 17.7348 4.10536 17.4804 4.29289 17.2929C4.48043 17.1054 4.73478 17 5 17H19C19.2652 17 19.5196 17.1054 19.7071 17.2929C19.8946 17.4804 20 17.7348 20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18Z"
                fill="black"
              />
              <path
                d="M11 11C10.7348 11 10.4804 11.1054 10.2929 11.2929C10.1054 11.4804 10 11.7348 10 12C10 12.2652 10.1054 12.5196 10.2929 12.7071C10.4804 12.8946 10.7348 13 11 13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11H11Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </header>
      <div className="py-8 px-24 w-full">
        <MovieList />
      </div>
    </div>
  );
};

export default MovieAdmin;
