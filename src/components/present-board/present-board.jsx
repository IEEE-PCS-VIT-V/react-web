import React from 'react'; 
import i1 from './images/chair.jpg'
import i2 from './images/vicechair.jpg'
import i3 from './images/gensec.jpg'
import i4 from './images/cosec.jpg'
import i5 from './images/hr.jpg'
import i6 from './images/management.jpg'
import i7 from './images/anika.jpg'
import i8 from './images/technical.jpg'
import i9 from './images/pr.jpg'
import i10 from './images/projects.jpg'
import Boardcard from './Boardcard';
import { Button } from 'flowbite-react';
const Presentboard = () => {
    return (
        <>
    <section className="mt-14 container mx-auto" id="board">
      <div className=" text-center">
      <h1 className='text-5xl text-blue-950 font-bold mb-3'>PRESENT BOARD</h1>
      </div>
      <div className="">
        <div className="relative flex flex-wrap justify-center">
          {
            data.map((d,ind)=>(
              <Boardcard key={ind} img={d.img} name={d.name} designation={d.designation}/>
            ))
          }
        </div>
      </div>
    </section>
    <a href='https://ieee-pcs-vit-v.github.io/react-web/#/exboard'><Button outline
              className='bg-gradient-to-r from-blue-700 to-blue-900 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-gradient-to-bl dark:focus:ring-blue-800  mt-4 mx-auto'>Past Board Members</Button></a>
        </>
    );
}

export default Presentboard;

const data = [
  {
    img: i1,
    name: "Abhay Maheshwari",
    designation : "Chairperson",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: i2,
    name: "Aakriti Goenka",
    designation : "Vice-Chairperson",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: i3,
    name: "Arnav Trivedi",
    designation : "Secretary",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: i4,
    name: "Drishya KrishnaKumar",
    designation : "Co-Secretary",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: i8,
    name: "Taruna Dhaddha",
    designation : "Technical Head",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: i7,
    name: "Anika Saxena",
    designation : "Design Head",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: i10,
    name: "Soumyajit Pal",
    designation : "Projects Head",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: i6,
    name: "Riddhi Thakare",
    designation : "Management Head",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: i5,
    name: "Joyeeta Nath",
    designation : "Finance and HR",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: i9,
    name: "Prabhav Srivastava",
    designation : "Public Relations",
    insta: "",
    ldn : "",
    github: "",
  },

]