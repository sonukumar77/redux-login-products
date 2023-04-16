import { createContext, useState } from "react";
export const myContext = createContext();

const ContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  return (
    <myContext.Provider value={{ isLoggedIn, setIsLoggedIn, name, setName }}>
      {children}
    </myContext.Provider>
  );
};

export default ContextProvider;
