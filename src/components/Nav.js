import React from 'react';
import styles from '../components/Nav.module.css';
import { Link } from 'react-router-dom';
import Toggle from '../Toggler'; 

const Nav = ({ theme, toggleTheme }) => {
    return (
        <nav className={styles.header}>
            <div className={`${styles.logo} navbar-brand mt-2`}>
                <Link to="/" title="cooking website">
                    Sweet Taste
                </Link>
            </div>
            
            <div className={styles.themeTogglerContainer}>
                <Toggle theme={theme} toggleTheme={toggleTheme} />
            </div>
        </nav>
    );
};

export default Nav;
