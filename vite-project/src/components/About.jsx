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
        if (target) navigate(target);
    };

    return (
        <Element name="support">
            <div className="w-full bg-blue-800 flex justify-center px-2">
                <div className="py-16 bg-black rounded-2xl w-full max-w-7xl text-center">
                    
                    {/* Language Selector */}
                    <div className="px-4 sm:px-6 md:px-10 flex justify-center">
                        <select
                            className="text-black px-5 py-3 text-lg sm:text-xl rounded-md bg-white w-full sm:w-72 md:w-96"
                            defaultValue=""
                            onChange={handleSelectChange}
                        >
                            <option value="">Select Language</option>
                            {data.map((item, key) => (
                                <option key={key} value={item.title2}>
                                    {item.title1}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Social Icons */}
                    <div className="py-10 text-3xl sm:text-4xl flex flex-wrap justify-center gap-10 sm:gap-20 text-gray-400">
                        <a href="#"><FaYoutube className="hover:text-gray-100 transition" /></a>
                        <a href="#"><FaLinkedinIn className="hover:text-gray-100 transition" /></a>
                        <a href="#"><IoLogoGameControllerB className="hover:text-gray-100 transition" /></a>
                        <a href="#"><FaDiscord className="hover:text-gray-100 transition" /></a>
                    </div>

                    <div className="h-0.5 w-full bg-gray-400" />

                    {/* Studios */}
                    <div className="text-white text-xl sm:text-2xl py-10 flex flex-wrap justify-center items-center gap-8 sm:gap-20">
                        <h1>SQUARE ENIX</h1>
                        <h1>DONTNOD</h1>
                        <div className="border-2 border-gray-400 p-3 sm:p-4 rounded-md">
                            <h1>DECK</h1>
                            <h1>NINE</h1>
                        </div>
                    </div>

                    <div className="h-0.5 w-full bg-gray-400" />

                    {/* Footer Text */}
                    <div className="text-white text-sm sm:text-base md:text-lg py-10 px-4 sm:px-10 grid gap-3 text-left">
                        <h1>LIFE IS STRANGE © Square Enix Ltd.</h1>
                        <h1>DONTNOD and DONTNOD Entertainment are registered trademarks of DONTNOD Entertainment, S.A.</h1>
                        <h1>DECK NINE and DECK NINE GAMES are registered trademarks of Idol Minds, LLC.</h1>
                        <h1>Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation.</h1>
                        <h1>Microsoft, Xbox Series X|S, and related marks are trademarks of Microsoft group of companies.</h1>
                        <h1>“PlayStation Family Mark”, “PS5 logo” and “PS4 logo” are trademarks of Sony Interactive Entertainment Inc.</h1>
                        <h1>Nintendo Switch is a trademark of Nintendo.</h1>
                        <h1>ESRB and the ESRB rating icon are registered trademarks of the Entertainment Software Association.</h1>
                        <h1>All other trademarks are the property of their respective owners.</h1>
                    </div>
                </div>
            </div>
        </Element>
    );
}
