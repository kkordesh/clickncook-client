import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "../Auth.css";
const Signup = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    // const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:4000/user/register", {
            method: 'POST',
            body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email, password: password}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then (
            (response) => response.json()
        ).then ((data) => {
            props.updateLocalStorage(data.token)
        })
    }

    return (
        <div>
            <h1 id='signuptitle'>Sign Up</h1>
            <Form onSubmit={handleSubmit} className='signupForm'>
                <FormGroup>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input onChange={(e) => setFirstName(e.target.value)} placeholder="type first name"name="firstName" value={firstName} required/>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input onChange={(e) => setLastName(e.target.value)} placeholder="type last name"name="lastName" value={lastName} required/>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} placeholder="type email"name="email" value={email} required/>
                </FormGroup>
                
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} placeholder="type password" name="password" value={password} required/>
                </FormGroup>
                <Button type="submit">Sign Up</Button>
            </Form>
        </div>
      );
}
 
export default Signup;
//             //TODO display a message to the user if the user hasn't added a username, this is a basic version of form validation.  It should display a message under the <h1> Sign up and under the box say "user name is required."