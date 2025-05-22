import React from 'react'
import image1 from '../assets/images/life1.jpg'
import image2 from '../assets/images/life2.jpg'
import image3 from '../assets/images/life3.jpg'
import image4 from '../assets/images/life4.jpg'

export default function Games() {

     let  data = [
            {title : image1 },
            {title : image2},
            {title : image3},
            {title : image4},
        ];

  return (
    <div className=' md:w-full w-150 bg-blue-800 text-white'>
        
        <div className=' text-center py-20' >
            <h1 className=' text-7xl font-bold'>Life is Strange Games</h1>
            <h1 className=' py-10 text-2xl'>A series of thrilling supernatural mysteries to experience.</h1>
        </div>

        <div className=' flex text-center justify-center gap-10 py-0'>
            {
                    data.map((item,key) =>(
                        <div>
                            <img className='px-5 w-50 h-40 md:h-70 md:w-70' src={item.title} alt="" />
                        </div>
                    ))
                }
        </div>

    </div>
  )
}
