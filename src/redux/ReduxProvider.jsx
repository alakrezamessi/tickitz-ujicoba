import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistedStore } from "./store";

function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export default ReduxProvider;
