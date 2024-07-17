import React from 'react';
import { CiUser } from 'react-icons/ci';
import { GiCook } from 'react-icons/gi';
import { IoMailOutline } from 'react-icons/io5';
import { MdDraw, MdMovie, MdOutlineCall } from 'react-icons/md';

const myDetails = [
  {
    id: 1,
    title: 'Name',
    info: 'Sahana',
    icon: <CiUser size={20} color="#06b6d4" />,
  },
  {
    id: 2,
    title: 'Email',
    info: 'sahanasonu.hv@gmail.com',
    icon: <IoMailOutline size={20} color="#06b6d4" />,
  },
  {
    id: 3,
    title: 'Phone',
    info: '7676233454',
    icon: <MdOutlineCall size={20} color="#06b6d4" />,
  },
];

const hobbies = [
  {
    id: 1,
    icon: <GiCook size={20} color="#06b6d4" />,
    label: 'Cooking',
  },
  {
    id: 2,
    icon: <MdMovie size={20} color="#06b6d4" />,
    label: 'Movies',
  },
  {
    id: 3,
    icon: <MdDraw size={20} color="#06b6d4" />,
    label: 'Drawing',
  },
];

const About = () => {
  return (
    <div name="About" className="p-10 w-full">
      <div className="max-w-screen-lg mx-auto py-20 h-full px-4">
        <div className="space-y-2">
          <p className="text-cyan-500 font-bold text-xl">My Into</p>
          <p className="text-4xl lg:text-5xl font-medium text-cyan-950">
            About Me
          </p>
        </div>
        <p className="text-lg pt-4">
          I am a full stack developer with over 2 years of hands-on experience,
          I excel in crafting robust applications with a focus on cutting-edge
          technologies. My expertise lies in leveraging frameworks like NextJS
          and ReactJS to design, develop, and test responsive web applications.
          I have a proven track record of developing complex and reusable UI
          components and features using ReactJS for seamless frontend-backend
          integration. My passion for innovation drove me to develop a
          responsive e-commerce platform using ReactJS and Tailwind, showcasing
          my commitment to delivering high-quality, user-centric solutions.
        </p>
        <br />
        <ul className="space-y-3">
          {myDetails.map(({ id, title, info, icon }) => (
            <li key={id} className="flex items-center">
              <div className="flex justify-between">
                <p className="flex w-[70px] sm:w-28">
                  {icon}
                  <span className="ml-2">{title}</span>
                </p>
                <p className="w-6 sm:w-20 flex justify-center">:</p>
                <p>{info}</p>
              </div>
            </li>
          ))}
        </ul>
        <br />
        <p className="text-xl font-bold text-cyan-950 pt-4">My Interests</p>
        <ul className="flex gap-8 pt-4">
          {hobbies.map(({ id, icon, label }) => (
            <li key={id} className="flex space-x-1 items-center">
              {icon}
              <p className="text-lg">{label}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
