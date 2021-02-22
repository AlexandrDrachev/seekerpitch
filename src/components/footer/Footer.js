import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <div className={`w-full flex justify-between items-start px-30 py-20 bg-gray-100`}>
      <div className={`w-full flex flex-col justify-center items-start`}>
        <Link to="/" className={`mb-20`}>
          <div className={`flex justify-center items-center tracking-wider text-2xl`}>
            <h1 className={`text-gray-700 font-bold`}>SEEKER</h1>
            <h1 className={`text-purple-500 tracking-widest`}>PITCH</h1>
            <div
              className={`text-green-600 font-bold`}>
                &#5125;
            </div>
          </div>
        </Link>
        <span className={`text-xs text-gray-500`}>
          We make jobseeking and talent finding more enjoyable by taking the gimmicks, complex job applications, and impersonal cover letters out of the equation. SeekerPitch enables jobseekers and companies to show their true colors with cutting edge profiles. From there, we make quick and meaningful conversations [aka SeekerPitches] possible to quickly connect better talent with great companies.
        </span>
      </div>
      <div className={`w-30%`} />
      <div className={`w-full flex justify-between items-start text-gray-500 text-sm`}>
        <div className={`w-30% flex flex-col justify-center items-start`}>
          <span className={`mb-20`}>PRODUCT</span>
          <span className={`mb-20 text-xs`}>
            How it works for <br/> employers
          </span>
          <span className={`mb-20 text-xs`}>
            How it works for <br/> jobseekers
          </span>
          <span className={`mb-20 text-xs`}>
            Futures
          </span>
          <span className={`mb-20 text-xs`}>
            Pricing
          </span>
        </div>
        <div className={`w-30% flex flex-col justify-center items-start`}>
          <span className={`mb-20`}>ABOUT</span>
          <span className={`mb-20 text-xs`}>
            Our team
          </span>
          <span className={`mb-20 text-xs`}>
            Careers
          </span>
          <span className={`mb-20 text-xs`}>
            Terms & conditions
          </span>
        </div>
        <div className={`w-30% flex flex-col justify-center items-start`}>
          <span className={`mb-20`}>CONTACT</span>
            <span className={`mb-20 text-xs`}>
              info@seekerpitch.com
            </span>
            <span className={`mb-20 text-xs`}>
              713-591-5555
            </span>
            <span className={`mb-20 text-xs`}>
              6116 Willa River Suite 610
            </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
