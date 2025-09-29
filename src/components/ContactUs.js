import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../components/Contactus.module.css';

const ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_KEY;
// موقتاً برای عیب‌یابی اضافه شود
console.log('Web3Forms Access Key:', ACCESS_KEY);
const ContactUs = () => {
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendHandler = async (e) => {
        e.preventDefault();

        if (!message.trim()) {
            toast.error('لطفاً پیامی وارد کنید');
            return;
        }
        setIsSubmitting(true);
        const formData = {
            message: message,
            access_key: ACCESS_KEY,
            botcheck: '',
            subject: ":پیام جدید از کاربر سایت آشپزی ",
            from_name: "مدیریت سایت Sweet Taste",
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {
                toast.success('پیام شما با موفقیت ارسال شد 🎉');
                setMessage('');
            } else {
                console.error("Web3Forms Error:", result.message);
                toast.error('ارسال پیام با خطا مواجه شد ❌');
            }
        } catch (error) {
            console.error("Network Error:", error);
            toast.error('ارتباط با سرور با مشکل مواجه شد ❌');
        } finally {
            setIsSubmitting(false);
        }
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

            <button onClick={sendHandler} disabled={isSubmitting}>
                {isSubmitting ? '... در حال ارسال' : 'ارسال'}
            </button>

            <ToastContainer />
        </div>
    );
};

export default ContactUs;