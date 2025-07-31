
import "./header.css";

const Header = () => {
  return (
    <div className=" header relative h-[34vw] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] my-8 mx-auto bg-no-repeat bg-cover bg-center rounded-lg overflow-hidden">
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <div className=" header-content absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-4 sm:left-6 md:left-12 lg:left-24 flex flex-col items-start gap-4 sm:gap-6 md:gap-8 lg:gap-[1.2vw] max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] z-10">
        <h2 className="font-medium text-white text-[4vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[max(4.5vw,22px)] leading-snug">
          From your favorite kitchens to your table.
        </h2>
        <p className="text-white text-[2vw] sm:text-[1.8vw] md:text-[1.5vw] lg:text-[1vw]">
          Bringing the best local flavors and dishes to your home with just a few clicks. Discover new cuisines, support local restaurants, and satisfy your cravings in minutes.
        </p>
        <button className="px-6 sm:px-8 md:px-10 lg:px-10 py-2 sm:py-2.5 md:py-3 lg:py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 hover:-translate-y-1 hover:scale-105 transition duration-500 ease-in-out">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
