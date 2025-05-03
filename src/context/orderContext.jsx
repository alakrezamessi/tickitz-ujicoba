import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const initialOrder = {
  title: "",
  genre: [],
  price: 0,
  seat: [],
  image: "",
  bookTickets: {
    date: "",
    time: "",
    location,
  },
  cinema: "",
  payment: {
    fullName: "",
    email: "",
    phoneNumber: "",
    method: "",
  },
};
export const orderContext = createContext({
  order: initialOrder,
  setOrder: () => {},
});

function OrderProvider({ children }) {
  const [order, setOrder] = useLocalStorage("orderContext", initialOrder);
  return (
    <orderContext.Provider value={{ order, setOrder }}>
      {children}
    </orderContext.Provider>
  );
}

export default OrderProvider;
