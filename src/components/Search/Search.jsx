import React, { useEffect, useState } from "react";
import store from "../../Stores/Store";
import UserCard from "../UserCard/UserCard";
import styles from "./Search.module.css";

const Search = ({ setIsSearch }) => {
   const { users, selected } = store();
   const [searchResult, setSearchResult] = useState([]);
   const [searchInput, setSearchInput] = useState("");

   const searchUsers = (e) => {
      const searchVal = e.target.value;
      setSearchInput(searchVal);
      if (searchInput !== "") {
         const filteredData = users.filter((user) => {
            return Object.values(user) //to get the values from the object item.
               .join("") // converting the values into a string -> toLowerCase
               .toLowerCase() //String.prototype.toLowerCase()
               .includes(searchInput.toLowerCase());
         });
         setIsSearch(true);
         setSearchResult([...filteredData]);
      }
   };

   useEffect(() => {
      if (searchInput === "") setIsSearch(false);
   });
   return (
      <>
         <div className={styles.searchWrap}>
            <input
               type="search"
               id="search"
               placeholder="Enter username.."
               onChange={searchUsers}
            />
            <label htmlFor="search">Search</label>
         </div>
         <div className={styles.searchContent}>
            {searchInput.length > 1 &&
               searchResult.map((user) => {
                  return <UserCard key={user.id} user={user} />;
               })}
            {searchResult.length === 0 && searchInput.length > 1 && (
               <div className={styles.nouserCheckAgain}>
                  No User, please check username again..
               </div>
            )}
         </div>
      </>
   );
};

export default Search;
