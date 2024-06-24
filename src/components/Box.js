import React from 'react'

export default function Box(props) {
  return (
    <div className=' border-white pt-4 bg-white my-2 pl-2 w-1/5 text-center rounded-lg' >
      <img src={props.image} className='md:h-14 mx-auto md:w-14 mt-0 h-9 w-9'  alt='img'/>
      <p className='text-blue-900 text-xl mx-0 my-0 py-0 px-0 font-semibold ' >{props.number}+</p>
      
      <p className='mx-0 text-blue-900 font-normal text-sm' >{props.name}</p>
    </div>
  )
}
