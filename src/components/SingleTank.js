import React from "react";
import { useHistory } from "react-router-dom";
import { TankState } from "../contexts/Context";

const SingleTank = ({ info }) => {
  const {
    Name: name,
    Level: level,
    date = "11/22/3",
    flow_rate: rate,
    location = "",
    time = "",
    color,
    Status: status,
  } = info;
  // write a function to convert a string to a number
  const convertToNumber = (str) => {
    // return Number(str.replace(/\D/g, ""));
    return str;
  };
  const levelNumber = convertToNumber(level);
  const history = useHistory();
  const {
    state: {tanks},
    dispatch,
  } = TankState();

  const switchStatus = (id) => {
    const tank = tanks.find((tank) => tank.id === id);
    const newTank = {
      ...tank,
      status: !tank.status,
    };
    dispatch({
      type: "UPDATE_TANK",
      payload: newTank,
    });
  };

  return (
    <>
      <div className=" grid grid-cols-2 gap-4 cursor-pointer">
        <div className="col-auto">
          <div className="bg-gray-300 h-96 flex items-end rounded-t-2xl ">
            <div
              className={`w-full bg-pink-600  mb-30 flex rounded-t-2xl justify-center align-center `}
              style={{
                height: levelNumber + "%",
                backgroundColor: " rgb(14 165 233)",
              }}
            >
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
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 flex items-center justify-center w-6/12"
              onClick={() => history.push("/tankView")}
            >
              View Logs
            </button>

            {status ? (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 flex items-center justify-center w-6/12"
                onClick={() => switchStatus(info.id)}
              >
                Turn Off
              </button>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 flex items-center justify-center w-6/12"
                onClick={() => switchStatus(info.id)}
              >
                Turn On
              </button>
            )}
            {status ? (
              <p>The Tank is currently ON</p>
            ) : (
              <p>The Tank is currently OFF</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTank;
