import Icon from "../elements/Icon";
import ebuId from "../../assets/images/ebu-id.png";
import cine21 from "../../assets/images/cine-one21.png";
import hiflix from "../../assets/images/hiflix.png";
import { FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4 lg:px-8 md:px-12 xl:px-24 py-12">
      <div className="border-b-2 border-gray-300 flex pb-4 flex-col lg:flex-row gap-12 lg:gap-0">
        <div className="flex flex-1 flex-col md:flex-row gap-12">
          <div className="flex-1 flex flex-col gap-4">
            <Icon size="text-5xl" />
            <p className="text-gray-500">
              Stop waiting in line. Buy tickets conveniently, watch movies
              quietly.
            </p>
          </div>
          <div className="flex-1 flex flex-col lg:items-center">
            <h2 className="mb-2 font-bold text-2xl">Explore</h2>
            <div className="flex lg:flex-col lg:gap-2 h-full flex-wrap gap-6">
              <p className="text-gray-500">Cinemas</p>
              <p className="text-gray-500">Movies List</p>
              <p className="text-gray-500">My Ticket</p>
              <p className="text-gray-500">Notification</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col md:flex-row gap-12">
          <div className="flex-1 flex lg:justify-center">
            <div className="flex flex-col lg:flex-col gap-4">
              <h2 className="font-bold text-2xl lg:text-center">Our Sponsor</h2>
              <div className="flex lg:flex-col gap-4">
                <div className="flex  lg:justify-center items-center">
                  <img src={ebuId} alt="" />
                </div>
                <div className=" flex justify-center items-center">
                  <img src={cine21} alt="" />
                </div>
                <div className=" flex justify-center items-center">
                  <img src={hiflix} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex lg:justify-center">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-2xl">Follow us</h2>
              <div className="flex gap-4">
                <FiFacebook className="text-2xl" />
                <p className="text-gray-500">Tiketku Cinema id</p>
              </div>
              <div className="flex gap-4">
                <FaInstagram className="text-2xl" />
                <p className="text-gray-500">tiketku.id</p>
              </div>
              <div className="flex gap-4">
                <FiTwitter className="text-2xl" />
                <p className="text-gray-500">tiketku.id</p>
              </div>
              <div className="flex gap-4">
                <FiYoutube className="text-2xl" />
                <p className="text-gray-500">Tiketku Cinema id</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-8">© 2020 Tickitz. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
