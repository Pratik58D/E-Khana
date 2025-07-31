
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="bg-[#444444] flex flex-col items-center gap-5 py-5 px-[8vw] pt-20 text-white mt-28">
      <div className="footer-content w-full flex justify-between ">
        <div className="footer-content-left w-[40%] flex flex-col items-start gap-5">
          <img src={assets.logo} alt="" className="w-40 " />
          <p  className="text-justify">
            Ekhana is your go-to online food delivery platform. Whether you are
            craving fast food, traditional meals, or snacks, we deliver fresh
            and delicious food straight to your door.
          </p>
          <div className="social-icons flex w-10 mr-5 gap-4">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center flex flex-col items-start gap-5">
          <h2 className="text-white text-2xl font-semibold">COMPANY</h2>
          <ul>
            <li className="list-none cursor-pointer mb-3">Home</li>
            <li className="list-none cursor-pointer mb-3">About us</li>
            <li className="list-none cursor-pointer mb-3">Delivery</li>
            <li className="list-none cursor-pointer mb-3">Privacy policy</li>
          </ul>
        </div>

        <div className="footer-content-right flex flex-col items-start gap-5">
          <h2 className="text-white text-2xl font-semibold">Get in touch</h2>
          <ul>
            <li className="list-none cursor-pointer mb-3">+977123456789</li>
            <li className="list-none cursor-pointer mb-3">
              pratikdevkota666@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <hr className="h-0.5 w-full my-5 bg-gray-500" />
      <p className="footer-copyright">
        CopyRight 2024 &copy; ekhana - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
