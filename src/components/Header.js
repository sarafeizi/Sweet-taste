import React, { useState, useEffect } from 'react';
import styles from "../components/Header.module.css";
import Preloader from './Preloader';
import { Link } from 'react-router-dom';
import data from "../recipes.json";

const Header = () => {
  const [search, setSearch] = useState("");
  const [load, setLoad] = useState(true);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    setLoad(true);
    const timer = setTimeout(() => {
      setLoad(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const searchedFoods = data.filter(item =>
    item.title.includes(search)
  );

  return (
    <div>
      {load ? (
        <Preloader />
      ) : (
        <div className={styles.mainheader}>
          <div className={styles.mainheader2}>
            <span className={`${styles.title} title-heading`}>آشپزی و دستور پخت</span>

            <div className={styles.searchContainer}>
              <form className={styles.mainform}>
                <input
                  type="search"
                  placeholder="غذایی که میخوامو پیدا کن"
                  className={styles.mainsearch}
                  value={search}
                  onChange={searchHandler}
                />
              </form>

              {search.length > 0 && (
                <div className={styles.bigsearch}>
                  {searchedFoods.map(item => (
                    <div className={styles.search} key={item.foodID}>
                      <Link to={`/${item.title}`} className={styles.searchlink}>
                        {item.title}
                      </Link>
                      <img
                        className={styles.imgsearch}
                        alt={item.title}
                        src={item.image}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
