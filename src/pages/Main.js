import React from 'react';
import Header from '../components/Header';
import illus from '../assets/clip-iot.png';
import { Link } from 'react-router-dom';
import { FiClock, FiEdit } from 'react-icons/fi';
import { AiTwotoneRocket } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import {ImDatabase} from "react-icons/im"
// import ProfileCard from '../components/ProfileCard';
import DataOverview from './DataOverview';


const Main = () => {
  return (
    <div className=" w-full min-h-screen">
      <Header />
      
      {/* Data Base */}
      <div className='mt-5 text-lg lg:text-xl text-center font-bold'>This is the realtime database for Temperature-Based Door Access Control System</div>
      {/* Footer */}
      <DataOverview/>
    </div>
  );
};

export default Main;
