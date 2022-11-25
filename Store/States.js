import { createContext, useEffect, useState } from "react";

export const AppStates = createContext();
export const StateProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);
  useEffect(()=>{
    if (menu) {
        document.getElementById("root").style.height="100vh";
    }else{
        document.getElementById("root").style.height="";
    }
  },[menu])
  return (
    <AppStates.Provider value={{ menu, setMenu }}>
      {children}
    </AppStates.Provider>
  );
};
