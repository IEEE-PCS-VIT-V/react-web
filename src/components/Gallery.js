import React,{useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import  { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import img1 from '../img/gallery/img1.jpeg';
import img2 from '../img/gallery/img2.jpeg';
import img3 from '../img/gallery/img3.jpeg';
import img4 from '../img/gallery/img4.jpeg';
import img5 from '../img/gallery/img5.jpeg';
import img6 from '../img/gallery/img6.jpg';
import img7 from '../img/gallery/img7.jpeg';
import img8 from '../img/gallery/img8.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    
    <section id="gallery" className=' container mx-auto mb-20'>
      <div className="text-center text-blue-950" data-aos='fade-up'>
        <h1 className='text-4xl font-bold mb-7'>GALLERY</h1>
      </div>
      <Swiper
      modules={[EffectCoverflow,Pagination, Navigation,Autoplay]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={3}
        grabCursor={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
            delay: 3000,
          },
          320: {
            slidesPerView: 1,
            delay: 3000,
          },
        }}
      className='px-10'>
        <SwiperSlide>
          <img src={img1} alt="Ima1" className='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Ima2" className='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Ima3" className=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="Ima4" className=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="Ima5" className=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="Ima6" className=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="Ima7" className=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="Ima8" className=''/>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Gallery;
