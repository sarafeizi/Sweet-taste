import React from 'react';
import styles from "../components/Footer.module.css";
import { Link } from 'react-router-dom';
import telegram from "../telegram.svg";
import instagram from "../instagram.svg";
import google from "../google.svg";

const Footer = () => {
    return (
        <footer>
            <div className={styles.backnav}>
                <p className={styles.backnavp}>مارا در شبکه های اجتماعی دنبال کنید</p>
                <div className={styles.footericon}>
                    <Link to="https://t.me/sarafz99"><img src={telegram} alt="Telegram" className={styles.logoicon} /></Link>
                    <Link to="https://www.instagram.com/sarafz99"><img src={instagram} alt="Instagram" className={styles.logoicon} /></Link>
                    <Link to="https://teams.microsoft.com/l/chat/0/0?users=sarafz9978@gmail.com"><img src={google} alt="Google" className={styles.logoicon} /></Link>
                </div>
            </div>
            <div className={styles.copyright}>
                <p className={styles.pcopyright}>© Copyright Of This Site Belongs To Its Owner :D</p>
            </div>
        </footer>
    );
};

export default Footer;
