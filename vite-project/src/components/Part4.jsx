import React from 'react'
import { Link, Element } from 'react-scroll';

export default function Part4() {
    return (
        <Element name = "new">
            <div className=' bg-blue-800  md:w-full w-150'>
            <div className='  py-5 flex justify-center '>
            <div
            className=' h-[800px] w-143  rounded-4xl border-2  md:w-330'
            style={{
                backgroundImage: 'url(https://fyre.cdn.sewest.net/life-is-strange-hub/663b8c005a1a8ff866f04e59/lis-double-exposure-homepage-hero-Pk3W2JhUv.jpeg?quality=85&width=3840)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className=' text-4xl md:text-6xl text-white items-center px-5 py-50 font-extrabold'>
                <h1 className=' text-black md:text-white'>LIFE IS STRANGE</h1>
                <h1 className=' text-black md:text-white px-5'>Double Exposure</h1>
                <h1 className=' text-cyan-300 items-center py-10'>Out now</h1>
                <h1>Two Timelines.</h1>
                <h1 className=' py-4 text-red-500'>One Impossible Mystery.</h1>
                <div className=' flex gap-10 py-10'>
                    <a href="https://youtu.be/TOYz4NCFIXg?feature=shared"><div className='hover:bg-cyan-300 text-center items-center border-6 border-red-600 hover:border-amber-300 h-15 w-60 bg-white rounded-4xl'>
                        <h1 className=' py-2 text-black text-2xl '>Watch Trailer</h1>
                    </div></a>
                    <a href="">
                    <div className='hover:bg-cyan-300 text-center border-6 border-amber-300 h-15 w-60 hover:border-red-600 bg-white rounded-4xl'>
                        <h1 className=' py-2 text-black text-2xl  '>Learn More</h1>
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
