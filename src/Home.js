import React from 'react';
import NewRecipe from './components/NewRecipe';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Creators from './components/Creators ';
import Header from './components/Header';
import Menu from './components/Menu';
import ScrollTop from './ScrollTop';
 import Five from './menu/Five';

const Home = ( ) => {
  
 
  return (
    
  
        <div  >
       <Five> 
        <Header/>
        <Menu/>
        <NewRecipe/>
        <Creators/>
       <ContactUs/>
        <Footer/>
        <ScrollTop/>
        </Five>
   
        </div>
 
    );
};

export default Home;