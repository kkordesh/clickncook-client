//? firstName, lastName, email, password
import "../Auth.css";
import React, { useState } from 'react';

import APIURL from "../../helpers/environment";
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


function handleSubmit(event){
    event.preventDefault();
    fetch(`${APIURL}/user/login`, {
        method: "POST",
        body: JSON.stringify({email: email, password: password}),
        headers: new Headers ({
            'Content-Type': 'application/json'
        })
    }) .then (
        (response) => response.json()
    ).then((data) => {
        props.updateLocalStorage(data.token);
    })
}
//         console.log("button was clicked");
//         console.log(APIURL + EndPoints.user.login);
//     var myHeaders = new Headers();
//         myHeaders.append("Content-Type", "application/json");
//     var raw = JSON.stringify({
//         email: email,
//         password: password
//         });
//     var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//         //redirect: 'follow'
//     };
//     fetch(APIURL + EndPoints.user.login, requestOptions)
//         .then(response => response.json())
//         .then(data => {props.updateLocalStorage(data.token) 
//             console.log(data)})
//         .catch(error => console.log('error', error));
// }
    return (
        <div>
            <h1 id="logintitle">Login</h1>
            <form onSubmit={handleSubmit} className="loginForm">
            <br/>
                <label htmlFor="email">Email</label>
            <br/>
                <input type="email"
                 id="email"
                 placeholder='Type email'
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                 required
                  />
            <br />      
                <label htmlFor="password">Password</label>  
            <br/>
                <input type="password"
                id="password"
                placeholder='Type password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)} 
                required
                />
                <br />
                <button id="loginbutton" type="submit" >Submit Login</button>
            </form>
        </div>
      );

}
 
export default Login;