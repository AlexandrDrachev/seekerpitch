import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Footer from '../../footer';
import { ReactComponent as UserIcon } from '../../../icons/user-icon.svg';
import { ReactComponent as EmailIcon } from '../../../icons/mail-icon.svg';
import { ReactComponent as CellIcon } from '../../../icons/phone-icon.svg';
import { ReactComponent as LocationIcon } from '../../../icons/location-icon.svg';
import { ReactComponent as LinkedinIcon } from '../../../icons/linkedin-icon.svg';
import { ReactComponent as GoogleIcon } from '../../../icons/google-icon.svg';

const Register = () => {

  const [ newUser, setNewUser ] = useState({
    firstName: '',
    lastName: '',
    email: '',
    cell: '',
    password: '',
  });

  const [ validateError, setValidateError ] = useState({
    inputError: false,
    inputErrorMessage: '',
  });

  const getInputValue = (event, variable) => {
    setNewUser({
      ...newUser,
      [variable]: event.target.value
    });
  };

  const validatedForm = () => {
    const { firstName, lastName, email, cell, password } = newUser;
    if (firstName.length < 3) {
      setValidateError({
        inputError: true,
        inputMessageError: 'The \"First name\" field must contain at least 3 characters',
      });
    } else if (lastName.length < 3) {
      setValidateError({
        inputError: true,
        inputMessageError: 'The \"Last name\" field must contain at least 3 characters',
      });
    } else if (email.length < 5) {
      setValidateError({
        inputError: true,
        inputMessageError: 'The \"Email\" field must contain at least 5 characters',
      });
    } else if (!email.includes("@")) {
      setValidateError({
        inputError: true,
        inputMessageError: 'The \"Email\" field must contain the \"@\" symbol',
      });
    } else if (cell.length < 5) {
      setValidateError({
        inputError: true,
        inputMessageError: 'The \"Cell\" field must contain at least 5 characters',
      });
    } else if (!Number(cell)) {
      setValidateError({
        inputError: true,
        inputMessageError: 'the \"Cell\" field should only contain numbers',
      });
    } else if (password.length < 3) {
      setValidateError({
        inputError: true,
        inputMessageError: 'The \"Password\" field must contain at least 3 characters',
      });
    }
  };

  useEffect(() => {
    console.log('newUser: ', newUser);
  }, [newUser]);

  return (
    <div className={`w-full flex flex-col justify-center items-center`}>
      <div className={`flex flex-col justify-center items-center text-gray-500`}>
        <h1 className={`text-5xl text-gray-600 mt-30 mb-20`}>
          CREATE ACCOUNT
        </h1>
        <span>
          Register to get access and apply tp job applications
        </span>
        <span className={`mb-20`}>
          and SeekerPitches
        </span>
        <div className={`flex mb-10`}>
          <div
            className={`
            flex flex-col justify-center items-center py-5 border-l border-t border-b
            border-gray-700 rounded-tl rounded-bl
            `}
          >
            <div
              className={`
              w-20 h-20 mx-15 text-gray-600
              `}
            >
              <UserIcon />
            </div>
          </div>
          <div
            className={`
            w-400 flex flex-col justify-start items-start py-5 border-t border-r border-b
            border-gray-700 rounded-tr rounded-br
            `}
          >
            <input
              onChange={(e) => getInputValue(e, "firstName")}
              type="text"
              placeholder="First name"
              className={`
              focus:outline-none
              `}
            />
            </div>
          </div>
          <div className={`flex mb-10`}>
            <div
              className={`
              flex flex-col justify-center items-center py-5 border-l border-t border-b
              border-gray-700 rounded-tl rounded-bl
              `}
            >
              <div
                className={`
                w-20 h-20 mx-15 text-gray-600
                `}
              >
                <UserIcon />
              </div>
            </div>
            <div
              className={`
              w-400 flex flex-col justify-start items-start py-5 border-t border-r border-b
              border-gray-700 rounded-tr rounded-br
              `}
            >
              <input
                onChange={(e) => getInputValue(e, "lastName")}
                type="text"
                placeholder="Last name"
                className={`
                  focus:outline-none
                  `}
              />
            </div>
          </div>
          <div className={`flex mb-10`}>
            <div
              className={`
              flex flex-col justify-center items-center py-5 border-l border-t border-b
              border-gray-700 rounded-tl rounded-bl
              `}
            >
              <div
                className={`
                w-20 h-20 mx-15 text-gray-600
                `}
              >
                <EmailIcon />
              </div>
            </div>
            <div
              className={`
              w-400 flex flex-col justify-start items-start py-5 border-t border-r border-b
              border-gray-700 rounded-tr rounded-br
              `}
            >
              <input
                onChange={(e) => getInputValue(e, "email")}
                type="text"
                placeholder="Email"
                className={`
                focus:outline-none
                `}
              />
            </div>
          </div>
          <div className={`flex mb-10`}>
            <div
              className={`
                flex flex-col justify-center items-center py-5 border-l border-t border-b
                border-gray-700 rounded-tl rounded-bl
                `}
            >
              <div
                className={`
                w-20 h-20 mx-15 text-gray-600
                `}
              >
                <CellIcon />
              </div>
            </div>
            <div
              className={`
              w-400 flex flex-col justify-start items-start py-5 border-t border-r border-b
              border-gray-700 rounded-tr rounded-br 
              `}
            >
              <input
                onChange={(e) => getInputValue(e, "cell")}
                type="text"
                placeholder="Cell number"
                className={`
                focus:outline-none
                `}
              />
            </div>
          </div>
          <div className={`flex mb-10`}>
            <div
              className={`
              flex flex-col justify-center items-center py-5 border-l border-t border-b
              border-gray-700 rounded-tl rounded-bl
              `}
            >
              <div
                className={`
                w-20 h-20 mx-15 text-gray-600
                `}
              >
                <LocationIcon />
              </div>
            </div>
            <div
              className={`
              w-400 flex flex-col justify-start items-start py-5 border-t border-r border-b
              border-gray-700 rounded-tr rounded-br 
              `}
            >
              <input
                onChange={(e) => getInputValue(e, "password")}
                type="password"
                placeholder="Password"
                className={`
                focus:outline-none
                `}
              />
            </div>
          </div>
          <div
            className={`
            py-5 px-35 bg-yellow-300 rounded font-bold text-sm mb-10 mt-20 text-gray-700 cursor-pointer
            hover:bg-yellow-400
            `}
          >
            NEXT STEP
          </div>
        <div className={`flex flex-col justify-center items-center my-10`}>
          <span className={`text-gray-600`}>
            Already have an account?
          </span>
          <Link to="/auth/login">
            <span className={`text-blue-500`}>login</span>
          </Link>
        </div>
        <div className={`w-full flex justify-center items-center mb-20`}>
          <div className={`w-full h-0 border-t border-gray-700`}/>
          <div className={`mx-15 text-gray-600`}>
            Or
          </div>
          <div className={`w-full h-0 border-t border-gray-700`}/>
        </div>
        <div className={`flex mb-10`}>
          <div
            className={`
            flex flex-col justify-center items-center py-5 border-l border-t border-b
            border-gray-700 rounded-tl rounded-bl
            `}
          >
            <div
              className={`
              w-20 h-20 mx-15 text-gray-600
              `}
            >
              <LinkedinIcon />
            </div>
          </div>
          <div
            className={`
            w-400 flex flex-col justify-start items-start py-5 border-t border-r border-b
            border-gray-700 rounded-tr rounded-br 
            `}
          >
            <input
              type="text"
              placeholder="Signup with Linkedin"
              className={`
              focus:outline-none
              `}
            />
          </div>
        </div>
        <div className={`flex mb-10`}>
          <div
            className={`
            flex flex-col justify-center items-center py-5 border-l border-t border-b
            border-gray-700 rounded-tl rounded-bl
            `}
          >
            <div
              className={`
                w-20 h-20 mx-15 text-gray-600
                `}
            >
              <GoogleIcon />
            </div>
          </div>
          <div
            className={`
            w-400 flex flex-col justify-start items-start py-5 border-t border-r border-b
            border-gray-700 rounded-tr rounded-br 
            `}
          >
            <input
              type="text"
              placeholder="Signup with Google"
              className={`
              focus:outline-none
              `}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
