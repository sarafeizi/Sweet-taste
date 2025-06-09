import React, { useState, useEffect } from 'react';
import logo from "../src/heart-fill.svg";
import styles from "../src/components/Footer.module.css";

const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);

    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);  

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <img
        className={styles.scrollTop}
        alt="scroll to top"
        src={logo}
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? 'flex' : 'none', cursor: 'pointer' }}
      />
    </div>
  );
};

export default ScrollTop;
