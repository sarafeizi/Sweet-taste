import React from 'react';

import styles from "../components/Preloader.module.css"

const Preloader = () => {

    return (
        <div className={styles.preloader}>

            <div className={styles.container}>
                <div className={`${styles.upbread} ${styles.hamburger} `}>
                    <div className={styles.sesame} style={{ top: "15px", left: "40px" }}></div>
                    <div className={styles.sesame} style={{ top: "15px", left: "60px" }}></div>
                    <div className={styles.sesame} style={{ top: "15px", left: "80px" }}></div>
                    <div className={styles.sesame} style={{ top: "15px", left: "100px" }}></div>
                    <div className={styles.sesame} style={{ top: "15px", left: "120px" }}></div>
                    <div className={styles.sesame} style={{ top: "15px", left: "140px" }}></div>
                    <div className={styles.sesame} style={{ top: "45px", left: "15px" }}></div>
                    <div className={styles.sesame} style={{ top: "45px", left: "45px" }}></div>
                    <div className={styles.sesame} style={{ top: "45px", left: "75px" }}></div>
                    <div className={styles.sesame} style={{ top: "45px", left: "105px" }}></div>
                    <div className={styles.sesame} style={{ top: "45px", left: "135px" }}></div>
                    <div className={styles.sesame} style={{ top: "45px", left: "165px" }}></div>
                </div>
                <div className={`${styles.tomato} ${styles.hamburger} `}></div>
                <div className={`${styles.cheese} ${styles.hamburger} `} >
                    <div className={styles.vegtable}></div>
                    <div className={`${styles.vegtable} ${styles.light} `}></div>
                    <div className={styles.vegtable}></div>
                    <div className={`${styles.vegtable} ${styles.light} `}></div>
                    <div className={styles.vegtable}></div>
                    <div className={`${styles.vegtable} ${styles.light} `}></div>
                    <div className={styles.vegtable}></div>
                </div>
                <div className={`${styles.meat} ${styles.hamburger} `}></div>
                <div className={`${styles.downbread} ${styles.hamburger} `}></div>
            </div>
        </div>
    );
};

export default Preloader;