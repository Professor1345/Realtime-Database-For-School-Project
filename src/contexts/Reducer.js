export const tankReducer = (state, action) => {
  switch (action.type) {
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
    case "ON_TANK":
      return {
        ...state,
        tanks: state.tanks.map((tank) => {
          if (tank.id === action.payload.id) {
            return {
              ...tank,
              ...action.payload,
            };
          } else {
            return tank;
          }
        }),
      };
    case "OFF_TANK":
      return {
        ...state,
        tanks: state.tanks.map((tank) => {
          if (tank.id === action.payload.id) {
            return {
              ...tank,
              ...action.payload,
            };
          } else {
            return tank;
          }
        }),
      };

    default:
      return state;
  }
};
