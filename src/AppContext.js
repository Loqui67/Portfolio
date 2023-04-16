import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children, ...rest }) {
  const [myValue, setMyValue] = useState(rest);

  const value = {
    myValue,
    setMyValue,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function useAppContext() {
  return useContext(AppContext);
}

export { AppProvider, useAppContext };
