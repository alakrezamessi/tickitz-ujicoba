import { Outlet } from "react-router";
import Footer from "../fragments/Footer";
import Header from "../fragments/Header";
// import OrderProvider from "../../context/orderContext";

const Movie = () => {
  return (
    <main className="">
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Movie;
