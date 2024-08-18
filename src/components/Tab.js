import React, { useState } from 'react'
import Events from './Events'
import Gallery from './Gallery';
import Blogs from './blogs/blogs';
import Aboutus from './Aboutus';
import Flagship from './book/Flagship';

const Tabs = () => {
    const [pagenumber, setPagenumber] = useState(0);
  return (
    <div>
      <div className="flex align-middle justify-center m-7 mt-16">
      <div className={`px-4 py-2 text-xl cursor-pointer ${pagenumber === 0 ? 'bg-blue-950 font-bold text-white rounded-3xl' : ''}`}  onClick={()=>setPagenumber(0)}>AboutUs</div>
      <div className={`px-4 py-2 text-xl cursor-pointer ${pagenumber === 1 ? 'bg-blue-950 font-bold text-white rounded-3xl' : ''}`} onClick={()=>setPagenumber(1)}>Flagship Events</div>
        <div className={`px-4 py-2 text-xl cursor-pointer ${pagenumber === 2 ? 'bg-blue-950 font-bold text-white rounded-3xl' : ''}`} onClick={()=>setPagenumber(2)}>Events</div>
        <div className={`px-4 py-2 text-xl cursor-pointer ${pagenumber === 3 ? ' bg-blue-950 font-bold text-white rounded-3xl' : ''}`} onClick={()=>setPagenumber(3)}>Gallery</div>
        <div className={`px-4 py-2 text-xl cursor-pointer ${pagenumber === 4 ? 'bg-blue-950 font-bold text-white rounded-3xl' : ''}`} onClick={()=>setPagenumber(4)}>Blogs</div>
      </div>

      {pagenumber===0?<Aboutus/>:pagenumber===1?<Flagship/>:pagenumber===2?
      <Events/>:pagenumber===3?<Gallery/>:<Blogs/>
      }
    </div>
  )
}

export default Tabs
