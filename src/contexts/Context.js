import { createContext, useContext, useReducer } from "react";

import { tankReducer } from "./Reducer";
import demodata from "../components/demodata";
const Tank = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(tankReducer, {
    tanks: demodata,
  });

  return <Tank.Provider value={{ state, dispatch }}>{children}</Tank.Provider>;
};

export const TankState = () => {
  return useContext(Tank);
};

export default Context;
