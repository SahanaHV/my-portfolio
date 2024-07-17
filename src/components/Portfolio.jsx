import React from 'react';
import WeatherApp from '../assets/portfolio/weather-app.png';
import AyuSadhya from '../assets/portfolio/ayuSadhya.png';

const portfolios = [
  {
    id: 1,
    src: WeatherApp,
    link: 'https://weather-app-seven-woad-88.vercel.app/',
  },
  {
    id: 2,
    src: AyuSadhya,
    link: 'https://www.ayusadhya.in/',
  },
];

const Portfolio = () => {
  return (
    <div name="Portfolio" className="p-10 w-full bg-blue-50">
      <div className="max-w-screen-lg mx-auto md:py-20 h-full px-4">
        <div className="text-center">
          <p className="text-cyan-500 font-bold text-xl">My Portfolio</p>
          <h2 className="text-4xl lg:text-5xl font-medium text-cyan-950">
            Recent Works
          </h2>
        </div>
        <div className="grid md:grid-cols-2 pt-14 md:space-x-10 gap-10">
          {portfolios.map(({ id, src, link }) => (
            <div className="flex flex-col items-center">
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg w-full"
              >
                <img
                  src={src}
                  alt="weather-app"
                  className="rounded-md w-full h-full"
                />
              </div>
              <button className="group hover:text-white text-cyan-500 text-center w-3/5 px-6 py-3 mt-6 flex items-center rounded-md hover:border-0 hover:bg-gradient-to-r from-cyan-400 to-blue-500 border border-blue-500 cursor-pointer">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-center w-full font-bold text-xl"
                >
                  View
                </a>
              </button>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
