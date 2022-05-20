import React,{useState,useEffect} from "react";
import MainHeader from "../components/MainHeader";
import SingleTank from "../components/SingleTank";

import Footer from "../components/Footer";
import { TankState } from "../contexts/Context";
import {useHistory} from 'react-router-dom';

import { getWater } from '../config'

const TanksPage = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [pins, setPins] = useState([]);

  const {
    state: { tanks },
  } = TankState();
  useEffect(() => {
   const fetchData = async () => {
      setLoading(true);
      const res =  getWater();
      if(res){
        console.log(res)
      }
      // setPins(data);
      // setLoading(false);
    }
    fetchData();
  }, []);
  // console.log(pins);
 
  
  
  // });
  return (
    <>
      
        <MainHeader />
        <div className="grid md:grid-cols-2 gap-8  mt-4 ">
          {tanks.map((info, index) => {
            return (
              <div className=" p-2 mb-4 " key={index}>
                <SingleTank info={info} />
              </div>
            );
          })}
        </div>
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
        <Footer />
      
    </>
  );
};

export default TanksPage;
