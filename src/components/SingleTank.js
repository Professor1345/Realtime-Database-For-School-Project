import React from 'react'
import {useHistory} from 'react-router-dom'

const SingleTank = ({info}) => {
    const {name,level, date, rate, location, time, color} = info;
    // write a function to convert a string to a number
    const convertToNumber = (str) => {
        return Number(str.replace(/\D/g,''));
    }
    const levelNumber = convertToNumber(level);
    const history = useHistory();
    return (
        <>
            <div className=" grid grid-cols-2 gap-4 cursor-pointer"
            onClick={()=>history.push("/tankview")}>
            
                <div className="col-auto">
                    <div className="bg-gray-300 h-96 flex items-end rounded-t-2xl ">
                <div className={`w-full bg-pink-600  mb-30 flex rounded-t-2xl justify-center align-center `}
                 style={{height:levelNumber+'%', backgroundColor:' rgb(14 165 233)'}}>
                
                
                    <p className="text-gray-900 text-2xl ">{level}</p>
            </div>
            </div>
            </div>
                <div className="col-auto md:col-auto ">
                    <div className="flex flex-col  w-full space-y-2">
                        <p className="text-gray-600 text-xl">TankName: {name}</p>
                        <p className="text-gray-600 text-xl"> Location:{location}</p>
                        <p className="text-gray-600 text-xl">Date: {date}</p>
                        <p className="text-gray-600 text-xl">Time {time}</p>
                        <p className="text-gray-600 text-xl">FlowRate {rate}</p>   
                    </div>
            </div>
            </div>
            </>
    
    )
    }

    export default SingleTank
