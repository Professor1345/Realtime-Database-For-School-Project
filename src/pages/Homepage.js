import React from 'react';
import icon from '../assets/icon.png';
import {useHistory} from 'react-router-dom';

const Homepage = () => {
    const history = useHistory();

    setTimeout(() => {
        history.push('/main');
    }, 4000);
    return (
        <div className="w-full h-screen bg-fuchsia-700 flex align-center justify-center">
            <div className="bg-white flex flex-col align-center p-4 pb-10 w-96 h-auto self-center shadow-lg rounded-lg">
                {/* <img src={icon} alt="icon" className="w-3/6 h-auto self-center animate-bounce mt-6" /> */}
                <h1 className="text-3xl text-center font-bold text-cyan-600">Welcome To</h1>
                {/* <div className="h-2 w-4/6 bg-cyan-600 self-center animate-pulse delay-1000" /> */}
                <p className="mt-4 text-lg lg:text-xl text-center text-gray-600">
                    Database Of Temperature Based Access Door Control System
                </p>
            </div>
        </div>
    );
    }

    export default Homepage;