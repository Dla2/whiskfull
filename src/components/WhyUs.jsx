import React from 'react'
import location from '../assets/location-pin.svg'
import recycle from '../assets/recycle.svg'
import family from '../assets/family.svg'

const WhyUs = () => {
  return (
    <section>
        <div className="container helper">
            <h2>Why Choose Us</h2>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 xl:gap-16 gap-10">
                <div className="text-center border-2 rounded-3xl shadow-custom shadow-primary border-black px-6 py-12">
                    <img src={location} alt="" className='mx-auto'/>
                    <h4 className='my-10'>Local Ingredients</h4>
                    <p>At Whiskfull, we believe in the power of local flavors. Every pastry is made using the freshest, high-quality ingredients sourced from trusted local farms. From the flour to the butter, we prioritize sustainability and support our community, ensuring every bite is as delicious as it is responsible.</p>
                </div>
                <div className="text-center border-2 rounded-3xl shadow-custom shadow-primary border-black px-6 py-12">
                    <img src={family} alt=""className='mx-auto' />
                    <h4 className='my-10'>Family-Owned</h4>
                    <p>Whiskfull is more than just a bakery—it’s a family tradition. As a family-owned business, we pour love and care into every item we bake. Our commitment to quality and authenticity is at the heart of everything we do, ensuring that every treat you enjoy has a personal touch and a history of passion behind it.</p>
                </div>
                <div className="text-center border-2 rounded-3xl shadow-custom shadow-primary border-black px-6 py-12">
                    <img src={recycle} alt="" className='mx-auto'/>
                    <h4 className='my-10'>Sustainability</h4>
                    <p>We’re not just about baking great treats—we’re about baking with purpose. Sustainability drives our every decision, from minimizing waste in the kitchen to using eco-friendly packaging. When you choose Whiskfull, you’re not only indulging in delicious pastries, but also supporting a greener, more sustainable future.</p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default WhyUs
