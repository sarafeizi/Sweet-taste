import React from 'react';
import eror from  "../image/Pizza_Pepperoni.png";
import styles from "../components/Preloader.module.css";
 

const Error = () => {
    
 
    return (
        <div className={styles.bigeror}>
 
        <div  className={styles.container}  >
            <div  className={ styles.fourleft}><h1 className={styles.largeSizeH}>4</h1></div>
            <div  className={styles.pizza}  src={eror}>  </div>
            <div  className={styles.fourright}><h1  className={styles.largeSizeH}>4</h1></div>
            <p  className={styles.text}>متاسفم مثل اینکه راه رو اشتباه اومدی :(</p>
        </div>
         
         
            
        </div>
    );
};

export default Error;