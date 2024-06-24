import Aboutus from './Aboutus';
import Navbarr from './Navbar';
import HomeSection1 from './HomeSection1';
import HomeSection2 from './HomeSection2';
import Gallery from './Gallery';
import Events from './Events';
import Blogs from './blogs/blogs.jsx';
import Presentboard from './present-board/present-board.jsx';
import Footer from './footer/footer.jsx';


function Main() {
  return (
    <>
    <Navbarr/>
    <HomeSection1/>
    <HomeSection2/>
    <Aboutus/>
    <Gallery/>
    <Events/>
    <Blogs/>
    <Presentboard/>
    <Footer/>
    </>
      
  );
}

export default Main;