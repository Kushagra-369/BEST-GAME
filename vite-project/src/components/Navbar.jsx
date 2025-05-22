import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { RxCross1 } from "react-icons/rx";


export default function Navbar() {

    let data = [
        { title1: "Top games" },
        { title1: "News" },
        { title1: "Store " },
        { title1: "Support " },
    ]


    const [text, settext] = useState(false);
    const [text2, settext2] = useState(false);

    const cross = () => {
        settext(!text);
    }
    const cross2 = () => {
        settext2(!text2)
    }

    return (
        <div className=' h-20 w-full bg-black flex justify-between gap-5  items-center px-5 '>

            <div onClick={cross} className=' md:hidden block text-white text-2xl'>
                {text ? <ImCross /> : <FaBars />}
            </div>
            {
                text && (
                    <ul className=' text-4xl  md:hidden fixed top-20 right-0 h-full w-full bg-gray-800 text-yellow-300 p-10 z-40 shadow-lg transition-all duration-300'>
                        {
                            data.map((item, key) => (
                                <a href="" key={key}><h1 className='py-10 hover:text-red-500'>{item.title1}</h1></a>
                            ))
                        }
                    </ul>
                )
            }

            <div className=' items-center '>
                <h1 className=' items-center text-white text-4xl'>SQUARC CNIX</h1>
            </div>
            <div className=' text-gray-400 flex gap-20 items-center'>
                <div className=' hidden text-2xl md:flex justify-center gap-20'>
                    {
                        data.map((item, key) => (
                            <div>
                                <a href="" key={key}><h1 className=' hover:text-gray-100'>{item.title1}</h1></a>
                            </div>
                        ))
                    }
                </div>
                <div className=' flex gap-20 text-4xl ' >
                    <a href=""> <h1 className=' hover:text-gray-100'> <FaShoppingCart /></h1></a>
                    <a href="#" onClick={cross2} className=' text-4xl hover:text-gray-100'>
                        {text2 ? <RxCross1 /> : <IoMdPerson />}
                          {
                         text2 && (
                    <ul className=' text-4xl  fixed top-20 right-0 h-120 w-120 bg-black  z-40 shadow-lg transition-all duration-300'>
                        <div className=' text-center items-center  p-10'>
                            <div className='text-white items-center border-2 border-red-600 h-20 w-100 px-5 py-4 right-2 bg-red-600'>
                            <h1>LOGIN</h1>
                        </div>
                        <div>
                            <h1 className=' text-xl py-4'>Not a Square Enix Member?</h1>
                            <h1 className=' text-2xl text-red-500'> Join Now</h1>
                        </div>
                        </div>
                        <div className=' px-5'>
                            <h1 className=' text-white px-2 py-5 text-xl'>WHY JOIN?</h1>
                            <li>
                                <ul className=' text-white px-5 py-1 text-xl'>Keep track of your Square Enix games library!</ul>
                                <ul className=' text-white px-5 py-1 text-xl'> Join the discussion on the Square Enix blog!</ul>
                                <ul className=' text-white px-5 py-1 text-xl'>Win free games and other cool stuff!</ul>
                            </li>
                        </div>

                    </ul>
                )
                    }
                    </a>
                  

                </div>
            </div>
        </div>
    )
}
