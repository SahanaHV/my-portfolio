import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const links = [
  {
    id: 1,
    child: (
      <>
        LinkedIn <FaLinkedin size={20} />
      </>
    ),
    href: 'https://www.linkedin.com/in/sahana-h-v/',
    style: 'hover:text-blue-500',
  },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub size={20} />
      </>
    ),
    href: 'https://github.com/SahanaHV',
    style: 'hover:text-black',
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={20} />
      </>
    ),
    href: 'mailto:sahanasonu.hv@gmail.com',
    style: 'hover:text-red-500',
  },
  {
    id: 4,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={20} />
      </>
    ),
    href: '/resume.pdf',
    style: 'hover:text-green-500',
    download: true,
  },
];

const SocialLinks = () => {
  return (
    <div className="flex flex-col fixed top-[35%] left-0">
      <ul className="space-y-3">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className="flex justify-between items-center w-24 h-1/4 ml-[-65px] hover:ml-2 duration-300 "
          >
            <a
              href={href}
              className={
                'flex justify-between items-center w-full text-gray-600' +
                ' ' +
                style
              }
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
