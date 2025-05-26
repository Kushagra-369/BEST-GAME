import React from 'react'
import { Link, Element } from 'react-scroll';

export default function Part1() {
    return (
        <Element name="best">
            <div className=' bg-blue-800  w-150 '>
                <div className='flex justify-center px-2 py-5 '>
                    <div
                        className='relative h-[400px] md:h-[800px] rounded-4xl border-2 w-full bg-cover bg-no-repeat object-center object-cover '
                    >
                        <div className="absolute top-0 left-0 w-full h-full z-0 p-2 rounded-2xl  overflow-hidden">
                            <iframe
                                className="w-full h-full object-cover"
                                src="https://www.youtube.com/embed/AURVxvIZrmU?autoplay=1&mute=1&controls=0&loop=1&playlist=AURVxvIZrmU"
                                frameBorder="0"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                                
                            ></iframe>
                        </div>

                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

                        <div className=' relative z-20 text-4xl md:text-6xl flex justify-between text-white items-center  py-10 md:py-30 font-extrabold  '>
                            <div>

                            </div>

                            <div>
                                <h1 className='  flex text-white items-center gap-2 italic px-3 '>
                                    <h1 className='text-5xl md:text-8xl'>LIFE</h1> <h1 className=' text-xl md:text-4xl'>IS </h1> <h1 className='text-5xl md:text-8xl'>STRANGE</h1>
                                </h1>
                                <h1 className=' text-cyan-300 items-center py-5 md:py-10 px-10'> Till now the best</h1>
                                <h1 className=' px-15'>Reverse the TIME.</h1>
                                <h1 className=' py-4 px-10 text-red-500'>Who Will Survive ?</h1>
                                <div className=' flex gap-10 py-10 px-5 md:px-15'>
                                    <a href="https://youtu.be/AURVxvIZrmU?feature=shared">
                                        <div className='text-center items-center border-6 border-red-600 hover:border-amber-300 h-15 w-60 bg-white rounded-4xl hover:bg-cyan-300'>
                                            <h1 className=' py-2 text-black text-2xl '>Watch Trailer</h1>
                                        </div></a>
                                    <a href="">
                                        <div className=' hover:bg-cyan-300 text-center border-6 border-amber-300 h-15 w-60 hover:border-red-600 bg-white rounded-4xl'>
                                            <h1 className=' py-2 text-black text-2xl  '>Learn More</h1>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Element>
    )
}
