import { useEffect, React } from "react";
// import Aboutus from './Aboutus';
import Navbarr from './Navbar';
import HomeSection1 from './HomeSection1';
import HomeSection2 from './HomeSection2';
// import Gallery from './Gallery';
// import Events from './Events';
// import Blogs from './blogs/blogs.jsx';
import Presentboard from './present-board/present-board.jsx';
import Footer from './footer/footer.jsx';
import Tabs from './Tab.js';
import WAVES from 'vanta/src/vanta.waves';





function Main() {
  useEffect(()=>{
    WAVES({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      // minHeight: 400.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      // color: 0x4a6ccf,
      color: 0x4361ba,
      zoom:0.8
    })
  },[])
  
  return (
    <>
    <div id="vanta">
    <Navbarr/>
    <HomeSection1/>
    </div>
    <HomeSection2/>
    <Tabs/>
    <Presentboard/>
    <Footer/>
     
    </>
      
  );
}

export default Main;