import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
   return (
      <Link to={`/users/${user.id}`}>
         <li>
            <span>{user.id}</span>
            <span>{user.name}</span>
            <span>{user.username}</span>
            <span>{user.email}</span>
            <span>{user.website}</span>
         </li>
      </Link>
   );
};

export default UserCard;
