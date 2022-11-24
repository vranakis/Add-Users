import React, { useState } from "react";
import './NewUserForm.css';

const NewUserForm = (props) => {


    const [enteredName, setEnteredName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }
    
    const formSubmitHandler = event => {
        event.preventDefault();
    if ((enteredName.trim().length === 0) || (enteredAge.trim().length === 0)){
            alert("You must complete all fields!");
            return;
        }
        const newUser = 
            {name: enteredName, age: enteredAge}
        
        props.addUser(newUser);
    }

    return(
        <form onSubmit={formSubmitHandler} className="form">
            <label className="form-title">Add a new user!</label>
            Full Name: <input 
                type='text' 
                id='name'
                onChange={nameChangeHandler}
                />
            Age: <input 
                type='text' 
                id='age'
                onChange={ageChangeHandler}
                />
            <button type='submit'>Add</button> 
    </form>)
}

export default NewUserForm