import React  from 'react';
import styles from "../menu/One.module.css";
import heart from "../heart-fill.svg";
 
 const One = (product) => {
   
    return (
        
        <div>
        <div className="container">
            <div className={`${styles.desert} row `}>
                <div>
                    <h1 className={styles.deserth5}>{product.data.title}</h1>
                    <div className={`${styles.deserth3} col-10 col-md-6  `}>
                        <h4>زمان پخت : {product.data.cookTime} دقیقه</h4>
                        <h4>زمان تهیه : {product.data.preparationTime} دقیقه</h4>
                    </div>
                    <img
                    alt={product.data.title}
                        src={product.data.image}
                        className={styles.imageee}
                    ></img>
                    <div
                        className={`${styles.border} col-12 mx-auto co-md-6`}
                    ></div>
                    <div
                        className={`${styles.border} col-12 mx-auto co-md-6`}
                    >
                        <h1>: مواد اولیه </h1>
                        <div className={`${styles.mavad} col-10 `}>
                            {product.data.ingredients.map((ingredients) => (
                                <p key={ingredients.title}>
                                    {ingredients.title} :
                                    {ingredients.amount}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className={`${styles.deserth3dastor} col-10 `}>
                        <h3>طرز تهیه : </h3>

                        {product.data.steps.map((step) => (
                            <h5 key={step}>
                                {step}
                                <br />
                            </h5>
                        ))}

                        <h5>
                            غذای شما آمادست ! <img src={heart} alt={heart}></img>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default One;