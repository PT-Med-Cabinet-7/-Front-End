import React, { useState } from 'react';


export const LoginReg = () => {
    const [credentials, setCredentials ] = useState({
        id: '',
        email: '',
        password: '',
        username: '',
        role: 'patient'
    });

    const { email, password, username, role} = credentials
    const onChange = e => setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })
    return (
       <form>
           <h2>Sign-Up</h2>
           <input
           type="email"
           placeholder="email"
           value={email}
           onChange={onChange}
           />
            <input
           type="password"
           placeholder="password"
           value={password}
           onChange={onChange}
           />
            <input
           type="text"
           placeholder="username"
           value={username}
           onChange={onChange}
           />
           <h5>Role</h5>
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
               className="btn btn-block"
               />
           </div>
       </form>
    )
}

export default LoginReg;
