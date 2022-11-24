import React from "react";
import './UserItem.css';

const UserItem = props => {
    return(
        <div className="user-item">
            {props.name}
            <br />
            {props.age}
        </div>
    )
}

export default UserItem