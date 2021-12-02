import React, { useEffect } from "react";
import { useParams } from "react-router";
import store from "../../Stores/Store";

const SeletedUser = () => {
   const { selected, fetchUser } = store();
   const { userId } = useParams();

   useEffect(() => {
      fetchUser(userId);
   }, []);

   return (
      <div>
         {selected && (
            <>
               <span>{selected.id}</span>
               <span>{selected.name}</span>
               <span>{selected.username}</span>
               <span>{selected.email}</span>
               <span>{selected.phone}</span>
            </>
         )}
      </div>
   );
};

export default SeletedUser;
