import React from 'react'
import {Navbar} from 'flowbite-react'
import logo from '../img/logo.png'
export default function Navbarr() {
  
  return (
    <div className='mx-0 my-0 font-sans text-3xl bg-transparent'>
      <Navbar className=' px-0 py-1 my-0 flex bg-transparent justify-center container mx-auto 2xl:px-24'>
  
      <Navbar.Brand href='\'>
        <img src={logo} className='h-10 sm:h-11 py-1  md:inline-block ml-1 px-0' alt='PCS Logo'/>
      </Navbar.Brand>
      
      
      <Navbar.Toggle/>
    
      <Navbar.Collapse  className='text-2xl font-bold text-white text-center'>
        <Navbar.Link href='/react-web' className='my-1 text-white' >
          <span className='bg-blue-900 p-2 mt-2 rounded-xl md:bg-transparent'>HOME</span>
        </Navbar.Link>
        <Navbar.Link href='#gallery' className='my-1 text-white'>
        <span className='bg-blue-900 p-2 mt-2 rounded-xl md:bg-transparent'>GALLERY</span>
        </Navbar.Link>
        <Navbar.Link href='#events'className='my-1 text-white'>
        <span className='bg-blue-900 p-2 mt-2 rounded-xl md:bg-transparent'>EVENTS</span>
        
        </Navbar.Link>
        <Navbar.Link href='#blogs'className='my-1 text-white'>
        <span className='bg-blue-900 p-2 mt-2 rounded-xl md:bg-transparent'>BLOGS</span>
        
        </Navbar.Link>
        <Navbar.Link href='#footer'className='my-1 text-white'>
        <span className='bg-blue-900 p-2   rounded-xl md:bg-transparent'>CONTACT US</span>
        
        </Navbar.Link>
      </Navbar.Collapse>
      
    </Navbar>
    </div>
    
    
  )
}
