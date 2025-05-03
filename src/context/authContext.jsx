import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const initialAuth = {
  user: {
    email: "",
    password: "",
  },
  isLogin: false,
};

export const authContext = createContext({
  auth: initialAuth,
  setAuth: () => {},
});

function AuthProvider({ children }) {
  const [auth, setAuth] = useLocalStorage("authContext", initialAuth);
  return (
    <authContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;
