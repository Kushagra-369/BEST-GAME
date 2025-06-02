import React from 'react'
import { Link, Element } from 'react-scroll';

import image5 from '../assets/images/strange1.jpg'
import image6 from '../assets/images/strange2.jpg'
import image7 from '../assets/images/strange3.jpg'
import image8 from '../assets/images/strange4.jpg'


export default function Home5() {

 

  let  data2 = [
        {title : image5 },
        {title : image6},
        {title : image7},
        {title : image8},
    ];

  return (
      <Element name  = "news">
        <div className=' bg-blue-800 flex justify-center px-2 w-150 md:w-full'>
        <div className='  rounded-4xl border-2 w-full bg-white'>
         <div className=' py-20 md:flex ' >
        <div className='px-10 py-30 w-140 md:w-200'>
              <h1 className='text-2xl md:text-4xl font-bold'>The Official Home of</h1>
                <h1 className=' py-10 items-center flex gap-1 font-extrabold'><h1 className='text-6xl md:text-8xl'>LIFE</h1><h1 className='text-3xl md:text-5xl'>IS</h1><h1 className='text-6xl md:text-8xl'>STRANGE</h1></h1>
                <h1 className=' text-2xl'>Life is Strange é uma série premiada de jogos de aventura narrativa em terceira pessoa. Você assumirá o papel de uma pessoa comum, dotada – ou amaldiçoada – de um poder incrível, e enfrentará desafios extraordinários.</h1>
                <h1 className='py-10 text-2xl'> Sua história se entrelaçará com personagens ricamente realizados, locais vívidos e emoções inesquecíveis - e as decisões mais difíceis serão todas suas.</h1>
                <h1 className='py-10 text-2xl'>Não importa suas escolhas, essas histórias ficarão com você para sempre..</h1>
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
