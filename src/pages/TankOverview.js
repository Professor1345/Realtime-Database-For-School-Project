import React from 'react'

const tableData = [
    {
        id: 1,
        name: 'Tank 1',
        status: 'OK',
        time: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
       volume: Math.floor(Math.random() * 100) + '%',
        lastFull: '10/3/2022',
    }, 
    {
        id: 2,
        name: 'Tank 2',
        status: 'OK',
        time: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
        volume: Math.floor(Math.random() * 100) + '%',
        lastFull: '10/3/2022',
    },
    {
        id: 3,
        name: 'Tank 3',
        status: 'OK',
        time: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
        volume: Math.floor(Math.random() * 100) + '%',
        lastFull: '10/3/2022',
    },

];


const TankOverview = () => {
    // a variable that gets a random number between 0 and 100 in percentage

    const random = Math.floor(Math.random() * 100) + '%';
    return (
      <div className="tank-overview flex flex-col justify-center align-center">
        <div className="tank-overview-header">
          <h2 className="text-center text-3xl font-bold">Tank Overview</h2>
        </div>
        <div className="tank-overview-table w-full flex">
          <table className=" md:w-full flex justify-center flex-col mx-auto">
            <thead className="self-center mx-auto">
              <tr className="flex space-x-6 md:space-x-10">
                <th>Tank</th>
                <th>Status</th>
                <th>Time</th>
                <th>Volume</th>
                <th>Last Full</th>
              </tr>
            </thead>
            <tbody className="flex justify-center align-center flex-col">
              {tableData.map((tank) => (
                <tr
                  key={tank.id}
                  className="flex space-x-6 md:space-x-10 mb-6  align-center self-center mx-auto"
                >
                  <td className="self-center">{tank.name}</td>
                  <td className="self-center">{tank.status}</td>
                  <td className="self-center">{tank.time}</td>
                  <td className="self-center">{tank.volume}</td>
                  <td className="self-center">{tank.lastFull}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default TankOverview;