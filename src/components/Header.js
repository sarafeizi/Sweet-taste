import React from 'react';
import { useState } from 'react';
import styles from "../components/Header.module.css";
 
import Preloader from './Preloader';
import { Link } from 'react-router-dom';
 
import { useEffect} from 'react';
 import data from "../recipes.json"
 


const Header = () => {
  const[search,setsearch]=useState("");
  const searchhandler=event=>{
      setsearch(event.target.value)
      
  }
  const[load,setloader]=useState(true);
   
   
    useEffect(()=>{
  setloader(true)
  setTimeout(() => {
    
    setloader(false)
  }, 3000);
    },[])


    const searchedfoods=data.filter(data=>data.title.includes(search.toLowerCase()))
    return (
        <div>
                 
                 {
                   load ?
                   <Preloader/>
                           :


      <div className={styles.mainheader}>
      <div  className={styles.mainheader2}> 

        <span  className={`${styles.title} title-heading `}>آشپزی و دستور پخت  </span>
 
        <form action="#"  className={styles.mainform} method="get">
        <input type="search" placeholder="غذایی که میخوامو پیدا کن "  className={`${styles.mainsearch} col-sm-10 `} value={search} onChange={searchhandler}
        
        />
              
             </form>
             <div>
             {
              search.length ? <div  className={`${styles.bigsearch} col-10 col-md-6 mx-auto`}>{
          searchedfoods.map(data=> <div className={`${styles.search} col-10 col-md-6 mx-auto`}> <Link to={data.title}  key={data.title} className={styles.searchlink}>{data.title}</Link><div className={styles.divvv}><img className={styles.imgsearch} alt={data.title} src={data.image}/></div></div> )}</div>
          : <p></p>
        }
                  </div>
   </div>
  </div> }

            
        </div>
    );
};

export default Header;