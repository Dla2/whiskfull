import React from 'react'
import { Link } from 'react-router'
import whiskfullLogo from '../assets/whiskfull-logo.svg'
import whiskfullLogoAlt from '../assets/whiskfull-logo-alt.svg'

const Navbar = ({isHome}) => {
  return (
    <header className='flex items-center justify-between container mx-auto px-4 md:px-10 lg:px-16 py-6'>
        <img src={isHome ? whiskfullLogo :  whiskfullLogoAlt} alt="" className='relative z-20' />
        <nav className='flex items-center gap-8 relative z-20'>
            <ul className='hidden items-center justify-center gap-8 lg:flex '>
                <li><Link to="/" className={isHome ? 'hover:text-primary transition-colors': 'hover:text-primary transition-colors text-white'}>Home</Link></li>
                <li><Link to="/about" className={isHome ? 'hover:text-primary transition-colors': 'hover:text-primary transition-colors text-white'}>About</Link></li>
                <li><Link to="/menu" className={isHome ? 'hover:text-primary transition-colors': 'hover:text-primary transition-colors text-white'}>Menu</Link></li>
            </ul>
            <Link to="/order" className="btn bg-primary hover:bg-accent transition-colors text-white">Order Now</Link>
        </nav>
    </header>
  )
}

export default Navbar
