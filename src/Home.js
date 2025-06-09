import React, { Suspense, useEffect, useState, useRef } from 'react';
import NewRecipe from './components/NewRecipe';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollTop from './ScrollTop';
const Menu = React.lazy(() => import('./components/Menu'));

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMenu(true);
          observer.disconnect(); 
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, 
      }
    );

    observer.observe(menuRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Header />
      <div ref={menuRef} style={{ minHeight: '100px' }}>
        {showMenu ? (
          <Suspense fallback={<div>...در حال بارگذاری منو</div>}>
            <Menu />
          </Suspense>
        ) : (
          <div>...در حال آماده‌سازی منو</div>
        )}
      </div>
      <NewRecipe />
      <ContactUs />
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default Home;
