import React, {  createContext, useEffect, useState } from 'react';
import data from "../recipes.json";
export const Context=createContext();
const Five = ( {children}) => {
  
   const [Menu,setMenu]=useState( );
   
     useEffect(() => {
        const fetchAPI =   () => {
    setMenu(data)
        }

        fetchAPI();
    }, []);
     
 
    return (
        <div>
                 <Context.Provider value={Menu}>
            {children}
        </Context.Provider>
            
        </div>
    );
};

export default Five ;