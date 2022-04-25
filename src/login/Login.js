import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

import { validate } from './validate';
import { notify } from "./Toast"
import styles from "../login/Signup.module.css";
  
const Login = () => {
 
    const [data, setData] = useState({
        name: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

 
    useEffect(() => {
        setErrors(validate(data, "login"))
    }, [data, touched])

    const changeHandler = event => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const focusHanlder = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify("با موفقیت وارد شدید", "success")
         
            
        } else {
            notify("اطلاعات درست نیست !", "error")
            setTouched({
                name: true,
                password: true
            })
        }
    }
  

    return (
       
        <div className={styles.container}>
          
            <form onSubmit={submitHandler} className={styles.formcontainer}>
                <h2 className={styles.header}>ورود</h2>
                <div className={styles.formfield}>
                    <label>اسم</label>
                    <input
                        className={(errors.name && touched.name) ? styles.uncompleted : styles.forminput}
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={changeHandler}
                        onFocus={focusHanlder} />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className={styles.formfield}>
                    <label>رمز</label>
                    <input
                        className={(errors.password && touched.password) ? styles.uncompleted : styles.forminput}
                        type="password" name="password"
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHanlder} />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formbuttons}>
                    <Link to="/signup" className={styles.formbuttonslink}>ثبت نام</Link>
                    <button type="submit" className={styles.formbuttonslink}>ورود</button>
                </div>
            </form>
            <ToastContainer />
        </div>
 
    );
};

export default Login;
