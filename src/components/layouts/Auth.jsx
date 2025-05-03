import { Outlet } from "react-router";
import bgAuth from "../../assets/images/bg-auth.png";

const Auth = () => {
  return (
    <section
      className="relative min-h-[120vh] md:min-h-screen xl:min-h-screen bg-cover flex justify-center md:items-center bg-center bg-fixed "
      style={{ backgroundImage: `url(${bgAuth})` }}
    >
      <div className="bg-black/70 h-full absolute min-w-full flex justify-center py-4"></div>
      <div className="px-4 w-full md:w-[70%] lg:w-[60%] xl:w-[40%] py-8">
        <Outlet />
      </div>
    </section>
  );
};

export default Auth;
