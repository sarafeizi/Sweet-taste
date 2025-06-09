import React from 'react';
import styles from '../components/Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className={styles.header}>
                <div className={`${styles.logo}  navbar-brand mt-2  `}>
                    <Link to="/" title="cooking website">
                        Sweet Taste
                    </Link>
                </div>
                <div className={`${styles.left}  px5 `}>
                    <span className={styles.loginregister}>
                        <Link to="/login" title="log-in">
                            ورود
                        </Link>
                        <span id="back" style={{ color: "black" }}> / </span>
                        <Link to="/signup" title="sign-up">
                            ثبت نام
                        </Link>
                    </span>
                </div>
            </nav>
        </div>
    );
};

export default Nav;