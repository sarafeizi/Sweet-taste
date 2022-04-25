import React, { useState } from 'react';
import styles from "../menu/One.module.css";
import heart from "../heart-fill.svg";
  import { Context } from './Five';
  import {useContext} from 'react';
 
 
 
 const One = ( ) => {
    const id = product.foodID;
    const s = useContext(Context);
const product = s[id - 1];
 
     
    return (
        
        <div>
            
        <div className="container">
            <div className={`${styles.desert} row `}>
              
                <div>
                    <h1 className={styles.deserth5}>{product.title}</h1>
                    <div className={`${styles.deserth3} col-10 col-md-6  `}>
                        <h4>زمان پخت : {product.cookTime} دقیقه</h4>
                        <h4>زمان تهیه : {product.preparationTime} دقیقه</h4>
                    </div>
                    <img src={product.image} className={styles.imageee}></img>
                    <div className={`${styles.border} col-12 mx-auto co-md-6`}></div>
                     <div className={`${styles.border} col-12 mx-auto co-md-6`}>
                        <h1>: مواد اولیه </h1>
                        <div className={`${styles.mavad} col-10 `}>
                        {product.ingredients.map((ingredients) => (
                                    <p key={ingredients.title}>{ingredients.title} : {ingredients.amount}</p>
                                ))}
                            </div>
                        </div>
                        <div className={`${styles.deserth3dastor} col-10 `}>
                            <h3>طرز تهیه  : </h3>

                            {product.steps.map((step) => (
                                <h5 key={step}>
                                    {product}<br />
                                </h5>
                            ))}
                            
                            <h5>غذای شما آمادست ! <img src={heart}></img></h5>
                    </div>
                </div>
        
            </div>
        </div>
    </div>
);
};

export default One;