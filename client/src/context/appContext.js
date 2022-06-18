import React, { useContext, useReducer } from "react";
import { CLEAR_ALERT, DISPLAY_ALERT } from "./actions";
import reducer from "./reducer";

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const displayAlert = () => {
      dispatch({type: DISPLAY_ALERT})
  }
  const clearAlert = () => {
      dispatch({type: CLEAR_ALERT})
  }

  return (
    <AppContext.Provider value={{ ...state, displayAlert, clearAlert }}>{children}</AppContext.Provider>
  );
};


export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
