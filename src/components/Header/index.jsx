import React from "react";
import { Link } from "react-router-dom";
import store from "../../Stores/Store";
import styles from "./Header.module.css";
const Header = () => {
   const { selected } = store();
   return (
      <header className={styles.header}>
         <Link to="/">
            <h1>zustand</h1>
         </Link>
         {selected ? (
            <>
               <nav className={styles.nav}>
                  <ul>
                     <li>posts</li>
                     <li>posts</li>
                     <li>posts</li>
                  </ul>
               </nav>
               <p>HELLO, {selected.username}</p>
            </>
         ) : (
            <button>register</button>
         )}
      </header>
   );
};

export default Header;
