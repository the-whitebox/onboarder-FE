import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  userInfo: null,
};

const GlobalContext = createContext(initialState);
export default GlobalContext;

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const setUserInfo = (userInfo) => {
    dispatch({
      type: "SET_USER_INFO",
      payload: userInfo,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        setUserInfo,
        userInfo: state.userInfo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
