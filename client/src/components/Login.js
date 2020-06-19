import React, { useState } from 'react';


export const Login = () => {

    const [credentials, setCredentials ] = useState({
        id:'',
        password: '',
        username: ''
       
    });

    const { password, username } = credentials;

    const onChange = e => {
        
        setCredentials({
            ...credentials,
        [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        setCredentials({
            
            id: '',
            password: '',
            username: ''
            
        });
    }
    
    return (
       <form onSubmit={onSubmit}>
           <h2>Login</h2>
           <input
           type="text"
           placeholder="username"
           value={username.credentials}
           onChange={onChange}
           />
           
            <input
           type="password"
           placeholder="password"
           value={password.credentials}
           onChange={onChange}
           />
          

        <div>
               <input
               type="submit"
               value="Login"
               className="btn btn-block bg-dark"
               />
           </div>
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
           Provider{' '}
           <div>
               <input
               type="submit"
               value="Sign-up"
               className="btn btn-block bg-dark"
               />
           </div> */}
       </form>
    )
}

export default Login;
