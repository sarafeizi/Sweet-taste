import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../components/Contactus.module.css';

const ContactUs = () => {
    const [message, setMessage] = useState('');

    const sendHandler = (e) => {
        e.preventDefault();

        if (!message.trim()) {
            toast.error('لطفاً پیامی وارد کنید');
            return;
        }

        emailjs.send(
            'service_hsasbah',
            'template_u0zclv5',
            { message },
            'LG3YyICqYO0suRUf1'
        )
            .then(() => {
                toast.success('پیام شما با موفقیت ارسال شد 🎉');
                setMessage('');
            })
            .catch((error) => {
                console.error(error);
                toast.error('ارسال پیام با خطا مواجه شد ❌');
            });
    };

    return (
        <div className={styles['contact-us']}>
            <h4>پیام و دستورپخت‌های پیشنهادی خود را برای ما بنویسید</h4>
            <textarea
                rows="7"
                placeholder="...پیامت رو اینجا بنویس"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendHandler}>ارسال</button>
            <ToastContainer />
        </div>
    );
};

export default ContactUs;
