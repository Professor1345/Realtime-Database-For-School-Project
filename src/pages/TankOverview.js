import React, { useState, useEffect } from "react";
// import { useDoorHooks } from "../config";
import { ref, onValue, set, push } from "firebase/database";
import { db } from "../config";
import format from "date-fns/format";

const TankOverview = () => {
  // let value = JSON.parse(window.localStorage.getItem("tanks-data"));
  const [tankData, setTankData] = useState([]);
  // const { getDoor } = useDoorHooks();
  // useEffect(() => {
  //   if (value !== undefined || null) {
  //     setTankData(value);
  //   }
  // }, [value]);
  const getData = async () => {
    try {
      const starCountRef = ref(db, "door");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        try {
          const postListRef = ref(db, 'History');
          const newPostRef = push(postListRef);
          set(newPostRef, {...data, date: new Date().toISOString()});
        } catch (error) {
          console.log(error.message);
        }
      }
    });
    } catch (error) {
      console.log(error.message, 'first');
    }
  };

  const retriveList = async () => {
    let data = []
    const dbRef = ref(db, 'History');

onValue(dbRef, (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const childKey = childSnapshot.key;
    const childData = childSnapshot.val();
    data.push({...childData, id: childKey})
    console.log(data);
  });
  setTankData(data)
}, {
  onlyOnce: true
});

  }
  useEffect(() => {
    retriveList()
    getData();
  }, []);


  return (
    <div className="tank-overview mt-16 flex flex-col justify-center align-center w-full max-w-[1320px] my-4">
      <div>Data Max</div>
      <div className="flex">
        <div>Day</div>
        <div>Week</div>
        <div>Month</div>
        <div>Year</div>
      </div>
      <div className="tank-overview-header relative">
        <h2 className="text-center text-3xl font-bold">Data Logs</h2>
        {/* <p className="absolute top-2 right-3 cursor-pointer bg-red-500 text-white rounded-sm px-6 py-2" onClick={clearData}>Clear Data</p> */}
      </div>
      <div className="tank-overview-table w-full flex m-5 md:my-5">
        <table className=" md:w-full flex justify-center flex-col mx-auto table-auto ">
          <thead className="text-center mx-auto w-full">
            <tr className="grid grid-cols-3 space-x-4 text-base lg:text-lg w-full p-2 lg:py-2 bg-slate-100">
              <th>Temperature</th>
              <th>Status</th>
              <th>Realtime</th>
              {/* <th>Realtime</th> */}
            </tr>
          </thead>
          <tbody className="flex justify-center align-center flex-col mx-auto w-full">
            {tankData?.length !== 0 ? (
              tankData?.map((tank, index) => {
                return <SingleLine info={tank} key={index} />;
              })
            ) : (
              <tr>
                <td className="text-center text-[45px]">No Data Yet </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const SingleLine = ({ info }) => {
  // const convertLevel = (level) => {
  //   if (level === 0) {
  //     return 100;
  //   }
  //   let newValue = 100 - level;

  //   if (newValue === 0) {
  //     return 0;
  //   }
  //   return Math.floor(newValue * 2);
  // };
  // const handleTime = () => {
  //   let time = new Date();
  //   let hours = time.getHours(); //returns value 0-23 for the current hour
  //   let minutes = time.getMinutes();
  //   if (hours <= 11) {
  //     return `${hours}:${minutes} AM`;
  //   } else {
  //     return `${hours}:${minutes} PM`;
  //   }
  // };
  // const statusConverter = (status) => {
  //   if (status === 1) {
  //     return "ON";
  //   } else return "OFF";
  // };

  // const handleData = (d) => ({
  //   name: d?.Name,
  //   level: convertLevel(d?.Level),
  //   date: d?.date || new Date().toLocaleDateString(),
  //   rate: d?.flow_rate || 0,
  //   location: d.location || "",
  //   time: d?.time || handleTime(),
  //   color: d?.color || "",afa
  //   status: statusConverter(d?.status) || "OFF",
  //   sw: d?.SW || 0,
  // });
  // const [data, setData] = useState(handleData(info));
  return (
    <tr className="grid grid-cols-3 w-full space-x-4 md:space-x-10 mb-6  align-center mx-auto py-2">
      <td className="text-center">{info.Temperature.toFixed(2)}</td>
      <td className="text-center">{info.Status}</td>
      <td className="text-center">{format(new Date(info.date), "Pp")}</td>
    </tr>
  );
};
export default TankOverview;
