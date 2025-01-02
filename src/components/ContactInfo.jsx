import React from 'react'
import phone from '../assets/phone.svg'
import email from '../assets/email.svg'
import time from '../assets/time.svg'
import location from '../assets/location-pin-accent.svg'
import instagram from '../assets/Instagram.svg'
import youtube from '../assets/Youtube.svg'
import x from '../assets/X.svg'

const ContactInfo = () => {
  return (
    <div className='bg-secondary rounded-3xl py-10 px-8 lg:px-16 flex flex-col justify-center gap-12'>
        <div className="flex items-center gap-5">
            <img src={phone} alt="" />
            <p>(123) 456-7890</p>
        </div>
        <div className="flex items-center gap-5">
            <img src={email} alt="" />
            <p>hello@whiskfull.com</p>
        </div>
        <div className="flex items-center gap-5">
            <img src={location} alt="" />
            <p>Whiskfull Bakery 123 Sweet Street, Bakeville, BT 56789</p>
        </div>
        <div className="flex items-center gap-5">
            <img src={time} alt="" />
            <div className="">
                <p>Monday - Friday: 08:00am - 06:00pm</p>
                <p>Saturday: 09:00am - 04:00pm</p>
                <p>Sunday: Closed</p>
            </div>
        </div>
        <div className="flex items-center gap-5 justify-center">
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
            <img src={x} alt="" />
        </div>
    </div>
  )
}

export default ContactInfo
