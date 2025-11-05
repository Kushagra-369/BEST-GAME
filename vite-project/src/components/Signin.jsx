import React, { useState } from 'react';
import { IoLogoGoogle } from "react-icons/io5";
import { FaSteamSquare, FaApple, FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import axios from 'axios';

export default function Signin() {

  const [data, setData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
    dob: '',
    country: '',
    username: '',
    language: '',
    newsUpdates: false,
    termsAccepted: false,
  });

  const formFields = [
    { name: "email", type: "email", placeholder: "Enter your email" },
    { name: "password", type: "password", placeholder: "Enter your password" },
    { name: "repeatPassword", type: "password", placeholder: "Repeat your password" },
    { name: "dob", type: "date", placeholder: "Enter your date of birth" },
    { name: "country", type: "text", placeholder: "Enter your country" },
    { name: "username", type: "text", placeholder: "Choose a username" },
    { name: "language", type: "text", placeholder: "Preferred language" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (data.password !== data.repeatPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/bestgame', data);
      console.log(response.data);
      alert('Signup successful!');
    } catch (err) {
      alert(err.response?.data?.msg || 'An error occurred');
    }
  };

  return (
    <div className='bg-black text-white min-h-screen'>
      <div className='py-20 text-center'>
        <div className='flex gap-2.5 justify-center text-5xl font-bold'>
          <h1>SQUARE ENIX</h1>
          <h1>|</h1>
          <h1>MEMBERS</h1>
        </div>
        <h1 className='text-gray-400 py-2'>
          STAY CONNECTED TO THE LATEST AND GREATEST IN-GAME REWARDS, NEWS, MERCH AND MORE!
        </h1>

        <div className='flex justify-center py-8'>
          <div className='border-2 border-white bg-white text-black rounded-sm w-[700px] p-10'>
            <h1 className='py-4 text-2xl font-semibold text-center'>REGISTER WITH</h1>

            {/* Social Login Icons */}
            <div className='flex justify-center gap-7 pb-8'>
              <h1 className='text-4xl border-2 p-3 hover:bg-gray-200'><IoLogoGoogle /></h1>
              <h1 className='text-4xl border-2 p-3 hover:bg-gray-200'><FaSteamSquare /></h1>
              <h1 className='text-4xl border-2 p-3 hover:bg-gray-200'><FaApple /></h1>
              <h1 className='text-4xl border-2 p-3 text-blue-500 hover:bg-gray-200'><FaFacebookF /></h1>
              <h1 className='text-4xl border-2 p-3 hover:bg-gray-200'><BsTwitterX /></h1>
            </div>

            <h1 className='text-gray-500 italic text-center pb-8'>
              If you have a FINAL FANTASY XIV Online or FINAL FANTASY XI Online account, click below to log in:
            </h1>

            {/* SE Account Box */}
            <div className='flex justify-center'>
              <div className='font-bold border-2 border-gray-300 hover:text-gray-700 p-4 text-center w-full max-w-md'>
                <h1 className='text-xl pb-2'>SQUARE ENIX ACCOUNT</h1>
                <div className='flex justify-center gap-5 text-lg'>
                  <h1>FINAL FANTASY XI</h1>
                  <h1>FINAL FANTASY XIV</h1>
                </div>
              </div>
            </div>

            <h1 className='py-10 text-gray-400 text-center text-lg'>OR</h1>

            {/* Signup Form */}
            <form onSubmit={handleSignup}>
              {formFields.map((item, key) => (
                <div className='py-3 flex justify-center' key={key}>
                  <input
                    name={item.name}
                    value={data[item.name]}
                    type={item.type}
                    onChange={handleChange}
                    className='h-12 w-[80%] border-2 border-gray-300 px-5 rounded-md focus:outline-blue-500'
                    placeholder={item.placeholder}
                  />
                </div>
              ))}

              {/* News Subscription Box */}
              <div className='px-10 py-6 bg-gray-50 text-black rounded-md border-2 border-gray-300 mt-6 text-left'>
                <h1 className='font-semibold text-lg mb-2'>Get news, deals and more</h1>
                <p className='text-sm text-gray-700 mb-4'>
                  Sign up for email updates now. You can change your mind at any time by visiting the Account Settings page on the SQUARE ENIX website.
                </p>
                <label className='flex items-center gap-2 text-gray-700'>
                  <input
                    type="checkbox"
                    name="newsUpdates"
                    checked={data.newsUpdates}
                    onChange={handleChange}
                    className='h-4 w-4'
                  />
                  <span className='text-base'>Yes, sign me up for updates!</span>
                </label>
              </div>

              {/* Terms and Privacy Section */}
              <div className='px-10 py-6 text-left'>
                <p className='text-gray-700 text-sm'>
                  Please tick here to indicate that you accept our <span className='text-blue-500 underline cursor-pointer'>Terms of Use</span> for our online or mobile services.
                </p>

                <div className='flex items-center gap-2 mt-2'>
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={data.termsAccepted}
                    onChange={handleChange}
                    className='h-4 w-4'
                    required
                  />
                  <span className='text-base'>I accept the Terms of Use</span>
                </div>

                <p className='text-gray-700 text-sm mt-4'>
                  By proceeding to register your account you acknowledge that you have read and understand our
                  <span className='text-blue-500 underline cursor-pointer'> Privacy Notice </span>
                  and
                  <span className='text-blue-500 underline cursor-pointer'> Cookies Notice</span>.
                </p>
              </div>

              {/* Submit Button */}
              <div className='flex justify-center py-5'>
                <button
                  type="submit"
                  className='border-2 w-[80%] py-4 border-gray-300 bg-red-500 text-white text-xl font-semibold hover:bg-red-700 rounded-md'
                >
                  JOIN
                </button>
              </div>

              {/* Already have account */}
              <div className='text-center text-gray-600 text-lg pt-3'>
                Already have an account?{" "}
                <a href="/login" className='text-red-500 hover:underline'>Log in now!</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
