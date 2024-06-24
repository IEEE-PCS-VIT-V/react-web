import React from 'react'
import { FaInstagram, FaLinkedinIn, FaGithub} from "react-icons/fa";

export default function Boardcard(props) {
  return (
    <div className="relative h-80 w-56 m-5 cursor-pointer overflow-hidden rounded-lg shadow-xl flex justify-center items-center">
            <div className="w-full h-full transition-all duration-300 ease-in-out 
            ">
              <img src={props.img} alt="Chair" className=' object-cover w-full hover:transform hover:scale-110 ' />
            </div>
            <div className="absolute -bottom-16 w-full h-24 z-10 flex-col backdrop-blur-md shadow-2xl shadow-neutral-700 rounded-xl transition-all duration-500 delay-650 hover:bottom-0.5 hover:transition hover:delay-0 ">
              <div className="text-center">
                <h3 className=" uppercase text-white font-medium duration-500 delay-600 hover:opacity-100 ">{props.name}</h3>
                <span className="uppercase text-white font-normal  text-sm duration-500 delay-600 hover:opacity-75">{props.designation}</span>
              </div>
              <ul className="social flex justify-center items-center mt-4">
                <li className='mr-3'>
                  <a href={props.insta} target="_blank" rel='noreferrer'><FaInstagram /></a>
                </li>
                <li className='mr-3'>
                  <a href={props.ldn} className="" target="_blank" rel='noreferrer'><FaLinkedinIn /></a>
                </li>
                <li className='mr-3'>
                  <a  href={props.github} className="" target="_blank" rel='noreferrer'><FaGithub />
</a>
                </li>
              </ul>
            </div>
          </div>
  )
}
