import React from 'react'

const Page = React.forwardRef((props, ref) => {
    return (
      <div className="" ref={ref}>
        {/* <h1>Page Header</h1> */}
        <img src={props.img} alt='page'></img>
        {/* <p>Page number: {props.number}</p> */}
      </div>
    );
  });

export default Page
