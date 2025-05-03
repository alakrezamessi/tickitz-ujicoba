import { Outlet } from "react-router";
// import Footer from "../fragments/Footer";
import Header from "../fragments/Header";

const MainProfile = () => {
  return (
    <main className="">
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
    </main>
  );
};

export default MainProfile;
