import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/icon.png';
import { FaBars } from 'react-icons/fa';
import { auth, CheckLoginStatus, signInWithGoogle } from '../config';
import { onAuthStateChanged } from 'firebase/auth';

const Header = () => {
  const { user } = CheckLoginStatus();
  //   use the hook to check the status of the user
  console.log(user);
  return (
    <div className="w-full h-16 shadow-md  flex justify-center items-center bg-white">
      <div className="flex items-center justify-center">
        
        <Link to="/" className="text-xl text-blue-700 lg:text-3xl">
          Temperature-Based Door Access Control System
        </Link>
      </div>
      {/* <div className="block sm:hidden">
        <FaBars className="text-gray-600 text-3xl" />
      </div>
      <div className="hidden sm:flex items-center">
        <Link to="/tanks" className="text-gray-600 mr-4">
          Home
        </Link>
        <Link to="/tanks" className="text-gray-600 mr-4">
          About
        </Link>
        <Link to="/tanks" className="text-gray-600 mr-4">
          Contact
        </Link>
      </div>
      <div className="hidden sm:flex items-center">
        {/* <Link to="/main" className="text-gray-600 mr-4">
        </Link>
        <div
          className="text-gray-600 mr-4 cursor-pointer"
          onClick={() => signInWithGoogle()}
        >
          Login
        </div>
        <Link to="/main" className="text-gray-600 mr-4">
          Register
        </Link>{' '}
      </div> */}
    </div>
  );
};

export default Header;
