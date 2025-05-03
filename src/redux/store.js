import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./slices/orders";
import historyReducer from "./slices/history";
import genresReducer from "./slices/genres";
import AuthProvider from "./slices/auth";
import {
  persistStore,
  persistCombineReducers,
  REGISTER,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
} from "redux-persist";
import constant from "../../configs/constant";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "tickitz",
  storage,
};

const persistedReducers = persistCombineReducers(persistConfig, {
  auth: AuthProvider,
  orders: orderReducer,
  history: historyReducer,
  genres: genresReducer,
});

const store = configureStore({
  reducer: persistedReducers,
  devTools: constant.nodeEnv !== "production",
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REGISTER, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE],
      },
    });
  },
});

export const persistedStore = persistStore(store);
export default store;
