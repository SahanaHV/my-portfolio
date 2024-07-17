import React from 'react';

import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import nextjs from '../assets/nextjs.png';
import bootstrap from '../assets/bootstrap.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';

const techs = [
  {
    id: 1,
    src: html,
    title: 'HTML',
    style: 'shadow-orange-500',
  },
  {
    id: 2,
    src: css,
    title: 'CSS',
    style: 'shadow-blue-500',
  },
  {
    id: 3,
    src: javascript,
    title: 'JavaScript',
    style: 'shadow-yellow-500',
  },
  {
    id: 4,
    src: reactImage,
    title: 'React',
    style: 'shadow-blue-600',
  },
  {
    id: 5,
    src: bootstrap,
    title: 'Bootstrap',
    style: 'shadow-purple-400',
  },
  {
    id: 6,
    src: tailwind,
    title: 'Tailwind',
    style: 'shadow-sky-400',
  },
  {
    id: 7,
    src: nextjs,
    title: 'Next JS',
    style: 'shadow-gray-600',
  },
  {
    id: 8,
    src: github,
    title: 'GitHub',
    style: 'shadow-gray-400',
  },
];

const Experience = () => {
  return (
    <div name="Experience" className="p-10">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4">
        <div className="text-center">
          <p className="text-cyan-500 font-bold text-xl">Experience</p>
          <p className="py-6 text-xl lg:text-3xl font-medium text-cyan-950">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center p-8 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="logo" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
