import Button from "../elements/Button";
import { IoEyeOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaExclamationCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import Loader from "../elements/Loader";
// import { authContext } from "../../context/authContext";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../redux/slices/auth";

const FormAuth = ({ type }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // const { auth, setAuth } = useContext(authContext);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    email: false,
    password: false,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [succesMessage, setSuccesMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // IIFE => Immediately Invoked Function Expression
    // console.log(location.state.from);
    (() => {
      if (auth.isLogin) {
        if (location.state instanceof Object) {
          return navigate(location.state.from);
        }

        navigate("/");
      }
    })();
  }, [auth.isLogin]);

  const showPasswordHandler = () => {
    if (showPassword) return setShowPassword(false);
    setShowPassword(true);
  };
  const validationForm = () => {
    const regexMail = /^[A-Z0-9]+@[A-Z0-9]+\.[A-Z]{2,}$/i;
    let isValid = true;
    if (email === "" && password === "") {
      setError({
        email: true,
        password: true,
      });
      setErrorMessage("Email & Password cannot be empty");
      return (isValid = false);
    }
    if (email === "") {
      setError({
        email: true,
      });
      setErrorMessage("Email cannot be empty");
      return (isValid = false);
    }
    if (!regexMail.test(email) & (password === "")) {
      setError({
        email: true,
        password: true,
      });
      setErrorMessage("Email Not Match & Password Cannot be Empty");
      return (isValid = false);
    }
    if (password === "") {
      setError({
        password: true,
      });
      setErrorMessage("Password cannot be empty");
      return (isValid = false);
    }
    if (!regexMail.test(email)) {
      setError({
        email: true,
      });
      setErrorMessage("Email Not Match");
      return (isValid = false);
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationForm()) {
      setErrorMessage("");
      setError({
        email: false,
        password: false,
      });
      setIsLoading(true);
      let users = JSON.parse(localStorage.getItem("users")) || [];
      if (type === "regist") {
        const userExists = users.some(
          (existingUser) => existingUser.email === email
        );
        if (userExists) {
          setTimeout(() => {
            setIsLoading(false);
            setErrorMessage("email already exists!");
            setError({
              email: true,
              password: true,
            });
          }, 3000);
          return;
        }
        const user = {
          email,
          password,
        };
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        setSuccesMessage("Sign Up Succes wait a few seconds");
        setTimeout(() => {
          setIsLoading(false);
          navigate("/auth");
        }, 3000);
        return;
      }
      if (type === "login") {
        const user = users.find((existingUser) => existingUser.email === email);
        if (!user) {
          setTimeout(() => {
            setIsLoading(false);
            setErrorMessage("User does not exist!");
            setError({
              email: true,
              password: true,
            });
          }, 3000);
          return;
        }
        if (user.password !== password) {
          setTimeout(() => {
            setIsLoading(false);
            setErrorMessage("Incorrect Email / Password!");
            setError({
              email: true,
              password: true,
            });
          }, 3000);
          return;
        }
        const submittedUser = {
          user: {
            email,
            password,
            fullName: "guest",
          },
          isLogin: true,
        };
        setTimeout(() => {
          setSuccesMessage("Sign In Succes wait a few seconds");
          setIsLoading(false);
        }, 3000);
        setTimeout(() => {
          // setAuth(submittedUser);
          dispatch(authAction.addAuth(submittedUser));
        }, 4000);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-4 mb-2">
      <div
        className={`${
          errorMessage ? "visible" : succesMessage ? "visible" : "invisible"
        }  ${
          errorMessage ? "bg-red-600" : "bg-green-600"
        } px-2 md:px-4 md:font-bold flex items-center gap-2 md:gap-4 text-white py-2 rounded-md`}
      >
        <FaExclamationCircle />
        <p className="">
          {errorMessage}
          {succesMessage}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="font-bold">
          Email
        </label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError({
              email: false,
            });
          }}
          placeholder="Enter Your Email"
          className={`${
            error.email
              ? "border-red-600 animation-shake"
              : email
              ? "border-blue-600"
              : "border-gray-300"
          } border-2 outline-none  rounded-md px-2 py-2 md:px-4 md:py-4 font-semibold`}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="font-bold">
          Password
        </label>
        <div
          className={`${
            error.password
              ? "border-red-600 animation-shake"
              : password
              ? "border-blue-600"
              : "border-gray-300"
          } w-full border-2 rounded-md px-2 py-2 md:px-4 md:py-4 flex justify-between`}
        >
          <input
            type={showPassword ? "password" : "text"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError({
                password: false,
              });
            }}
            placeholder="Enter your password"
            className="outline-none w-full font-semibold"
          />
          <div
            className="flex justify-center items-center w-max cursor-pointer"
            onClick={showPasswordHandler}
          >
            {!showPassword ? (
              <IoEyeOutline className="text-2xl" />
            ) : (
              <FaRegEyeSlash className="text-2xl" />
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 active:bg-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="link-checkbox"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          I agree with the{" "}
          <a className="text-blue-600 dark:text-blue-500 hover:underline">
            terms and conditions
          </a>
          .
        </label>
      </div>
      <div className="w-full">
        <button
          type="submit"
          className={`${
            isLoading ? "bg-white" : "bg-blue-600"
          } active:scale-95 transition-all w-full hover:cursor-pointer  flex justify-center items-center py-3 md:py-4 rounded-md  text-white font-bold`}
          disabled={isLoading}
        >
          {isLoading ? <Loader /> : "Join For Free Now"}
        </button>
      </div>
    </form>
  );
};

export default FormAuth;
