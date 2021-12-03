import React, { useEffect, useState } from "react";
import store from "../../Stores/Store";
import Failure from "../Failure";
import Loading from "../Loading";
import Search from "../Search/Search";
import UserCard from "../UserCard/UserCard";
import styles from "./AllUsers.module.css";

const AllUsers = () => {
   const { users, fetch, loading, error } = store();
   const [isSearch, setIsSearch] = useState(false);

   useEffect(() => {
      fetch();
   }, [fetch]);

   if (loading) return <Loading />;
   if (error !== null) return <Failure />;

   return (
      <div className={styles.container}>
         <Search setIsSearch={setIsSearch} />
         {users && !isSearch && (
            <ul className={styles.usersWrap}>
               {users.map((user) => (
                  <UserCard key={user.id} user={user} />
               ))}
            </ul>
         )}
      </div>
   );
};

export default AllUsers;
