import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const links = [
  {
    id: 1,
    link: 'Home',
  },
  {
    id: 2,
    link: 'About',
  },
  {
    id: 3,
    link: 'Portfolio',
  },
  {
    id: 4,
    link: 'Experience',
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center w-full p-4 text-black bg-white fixed z-50 shadow-md shadow-gray-200 ">
      <div>
        <h1 className="font-vibes text-xl md:text-5xl">Sahana</h1>
      </div>
      <ul className="hidden md:flex space-x-4">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-black hover:text-cyan-600 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile View */}
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {open ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {open && (
        <ul className="flex flex-col absolute border-t top-14 left-0 w-full bg-gradient-to-b from-stone-100 to-stone-300 text-black z-50 ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-xl"
            >
              <Link
                onClick={() => setOpen(!open)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
