import React, { useEffect } from "react";
import image from "./blog_1.1.jpeg";
import image1 from "./blog_2.1.jpg";
import image2 from "./blog_3.jpg";
import image3 from "./24b1.jpg";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Blogbox from "../Blogbox";
import { Button } from "flowbite-react";

const Blogs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
        <section className="container mx-auto mt-10" id="blogs">
            <h2 className="text-5xl font-bold text-center mb-5 text-blue-900" data-aos='fade-up'>Blogs</h2>
          <div className="md:flex flex-wrap sm:mb-10 justify-center">
            <div className="mt-8 mx-auto w-4/5 sm:w-1/2 "  data-aos='fade-right'>
              <Blogbox img={data[0].img} day={data[0].day} date={data[0].date} topic={data[0].topic} content={data[0].content} link={data[0].link} className=" w-4/5"/></div>
            <div className="mt-8 mx-auto w-4/5 sm:w-1/2" data-aos='fade-left'>
              <Blogbox img={data[1].img} day={data[1].day} date={data[1].date} topic={data[1].topic} content={data[1].content} link={data[1].link} /></div>
            <div className=' mt-8 w-4/5 sm:w-1/2 mx-auto' data-aos='fade-up'>
              <Blogbox img={data[2].img} day={data[2].day} date={data[2].date} topic={data[2].topic} content={data[2].content} link={data[2].link} />
          </div>

          </div> 
          <a href="https://ieeepcs-85169.medium.com/" className="mx-auto"><Button outline className="mx-auto w-52 mt-5">View More</Button></a>
        </section>
    </>
  );
};

export default Blogs;

const data = [
  {
    img : image3,
    day: "Tuesday",
    date: "Mar 19, 2024",
    topic: "Crafting Tomorrow: The Future of Generative AI",
    content :"In the vast landscape of artificial intelligence, one area that has sparked tremendous excitement and intrigue is Generative AI.......",
    link : "https://ieeepcs-85169.medium.com/crafting-tomorrow-a-deep-dive-into-the-future-of-generative-ai-d61186b3241d",
},
  {
      img : image,
      day: "Sunday",
      date: "Sep 19 2021",
      topic: "Microprocessors: the Unexplained Link",
      content :"Today we live in a world swarmed by technology. Everything and everyone is involved in technology......",
      link : "https://ieeepcs-85169.medium.com/microprocessors-the-unexplained-link-459dacf7a2cd",
  },
  {
    img : image1,
    day: "Sunday",
    date: "Aug 29 2021",
    topic: "Supervised Machine Learning",
    content :"Supervised Learning is a type of machine learning used to train models using labelled datasets. Labelled data is a......",
    link: "https://ieeepcs-85169.medium.com/supervised-machine-learning-c5c7c5872ad9",
},
{
  img : image2,
  day: "Tuesday",
  date: "Jul 8 2021",
  topic: "An Ode to My Pen",
  content :"Someone asked me why I write that made me think, “really! why do I write?” Perhaps it’s the freedom it gives my mind, or maybe I just like the way my pen runs between the lines giving words to my thoughts.....",
  link: "https://ieeepcs-85169.medium.com/an-ode-to-my-pen-7db61e81fece",
},
]
