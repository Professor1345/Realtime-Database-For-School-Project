import React from 'react';
import Header from '../components/Header';
import illus from '../assets/clip-iot.png';
import { Link } from 'react-router-dom';
import { FiClock, FiEdit } from 'react-icons/fi';
import { AiTwotoneRocket } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import {ImDatabase} from "react-icons/im"
import ProfileCard from '../components/ProfileCard';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <div className=" w-full min-h-screen">
      <Header />
      <div className=" w-full  p-2 md:px-8 sm:py-10 bg-white rounded-lg    px-4   mt-6">
        <div className="flex sm:flex-row flex-col sm:space-x-8">
          {/* left part */}
          <div className="flex w-full sm:w-1/2 justify-center align-center space-y-4">
            <div className="w-full sm:w-10/12 space-y-4">
              <h1 className="text-3xl sm:text-5xl font-bold  text-gray-600">
                Welcome to Uniwaters
              </h1>
              <p className=" text-lg sm:text-3xl text-gray-600 mb-8">
                Uniwater is a solution for management of water and control of
                water distribution remotely with the aid of a Iot(Internet of
                Things).
              </p>
              <div className="flex  align-center ">
                <Link
                  to="/tanks"
                  className="bg-blue-500 text-white  rounded-lg px-10 py-4  "
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          {/* right part */}
          <div className="hidden sm:flex md:w-1/2  justify-center sm:justify-end align-center">
            <img
              src={illus}
              alt="final year project"
              className="w-8/12 h-auto"
            />
          </div>
          {/* end of the right part */}
        </div>
      </div>
      {/* Problem statement session and features session */}
      <div className="w-full mt-4 sm:mt-10 bg-slate-50 pt-10 pb-4 sm:pb-10">
        <div className="container mx-auto">
          <div className="flex justify-center align-center mt-8">
            <Link
              to="/tanks"
              className="self-center mx-auto rounded-lg px-8 py-2 bg-blue-200 text-blue-900 mb-2"
            >
              Features
            </Link>
          </div>
          {/* end of features Link */}
          <div className="flex flex-col px-4 md:px-4 align-center w-full md:w-8/12 mx-auto mb-4 sm:mb-10">
            <h1 className="text-gray-800 text-center text-3xl sm:text-4xl font-bold">
              Our Core Features{" "}
            </h1>
            <p className="text-center text-lg">
              Special Features created just for you. You can manage and control
              your water remotely from anywhere.
            </p>
          </div>
          {/* end of story */}
          <div className=" container px-2 sm:px-2 md:w-10/12 mx-auto grid grid-cols-1  md:grid-cols-4 gap-4 mb-6 space-x-4">
            <div className="flex flex-col justify-center items-center w-full  mx-auto rounded-lg bg-white space-y-2 p-2 shadow-lg">
              <FiClock className="text-4xl text-blue-500" />
              <h1 className="text-gray-800 text-center text-xl sm:text-2xl font-bold">
               Automated Control
              </h1>
              <p className="text-center text-lg">
                    The system is designed to  
              </p>
            </div>
            <div className="flex flex-col justify-center items-center w-full  mx-auto rounded-lg bg-white space-y-2 p-2 shadow-lg">
              <ImDatabase className="text-4xl text-blue-500" />
              <h1 className="text-gray-800 text-center text-xl sm:text-2xl font-bold">
                Real time Database
              </h1>
              <p className="text-center text-lg">
                The system is equipped with a real time database which stores the informations of the tanks in real time.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center w-full  mx-auto rounded-lg bg-white space-y-2 p-2 shadow-lg">
              <FaUserAlt className="text-4xl text-blue-500" />
              <h1 className="text-gray-800 text-center text-xl sm:text-2xl font-bold">
                User Friendly Interface
              </h1>
              <p className="text-center text-lg">
                The systems provides a user friendly interface for the user to manage and
                control the water distribution system.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center w-full  mx-auto rounded-lg bg-white space-y-2 p-2 shadow-lg">
              <FiEdit className="text-4xl text-blue-500" />
              <h1 className="text-gray-800 text-center text-xl sm:text-2xl font-bold">
                Highly Customizable
              </h1>
              <p className="text-center text-lg">
                Our user can easily customize the app to meet their needs and
                requirements which increases flexibility
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* **************************About Us#$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
      <div className="bg-white w-full">
        <div className="container mx-auto flex flex-col pb-10  mt-4 sm:mt-10">
          <div className="flex justify-center align-center mt-8 ">
            <Link className="self-center mx-auto rounded-lg px-8 py-2 bg-blue-200 text-blue-900 mb-2">
              About Us
            </Link>
          </div>
          <div className="flex flex-col align-center w-full md:w-8/12 mx-auto mb-4 sm:mb-10">
            <h1 className="text-gray-800 text-center text-3xl sm:text-4xl font-bold">
              Meet Our Team{" "}
            </h1>
            <p className="text-center text-lg">
              We are a team of four students from the final year of the B.Engr.
              in Computer Engineering University of Ilorin, Nigeria.
            </p>
          </div>
          {/* Card session */}
          <div className="grid md:w-11/12 mx-auto container sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6 space-x-2">
            <div>
              <ProfileCard
                img="https://images.unsplash.com/photo-1606122017369-d782bbb78f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                dept="Computer Engineering"
                mat="16/30GR026"
                school="University of Ilorin"
                name="Buhari AbdulHafiz"
              />
            </div>
            <div>
              <ProfileCard
                img="https://images.unsplash.com/photo-1606122017369-d782bbb78f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                dept="Computer Engineering"
                mat="16/30GR013"
                school="University of Ilorin"
                name="Ahmmed Babatunde"
              />
            </div>
            <div>
              <ProfileCard
                img="https://images.unsplash.com/photo-1606122017369-d782bbb78f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                dept="Computer Engineering"
                mat="16/30GR047"
                school="University of Ilorin"
                name="Raheem Zainab"
              />
            </div>
            <div>
              <ProfileCard
                img="https://images.unsplash.com/photo-1606122017369-d782bbb78f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                dept="Computer Engineering"
                mat="16/30GR023"
                school="University of Ilorin"
                name="Ayeni Daniel"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
