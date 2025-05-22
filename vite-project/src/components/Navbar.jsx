import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";


export default function Navbar() {

    let data = [
        { title1: "Top games" },
        { title1: "News" },
        { title1: "Store " },
        { title1: "Support " },
    ]


    const [text, settext] = useState(false);

    const cross = () => {
        settext(!text)
    }

    return (
        <div className=' h-20 w-full bg-black flex justify-between  items-center px-5 '>

            <div onClick={cross} className=' md:hidden block text-white text-2xl' >
                {text ? <ImCross /> : <FaBars />}

            </div>
            {
                text && (
                    <ul className=' text-4xl  md:hidden fixed top-20 right-0 h-full w-full bg-gray-800 text-yellow-300 p-10 z-40 shadow-lg transition-all duration-300'>
                        {
                            data.map((item, key) => (
                                <a href=""><h1 className='py-10 hover:text-red-500'>{item.title1}</h1></a>
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
                                <a href=""><h1 className=' hover:text-gray-100'>{item.title1}</h1></a>
                            </div>
                        ))
                    }
                </div>
                <div className=' flex gap-20 text-4xl ' >
                    <a href=""> <h1 className=' hover:text-gray-100'> <FaShoppingCart /></h1></a>
                    <a href="">  <h1 className=' hover:text-gray-100'> <IoMdPerson /></h1></a>

                </div>
            </div>
        </div>
    )
}
