import React from 'react';
import styles from "../components/Newrecipe.module.css";
import panjah from "../image/طرز-تهیه-ماکارونی-دمی-ایرانی.jpg";
import panjahyek from "../image/سوشی0-768x768.jpg";
import panjahse from "../image/ghorme-sabzi.jpg";
import panjahdo from "../image/85973qc2g.jpg";
 import Slider from 'react-slick';
 
const NewRecipe = ( ) => {
    
     const settings_3 = {
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          rtl: true,
    
          responsive: [{
               breakpoint: 860,
               
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            }
             
            
          }]
          
     }

    return  (
          <div className={styles.all}>
               <div className={styles.bignew3}> 
<div className={styles.bignew}>
<div className={`${styles.bignew2} row `}> 
             <nav className={`${styles.lastnav} container `} >
        
          <h3 className={styles.h3nav}> پیشنهادات شما که در آینده داخل سایت قرار میگیرد</h3>
          </nav> 
          <div className={`${styles.bordernew} col-12 mx-auto co-md-6`}></div> 
          <div  className={`${styles.nav1} row `}>
            <Slider    {...settings_3}>
    
          
        <div>
        <div  className={`${styles.nav}   `}>
                      <div className={styles.bigimgnav}>
                     <img src= {panjahdo}  className={styles.imgnav} alt="panjah"/> 
                      </div>
                      <br/>
                      
                      <p className={styles.anav}>
                           پای سیب  
                      </p>

                </div>
     </div>
     <div>
     <div  className={`${styles.nav}  `}>
                      <div className={styles.bigimgnav}>
                     <img src= {panjah}  className={styles.imgnav} alt="panjah"/> 
                      </div>
                      <br/>
                      
                      <p href="#" className={styles.anav}>
                           ماکارونی
                      </p>

                </div>
     </div>
     <div>
     <div  className={`${styles.nav}   `}>
                      <div className={styles.bigimgnav}>
                     <img src= {panjahyek}  className={styles.imgnav} alt="panjah"/> 
                      </div>
                      <br/>
                      
                      <p href="#" className={styles.anav}>
                           سوشی
                      </p>

                </div>
     </div>
     <div>
     <div  className={`${styles.nav}  `}>
                      <div className={styles.bigimgnav}>
                     <img src= {panjahse}  className={styles.imgnav} alt="panjah"/> 
                      </div>
                      <br/>
                      
                      <p href="#" className={styles.anav}>
                              قرمه سبزی
                      </p>

                </div>
     </div>
   
     
   </Slider>
   <div className={`${  styles.bordernew1 } col-12 mx-auto co-md-6`  }></div>
   </div>
   </div>
   </div>
   </div>
   </div>
 );
}


export default NewRecipe;