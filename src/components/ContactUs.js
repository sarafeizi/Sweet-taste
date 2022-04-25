import React, {useState} from 'react';
import styles from '../components/Contactus.module.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
import {notify} from '../login/Toast';

const ContactUs = () => {
    const [message, setMessage] = useState();

    const sendHandler = async (e) => {
        //e.preventDefault();
        const response = await Axios.post('http://localhost:3001/contact', {
            token: localStorage.getItem('token'),
            message: message,
        });
        console.log(response.data);
        if (response.data.msgSent) {
            notify('پیام شما به ادمین ارسال شد', 'success');
        } else {
            if (response.data.token) {
                console.log('hey');
                notify('سرور در حال بروزرسانی است، لطفاً بعداً دوباره تلاش کنید', 'error');
            } else {
                notify('لطفاً ابتدا ثبت نام کنید', 'error');
            }
        }
    };

    return (
        <div className={styles['contact-us']}>
            <h4>ابتدا وارد اکانت کاربری خود شوید و دستور پخت‌های دلخواه خود را با ما به اشتراک بگذارید</h4>
	        
            <textarea rows="7" onChange={(event) => setMessage(event.target.value)} />
            
            <button onClick={sendHandler}>ارسال</button>

            <ToastContainer />
        </div>
    );
};

export default ContactUs;
