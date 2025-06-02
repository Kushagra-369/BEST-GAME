import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaDiscord } from "react-icons/fa6";
import { Element } from 'react-scroll';

export default function About2() {
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
                        <h1>DONTNOD और DONTNOD एंटरटेनमेंट, DONTNOD एंटरटेनमेंट, S.A. के पंजीकृत ट्रेडमार्क हैं।</h1>
                        <h1>डेक नाइन और डेक नाइन गेम्स आइडल माइंड्स, एलएलसी के पंजीकृत ट्रेडमार्क हैं।</h1>
                        <h1>स्टीम और स्टीम लोगो अमेरिका और/या अन्य देशों में वाल्व कॉर्पोरेशन के ट्रेडमार्क और/या पंजीकृत ट्रेडमार्क हैं।</h1>
                        <h1>Microsoft, Xbox Sphere मार्क, सीरीज X लोगो, सीरीज S लोगो, सीरीज X|S लोगो, Xbox One, Xbox सीरीज X, Xbox सीरीज S और Xbox सीरीज X|S माइक्रोसॉफ्ट समूह की कंपनियों के ट्रेडमार्क हैं।</h1>
                        <h1>"PlayStation फ़ैमिली मार्क", "PlayStation", "PS5 लोगो" और "PS4 लोगो" सोनी इंटरएक्टिव एंटरटेनमेंट इंक. के पंजीकृत ट्रेडमार्क या ट्रेडमार्क हैं।</h1>
                        <h1>निंटेंडो स्विच निनटेंडो का ट्रेडमार्क है।</h1>
                        <h1>ESRB और ESRB रेटिंग आइकन एंटरटेनमेंट सॉफ्टवेयर एसोसिएशन के पंजीकृत ट्रेडमार्क हैं</h1>
                        <h1>अन्य सभी ट्रेडमार्क उनके संबंधित स्वामियों की संपत्ति हैं।</h1>
                        {/* More legal text */}
                    </div>
                </div>
            </div>
        </Element>
    );
}
