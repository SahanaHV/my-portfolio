import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export const links = [
  {
    id: 1,
    icon: <FaLinkedin size={20} />,
    href: 'https://www.linkedin.com/in/sahana-h-v/',
    style: 'hover:text-blue-500',
  },
  {
    id: 2,
    icon: <FaGithub size={20} />,
    href: 'https://github.com/SahanaHV',
    style: 'hover:text-black',
  },
  {
    id: 3,
    icon: <HiOutlineMail size={20} />,
    href: 'mailto:sahanasonu.hv@gmail.com',
    style: 'hover:text-red-500',
  },
  {
    id: 4,
    icon: <BsFillPersonLinesFill size={20} />,
    href: '/resume.pdf',
    style: 'hover:text-green-500',
    download: true,
  },
];

const Footer = () => {
  return (
    <div name="Footer" className="p-6 w-full bg-slate-200">
      <div className="max-w-screen-lg mx-auto h-full px-4">
        <div className="flex justify-center space-x-8">
          {links.map(({ id, icon, href, style, download }) => (
            <div key={id} className="flex items-center ">
              <a
                href={href}
                className={
                  'flex justify-between items-center w-full text-xl text-gray-500' +
                  ' ' +
                  style
                }
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
