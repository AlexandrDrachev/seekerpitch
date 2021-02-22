import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { ReactComponent as UserIcon } from '../../icons/user-icon.svg';
import AlertIndicator from '../alert-indicator';

const Header = () => {

  const [ aboutUs, setAboutUs ] = useState(false);
  const [ forJobseekers, setForJobseekers ] = useState(false);
  const [ forEmployers, setForEmployers ] = useState(false);

  const onToggleAboutUs = () => {
    setAboutUs(!aboutUs);
    setForJobseekers(false);
    setForEmployers(false);
  };

  const onToggleForJobseekers = () => {
    setAboutUs(false);
    setForJobseekers(!forJobseekers);
    setForEmployers(false);
  };

  const onToggleForEmployers = () => {
    setAboutUs(false);
    setForJobseekers(false);
    setForEmployers(!forEmployers);
  };

  const onCloseMenu = () => {
    setAboutUs(false);
    setForJobseekers(false);
    setForEmployers(false);
  };

  return (
    <div className={`top-0 left-0 sticky bg-white border-b border-gray-400`}>
      <div className={`relative w-full flex justify-between items-center py-20 px-30`}>
        <AlertIndicator />
        <Link to="/">
          <div className={`flex justify-center items-center tracking-wider text-2xl`}>
            <h1 className={`text-gray-700 font-bold`}>SEEKER</h1>
            <h1 className={`text-purple-500 tracking-widest`}>PITCH</h1>
            <div
              className={`text-green-600 font-bold`}>
                &#5125;
            </div>
          </div>
        </Link>
        <div className={`flex justify-center items-center font-bold text-gray-600`}>
          <div
            onClick={() => onToggleAboutUs()}
            className={`flex mr-35 relative cursor-pointer`}>
              <span className={`text-xs ${aboutUs && `text-green-400`}`}>
                ABOUT US
              </span>
              <div
                className={`
                absolute -right-20 bottom-0 ${aboutUs && `text-green-400 transform rotate-180 -bottom-7`}
                `}
              >
                <span>&#8964;</span>
              </div>
              {aboutUs &&
                <div
                  onClick={() => onCloseMenu()}
                  className={`
                  absolute w-200 top-35 left-0 flex flex-col justify-center items-start text-xs p-15
                  bg-white border
                  `}>
                    <Link to="/our-story" className={`mb-20`}>
                      <span className={`hover:text-green-400`}>
                        OUR STORY
                      </span>
                    </Link>
                    <Link to="/contact-us">
                      <span className={`hover:text-green-400`}>
                        CONTACT US
                      </span>
                    </Link>
                </div>
              }
          </div>
          <div
            onClick={() => onToggleForJobseekers()}
            className={`flex mr-35 relative cursor-pointer`}
          >
            <span className={`text-xs ${forJobseekers && `text-green-400`}`}>
              FOR JOBSEEKERS
            </span>
            <div className={`absolute -right-20 bottom-0 ${forJobseekers && `text-green-400 transform rotate-180 -bottom-7`}`}>
              <span>&#8964;</span>
            </div>
            {forJobseekers &&
              <div
                onClick={() => onCloseMenu()}
                className={`
                absolute w-200 top-35 left-0 flex flex-col justify-center items-start text-xs p-15
                bg-white border
                `}
              >
                <Link to="/how-it-works" className={`mb-20`}>
                  <span className={`hover:text-green-400`}>
                    HOW IT WORKS
                  </span>
                </Link>
                <Link to="/auth/register">
                  <span className={`hover:text-green-400`}>
                    LOGIN
                  </span>
                </Link>
              </div>
            }
          </div>
          <div
            onClick={() => onToggleForEmployers()}
            className={`flex mr-35 relative cursor-pointer`}
          >
            <span className={`text-xs ${forEmployers && `text-green-400`}`}>
              FOR EMPLOYERS
            </span>
            <div className={`absolute -right-20 bottom-0 ${forEmployers && `text-green-400 transform rotate-180 -bottom-7`}`}>
              <span>&#8964;</span>
            </div>
            {forEmployers &&
              <div
                onClick={() => onCloseMenu()}
                className={`
                absolute w-200 top-35 left-0 flex flex-col justify-center items-start text-xs p-15
                bg-white border
                `}
              >
                <Link to="/how-it-works" className={`mb-20`}>
                  <span className={`hover:text-green-400`}>
                    HOW IT WORKS
                  </span>
                </Link>
                <Link to="/auth/register">
                  <span className={`hover:text-green-400`}>
                    LOGIN
                  </span>
                </Link>
              </div>
            }
          </div>
          <div className={`w-20 h-20 cursor-pointer font-bold`}>
            <UserIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
