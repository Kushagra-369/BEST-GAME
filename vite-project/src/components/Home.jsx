import React from 'react'
import { Link, Element } from 'react-scroll';

import image5 from '../assets/images/strange1.jpg'
import image6 from '../assets/images/strange2.jpg'
import image7 from '../assets/images/strange3.jpg'
import image8 from '../assets/images/strange4.jpg'


export default function Home() {

 

  let  data2 = [
        {title : image5 },
        {title : image6},
        {title : image7},
        {title : image8},
    ];

  return (
      <Element name  = "news">
        <div className=' bg-blue-800 flex justify-center px-2 w-150'>
        <div className='  rounded-4xl border-2 w-full bg-white'>
         <div className=' py-20 md:flex ' >
        <div className='px-10 py-30 w-140 md:w-200'>
                <h1 className='text-2xl md:text-4xl font-bold'>The Official Home of</h1>
                <h1 className=' py-10 items-center flex gap-1 font-extrabold'><h1 className='text-6xl md:text-8xl'>LIFE</h1><h1 className='text-3xl md:text-5xl'>IS</h1><h1 className='text-6xl md:text-8xl'>STRANGE</h1></h1>
                <h1 className=' text-2xl'>Life is Strange is a series of award-winning, third-person narrative adventure games. You’ll step into the shoes of an ordinary person, gifted – or cursed – with an amazing power, and rise to face extraordinary challenges.</h1>
                <h1 className='py-10 text-2xl'> Your story will intertwine with richly realized characters, vivid locations, and unforgettable emotions - and the hardest decisions are all yours to make.</h1>
                <h1 className='py-10 text-2xl'>No matter your choices, these stories will stay with you forever.</h1>
        </div>

        <div className=' grid grid-cols-2 gap-5'>
                {
                    data2.map((item,key) =>(
                        <div>
                            <img className=' w-100 h-70 md:h-80 md:w-70' src={item.title} alt="" />
                        </div>
                    ))
                }
        </div>
    </div>
      </div>
      </div>
      </Element>
  )
}
