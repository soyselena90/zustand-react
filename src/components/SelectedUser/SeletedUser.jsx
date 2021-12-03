import React, { useEffect } from "react";
import { useParams } from "react-router";
import store from "../../Stores/Store";
import styles from "./SelectedUser.module.css";

const SeletedUser = () => {
   const { selected, fetchSelectUser } = store();
   const { userId } = useParams();

   useEffect(() => {
      fetchSelectUser(userId);
   }, []);

   return (
      <div className={styles.selectedUserWrap}>
         {selected && (
            <>
               <h1 className={styles.selectedTitle}>
                  Hi, {selected.username} 🖐
               </h1>
               <div className={styles.selectedContent}>
                  <ul className={styles.userDetail}>
                     <li>{selected.id}</li>
                     <li>{selected.name}</li>
                     <li>{selected.username}</li>
                     <li>{selected.email}</li>
                     <li>
                        <span>{selected.address?.street}</span>
                        <span>{selected.address?.suite}</span>
                        <span>{selected.address?.city}</span>
                        <span>{selected.address?.zipcode}</span>
                     </li>
                     <li>{selected.phone}</li>
                     <li>{selected.website}</li>
                     <li>{selected.company?.name}</li>
                  </ul>
               </div>
               <div className={styles.selectedBtnWrap}>
                  {/* <CommonButton buttonState={buttonState} />
                            <CommonButton buttonState={delButtonState} /> */}
               </div>
            </>
         )}
      </div>
      //  <CommonModal
      //     isOpen={isOpen}
      //     isDelete={isDelete}
      //     onDelete={onDelete}
      //     onClose={() => setIsOpen(false)}
      //     modalContent={modalContent}
      //  />
   );
};

export default SeletedUser;
