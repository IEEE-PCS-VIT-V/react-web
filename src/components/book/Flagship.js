import React from 'react'
import Book from './Book'
import cover from "./img/ITC Benguiat (2).png"
import page1 from "./img/ITC Benguiat (4).png"
import page2 from "./img/5.png"
import page3 from "./img/4.png"
import page4 from "./img/ITC Benguiat (5).png"
import b2c from './img/cove.png'
import b2p1 from './img/6.png'
import b2p2 from './img/7.png'
import b2p3 from './img/8.png'
import b2p4 from './img/9.png'
import b2p5 from './img/10.png'
const Flagship = () => {
    const book1 = [
        cover,
        page1,
        page2,
        page3,
        page4
      ]
      const book2 = [
        b2c,
        b2p1,
        b2p2,
        b2p3,
        b2p4,
        b2p5
      ]
  return (
    
    <div className=' flex mx-auto justify-center'>
      <Book bookdata = {book1} />
      <Book bookdata={book2}/>
    </div>
  )
  
}

export default Flagship
