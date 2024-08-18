import React,{ useRef} from 'react'
import Page from './Page'
import HTMLFlipBook from 'react-pageflip'
import { GrFormNextLink,GrFormPreviousLink } from "react-icons/gr";




const Book = ({bookdata}) => {
  const flipBookRef = useRef(0);
  const handleNextPage = () => {
    const pageFlip = flipBookRef.current.pageFlip(); // Updated access method
    if (pageFlip) {
      pageFlip.flipNext(); // Added corner direction ('bottom' or 'top')
    }
  };
  const handlePrevPage = () => {
    const pageFlip = flipBookRef.current.pageFlip(); // Updated access method
    if (pageFlip) {
      pageFlip.flipPrev(); // Added corner direction ('bottom' or 'top')
    }
  };
  return (
    <div className=' mx-16'>
      <HTMLFlipBook width={300} height={420} showCover={true} ref={flipBookRef}>
        
        
        {bookdata && bookdata.map((item, index) => (
          <Page number={index} key={index} img={item}></Page>
        ))}
      </HTMLFlipBook>
      
      <div className='flex justify-center'>
      <button onClick={handlePrevPage} className="mt-4 mx-2 px-4 py-2 bg-blue-300 text-white rounded">
      <GrFormPreviousLink />

      </button>
      <button onClick={handleNextPage} className="mt-4 px-4 py-2 bg-blue-300 text-white rounded">
      <GrFormNextLink />
      </button>
      </div>
    </div>
  )
}

export default Book
