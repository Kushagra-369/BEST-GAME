import React from 'react'
import { IoLogoGoogle } from "react-icons/io5";
import { FaSteamSquare } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Login() {
  return (
    <div className=' bg-black'>

      <div className='py-20 text-center' >
        <div className=' flex gap-2.5 justify-center text-white text-5xl  '>
          <h1>SQUARE ENIX</h1>
          <h1>|</h1>
          <h1>MEMBERS</h1>
        </div>
        <h1 className=' text-gray-400 py-2'>STAY CONNECTED TO THE LATEST AND GREATEST IN-GAME REWARDS, NEWS, MERCH AND MORE!</h1>

        <div className=' flex justify-center py-2 '>
          <div className=' border-2 border-white w-180 h-full   bg-white rounded-sm'>
            <h1 className=' py-5 text-2xl' > LOG IN WITH</h1>
            <div className=' flex justify-center gap-7'>
              <h1 className=' text-4xl border-2 p-3  border-gray-100  '><IoLogoGoogle /></h1>
              <h1 className=' text-4xl border-2 p-3 border-gray-100 '><FaSteamSquare /></h1>
              <h1 className=' text-4xl border-2 p-3 border-gray-100 '><FaApple /></h1>
              <h1 className=' text-4xl border-2 p-3 border-gray-100 text-blue-500 '><FaFacebookF /></h1>
              <h1 className=' text-4xl border-2 p-3 border-gray-100 '><BsTwitterX /></h1>
            </div>
            <h1 className=' px-30 py-5  italic '>If you have a FINAL FANTASY XIV Online
              or FINAL FANTASY XI Online account, click below to log in:</h1>

            <div className=' flex justify-center'>
              <div className=' font-bold border-2 h-30 w-120 hover:text-gray-700 border-gray-200'>
                <h1 className=' py-3 text-xl'>SQUARE ENIX , ACCOUNT</h1>
                <div className=' flex justify-center gap-5 text-2xl'>
                  <h1>FINAL FANTASY.XL</h1>   <h1>FINAL FANTASY.XIV</h1>

                </div>
              </div>
            </div>

            <h1 className=' py-10 text-gray-400'>OR</h1>

            <div>
              <h1 className=' text-xl'>Enter your members credentials</h1>
              <div className=' py-5'>
                <input type="email" className=' h-10 w-100 border-2 border-gray-300  px-5 focus:outline-blue-500' placeholder='Email Address' />

              </div>
              <div className=' py-5'>
                <input type="password" className=' h-10 w-100 border-2 border-gray-300  px-5 focus:outline-blue-500' placeholder='Password' />

              </div>

              <div className=' flex px-40 gap-2 items-center'>
                <input className='text-2xl' type="checkbox" />
                <h1 className=' text-2xl'>Remember me</h1>
              </div>

              <div  className='py-5'>
                <a href="/">
                  <button className='border-2 w-100 py-5 border-gray-300 p-3  bg-red-500 text-white hover:bg-red-700'>
                    LOGIN
                  </button></a>
              </div>

            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
