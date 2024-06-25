import React from "react";
import image from "./PCSLogoLatest.png";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className=" bg-blue-900  text-left font-bold text-base font-sans px-12 py-12 mt-11" id="footer">
        <div className="flex lg:justify-center justify-between container mx-auto">
        <div className="inline-block align-top lg:w-1/3 ml-0 text-center">
          <img src={image} className=" md:w-36 m-5 w-20 mx-auto" alt="logo" />
          <p className="text-white mb-2 ">
            <a href="#home" className=" inline-block no-underline">
              Home
            </a>
            |
            <a href="#gallery" className=" inline-block no-underline">
              Gallery
            </a>
            |
            <a href="#events" className=" inline-block no-underline">
              Events
            </a>
            |
            <a href="#blogs" className=" inline-block no-underline">
              Blogs
            </a>
            |
            <a href="#board" className=" inline-block no-underline">
              Board
            </a>
          </p>
          <p className=" text-slate-400 text-xs m-0">
            Copyright © 2021 <strong>IEEE-PCS</strong> All rights reserved
          </p>
        </div>
        <div className=" md:w-1/3 inline-block my-auto ml-4">
            <div className="w-4/5 mx-auto">
            <a
                href="https://www.google.co.in/maps/place/Vellore+Institute+of+Technology/@12.9692232,79.1537396,17z/data=!3m1!4b1!4m5!3m4!1s0x3bad479f0ccbe067:0xfef222e5f36ecdeb!8m2!3d12.9692232!4d79.1559336?hl=en"
                target="_blank"
                rel="noreferrer"
                className="flex justify-start text-white mb-4 text-sm" 
              >
              <FaLocationDot size={20}className="mr-5 hidden md:inline"/>
              <p className="">VIT University Vellore</p>
              </a>
              <a href="tel:+918897213645" className="flex justify-start text-white mb-4 text-sm" > <BsFillTelephoneFill className="mr-5 hidden md:inline"size={20}/> <p className="">9425605901</p></a>
              <a href="mailto:pcsboard2022@gmail.com" className="flex justify-start text-white text-sm"> <IoIosMail className="mr-5 hidden md:inline" size={25}/><p>E-mail</p></a>
            </div>
              
           
        </div>
        <div className=" ml-12 md:w-1/3 hidden md:inline-block align-top">
          <p className=" leading-5 text-slate-400 text-sm m-0">
            <span className="block text-white text-lg font-bold mb-5">
              About Us
            </span>
            The major objective of <strong>IEEE-PCS </strong>
            is to help engineers technically to communicate better in their work
            place both verbally and non-verbally.
          </p>
          <div className=" mt-6">
            <a
              href="https://www.facebook.com/search/top?q=ieee%20professional%20communication%20society%20vit"
              target="_blank"
              rel="noreferrer"
              className=" inline-block w-9 cursor-pointer  rounded-sm text-xl text-white text-center mr-2 mb-1 hover:bg-blue-500"
            >
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/ieeepcsvit/" target="_blank" rel="noreferrer" className=" inline-block w-9 cursor-pointer rounded-sm text-xl text-white text-center mr-2 mb-1 hover:bg-blue-500">
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/ieeepcsvit/mycompany/"
              target="_blank"
              rel="noreferrer"
              className=" inline-block w-9 cursor-pointer  rounded-sm text-xl text-white text-center mr-2 mb-1 hover:bg-blue-500"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
