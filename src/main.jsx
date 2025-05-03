import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter } from "react-router";
import Router from "./router";
import AuthProvider from "./context/authContext";
import ReduxProvider from "./redux/ReduxProvider";
import ScrollToTop from "./lib/ScrollToTop";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReduxProvider>
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </ReduxProvider>
  </StrictMode>
);
