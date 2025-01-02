import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules';
import data from '../data.json'
import star from '../assets/star.svg'
import quote from '../assets/quote-icon.svg'
import sophia from '../assets/sophia-testimonial.webp'
import emily from '../assets/emily-testimonial.webp'
import liam from '../assets/liam-testimonial.jpg'
import jason from '../assets/jason-testimonial.jpg'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
    const testimonials = data[1]
    const testimoalImgs = [emily, jason, sophia, liam]
  return (
    <section>
        <div className="container helper">
        <Swiper
        modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
    >
      {
        testimonials.map((testimonial, index) => (
          <SwiperSlide className='px-10 pb-10' key={index}>
        <div className="rounded-3xl border-2 border-black shadow-custom shadow-secondary text-center max-w-[220px] relative mx-auto py-8">
            <img src={quote} alt="" className='absolute -top-4 -right-7' />
            <div className="w-16 h-20 rounded-xl mx-auto mb-6 bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${testimoalImgs[index]})`}}></div>
            <h4>{testimonial.name}</h4>
        </div>
        <div className="border-2 border-black pb-16 pt-4 md:pt-6 lg:py-16 px-5 lg:px-14 rounded-3xl max-w-2xl mx-auto mt-10 relative text-center">
          <p>{testimonial.testimonial}</p>
          <div className="flex gap-3 absolute bg-white -bottom-[1.5px] -left-[1.5px] border-t-2 border-e-2 border-black rounded-tr-2xl py-1 px-1">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            </div>
        </div>
        </SwiperSlide>
        ))
      }
    </Swiper>
        </div>
    </section>
  )
}

export default Testimonials
