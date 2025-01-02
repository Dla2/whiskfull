import React from 'react'
import heroImg from '../assets/pie-header.webp'
import HeroAlt from '../components/HeroAlt'
import Navbar from '../components/Navbar.jsx'
import Cta from '../components/Cta.jsx'
import Menu from '../components/Menu.jsx'

const MenuPage = () => {
  const heroContent = {
    title: 'Whiskfull Menu',
    text: 'Indulge in our delightful selection of baked goods, made with love and the finest ingredients. From classic favorites to seasonal specialties, there’s something for everyone at Whiskfull.'
  }
  return (
    <>
      <div className="bg-top bg-cover relative" style={{backgroundImage: `url(${heroImg})`}}>
        <div className="w-full h-full bg-gradient-to-r from-black absolute bg-opacity-90 top-0 left-0"></div>
        <Navbar className='relative z-10' isHome={false}/>
        <HeroAlt className='relative z-10'heroContent={heroContent}/>
      </div>
      <Menu/>
      <Cta/>
    </>
  )
}

export default MenuPage
