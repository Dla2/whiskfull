import React from 'react'
import homeImg from '../assets/home-img.webp'
import storyImg from '../assets/our-story-img.webp'
import cupcake1 from '../assets/cupcake1.webp'
import cupcake2 from '../assets/cupcake2.webp'
import cupcake3 from '../assets/cupcake3.webp'
import { Link } from 'react-router'
import {motion} from 'motion/react'


const Hero = ({isHome, heroContent}) => {
  return (
    <section className={isHome ? "container helper flex flex-col lg:flex-row items-center gap-20 overflow-hidden" : "container helper flex flex-col lg:flex-row-reverse items-center gap-20 overflow-hidden"}>
        <div className={isHome ? "text-wrapper" : "text-wrapper text-right"}>
            {isHome ? <h1>{heroContent.title}</h1> : <h2>{heroContent.title}</h2>}
            <p className='mt-5 mb-8'>{heroContent.text}</p>
            {isHome && (
              <div className="">
                <Link to="/order" className='btn bg-primary py-4'>Order</Link>
                <Link to="/menu" className='btn bg-secondary ml-8 py-4'>Menu</Link>
            </div>
            )}
        </div>
        <div className='relative'>
            <div className="img-holder lg:min-w-[350px] xl:min-w-[489px] md:min-w-[489px] min-w-[361px] min-h-[456px] rounded-5xl bg-center bg-no-repeat bg-cover" style={isHome ? {backgroundImage: `url(${homeImg})`} : {backgroundImage: `url(${storyImg})`}}></div>
            <div className="flex gap-8 justify-center absolute -bottom-10 md:-bottom-16 right-0 left-0 md:-left-56">
              <motion.div whileHover={{scale: 1.1}} className="img-holder rounded-full lg:min-w-20 min-w-20 lg:min-h-20 min-h-20 xl:min-w-[128px] md:min-w-[128px] xl:min-h-[128px] md:min-h-[128px] bg-center bg-cover" style={{backgroundImage: `url(${cupcake1})`}}></motion.div>
              <motion.div whileHover={{scale: 1.1}}  className="img-holder rounded-full lg:min-w-20 min-w-20 lg:min-h-20 min-h-20 xl:min-w-[128px] md:min-w-[128px] xl:min-h-[128px] md:min-h-[128px] bg-center bg-cover" style={{backgroundImage: `url(${cupcake2})`}}></motion.div>
              <motion.div whileHover={{scale: 1.1}}  className="img-holder rounded-full lg:min-w-20 min-w-20 lg:min-h-20 min-h-20 xl:min-w-[128px] md:min-w-[128px] xl:min-h-[128px] md:min-h-[128px] bg-center bg-cover" style={{backgroundImage: `url(${cupcake3})`}}></motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero
