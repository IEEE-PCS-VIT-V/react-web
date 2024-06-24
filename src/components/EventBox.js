import { useState } from "react";
import '../style/eventbox.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { Button } from "flowbite-react";
export default function EventBox(props) {
    const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
      <div className={`h-80 w-64 flip-container ${isFlipped ? 'flipped' : ''}`}  >
      <div className="flipper ">
        <div className="front" onMouseEnter={handleFlip} >
          <img src={props.img} className=' w-64 h-80 border rounded-3xl' alt="img"></img>
          </div>
        <div className="back" onMouseLeave={handleFlip}>
          <p className="m-4 mb-0">{props.content}</p><br>
          </br>
          <div className="flex justify-start w-1/2 ml-5"><FaLocationDot size={25} className="text-black mr-3" />{props.loc}</div>
          <br></br>
          <div className="flex justify-start ml-5"><FaCalendarAlt size={25} className="mr-3" />{props.date}</div>
          
          <a href="https://www.instagram.com/ieeepcsvit?igsh=OGZxaDVrc2N6bGU0"><Button className="bg-gradient-to-r from-blue-700 to-blue-900 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-gradient-to-bl dark:focus:ring-blue-800 mt-4 mx-auto">Read More</Button></a>
        </div>

      </div>
    </div>
  );
}
