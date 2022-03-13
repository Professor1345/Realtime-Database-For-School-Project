import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { TankState } from "../contexts/Context";
import { FaTimes, FaCheck } from "react-icons/fa";
const AddTank = () => {
  const history = useHistory();
  const [tankName, setTankName] = useState("");
  const [tankLocation, setTankLocation] = useState("");
  const [tankDescription, setTankDescription] = useState("");

  const {
    state: { tanks },
    dispatch,
  } = TankState();
  const saveTank = () => {
    const newTank = {
      id: tanks.length + 1,
      name: tankName,
      location: tankLocation,
      description: tankDescription,
      level: Math.floor(Math.random() * 100) + "%",
      date: new Date().toLocaleDateString(),
      rate: "20 ml/min",
      time: new Date().toLocaleTimeString(),
      status: false,
      color: "blue-500",
    };
    dispatch({
      type: "ADD_TANK",
      payload: newTank,
    });
    history.push("/tanks");
  };
  const cancelTank = () => {
    history.push("/tanks");
  };

  return (
    <div className="w-full h-screen bg-blue-200 flex align-center justify-center">
      <div className="bg-white flex flex-col align-center p-4 pb-10 w-full md:w-7/12 h-auto self-center shadow-lg rounded-lg">
        <h1 className="text-2xl text-center font-bold  text-blue-500">
          Add a Tank
        </h1>
        <div className="flex flex-col mb-2">
          <div className="flex flex-col">
            <label className="text-blue-500 text-sm mb-2">Tank Name</label>
            <input
              className="w-full p-2  border-gray-500 border-2 mb-4 rounded"
              type="text"
              placeholder="Tank Name"
              value={tankName}
              onChange={(e) => setTankName(e.target.value)}
            />
            <label className="text-blue-500 text-sm mb-2">
              Tank Description
            </label>
            <input
              className="w-full p-2  border-gray-500 border-2 mb-4 rounded"
              type="text"
              placeholder="Tank Description"
              value={tankDescription}
              onChange={(e) => setTankDescription(e.target.value)}
            />
            <label className="text-blue-500 text-sm mb-2">Tank Location</label>
            <input
              className="w-full p-2  border-gray-500 border-2 mb-4 rounded"
              type="text"
              placeholder="Tank Location"
              value={tankLocation}
              onChange={(e) => setTankLocation(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end mb-2">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2 flex items-center justify-center"
            onClick={cancelTank}
          >
            <FaTimes /> <span className="ml-2">Cancel</span>
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex rounded mr-2 items-center justify-center"
            onClick={saveTank}
          >
            <FaCheck /> <span className="mr-2">Add Tank</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTank;
