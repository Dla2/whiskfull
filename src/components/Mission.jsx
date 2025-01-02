import React from 'react'
import inspire from '../assets/inspire.svg'
import brain from '../assets/brain.svg'
import community from '../assets/community.svg'

const Mission = () => {
  return (
    <section>
        <div className="container helper text-center">
            <h2>Mission</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
                <div className="mx-auto max-w-72 border-2 border-black shadow-custom shadow-secondary px-6 py-12 rounded-2xl">
                    <img src={inspire} alt="" className='mx-auto mb-10' />
                    <p>Inspire creativity in the kitchen with fool proof recipes and innovative ideas.</p>
                </div>
                <div className="mx-auto max-w-72 border-2 border-black shadow-custom shadow-secondary px-6 py-12 rounded-2xl">
                    <img src={brain} alt="" className='mx-auto mb-10'/>
                    <p>Empower bakers with the tools and knowledge they need to succeed.</p>
                </div>
                <div className="mx-auto max-w-72 border-2 border-black shadow-custom shadow-secondary px-6 py-12 rounded-2xl">
                    <img src={community} alt="" className='mx-auto mb-10'/>
                    <p>Foster a community where everyone, from beginners to pros, can share their love of baking.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Mission
