import React from 'react'
import HeroAlt from '../components/HeroAlt'
import About from '../components/About'
import Navbar from '../components/Navbar'
import croissantHeader from '../assets/croissant-header.webp'
import Hero from '../components/Hero'
import Cta from '../components/Cta'
import Mission from '../components/Mission'
import Team from '../components/Team'


const AboutPage = () => {
  const heroContent = {
    title: "Our Story",
    text: "Whiskfull was born out of a simple love for baking and a desire to share its magic with the world. What started as a small kitchen experiment quickly blossomed into a vibrant community of baking enthusiasts. From the first batch of cookies to the latest innovation in bakeware, our journey has always been guided by a passion for bringing people together through the art of baking."
  }

  const heroAltContent = {
    title: 'Welcome to Whiskfull — Your Happy Place for All Things Baking!'
  }

  const aboutContent = {
    text: "At Whiskfull, we believe baking is more than just mixing ingredients — it’s about creating moments of joy, sharing smiles, and adding a little sweetness to everyday life. Whether you’re a seasoned baker or just discovering the magic of your oven, we’re here to inspire your next delicious adventure"
  }
  return (
    <>
      <section className='relative bg-center bg-no-repeat bg-cover' style={{backgroundImage: `url(${croissantHeader})`}}>
          <div className='absolute top-0 left-0 min-w-full min-h-full bg-gradient-to-r from-black'></div>
          <Navbar className='relative z-10' isHome={false}/>
          <HeroAlt heroContent={heroAltContent}/>
      </section>
      <About isHome={false} aboutContent={aboutContent}/>
      <Hero isHome={false} heroContent={heroContent}/>
      <Mission/>
      <Team/>
      <Cta/>
    </>
  )
}

export default AboutPage
