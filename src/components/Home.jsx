import React from 'react';
import MyProfile from '../assets/my_profile.jpg';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name="Home"
      className="p-10 w-full bg-gradient-to-b from-stone-100 to-stone-300 relative top-10 md:top-20"
    >
      <div className="max-w-screen-lg mx-auto md:h-[70vh] p-4 flex justify-center items-center">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center h-full">
            <p className="text-cyan-500 font-bold text-xl">Hi, I am</p>
            <h2 className="text-4xl lg:text-5xl font-medium text-cyan-950">
              Sahana H V
            </h2>

            <h2 className="text-xl font-bold text-cyan-950 py-3">
              <Typewriter
                options={{
                  strings: ['Frontend Developer', 'Full Stack Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
              Full Stack Developer with 2 years of experience in designing,
              developing, and maintaining web applications. Proficient in both
              front-end and back-end technologies, including HTML, CSS,
              JavaScript, React, Node.js, Express, and MongoDB.
            </p>

            <div>
              <Link
                to="Portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <HiOutlineArrowSmRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              src={MyProfile}
              alt="my profile"
              className="rounded-2xl w-[60%] md:w-[80%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
