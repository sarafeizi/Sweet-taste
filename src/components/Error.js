import React from 'react';
import eror from  "../image/Pizza_Pepperoni.png";
import styles from "../components/Preloader.module.css";
 

const Error = () => {
    
 
    return (
        <div className={styles.bigeror}>
 
        <div  className={styles.container}  >
            <div  className={ styles.fourleft}><h1>4</h1></div>
            <div  className={styles.pizza}  src={eror}>  </div>
            <div  className={styles.fourright}><h1>4</h1></div>
            <p  className={styles.text}>Sorry. The page not found !!</p>
        </div>
         
         
            
        </div>
    );
};

export default Error;