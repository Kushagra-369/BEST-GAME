import React from 'react'
import { Link, Element } from 'react-scroll';

export default function Part4b() {
    return (
        <Element name = "new">
            <div className='  bg-blue-800 w-150 md:w-full'>
            <div className=' px-2  py-5 flex justify-center '>
            <div
            className=' md:h-[800px] h-[400px] rounded-4xl border-2 w-full  bg-cover bg-no-repeat object-center object-cover'
            style={{ backgroundImage: 'url(https://fyre.cdn.sewest.net/life-is-strange-hub/663b8c005a1a8ff866f04e59/lis-double-exposure-homepage-hero-Pk3W2JhUv.jpeg?quality=85&width=3840)',  }}
        >
            <div className=' text-4xl md:text-6xl text-white items-center px-5 py-5 md:py-50 font-extrabold'>
                <h1 className=' text-white'>LIFE IS STRANGE</h1>
                <h1 className='  text-white px-5'>Double Exposure</h1>
                <h1 className=' text-cyan-300 items-center py-5 md:py-10'>अब बाहर</h1>
                <h1>Two Timelines.</h1>
                <h1 className=' py-4 text-red-500'>एक असंभव रहस्य.</h1>
                <div className=' flex gap-10 py-5 md:py-10'>
                    <a href="https://youtu.be/TOYz4NCFIXg?feature=shared"><div className='hover:bg-cyan-300 text-center items-center border-6 border-red-600 hover:border-amber-300 h-15 w-60 bg-white rounded-4xl'>
                        <h1 className=' py-2 text-black text-2xl '>ट्रेलर देखें</h1>
                    </div></a>
                    <a href="">
                    <div className='hover:bg-cyan-300 text-center border-6 border-amber-300 h-15 w-60 hover:border-red-600 bg-white rounded-4xl'>
                        <h1 className=' py-2 text-black text-2xl  '>और अधिक जानें</h1>
                    </div>
                    </a>
                </div>
            </div>

        </div>
        </div>
        </div>
        </Element>
    )
}
