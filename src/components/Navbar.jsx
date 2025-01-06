import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router'
import whiskfullLogo from '../assets/whiskfull-logo.svg'
import whiskfullLogoAlt from '../assets/whiskfull-logo-alt.svg'
import menu from '../assets/menu.svg'

const Navbar = ({isHome}) => {
  const [isNavActive, setIsNavActive] = useState(false)
  const handleClick = () => {
    setIsNavActive(!isNavActive)
  }

  return (
    <header className='flex items-center justify-between container mx-auto px-4 md:px-10 lg:px-16 py-6 relative'>
        <img src={isHome ? whiskfullLogo :  whiskfullLogoAlt} alt="" className='relative z-20' />
        <nav className={isNavActive ? 'absolute lg:static flex flex-col lg:flex-row justify-center lg:justify-end items-center gap-8 z-50 left-0 top-24 bg-white w-full transition-all duration-500': 'absolute lg:static flex flex-col lg:flex-row justify-center lg:justify-end items-center gap-8 z-50 -left-full top-24 bg-white w-full  transition-all'}>
            <ul className='items-center justify-center gap-8 flex flex-col lg:flex-row'>
                <li><Link to="/" className={isHome ? 'hover:text-primary transition-colors': 'hover:text-primary transition-colors text-white'}>Home</Link></li>
                <li><Link to="/about" className={isHome ? 'hover:text-primary transition-colors': 'hover:text-primary transition-colors text-white'}>About</Link></li>
                <li><Link to="/menu" className={isHome ? 'hover:text-primary transition-colors': 'hover:text-primary transition-colors text-white'}>Menu</Link></li>
            </ul>
            <Link to="/order" className="btn bg-primary hover:bg-accent transition-colors text-white mb-5 lg:mb-0">Order Now</Link>
        </nav>
        <button onClick={handleClick} className='lg:hidden'><img src={menu} alt="" /></button>
    </header>
  )
}

export default Navbar
