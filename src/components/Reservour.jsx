import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { updateWater, WaterHooks } from "../config";
import { TankState } from "../contexts/Context";
import { toast } from "react-toastify";
const Reservior = ({ info }) => {
  const convertLevel = (level) => {
     if (level === 0) {
       return 95;
     }
     let newValue = 100 - level;

     if (newValue === 0) {
       return 10;
     }
     if (newValue * 2 > 100) {
       return 95;
     } else {
       return Math.floor(newValue * 2);
     }
  };
  const handleTime = () => {
    let time = new Date();
    let hours = time.getHours(); //returns value 0-23 for the current hour
    let minutes = time.getMinutes();
    if (hours <= 11) {
      return `${hours}:${minutes} AM`;
    } else {
      return `${hours}:${minutes} PM`;
    }
  };
  const handleData = (d) => ({
    name: d.Name,
    level: convertLevel(d.Level),
    // level: d.Level,
    date: d.date || new Date().toLocaleDateString(),
    rate: d.flow_rate || 0,
    location: d.location || "",
    time: d.time || handleTime(),
    color: d.color || "",
    status: d.Status || 0,
    sw: d.SW || 0,
  });
  const [data, setData] = useState(handleData(info));
  // write a function to convert a string to a number
  const convertToNumber = (str) => {
    // return Number(str.replace(/\D/g, ""));
    return str;
  };
  const levelNumber = convertToNumber(data.level);
  const history = useHistory();

  const switchStatus = async (id) => {
    // Switch the status of the tank !! turn the value to a boolean data type
    const d = await updateWater(id, {
      SW: !!data.sw ? 0 : 1,
      Status: !!data.status ? 0 : 1,
    });
    setData(handleData(d[id]));
  };
  const offStatus = async (id) => {
    // Switch the status of the tank !! turn the value to a boolean data type
    const d = await updateWater(id, {
      SW: 0,
      Status: 0,
    });
    console.log({ id: id, data });
    setData(handleData(d[id]));
  };
  const OnStatus = async (id) => {
    // Switch the status of the tank !! turn the value to a boolean data type
    const d = await updateWater(id, {
      SW: 1,
      Status: 1,
    });
    console.log({ id: id, data });
    setData(handleData(d[id]));
  };

  // React.useEffect(() => {
  //   if (data.rate <= 0.5) toast.error(`${data.name} is leaking`);
  // }, [data.rate, data.name]);
  // useEffect(() => {
  //   if (data.level >= 80) {
  //     offStatus(info.id);
  //   }
  //   if (data.level <= 20) {
  //     OnStatus(info.id);
  //   }
  // }, [data.level, info.id]);
  return (
    <>
      <div className=" grid grid-cols-2 gap-4 cursor-pointer">
        <div className="col-auto">
          <div className="bg-gray-300 h-96 flex items-end rounded-t-2xl ">
            <div
              className={`w-full bg-pink-600  mb-30 flex rounded-t-2xl justify-center align-center `}
              style={{
                height: levelNumber + "%",
                maxHeight: "24rem",
                backgroundColor: " rgb(14 165 233)",
              }}
            >
              <p className="text-gray-900 text-2xl ">{data.level} %</p>
            </div>
          </div>
        </div>
        <div className="col-auto md:col-auto ">
          <div className="flex flex-col  w-full space-y-2">
            <p className="text-gray-600 text-xl">Name: Main Reserviour</p>
            {/* <p className="text-gray-600 text-xl"> Location:{data.location}</p> */}
            <p className="text-gray-600 text-xl">Date: {data.date}</p>
            <p className="text-gray-600 text-xl">Time {data.time}</p>
            {/* <p className="text-gray-600 text-xl">FlowRate {data.rate}</p> */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 flex items-center justify-center w-6/12"
              onClick={() => history.push("/tankView")}
            >
              View Logs
            </button>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservior;
