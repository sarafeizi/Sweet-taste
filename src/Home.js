import React from 'react';
import NewRecipe from './components/NewRecipe';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
// import Creators from './components/Creators ';
import Header from './components/Header';
import Menu from './components/Menu';
import ScrollTop from './ScrollTop';
 
const Home = ( ) => {
  return (
        <div  >
        <Header/>
        <Menu/>
        <NewRecipe/>
        {/* <Creators/> */}
       <ContactUs/>
        <Footer/>
        <ScrollTop/>
        </div>
    );
};

export default Home;