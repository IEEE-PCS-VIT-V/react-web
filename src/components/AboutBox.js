import React, {useEffect} from 'react'
import img1 from '../img/mainimg1.jpg'
import img2 from '../img/mainimg.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function AboutBox(props) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <div className='flex h-72 mb-12 mt-12 mx-auto ' data-aos='flip-left'>
        <img src={img1} className='w-96 h-72 hidden md:inline-block rounded-l-3xl' alt='img'></img>
        <div className='w-96 bg-sky-blue rounded-3xl md:rounded-none md:rounded-r-3xl  text-center'> 
            <h1 className='font-bold text-2xl text-blue-800 font-serif mt-5'>About Us</h1>
            <p className='px-4 mt-2 text-md'>Lost attempting to search for resources and learning about a domain? Don't worry as IEEE Professional Communication Society is ready to support you on your journey. IEEE PCS aims to provide its members with perpetual opportunities to significantly contribute to events of all types while involuntarily emphasizing on social skills including sportsmanship and leadership that are eminent characteristics in an engineer's life.</p>
        </div>
    </div>
    <div className='flex h-72 mb-12 mx-auto' data-aos='flip-right'>
    <div className='w-96 bg-sky-blue rounded-3xl md:rounded-none md:rounded-l-3xl  text-center'> 
        <h1 className='font-bold text-2xl text-blue-800 font-serif mt-5'>Know more about us!</h1>
        <p className='px-4 mt-2 text-md'>With this aim , the chapter bifurcates its properties into 4 categories; Technical , Design , Management and Editorial. The four teams work in sync to create, mend and run an event. Success or a failure, members strive to make an impact, allowing them to discover the different abilities that require to perform an activity well; academically, personally or socially.</p>
    </div>
    <img src={img2} className='w-96 h-72 hidden md:inline-block rounded-r-3xl' alt='img'></img>
</div>
</>
  )
}
