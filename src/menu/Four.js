import React, { useContext } from 'react';
 import One from "../menu/One";
import { Context } from './Five';
import Menu from "../components/Menu";
 
const Four = ( ) => {
   const data=useContext(Context);
   console.log(data);
   
 
    return (
        <div  > 
     {
        data.map(Menu => <One
        key={Menu.foodID}
        productdata={Menu}
   
     
        />)
     }
        </div>
        
    );
};

export default Four ;