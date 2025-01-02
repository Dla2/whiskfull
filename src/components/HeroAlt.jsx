import React from 'react'
import { Link } from 'react-router'

const HeroAlt = ({heroContent}) => {
  return (
    <section className='bg-top bg-cover relative'>
        <div className={heroContent.text ? "container helper text-white" : "container helper text-white text-center"}>
            <h1 className='mb-12'>{heroContent.title}</h1>
            {heroContent.text && <p className='max-w-3xl'>{heroContent.text}</p>}
            {!heroContent.text &&(
              <div className="">
                <Link to='/order' className='btn text-black bg-primary mr-16'>Order</Link>
                <Link to='/menu' className='btn text-black bg-secondary'>Menu</Link>
              </div>
            )}
        </div>
    </section>
  )
}

export default HeroAlt
