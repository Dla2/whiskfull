import React from 'react'
import halfCookie from '../assets/half-cookie.svg'
import halfBrownie from '../assets/half-brownie.svg'
import aboutImg from '../assets/about-img.webp'

const About = ({isHome, aboutContent}) => {

  return (
    <section className='relative'>
      <img src={halfCookie} alt="" className='absolute -top-4 left-0 xl:-left-10'/>
      <img src={halfBrownie} alt="" className='absolute -bottom-14 right-0' />
      <div className='container helper text-center'>
        {isHome ? (
          <>
            <h2>About Us</h2>
            <div className=" flex lg:gap-16 gap-9 lg:flex-row flex-col lg:text-left mt-12 relative z-20">
                <p>{aboutContent.text}</p>
                <p>{aboutContent.text2}</p>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center lg:justify-between text-left flex-col lg:flex-row">
              <div className="pr-24">
                <h2 className='mb-8'>About Us</h2>
                <p>{aboutContent.text}</p>
              </div>
              <div className="rounded-3xl min-w-full lg:min-w-[440px] min-h-[270px] mt-20 lg:mt-0 z-10 bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${aboutImg})`}}>
              </div>
            </div>
          </>
        )}
        </div>
    </section>
      
  )
}

export default About
