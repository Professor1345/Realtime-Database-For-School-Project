import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/icon.png';
import { FaBars } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

const MainHeader = () => {
    const history = useHistory();
    return (
      <div className="w-full h-16 shadow-md  flex justify-between items-center bg-white sticky top-0">
        <div className="flex items-center">
          <Link to="/main">
            <img src={Logo} alt="icon" className="w-12  h-auto self-center" />
          </Link>
          <Link to="/main" className="text-3xl text-gray-600">
            Uniwaters
          </Link>
        </div>
        <div className="block sm:hidden">
          <FaBars
            className="text-gray-600 text-3xl"
            onClick={() => history.push("/tankview")}
          />
        </div>
        <div className="hidden sm:flex items-center w-4/12">
          <Link to="/main" className="text-gray-600 mr-4">
            Home
          </Link>
          <Link to="/tanks" className="text-gray-600 mr-4">
            About
          </Link>
          <Link to="/tanks" className="text-gray-600 mr-4">
            Contact
          </Link>
        </div>
        <div className="hidden sm:flex items-center justify-center space-x-4 w-3/12">
          <div className="flex items-center">
            <img src={Logo} alt="icon" className="w-12  h-auto " />
            <p className="text-base md:text-xl ">Unilorin</p>
          </div>
       
        </div>
      </div>
    );
};

export default MainHeader;
