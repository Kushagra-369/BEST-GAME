import React from 'react'
import image1 from '../assets/images/life1.jpg'
import image2 from '../assets/images/life2.jpg'
import image3 from '../assets/images/life3.jpg'
import image4 from '../assets/images/life4.jpg'
import { Link, Element } from 'react-scroll';


export default function Games5() {

    let data = [
        { title: image1 },
        { title: image2 },
        { title: image3 },
        { title: image4 },
    ];

    return (
        <Element name = "games">
            <div className=' w-150 md:w-full  bg-blue-800 text-white'>

            <div className=' text-center py-20' >
                <h1 className=' text-7xl font-bold'>Life is Strange Jogos</h1>
                <h1 className=' py-10 text-2xl'>Uma série de emocionantes mistérios sobrenaturais para experimentar</h1>
            </div>

            <div className='  md:flex text-center  md:text-center md:justify-center gap-10 py-0'>
                {
                    data.map((item, key) => (
                        <div className=' flex justify-center py-2 '>
                            <div className='  w-100 h-80 md:h-70 md:w-70 '>
                                <img className=' w-100 h-80 md:h-70 md:w-70  rounded-2xl ' src={item.title} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
        </Element>
    )
}
