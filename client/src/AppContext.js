import { createContext, useEffect, useState  } from "react";


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    //state variables
    

    let giphy = require("giphy-api")("ShuzxOmN8tPXr3V1wFUsVhshPzGBg7D0");

    const [gif, SetGif]  = useState()
    useEffect(() => {
      giphy.trending(
        {
          limit: 10,
          rating: "g",
          fmt: "json",
        },
        function (err, res) {
          SetGif(res.data);
        }
      );
    }, [])
    
   
    
    return (
      <AppContext.Provider
        value={{
          gif,
          SetGif,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  };