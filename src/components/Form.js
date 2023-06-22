import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from '../features/user'
function Form(){

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");

    return(
        <div className="mainContent">  
            <br></br>
            <br></br>
                <label>Name </label>
                <input type="text" onChange={(event)=>{setName(event.target.value)}}></input><br></br><br></br>
                <label>Age </label>
                <input type="number" onChange={(event)=>{setAge(event.target.value)}}></input><br></br><br></br>
                <label>Email </label>
                <input type="email" onChange={(event)=>{setEmail(event.target.value)}}></input><br></br><br></br>
                <button
                    onClick={
                        ()=>{
                            dispatch(login({name: name, age: age, email: email}))
                        }
                    }
                >Submit</button>
           
            
        </div>
    )
}


export default Form; 