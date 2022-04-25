import React from 'react';
import styles from "../components/Menu.module.css";
 
import { Link } from 'react-router-dom';
 import { useState } from 'react';
 import data from "../recipes.json";
  
 
 
 
 const type=["همه","ایرانی","فست فود","کیک و دسر"];
 
const Menu = ({food}) => {
 
const[active,setactive]=useState(type[0]);
 const[HomeState,setHomeState]=useState(data);
 
  
 const filteritems=(type)=>{
 
     if (type==="همه"){
        setHomeState(data);
         return;
     }
   else {  
       const newitems=data.filter((data)=>data.tags===type);
     setHomeState(newitems);
   }
 }
 

 
    return (
        <div> 
  <div  className={styles.main}>
                  <p className={styles.menu}>دستور پخت</p>
                    <div className={`${styles.bigbutmenu}   col-10 col-sm-6 col-xs-10 col-lg-10 col-md-10 d-flex flex-wrap `}>
       
   {type.map(type=>(<button key={type} className={active===type ? styles.butmenu2 : styles.butmenu}
                                      onClick={()=>{
                                              setactive(type)  ;
                                    filteritems(type) }}>{type}</button>))}
                                  
                                 
 

</div>
<div className={`${styles.menuborder} col-12 mx-auto  col-md-6  `}></div>
 
 {HomeState.map((data ,image) => (
     <div key={data.foodID} className={styles.mainphoto}>
         
          <img  src={data.image} alt={data.title} className={styles.imgtag}></img>
          
         <p>
             <strong className={styles.tag}>{data.title}</strong>
             <br />
             <br />
             <Link to={'/' + data.title} className={styles.tag2} title="desert">
                 دستور پخت {data.title}
             </Link>
              
         </p>
     </div>
 ))}
</div>
            
        </div>
    );
};
 
export default Menu;