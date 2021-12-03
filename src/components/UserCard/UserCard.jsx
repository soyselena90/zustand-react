import React from "react";
import { Link } from "react-router-dom";
import styles from "./UserCard.module.css";

const UserCard = ({ user }) => {
   return (
      <li className={styles.cardList}>
         <div className={styles.userCard}>
            <Link to={`/users/${user.id}`}>
               <ul className={styles.userInfo}>
                  <li>{user.id}</li>
                  <li>{user.name}</li>
                  <li>{user.username}</li>
                  <li>{user.email}</li>
                  <li>{user.phone}</li>
                  <li>{user.website}</li>
               </ul>
            </Link>
            <div className={styles.userBtnWrap}>
               {/* <CommonButton buttonState={buttonState} />
            <CommonButton buttonState={delButtonState} /> */}
            </div>
         </div>
         {/* <CommonModal
         isOpen={isOpen}
         isDelete={isDelete}
         onDelete={onDelete}
         onClose={() => setIsOpen(false)}
         modalContent={modalContent}
      /> */}
      </li>
   );
};

export default UserCard;
