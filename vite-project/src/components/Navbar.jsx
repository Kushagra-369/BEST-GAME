import React, { useState, useEffect } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-scroll';
import { Link as RouterLink } from "react-router-dom";  // ✅ React Router link

export default function Navbar() {

  const data = [
    { title1: "Top games", title2: "games" },
    { title1: "News", title2: "news" },
    { title1: "Store", title2: "new" },
    { title1: "Support", title2: "support" },
    { title1: "Best one", title2: "best" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProfile = (e) => {
    e.stopPropagation();
    setProfileOpen(!profileOpen);
  };

  // ✅ Close profile box when clicking outside
  useEffect(() => {
    const closeProfile = () => setProfileOpen(false);
    window.addEventListener("click", closeProfile);
    return () => window.removeEventListener("click", closeProfile);
  }, []);

  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 w-full h-20 bg-black flex justify-between items-center px-5 z-50">

        {/* Mobile Menu Icon */}
        <div onClick={toggleMenu} className="md:hidden text-white text-2xl">
          {menuOpen ? <ImCross /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="text-4xl md:hidden fixed top-20 right-0 h-full w-full bg-gray-800 text-yellow-300 p-10 z-40 shadow-lg">
            {data.map((item, key) => (
              <Link to={item.title2} smooth duration={600} onClick={toggleMenu} key={key}>
                <h1 className="py-5 hover:text-red-500">{item.title1}</h1>
              </Link>
            ))}
          </ul>
        )}

        {/* Logo */}
        <h1 className="text-white text-4xl">SQUARC CNIX</h1>

        {/* Desktop Menu + Icons */}
        <div className="text-gray-400 flex gap-20 items-center">

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-20 text-2xl">
            {data.map((item, key) => (
              <Link to={item.title2} smooth duration={600} key={key}>
                <h1 className="hover:text-gray-100">{item.title1}</h1>
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex gap-20 text-4xl relative">
            <a href="https://na.store.square-enix-games.com/cart.php">
              <FaShoppingCart className="hover:text-gray-100" />
            </a>

            {/* Person Icon */}
            <button onClick={toggleProfile} className="hover:text-gray-100">
              {profileOpen ? <RxCross1 /> : <IoMdPerson />}
            </button>

            {/* ✅ Profile Popup */}
            {profileOpen && (
              <div
                className="fixed top-[80px] right-5 bg-black text-white w-96 rounded-lg shadow-2xl z-[999] overflow-y-auto max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center p-8">

                  {/* ✅ Closes popup on click */}
                  <RouterLink
                    to="/login"
                    onClick={() => setProfileOpen(false)}
                  >
                    <div className="border-2 border-red-600 bg-red-600 h-16 flex justify-center items-center rounded-md mb-4 cursor-pointer">
                      <h1 className="text-xl font-semibold">LOGIN</h1>
                    </div>
                  </RouterLink>

                  <h1 className="text-lg py-2">Not a Square Enix Member?</h1>

                  {/* ✅ Closes popup on click */}
                  <RouterLink
                    to="/signin"
                    onClick={() => setProfileOpen(false)}
                  >
                    <h1 className="text-2xl text-red-500 cursor-pointer hover:underline">Join Now</h1>
                  </RouterLink>
                </div>

                <div className="px-6 pb-8">
                  <h1 className="text-white text-xl mb-2">WHY JOIN?</h1>
                  <ul className="text-white space-y-1 text-lg">
                    <li>Keep track of your Square Enix games library!</li>
                    <li>Join the discussion on the Square Enix blog!</li>
                    <li>Win free games and other cool stuff!</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
