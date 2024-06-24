import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EventBox from "./EventBox";
import e0 from "../img/event/Event0.png";
import e1 from "../img/event/Event7.jpeg";
import e2 from "../img/event/Event10.1.jpeg";
import e3 from "../img/event/Event4.jpeg";
import e4 from "../img/event/Event5.jpeg";
import e5 from "../img/event/Event3.png";
import e6 from "../img/event/Event8.jpeg";
import e7 from "../img/event/Event1.png";
import e8 from "../img/event/Event6.jpeg";
import e9 from "../img/event/Event2.png";
import e10 from "../img/event/Event9.jpeg";
import e11 from "../img/event/24e1.jpeg";
import e12 from "../img/event/24e2.png";
import e13 from "../img/event/24e3.jpeg";

export default function Events() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-custom-gradient w-full text-center py-4" id="events">
      <div className="container mx-auto">
        <h1 className="text-5xl font-semibold ">EVENTS & WORKSHOPS</h1>
        <div className=" h-auto w-full ">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {data.map((d, i) => (
              <EventBox
                key={i}
                img={d.img}
                content={d.content}
                loc={d.loc}
                date={d.date}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
const data = [
  {
    img: e13,
    content:
      "TechScribe is for AI, blockchain, and IoT discussions. Ignite creativity, inspire innovation, and connect with fellow tech bloggers",
    loc: "Virtual",
    date: "Jun 3, 2024",
  },
  {
    img: e12,
    content:
      "'Code it Out' at Yantra for coding challenges, design twists, and strategic auctions. Showcase skills, win prizes!",
    loc: "VIT",
    date: "Mar 21, 2024",
  },
  {
    img: e11,
    content:
      "Join our immersive workshop on Generative AI with Physics Wallah Skills: explore creativity, innovation, and practical applications.",
    loc: "VIT",
    date: "Mar 18, 2024",
  },
  {
    img: e0,
    content:
      "I wish🤔 I could also be on the AIB, THE LAUGHTER CLUB, THE CANVAS CLUB etc. ….but I don’t have the opportunity!!",
    loc: "Virtual",
    date: "Apr 22, 2022",
  },
  {
    img: e1,
    content:
      "The aim of this Event is to explore recent advancements in machine learning concepts to address practical challenges in wireless networks.Hope to meet you all there!!",
    loc: "Virtual",
    date: "Jan 26, 2022",
  },
  {
    img: e2,
    content:
      "These quotes sound inspirational. But words are nothing without actions. There is a lot of hard work and toil of days invested in making a start up or any entrepreneurial venture take flight. IEEE-PCS brings to you Mr. Anubhav Dubey.",
    loc: "Virtual",
    date: "Apr 6, 2022",
  },
  {
    img: e3,
    content:
      "Well, IEEE -PCS is here to unfold the mystery. We are back with yet another amazingly informative event for all of you. Dive into the world of full-stack development with our event Django – Web Application Development.Intrigued?",
    loc: "Virtual",
    date: "May 21, 2022",
  },
  {
    img: e4,
    content:
      "The event comprises an hour-long Webinar on microprocessors by an industry expert followed by an interactive doubt session and a short quiz, the winners of which would be receiving exciting prizes!",
    loc: "Virtual",
    date: "Sep 25, 2021",
  },
  {
    img: e5,
    content:
      "At IEEE PCS, we always entertain communication with new ideas. But more than that, we welcome surprises that keep us on our toes. Pitching is more than just wordplay showing the perquisites of a product. It is about how persuasive and confident you are",
    loc: "Virtual",
    date: "Apr 14, 2021",
  },
  {
    img: e6,
    content:
      "IEEE-PCS brings 'Knowledge Mania', an intriguing event in which you unravel clues and answers in order to win the prize, become your inner Sherlock Holmes.Come and be a part of this virtual adventure as you continue to take risks in order to progress!",
    loc: "Virtual",
    date: "Jan 30, 2022",
  },
  {
    img: e7,
    content:
      "IEEE-PCS brings you 'Project Resurrection' where you'll get to experience the intricacies of corporate policymaking. Help save your company ship from sinking into a vast abyss. Hope you forge ahead whilst your company explodes.",
    loc: "Virtual",
    date: "July 30, 2021",
  },
  {
    img: e8,
    content:
      "Debating is a disciplined art form in which you present your arguments. IEEE PCS brings you 'The War of Wits', a ferocious battle of wits in which you can bring out the stand-up comedian inside you and hilariously express your opinions",
    loc: "Virtual",
    date: "Oct 9, 2021",
  },
  {
    img: e9,
    content:
      "Hold Your Breath and Fasten Your Seat Belts 🥋!Let's drive your industrial hunch onto a rollercoaster!🎢🛼",
    loc: "Virtual",
    date: "Apr 22, 2022",
  },
  {
    img: e10,
    content:
      "The talk show would enable you to improve your skills and take up NLP projects, internships and jobs as well.Join us for a fun session of learning.",
    loc: "Virtual",
    date: "May 22, 2020",
  },
];
