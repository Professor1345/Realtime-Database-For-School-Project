export const tankReducer = (state, action) => {
  switch (action.type) {
    case "STORE_TANK":
       return {
         ...state,
         tanks:  action.payload
       };

    case "ADD_TANK":
      return {
        ...state,
        tanks: [...state.tanks, action.payload],
      };
    case "REMOVE_TANK":
      return {
        ...state,
        tanks: state.tanks.filter((tank) => tank.id !== action.payload),
      };
    case "SWITCH_TANK_STATUS":
      return {
        ...state,
        tanks: state.tanks.map((tank) =>
          tank.id === action.payload ? { ...tank, status: !tank.status } : tank
        ),
      };
      case "DELETE_TANK":
      return {
        ...state,
        tanks: state.tanks.filter((tank) => tank.id !== action.payload),
      };
      case "EDIT_TANK":
      return {
        ...state,
        tanks: state.tanks.map((tank) =>
          tank.id === action.payload.id ? action.payload : tank
        ),
      };
      case "UPDATE_TANK":
      return {
        ...state,
        tanks: state.tanks.map((tank) =>
          tank.id === action.payload.id ? action.payload : tank
        ),
      };
      

    default:
      return state;
  }
};
