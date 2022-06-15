import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from 'react';
// import { getWater } from '../config';
import { tankReducer } from './Reducer';
// import demodata from "../components/demodata";
const Tank = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [state, dispatch] = useReducer(tankReducer, { tanks: [] });
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // const res = await getWater();
      // if (res) {
      // console.log({ res: Object.values(res) });
      // dispatch({ type: 'STORE_TANK', payload: Object.values(res) });
      // }
    };
    fetchData();
  }, []);

  return <Tank.Provider value={{ state, dispatch }}>{children}</Tank.Provider>;
};

export const TankState = () => {
  return useContext(Tank);
};

export default Context;
