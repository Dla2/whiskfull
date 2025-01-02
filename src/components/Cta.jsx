import React from 'react'
import { Link } from 'react-router'
import ctaCake1 from '../assets/cake1-cta.webp'
import ctaCake2 from '../assets/cake2-cta.webp'
import ctaCake3 from '../assets/cake3-cta.webp'
import ctaCake4 from '../assets/cake4-cta.webp'
import { motion } from 'motion/react'


const Cta = () => {
  return (
    <section>
        <div className="container helper">
            <div className="cta flex items-center relative bg-gradient-to-r from-primary via-secondary via-60% to-accent pl-10 rounded-3xl h-[350px] overflow-hidden">
                <div className="text-wrapper my-auto">
                    <h3>What You Waiting For?</h3>
                    <div className="mt-12">
                        <Link to='/order' className='btn bg-accent text-white mr-8'>Order Now</Link>
                        <Link to='/menu' className='btn bg-secondary'>Menu</Link>
                    </div>
                </div>
                <motion.div whileHover={{ scale: 1.1, right: 0  }} className="bg-center bg-cover w-[332px] h-[345px] absolute -right-[166px] top-auto hidden md:block" style={{backgroundImage: `url(${ctaCake4})`}}></motion.div>
                <motion.div whileHover={{ scale: 1.1, right: 0  }} className="bg-center bg-cover w-[305px] h-[317px] absolute -right-[152.5px] top-auto z-10 hidden md:block" style={{backgroundImage: `url(${ctaCake3})`}}></motion.div>
                <motion.div whileHover={{ scale: 1.1, right: 0  }} className="bg-center bg-cover w-[245px] h-[255px] absolute -right-[122.5px] top-auto z-20 hidden md:block" style={{backgroundImage: `url(${ctaCake2})`}}></motion.div>
                <motion.div whileHover={{ scale: 1.1, right: 0 }} className="bg-center bg-cover w-[168px] h-[175px] absolute -right-[84px] top-auto z-30 hidden md:block" style={{backgroundImage: `url(${ctaCake1})`}}></motion.div>
            </div>
        </div>
    </section>
  )
}

export default Cta
