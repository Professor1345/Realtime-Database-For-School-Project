import React, { useState, useEffect } from "react";
// import { useDoorHooks } from "../config";
import { ref, onValue, set, push } from "firebase/database";
import { db } from "../config";
import format from "date-fns/format";

const DataOverview = () => {
  // let value = JSON.parse(window.localStorage.getItem("tanks-data"));
  const [doorData, setDoorData] = useState([]);
  // const { getDoor } = useDoorHooks();
  // useEffect(() => {
  //   if (value !== undefined || null) {
  //     setDoorData(value);
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
  setDoorData(data)
}, {
  onlyOnce: true
});

  }
  useEffect(() => {
    retriveList()
    getData();
  }, []);

  // FILTER FOR STATISTICS
  // const dataFilter = doorData.filter((data) => data === [0]

//DAY
// const day = doorData.filter((data) => data.date === new Date().getDay()+1);
const newDayData = doorData.filter((data) => ((data.date).substring(0,4) - 
Number(new Date().getFullYear()) == 0) && ((data.date).substring(5,7) - 
Number(new Date().getMonth() + 1) == 0)? 
((data.date).substring(8,10) - 
new Date().toISOString().substring(8,10) === 0): undefined);
//SORT
const doorDataSortDay = [...newDayData].sort(function (a,b) {return b.Temperature.toFixed(2) - a.Temperature.toFixed(2);});
const firstDay = doorDataSortDay[0];

//WEEK
//   const weekData = (date) => {
//     let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
//     return days[date.getDay()];}
//   let date = new Date();
// const week = doorData.filter((data) => data.date === weekData(date));
Date.prototype.getWeek = function () {
var dt = new Date(this.getFullYear(),0,1);
return Math.ceil((((this - dt) / 86400000) + dt.getDay() + 1)/ 7);
};
// var myDate = new Date("2022/11/12");
const newWeekData = doorData.filter((data) => Number(new Date(data.date).getWeek()) - 
Number(new Date().getWeek()) === 0);
//SORT
const doorDataSortWeek = [...newWeekData].sort(function (a,b) {return b.Temperature.toFixed(2) - a.Temperature.toFixed(2);});
const firstWeek = doorDataSortWeek[0];

//MONTH
// const month = doorData.filter((data) => data.date === new Date().getMonth()+1);
const newMonthData = doorData.filter((data) => ((data.date).substring(0,4) - 
Number(new Date().getFullYear()) === 0)? 
((data.date).substring(5,7) - 
Number(new Date().getMonth() + 1) === 0) : undefined);
//SORT
const doorDataSortMonth = [...newMonthData].sort(function (a,b) {return b.Temperature.toFixed(2) - a.Temperature.toFixed(2);});
const firstMonth = doorDataSortMonth[0];

//YEAR
// const year = doorData.filter((data) => data.date === new Date().getFullYear()+1);
const newYearData = doorData.filter((data) => (data.date).substring(0,4) - 
Number(new Date().getFullYear()) === 0);
//SORT
const doorDataSortYear = [...newYearData].sort(function (a,b) {return b.Temperature.toFixed(2) - a.Temperature.toFixed(2);});
const firstYear = doorDataSortYear[0];

//OKAYYY
// const Number = [35.2093, 32.4352, 35.754, 30.564, 30.43, 29.34, 36.102, 32.22];
// const doorDataSort = [...Number].sort(function (a,b) {return b - a;});
// const first = doorDataSort[0];

  return (
   <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
       <div className="tank-overview mt-16 flex flex-col justify-center align-center w-full max-w-[1320px] my-4 items-center">
      <div className="text-center text-3xl font-bold">Data Statistics</div>
      <div className="flex justify-center items-center flex-col mx-auto w-full md:w-full">
        <div className="grid grid-cols-4 text-base mx-auto text-center lg:text-lg w-full p-2 lg:py-2 bg-slate-100">
          <div className="p-2 font-bold">Day</div>
          <div className="p-2 font-bold">Week</div>
          <div className="p-2 font-bold">Month</div>
          <div className="p-2 font-bold">Year</div>
        </div>
        
        {doorData?.length !== 0 ? (
              // doorData?.map((info, index) =>
                // return <SingleLine info={tank} key={index} />;
                <div className="grid grid-cols-4 text-base mx-auto text-center lg:text-lg w-full p-2 lg:py-2">
                  
                  {/* USEFUL */}
                  <div className="p-2">{firstDay?.Temperature.toFixed(2)}</div>
                  <div className="p-2">{firstWeek?.Temperature.toFixed(2)}</div>
                  <div className="p-2">{firstMonth?.Temperature.toFixed(2)}</div>
                  <div className="p-2">{firstYear?.Temperature.toFixed(2)}</div>

{/* <div className="p-2">{firstDay?.toFixed(2)}</div>
<div className="p-2">{firstWeek?.toFixed(2)}</div>
<div className="p-2">{firstMonth?.toFixed(2)}</div>
<div className="p-2">{firstYear?.toFixed(2)}</div> */}
          </div>
              // )
            ) : (
              <tr>
                <td className="text-center text-[45px]">No Data Yet </td>
              </tr>
            )}
        
        
      </div>
      <div className="tank-overview-header relative">
        <h2 className="text-center text-3xl font-bold">Data Logs</h2>
        {/* <p className="absolute top-2 right-3 cursor-pointer bg-red-500 text-white rounded-sm px-6 py-2" onClick={clearData}>Clear Data</p> */}
      </div>
      <div className="tank-overview-table w-full flex my-5 md:my-5">
        <table className=" md:w-full flex justify-center flex-col mx-auto table-auto ">
          <thead className="text-center mx-auto w-full">
            <tr className="grid grid-cols-3 space-x-4 text-base lg:text-lg w-full py-2 lg:py-2 bg-slate-100">
              <th>Temperature</th>
              <th>Status</th>
              <th>Realtime</th>
              {/* <th>Realtime</th> */}
            </tr>
          </thead>
          <tbody className="flex justify-center align-center flex-col mx-auto w-full">
            {doorData?.length !== 0 ? (
              doorData?.map((tank, index) => {
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
  // const Number = [35.2093, 32.4352, 35.754, 30.564, 30.43, 29.34, 36.102, 32.22];
  
  return (
    <tr className="grid grid-cols-3 w-full space-x-4 md:space-x-10 mb-6  align-center mx-auto py-2">
      {/* <td className="text-center">{info.Temperature.toFixed(2)}</td> */}
      <td className="text-center">{info.Temperature.toFixed(2)}</td>
      <td className="text-center">{info.Status}</td>
      <td className="text-center">{format(new Date(info.date), "Pp")}</td>
    </tr>
  );
};
export default DataOverview;
