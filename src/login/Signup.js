import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

import { validate } from './validate';
import { notify } from "./Toast"
import styles from "../login/Signup.module.css";

const Signup = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "signup"))
    }, [data, touched])

    const changeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData({ ...data, [event.target.name]: event.target.checked })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
        }
    }

    const focusHanlder = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify("با موفقیت ثبت نام شدید", "success")
        } else {
            notify("اطلاعات درست نیست !", "error")
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true
            })
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={`${styles.formcontainer} col-10 `}>
                <h2 className={styles.header}>ثبت نام</h2>
                <div className={styles.formfield}>
                    <label>اسم</label>
                    <input
                        className={(errors.name && touched.name) ? styles.uncompleted : styles.forminput}
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={changeHandler}
                        onFocus={focusHanlder}
                    />
                    {errors.name && touched.name && <span className={styles.span}>{errors.name}</span>}
                </div>
                <div className={styles.formfield}>
                    <label>ایمیل</label>
                    <input
                        className={(errors.email && touched.email) ? styles.uncompleted : styles.forminput}
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={focusHanlder} />
                    {errors.email && touched.email && <span className={styles.span}>{errors.email}</span>}
                </div>
                <div className={styles.formfield}>
                    <label>رمز</label>
                    <input
                        className={(errors.password && touched.password) ? styles.uncompleted : styles.forminput}
                        type="password" name="password"
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHanlder} />
                    {errors.password && touched.password && <span className={styles.span}>{errors.password}</span>}
                </div>
                <div className={styles.formfield}>
                    <label>تایید رمز</label>
                    <input
                        className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncompleted : styles.forminput}
                        type="password"
                        name="confirmPassword"
                        value={data.confirmPassword}
                        onChange={changeHandler}
                        onFocus={focusHanlder} />
                    {errors.confirmPassword && touched.confirmPassword && <span className={styles.span}>{errors.confirmPassword}</span>}
                </div>



                
            
                <div className={styles.formfield}>
                    <div className={styles.checkboxcontainer}>
                        <label>قوانین سایت را رعایت میکنم</label>
                        <input
                            type="checkbox"
                            name="isAccepted"
                            value={data.isAccepted}
                            onChange={changeHandler}
                            onFocus={focusHanlder} />
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span className={styles.span}>{errors.isAccepted}</span>}
                </div>


 



                <div className={styles.formbuttons}>
                    <Link to="/login" className={styles.formbuttonslinkv}>ورود</Link>
                    <button type="submit" className={styles.formbuttonslink}>ثبت نام</button>
                </div>
                 
            </form>
            <ToastContainer />
        </div>
    );
};

export default Signup;
 