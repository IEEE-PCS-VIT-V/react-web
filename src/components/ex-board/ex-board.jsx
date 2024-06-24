import React, {useState} from 'react';
import Boardcard from '../present-board/Boardcard';
import img1 from './2023/chair.jpg'
import img2 from './2023/vc.jpg'
import img3 from './2023/sec.jpg'
import img4 from './2023/co-sec.jpg'
import img5 from './2023/tech.jpg'
import img6 from './2023/edit.jpg'
import img7 from './2023/mange.png'
import img8 from './2023/des.jpg'
import img9 from './2023/hr.jpg'
import img10 from './2023/rnd.jpg'
import img11 from './2023/pr.jpg'
import i1 from './2022/chair.jpg'
import i2 from './2022/vice-chair.jpeg'
import i3 from './2022/sec.jpeg'
import i4 from'./2022/co-sec.jpg'
import i5 from'./2022/technical.jpg'
import i6 from './2022/web_lead.jpeg'
import i7 from './2022/desgin.jpg'
import i8 from './2022/event.jpeg'
import i9 from './2022/edit.jpg'
import i10 from './2022/hr.jpg'
import i11 from './2022/publicity.jpg'
import image1 from './2021/x_chair.png'
import image2 from './2021/x_vice.png'
import image3 from './2021/x_general_secre.png'
import image5 from'./2021/x_design.png'
import image4 from'./2021/x_technical.png'
import image6 from './2021/x_management.png'
import image7 from './2021/x_edit.png'
import image8 from './2021/x_hr.png'
import image9 from './2021/x_events.png'
import image10 from './2021/x_publicity.png'
import Navbarr from '../Navbar';
import Footer from '../footer/footer';
    
    const Exboard = () => {
      const [selectedYear, setSelectedYear] = useState('2023');

  const handleboard = (event) => {
    setSelectedYear(event.target.value);
  };
    return (
        <>
        <Navbarr/>
        <section className="m-14 text-center" id="board">
      <div className="text-center">
        <h1 className='text-5xl text-blue-950 font-bold mb-3'>EX-BOARD</h1>
      </div>
      <label className='text-center text-3xl font-semibold m-2'>Select Year: </label>
          <select value={selectedYear} onChange={handleboard} className='rounded-lg h-8 py-0'>
          <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
      <div className="">
        <div className="relative flex flex-wrap justify-center">
          {
            data[selectedYear].map((d, index)=>(
              <Boardcard key={index} img={d.img} name={d.name} designation={d.designation}/>
            ))
          }
        </div>
      </div>
    </section>
    <Footer/>
        </>
    );
}


export default Exboard;
const data = {
  2021:[ {
    img: image1,
    name: "Ayan Chandra",
    designation : "Chairperson",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: image2,
    name: "Kshitij Arya",
    designation : "Vice-Chairperson",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: image3,
    name: "Alap Bhakta",
    designation : "Secretary",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: image4,
    name: "Arshita Marwaha",
    designation : "Technical Head",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: image7,
    name: "Pranjal Dwivedi",
    designation : "Editorial Head",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: image6,
    name: "Laveesha Mudgal",
    designation : "Management Head",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: image5,
    name: "Ankit Bhanja",
    designation : "Design Head",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: image8,
    name: "Hartej Singh",
    designation : "HR and Finance Head",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: image9,
    name: "Eshika Goyal",
    designation : "Events Head",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: image10,
    name: "Mansi Singh",
    designation : "Publicity and Marketing Lead",
    insta: "",
    ldn : "",
    github: "",
  }],
  2022:[
    {
      img: i1,
      name: "Krishanu Das",
      designation : "Chairperson",
      insta: "https://www.instagram.com/krish_05anu/",
      ldn : "https://www.linkedin.com/in/krishanu-das-070a87202",
      github: "https://github.com/Krishanudas05",
    },
    {
      img: i2,
      name: "Rohan B",
      designation : "Vice-Chairperson",
      insta: "",
      ldn : "",
      github: "",
    },
    {
      img: i3,
      name: "Dilith Dinesh",
      designation : "Secretary",
      insta: "",
      ldn : "",
      github: "",
    },
    {
      img: i4,
      name: "Manas Sahu",
      designation : "Co-Secretary",
      insta: "",
      ldn : "",
      github: "",
    },
    {
      img: i5,
      name: "Chirag Makwana",
      designation : "Technical Head",
      insta: "",
      ldn : "",
      github: "",
    },
    {
      img: i6,
      name: "Sidharth Nair",
      designation : "Web Lead",
      insta: "",
      ldn : "",
      github: "",
    },
    {
      img: i7,
      name: "Harshwardhan Jha",
      designation : "Design Head",
      insta: "",
      ldn : "",
      github: "",
    },
    {
      img: i8,
      name: "Gauravi Mittal",
      designation : "Management Head",
      insta: "",
      ldn : "",
      github: "",
    },
    
    {
      img: i9,
      name: "Srishti Chopra",
      designation : "Editorial Head",
      insta: "",
      ldn : "",
      github: "",
    },
    {
      img: i10,
      name: "Shivang Singh",
      designation : "HR and Finance Head",
      insta: "",
      ldn : "",
      github: "",
    },
    {
      img: i11,
      name: "Pulkit Saraf",
      designation : "Publicity and Marketing Head",
      insta: "",
      ldn : "",
      github: "",
    },
    
    
  ],
  2023:[ {
    img: img1,
    name: "Ayush Tulshan",
    designation : "Chairperson",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: img2,
    name: "Gaurav Singh",
    designation : "Vice-Chairperson",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: img3,
    name: "Adira P",
    designation : "Secretary",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: img4,
    name: "Ainesh",
    designation : "Co-Secretary",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: img5,
    name: "Mehul",
    designation : "Technical Chair",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: img6,
    name: "adit Kaushal",
    designation : "Editorial Head",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: img7,
    name: "Shreya",
    designation : "Management Head",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: img8,
    name: "Rajesh Kumar",
    designation : "Design Head",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: img9,
    name: "Oindrila Paul",
    designation : "Finance and HR",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: img10,
    name: "Soumya Rathi",
    designation : "R&D Lead",
    insta: "",
    ldn : "",
    github: "",
  },
  {
    img: img11,
    name: "Abhiram Sunil",
    designation : "Public Relations",
    insta: "",
    ldn : "",
    github: "",
  }
],
}