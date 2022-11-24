import React from "react";
import UserItem from './UserItem'

const UserList = props => {
    return(
        <ul className="user-list">
            {props.users.map(user => (
                <UserItem 
                    name={user.name}
                    age={user.age}    
                />
                    
                
            ))}
        </ul>
    )
}

export default UserList;