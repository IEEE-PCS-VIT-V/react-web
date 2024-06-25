import React from 'react'
import {Navbar} from 'flowbite-react'
import logo from '../img/logo.png'
export default function Navbarr() {
  
  return (
    <div className='mx-0 my-0 font-sans text-3xl  bg-blue-300'>
      <Navbar className=' px-0 py-1 my-0 bg-transparent flex justify-center container mx-auto 2xl:px-24'>
  
      <Navbar.Brand href='\'>
        <img src={logo} className='h-10 sm:h-11 py-1  md:inline-block ml-1 px-0' alt='PCS Logo'/>

      </Navbar.Brand>
      
      
      <Navbar.Toggle/>
    
      <Navbar.Collapse  className='text-2xl font-bold text-blue-900 text-center'>
        <Navbar.Link href='/react-web' >
          HOME
        </Navbar.Link>
        <Navbar.Link href='#gallery'>
          GALLERY
        </Navbar.Link>
        <Navbar.Link href='#events'>
          EVENTS
        </Navbar.Link>
        <Navbar.Link href='#blogs'>
          BLOGS
        </Navbar.Link>
        <Navbar.Link href='#footer'>
          CONTACT US
        </Navbar.Link>
      </Navbar.Collapse>
      
    </Navbar>
    </div>
    
    
  )
}
