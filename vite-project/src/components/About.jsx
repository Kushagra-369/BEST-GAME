import React, { useState } from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaDiscord } from "react-icons/fa6";
import { Link, Element } from 'react-scroll';

export default function About() {


    return (
        <Element name = "support">
            <div className=' md:w-full w-150 bg-blue-800 px-2 flex justify-center  '>
            <div className=' py-20 bg-black   rounded-2xl w-full'>
                    <div className=' px-10 flex justify-center '>
                    <select className="text-black px-5 text-xl p-3 text-center rounded-md  bg-white w-100 "
                        defaultValue="">
                        <option value=""> ENGLISH </option>
                        <option value="standard"> HINDI </option>
                        <option value="standard">JAPANESE</option>
                        <option value="standard">FRENCH</option>
                        <option value="standard">PORTUGESE</option>
                    </select>
                </div>
                <div className=' py-10 text-4xl flex  justify-center gap-20 text-gray-400'>
                    <a href=""><h1 className=' hover:text-gray-100 '><FaYoutube /></h1></a>
                    <a href=""> <h1 className=' hover:text-gray-100 '><FaLinkedinIn /></h1></a>
                    <a href=""> <h1 className=' hover:text-gray-100 '><IoLogoGameControllerB /></h1></a>
                    <a href=""> <h1 className='  hover:text-gray-100 '><FaDiscord /></h1></a>
                </div>
                <br />
                <div className=' h-0.5  w-full bg-gray-400'>

                </div>
                <div className=' items-center text-2xl py-15 text-white flex  justify-center gap-20 '>
                    <h1>SQUARC CNIX</h1>
                    <h1>DONTNOD</h1>
                    <h1 className=' border-2 p-2'>
                        <h1>DECK</h1>
                        <h1>NINE</h1>
                    </h1>
                </div>
                <br />
                <div className=' h-0.5  w-full bg-gray-400'>

                </div>

                <div className=' text-2xl text-white py-20 px-10 grid grid-cols-1 gap-2'>
                    <h1>LIFE IS STRANGE © Square Enix Ltd.</h1>
                    <h1>DONTNOD and DONTNOD Entertainment are registered trademarks of DONTNOD Entertainment, S.A.</h1>
                    <h1>DECK NINE and DECK NINE GAMES are registered trademarks of Idol Minds, LLC.</h1>
                    <h1>Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.</h1>
                    <h1>Microsoft, the Xbox Sphere mark, the Series X logo, Series S logo, Series X|S logo, Xbox One, Xbox Series X, Xbox Series S, and Xbox Series X|S are trademarks of the Microsoft group of companies.</h1>
                    <h1>"PlayStation Family Mark", "PlayStation", "PS5 logo" and "PS4 logo" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.</h1>
                    <h1>Nintendo Switch is a trademark of Nintendo.</h1>
                    <h1>ESRB and the ESRB rating icon are registered trademarks of the Entertainment Software Association</h1>
                    <h1>All other trademarks are the property of their respective owners.</h1>

                </div>

            </div>

        </div>
        </Element>
    )
}
