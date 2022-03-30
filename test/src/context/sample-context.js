import { createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        message: "This is from app context",
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
