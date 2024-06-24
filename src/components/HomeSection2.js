// Section2.js
import React from 'react';
import Box from './Box';
import cntr1 from '../img/cntr1.png';
import cntr2 from '../img/cntr2.jpg';
import cntr3 from '../img/cntr3.png';
import cntr4 from '../img/cntr4.png';

function HomeSection2(){
  return (
    <div className='bg-blue-950 py-2 px-2 md:mt-32 mt-10'>
    <div className='container mx-auto flex justify-evenly'>
      <Box image={cntr3} number={150} name={"Members"}/>
      <Box image={cntr1} number={50} name={"Events"}/>
      <Box image={cntr4} number={100} name={"Workshops"}/>
      <Box image={cntr2} number={20} name={"Sponsors"}/>

    </div>
    
    </div>
  );
}

export default HomeSection2;
