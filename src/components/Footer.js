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
                    <a href="https://t.me/sarafz99" target="_blank" rel="noopener noreferrer">
                        <img src={telegram} alt="Telegram" className={styles.logoicon} />
                    </a>
                    <a href="https://www.instagram.com/sarafz99" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" className={styles.logoicon} />
                    </a>
                    <a href="https://teams.microsoft.com/l/chat/0/0?users=sarafz9978@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={google} alt="Google" className={styles.logoicon} />
                    </a>
                </div>

            </div>
            <div className={styles.copyright}>
                <p className={styles.pcopyright}>© Copyright Of This Site Belongs To Its Owner :D</p>
            </div>
        </footer>
    );
};

export default Footer;
