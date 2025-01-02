import React from 'react'
import { Link } from 'react-router'
import whiskfullLogo from '../assets/whiskfull-logo-alt.svg'

const Footer = () => {
  return (
    <footer className='bg-accent'>
        <div className="container helper">
            <img src={whiskfullLogo} alt="" className='mx-auto'/>
            <ul className='text-white flex gap-8 justify-center mt-8 mb-20'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/menu'>Menu</Link>
                </li>
            </ul>
            <div>
                <Link className="btn bg-secondary mr-auto" to='/order'>Order</Link>
                <p className='text-white inline-block float-end'>Copyright @2024</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
