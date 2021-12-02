import React from "react";
import styles from "./Header.module.css";
const Header = () => {
   return (
      <header className={styles.header}>
         <h1>zustand</h1>
         <nav className={styles.nav}>
            <ul>
               <li>posts</li>
               <li>posts</li>
               <li>posts</li>
            </ul>
         </nav>
         <button>register</button>
      </header>
   );
};

export default Header;
