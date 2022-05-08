import { createContext  } from "react";


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    
    //state variables
   
    
    return (
      <AppContext.Provider
        value={{
          
        }}
      >
        {children}
      </AppContext.Provider>
    );
  };