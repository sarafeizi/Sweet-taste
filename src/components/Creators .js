import React from 'react';
import styles from "../components/Creators.module.css" ;
import person from "../person-circle.svg";
 
 
 


const Creators = () => {
    
     
 
    return (
       
        <div  > 
  
            <p className={styles.titlecreate}>نام اعضای تیم ما</p>
        <div className={styles.creators}>
           
   
        <div className={styles.create}>
            
                <div><img src={person} className={styles.createimg} alt={person}/></div>
                <div>
                    <p className={styles.createp}>اسم</p>
                    <h3 className={styles.createh3}> سارا فیضی</h3>
                </div>
            </div>
            <div className={styles.create}>
                <div><img src={person} className={styles.createimg} alt={person}/></div>
                <div>
                    <p className={styles.createp}>اسم</p>
                    <h3 className={styles.createh3}>سینا امینی</h3>
                </div>
            </div>
            

            <div className={styles.create}>
                <div><img src={person} className={styles.createimg} alt={person}/></div>
                <div>
                    <p className={styles.createp}>اسم</p>
                    <h3 className={styles.createh3}> بهار کیانی</h3>
                </div>
            </div>
            <div className={styles.create}>
                <div><img src={person} className={styles.createimg} alt={person}/></div>
                <div>
                    <p className={styles.createp}>اسم</p>
                    <h3 className={styles.createh3}>پویان جهان منش</h3>
                </div>
            </div>
            <div className={styles.create}>
                <div><img src={person} className={styles.createimg} alt={person}/></div>
                <div>
                    <p className={styles.createp}>اسم</p>
                    <h3 className={styles.createh3}>زهرا کوزه کنعانی</h3>
                </div>
            </div>
            <div className={styles.create}>
                <div><img src={person} className={styles.createimg} alt={person}/></div>
                <div>
                    <p className={styles.createp}>اسم</p>
                    <h3 className={styles.createh3}> مریم عصار</h3>
                </div>
            </div>
           
            
            </div>
            
        </div>
    );
};

export default Creators;