import React from 'react'
import HeroAlt from '../components/HeroAlt'
import Navbar from '../components/Navbar'
import heroImg from '../assets/cookies-header.webp'
import OrderForm from '../components/OrderForm'
import ContactInfo from '../components/ContactInfo'

const OrderPage = () => {
  const heroContent = {
    title: 'Order Now',
    text: 'We’d love to hear from you! Whether you have a question, want to place a custom order, or just feel like sharing your baking stories, we’re here to help.'
  }
  return (
    <>
      <div className="bg-top bg-cover relative" style={{backgroundImage: `url(${heroImg})`}}>
          <div className="w-full h-full bg-gradient-to-r from-black absolute bg-opacity-90 top-0 left-0"></div>
          <Navbar className='relative z-10' isHome={false}/>
          <HeroAlt className='relative z-10'heroContent={heroContent}/>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 container helper gap-10">
        <OrderForm/>
        <ContactInfo/> 
      </div>
    </>
    
  )
}

export default OrderPage
