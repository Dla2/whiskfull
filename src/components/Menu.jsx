import React from 'react'
import data from '../data.json'
import cakes from '../assets/cakes.webp'
import cookies from '../assets/cookies.webp'
import brownies from '../assets/brownies.webp'
import pastries from '../assets/pastries.webp'

const Menu = () => {
    const menu = data[0]
    const menuImg = [cakes, cookies, brownies, pastries]
    console.log(4 % 2)
  return (
    <section>
        <div className="container mx-auto">
            {menu.map((item, index) => (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 helper" key={index}>
                  <div className="img-holder w-full h-72 md:h-96 lg:h-auto rounded-5xl bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${menuImg[index]})`}}></div>
                  <div className="text-wrapper">
                    <h3>{item.name}</h3>
                    <div className=" flex flex-col gap-10 mt-12">
                      {item.types.map((type, numb) => (
                        <div className="flex gap-2 md:gap-4 items-center" key={numb}>
                          <h5 className='text-nowrap'>{type.name}</h5>
                          <span className='w-full border-t-2 border-b-2 border-accent h-3'></span>
                          <h5>{type.price}</h5>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Menu
