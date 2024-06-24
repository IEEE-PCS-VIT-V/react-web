import React from 'react'
import { Button } from 'flowbite-react';

export default function Blogbox(props) {
  return (
    <div className=" border border-blue-900 shadow-xl shadow-black rounded-lg w-full md:w-4/5 pr-2 py-10 mx-auto">
      <div className=''>
              <div className="w-40 float-left my-auto relative right-8">
                <img src={props.img} alt="imge" />
              </div>
              <div className="">
                <p className='text-sm sm:text-md font-bold leading-tight'>{props.day}</p>
                <p className='text-sm sm:text-md font-bold leading-tight'>{props.date}</p>
                <p className='text-sm sm:text-md font-bold leading-tight mt-2 '>{props.topic}</p>
                
                <p className=' text-xs text-blue-800 font-serif mt-3 mb-5 ml-2'>
                  {props.content}
                </p>
                


                <a href={props.link} target='_blank' rel='noreferrer'><Button  outline size='sm' className="bg-gradient-to-r from-blue-700 to-blue-900 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-gradient-to-bl dark:focus:ring-blue-800  mt-4 ml-2">Read More</Button></a>
              </div>
              
            </div>
    </div>
  )
}
