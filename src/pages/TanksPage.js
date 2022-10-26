import React, { useState, useEffect, useCallback } from "react";
import MainHeader from "../components/MainHeader";
import SingleTank from "../components/SingleTank";

import Footer from "../components/Footer";
// import { TankState } from '../contexts/Context';
import { useHistory } from "react-router-dom";

// import { getWater } from '../config';
import { db, WaterHooks } from "../config";
import { get, ref } from "firebase/database";
const TanksPage = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState([]);

  const [tanks, setTanks] = useState([]);
  const fetchRealTimeData = useCallback(async () => {
    setLoading(true);
    const baseRef = ref(db, "Water");

    await get(baseRef).then((snap) => {
      const t = snap.val();
      const tempTanks = [];
      Object.entries(t).map(([key, value]) =>
        tempTanks.push({
          ...value,
          id: key,
          date: new Date().toLocaleDateString("en-US", {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
          }),
          time: new Date().toLocaleTimeString("en-Us", {}),
        })
      );
      setTanks(tempTanks);
      setLoading(false);
    });
    console.log(tanks.length);
  }, [tanks.length]);
  useEffect(() => {
    fetchRealTimeData();
    const localData = JSON.parse(localStorage.getItem("tanks-data"));
    if (localData !== null) {
      const newTanks = [...localData, ...tanks];
      localStorage.setItem("tanks-data", JSON.stringify(newTanks));
    } else localStorage.setItem("tanks-data", JSON.stringify(tanks));
  }, [fetchRealTimeData]);
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <MainHeader />
      <div className="grid md:grid-cols-2 gap-8  mt-4 min-h-[calc(100vh-300px)]">
        {loading ? (
          <div>Loading...</div>
        ) : (
          tanks?.map((info, index) => {
            return (
              <div className=" p-2 mb-4 " key={index}>
                <SingleTank info={info} />
              </div>
            );
          })
        )}
      </div>
      {/* <AddTank /> */}
      <Footer />
    </>
  );
};

const AddTank = () => {
  const history = useHistory();

  return (
    <div className="relative">
      <div className="fixed bottom-0 right-0 mb-4 mr-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => history.push("/addTank")}
        >
          + Add Tank
        </button>
      </div>
    </div>
  );
};
export default TanksPage;
