import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaDiscord } from "react-icons/fa6";
import { Element } from 'react-scroll';

export default function About() {
    const navigate = useNavigate();

    const data = [
        { title1: "ENGLISH", title2: "/" },
        { title1: "HINDI", title2: "/about2" },
        { title1: "JAPANESE", title2: "/about3" },
        { title1: "FRENCH", title2: "/about4" },
        { title1: "PORTUGUESE", title2: "/about5" }
    ];

    const handleSelectChange = (e) => {
        const target = e.target.value;
        if (target) {
            navigate(target); // 👈 Navigate to the selected route
        }
    };

    return (
        <Element name="support">
            <div className='w-150 md:w-full bg-blue-800 px-2 flex justify-center'>
                <div className='py-20 bg-black rounded-2xl w-full'>
                    <div className='px-10 flex justify-center'>
                        <select
                            className="text-black px-5 text-xl p-3 text-center rounded-md bg-white w-100"
                            defaultValue=""
                            onChange={handleSelectChange}
                        >
                            <option value="">Select Language</option>
                            {data.map((item, key) => (
                                <option key={key} value={item.title2}>{item.title1}</option>
                            ))}
                        </select>
                    </div>

                    {/* Icons */}
                    <div className='py-10 text-4xl flex justify-center gap-20 text-gray-400'>
                        <a href="#"><FaYoutube className='hover:text-gray-100' /></a>
                        <a href="#"><FaLinkedinIn className='hover:text-gray-100' /></a>
                        <a href="#"><IoLogoGameControllerB className='hover:text-gray-100' /></a>
                        <a href="#"><FaDiscord className='hover:text-gray-100' /></a>
                    </div>

                    <div className='h-0.5 w-full bg-gray-400' />

                    {/* Studios */}
                    <div className='items-center text-2xl py-15 text-white flex justify-center gap-20'>
                        <h1>SQUARE ENIX</h1>
                        <h1>DONTNOD</h1>
                        <div className='border-2 p-2 text-center'>
                            <h1>DECK</h1>
                            <h1>NINE</h1>
                        </div>
                    </div>

                    <div className='h-0.5 w-full bg-gray-400' />

                    {/* Footer */}
                    <div className='text-2xl text-white py-20 px-10 grid grid-cols-1 gap-2'>
                        <h1>LIFE IS STRANGE © Square Enix Ltd.</h1>
                        <h1>DONTNOD and DONTNOD Entertainment are registered trademarks of DONTNOD Entertainment, S.A.</h1>
                        <h1>DECK NINE and DECK NINE GAMES are registered trademarks of Idol Minds, LLC.</h1>
                        <h1>Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.</h1>
                        <h1>Microsoft, the Xbox Sphere mark, the Series X logo, Series S logo, Series X|S logo, Xbox One, Xbox Series X, Xbox Series S, and Xbox Series X|S are trademarks of the Microsoft group of companies.</h1>
                        <h1>"PlayStation Family Mark", "PlayStation", "PS5 logo" and "PS4 logo" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.</h1>
                        <h1>Nintendo Switch is a trademark of Nintendo.</h1>
                        <h1>ESRB and the ESRB rating icon are registered trademarks of the Entertainment Software Association</h1>
                        <h1>All other trademarks are the property of their respective owners.</h1>
                        {/* More legal text */}
                    </div>
                </div>
            </div>
        </Element>
    );
}
