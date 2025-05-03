import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  datas: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistory: (state, { payload }) => {
      // console.log(payload);
      const result = [...state.datas];
      result.push(payload);
      return { datas: [...result] };
    },
    editHistory: (state, { payload }) => {
      // return {datas: []}
      // console.log(state);
      // console.log(payload.);
      const result = state.datas.filter(
        (item) => item.virtualAccount !== payload.virtualAccount
      );
      console.log(result);
      const newDatas = (payload.orderStatus = "success");
      // const newArr = result.map((data) => (data.status = "success"));
      return { datas: [...result, { ...payload, newDatas }] };
    },
  },
});

export const historyAction = {
  ...historySlice.actions,
};

export default historySlice.reducer;
