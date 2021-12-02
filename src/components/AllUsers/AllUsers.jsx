import React, { useEffect } from "react";
import store from "../../Stores/Store";
import UserCard from "../UserCard/UserCard";

const AllUsers = () => {
   const { users, fetch, loading, error } = store();

   useEffect(() => {
      fetch();
   }, [fetch]);

   if (loading) return <h1>loading..</h1>;
   //    if (error !== null) return <h1>errorororororo..</h1>;

   return (
      console.log("error", error),
      (
         <div>
            <ul>
               {users &&
                  users.map((user) => <UserCard key={user.id} user={user} />)}
            </ul>
         </div>
      )
   );
};

export default AllUsers;
