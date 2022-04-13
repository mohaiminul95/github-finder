import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <AppContext.Provider
      value={{
        isAuth,
        setIsAuth,
        message: "This is from app context",
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
