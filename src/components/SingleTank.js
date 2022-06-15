import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { updateWater, WaterHooks } from '../config';
import { TankState } from '../contexts/Context';
import { toast } from 'react-toastify';
const SingleTank = ({ info }) => {
  const handleData = (d) => ({
    name: d.Name,
    level: d.Level,
    date: d.date || '11/22/3',
    rate: d.flow_rate || 0,
    location: d.location || '',
    time: d.time || '',
    color: d.color || '',
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
  React.useEffect(() => {
    if (data.rate <= 15) toast.error(`${data.name} is leaking`);
  }, [data.rate, data.name]);
  return (
    <>
      <div className=" grid grid-cols-2 gap-4 cursor-pointer">
        <div className="col-auto">
          <div className="bg-gray-300 h-96 flex items-end rounded-t-2xl ">
            <div
              className={`w-full bg-pink-600  mb-30 flex rounded-t-2xl justify-center align-center `}
              style={{
                height: levelNumber + '%',
                backgroundColor: ' rgb(14 165 233)',
              }}
            >
              <p className="text-gray-900 text-2xl ">{data.level}</p>
            </div>
          </div>
        </div>
        <div className="col-auto md:col-auto ">
          <div className="flex flex-col  w-full space-y-2">
            <p className="text-gray-600 text-xl">TankName: {data.name}</p>
            <p className="text-gray-600 text-xl"> Location:{data.location}</p>
            <p className="text-gray-600 text-xl">Date: {data.date}</p>
            <p className="text-gray-600 text-xl">Time {data.time}</p>
            <p className="text-gray-600 text-xl">FlowRate {data.rate}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 flex items-center justify-center w-6/12"
              onClick={() => history.push('/tankView')}
            >
              View Logs
            </button>

            {data?.status ? (
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
            {data?.status ? (
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
