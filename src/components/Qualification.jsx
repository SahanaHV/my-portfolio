import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { MdOutlineWork } from 'react-icons/md';

export const Details = ({ title, subTitle, year }) => {
  return (
    <div className="flex space-x-5">
      <div className="circle-line">
        <div className="circle"></div>
      </div>
      <div className="flex flex-col align-middle">
        <h4 className="text-base md:text-lg font-medium">{title}</h4>
        <p className="text-sm md:text-base text-gray-500">{subTitle}</p>
        <p className="text-sm text-cyan-400 font-medium">{year}</p>
      </div>
    </div>
  );
};
const Qualification = () => {
  return (
    <div name="Qualification" className="p-10 w-full bg-stone-50">
      <div className="max-w-screen-lg mx-auto md:py-20 h-full px-4">
        <div className="space-y-2 w-full text-center">
          <p className="text-cyan-500 font-bold text-xl">My Qualification</p>
          <p className="text-4xl lg:text-5xl font-medium text-cyan-950">
            Awesome Journey
          </p>
        </div>
        <div className="grid md:grid-cols-2 pt-10 md:gap-8">
          <div>
            <p className="text-cyan-950 text-xl flex space-x-3 font-bold items-center">
              <FaGraduationCap size={25} color="#083344" />{' '}
              <span>Education</span>
            </p>
            <div className="pt-4 space-y-6">
              <Details
                title={'Electronics and Communication Engineering'}
                subTitle={'BE - East West Intitute of Technology'}
                year={'2017 - 2021'}
              />
              <Details
                title={'PUC'}
                subTitle={'SJR College for Women'}
                year={'2017'}
              />
              <Details
                title={'SSLC'}
                subTitle={'Sri Vani Girls High School'}
                year={'2015'}
              />
            </div>
          </div>

          {/* Experience */}
          <div className="pt-10 md:pt-0">
            <p className="text-cyan-950 text-xl flex space-x-3 font-bold items-center">
              <MdOutlineWork size={25} color="#083344" />{' '}
              <span>Experience</span>
            </p>
            <div className="pt-4 space-y-6">
              <Details
                title={'Software Engineer'}
                subTitle={'Codosphere'}
                year={'Jan 2023 - Feb 2024'}
              />
              <Details
                title={'Associate Software Engineer'}
                subTitle={'Codosphere'}
                year={'Jan 2022 - Jan-2023'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
