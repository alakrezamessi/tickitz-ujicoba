import { createSlice } from "@reduxjs/toolkit";
// import useLocalStorage from "../../hooks/useLocalStorage";

const initialState = {
  title: "",
  genre: [],
  price: 0,
  seat: [],
  image: "",
  bookTickets: {
    date: "",
    time: "",
    location: "",
  },
  cinema: "",
  payment: {
    fullName: "",
    email: "",
    phoneNumber: "",
    method: "",
  },
  orderStatus: "pending",
  virtualAccount: "",
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, { payload }) => {
      const result = { ...state, ...payload };
      return result;
    },
    deleteOrder: (state, _) => {
      return initialState;
    },
  },
});

export const orderAction = {
  ...orderSlice.actions,
};

export default orderSlice.reducer;
