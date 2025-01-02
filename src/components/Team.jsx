import React from 'react'
import james from '../assets/james.webp'
import jonathan from '../assets/Jonathan.webp'
import abigail from '../assets/abigail.webp'
import layla from '../assets/layla.webp'


const Team = () => {
    const team = [{name: "James", imgUrl:james},{name: "Jonathan", imgUrl: jonathan}, {name: "Abigail", imgUrl: abigail}, {name: 'Layla', imgUrl: layla}]
  return (
    <section>
        <div className="container helper">
            <div className="text-wrapper">
                <h2 className='mb-8'>Meet the Team</h2>
                <p>Behind Whiskfull is a team of bakers, dreamers, and dessert lovers who are dedicated to spreading the joy of baking. From crafting recipes to curating the best tools, we pour our hearts into every detail to ensure your baking journey is as sweet as possible.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
                {team.map((member,index) => (
                    <div key={index} className=" relative rounded-3xl bg-center bg-cover bg-no-repeat max-w-full lg:max-w-[300px] h-[350px]" style={{backgroundImage: `url(${member.imgUrl})`}}>
                        <div className="absolute bg-black bg-opacity-90 rounded-b-3xl w-full text-white bottom-0 pl-5 py-2">
                            <h4>{member.name}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Team
