import React, { useState} from 'react';
import styles from '../components/Nav.module.css';

import heart from '../heart-fill.svg';

import {Link} from 'react-router-dom';
 

const Nav = () => {
    const [name, setName] = useState(null);

 

    const logoutClickHandler = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    };
    return (
        <div>
        <nav className={styles.header}>
            <div className={`${styles.logo}  navbar-brand mt-2  `}>
                <Link to="/" title="cooking website">
                    Sweet Taste 
                </Link> 
            </div> 
            <div className={`${styles.left}  px5 `}>
                
                {!name ? (
                    <span className={styles.loginregister}>
                        <Link to="/login" title="log-in">
                            ورود 
                        </Link> 
                        <span id="back" style={{color:"black"}}> / </span>
                        <Link to="/signup" title="sign-up">
                            ثبت نام 
                        </Link> 
                    </span>
                ) : (
                    <span className={`${styles.greeting} col-10 col-md-6 navbar-brand  `}>
                         
                        !عزیز {name}
                        سلام 
                    </span>
                )} 
                {name && (
                    <button className={`${styles.exitButton} navbar-brand `} onClick={logoutClickHandler}>
                        <img className={styles.icon} src={heart} alt="" />
                        خروج 
                    </button>
                )} 
            </div>
        </nav>
        
    </div>
    );
};

export default Nav;