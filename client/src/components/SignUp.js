import React, { useState } from 'react';
import axiosWithAuth from './axiosWithAuth';


export const SignUp = props => {
    const [credentials, setCredentials ] = useState({
        id:'',
        email: '',
        password: '',
        username: ''
        
    });

    const {id, email, password, username } = credentials;

    const onChange = e => {
        
        setCredentials({
            ...credentials,
        [e.target.name]: e.target.value
        })
    }

    const signUpSubmit = (e,credentials) => {
        e.preventDefault();
       axiosWithAuth()
       .post('/api/auth/register', credentials)
       .then(res => {
           window.localStorage.setItem('token', res.payload)
           props.history.push('/protected')
       })
       .catch(err => console.log(err))
    }
    
    return (
       <form onSubmit={signUpSubmit}>
           <h2 className="text-primary">Sign-Up</h2>
           <input
           type="email"
           placeholder="email"
           value={email.credentials}
           onChange={onChange}
           />
            <input
           type="password"
           placeholder="password"
           value={password.credentials}
           onChange={onChange}
           />
            <input
           type="text"
           placeholder="username"
           value={username.credentials}
           onChange={onChange}
           />
           {/* <h5>Role</h5>
           <input
           type="radio"
           name="role"
           value="patient"
           checked={role === 'patient'}
           onChange={onChange}/>
           Patient{' '}
           <input
           type="radio"
           name="role"
           value="provider"
           checked={role === 'provider'}
           onChange={onChange}/>
           Provider{' '} */}
           
           <div>
               <input
               type="submit"
               value="Sign-up"
               className="btn btn-block bg-dark"
               />
           </div>
       </form>
    )
}

export default SignUp;
