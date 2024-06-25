// Section1.js
import { useEffect, useState, React } from "react";
import logo from "../img/logo.png";
import { Button } from "flowbite-react";

const HomeSection1 = () => {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (position === 100 || position === 0) {
        setDirection((prevDirection) => -prevDirection);
      }

      setPosition((prevPosition) => prevPosition + direction * 3);
    }, 500);

    return () => clearInterval(interval);
  }, [position, direction]);

  const iconStyle = {
    position: "relative",
    transition: "top 0.5s ease",
    top: `${position}px`,
    marginRight: "0",
    marginTop: "40px",
  };
  return (
    <div className="bg-gradient-to-b from-blue-300 via-blue-300/70 to-white pt-10">

      <div className="flex justify-between container mx-auto ">
        <div className=" pl-4 mt-7 hidden md:inline-block ">
          <p className="text-4xl font-bold ">ABOUT US</p>
          <br></br>
          <p className="text-2xl mt-0 mb-0 text-black font-semibold">
            Communication for the <span className="text-blue-900">Soul,</span>
          </p>
          <p className="text-2xl text-black font-semibold">
            Technology for the <span className="text-blue-900">Mind.</span>
          </p>
          <form method="get" action="#about">
            <Button
              outline
              className="bg-gradient-to-r from-blue-700 to-blue-900 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-gradient-to-bl dark:focus:ring-blue-800  mt-4"
            >
              Know More
            </Button>
          </form>
        </div>
        <div className="md:inline-block mx-auto w-52 md:w-80 md:mx-0 md:my-0 md:mr-0 pr-8">
          <img
            src={logo}
            style={iconStyle}
            className="w-full"
            alt="logo"
          />
        </div>
      </div>
      <div className="mt-12 text-center block md:hidden">
        <p className="text-2xl font-bold">ABOUT US</p>
        <br></br>
        <p className="text-lg mt-0 mb-0 text-black font-semibold">
          Communication for the <span className="text-blue-900">Soul,</span>
        </p>
        <p className="text-lg text-black font-semibold">
          Technology for the <span className="text-blue-900">Mind.</span>
        </p>
        <form method="get" action="#about">
          <Button
            outline
            className="bg-gradient-to-r from-blue-700 to-blue-900 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-gradient-to-bl dark:focus:ring-blue-800 mx-auto mt-5"
          >
            Know More
          </Button>
        </form>
      </div>
    </div>
  );
};

export default HomeSection1;
