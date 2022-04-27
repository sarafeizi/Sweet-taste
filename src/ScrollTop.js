import React from 'react';
import logo from "../src/heart-fill.svg";
import { useState } from 'react';
import styles from "../src/components/Footer.module.css"

const ScrollTop = () => {

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 3000){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 3000){
        setShowScroll(false)
      }
    };
  
    const scrollTop = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    };
  
    window.addEventListener('scroll', checkScrollTop)

    
    return (
        <div>
                    <img className={styles.scrollTop} alt="logo" src={logo}onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
        </div>
    );
};

export default ScrollTop;