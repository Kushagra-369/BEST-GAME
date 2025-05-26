import React from 'react'
import { Link, Element } from 'react-scroll';

export default function Part1() {
    return (
        <Element name="best">
            <div className=' bg-blue-800  md:w-full w-150'>
                <div className='flex justify-center  py-5 '>
                    <div
                        className=' h-[400px] md:h-[800px] w-143  rounded-4xl border-2  md:w-390 bg-cover bg-no-repeat object-center object-cover'
                        style={{
                            backgroundImage: 'url(https://theafictionado.wordpress.com/wp-content/uploads/2015/11/lis-416.jpg?w=584)',
                            
                        }}
                    >
                        <div className=' text-4xl md:text-6xl flex justify-between text-white items-center  md:py-30 font-extrabold  '>
                            <div>

                            </div>

                            <div>
                                <h1 className='  flextext-white items-center gap-2 italic px-3 '>
                                    <h1 className='text-6xl md:text-8xl'>LIFE</h1> <h1 className=' text-2xl md:text-4xl'>IS </h1> <h1 className='text-6xl md:text-8xl'>STRANGE</h1>
                                </h1>
                                <h1 className=' text-cyan-300 items-center py-10 px-10'> Till now the best</h1>
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
