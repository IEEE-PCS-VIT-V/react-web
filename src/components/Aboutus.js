import {React, useEffect} from 'react'
import AboutBox from './AboutBox';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Aboutus() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id="about" className='flex flex-col justify-center align-middle text-center mb-10 container mx-auto ' >
      <h1 className=' text-5xl mt-20 font-semibold' data-aos ='fade-up'>ABOUT US</h1>
      <AboutBox className='mx-auto'/>
    </div>
  )
}
