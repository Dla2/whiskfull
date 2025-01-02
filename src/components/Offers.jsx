import React from 'react'
import cakes from '../assets/cakes.webp'
import cookies from '../assets/cookies.webp'
import brownies from '../assets/brownies.webp'
import pastries from '../assets/pastries.webp'
import cakeIcon from '../assets/cake-icon.svg'
import cookieIcon from '../assets/cookie-icon.svg'
import brownieIcon from '../assets/brownie-icon.svg'
import pastryIcon from '../assets/pastry-icon.svg'
import data from '../data.json'
import { motion, transform } from 'motion/react'

const Offers = () => {
    const offers = data[0]
    const offersImgs = [cakes, brownies, cookies, pastries]
    const offersIcons = [cakeIcon, brownieIcon, cookieIcon, pastryIcon]
  return (
    <section>
        <div className="container helper">
            <h2>What We Offer</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-10 lg:gap-y-8 mt-12">
                {offers.map((offer,index) => (
                    <div key={index} className="rounded-5xl min-h-[300px] bg-no-repeat bg-cover bg-center relative" style={{backgroundImage: `url(${offersImgs[index]})`}}>
                        <div className="flex gap-6 items-center bg-black bg-opacity-85 rounded-br-5xl rounded-bl-5xl px-5 py-0 text-white absolute bottom-0 w-full">
                            <h4>{offer.name}</h4>
                            <img src={offersIcons[index]} alt="" />
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default Offers
