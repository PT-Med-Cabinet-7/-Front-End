import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

import Navbar, { NavBar } from './components/NavBar'
import Strains from './components/strains/Strains'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login';
import SignUp from './components/SignUp';

import UserState from './components/context/userContext/UserState'


const App =() =>{
  return (
    <UserState>
    <Router>
    <div className="App">
      
    
      
        <NavBar/>
        <div className="container">
        
        <Switch>
        <Route exact path='/sign-up' component={SignUp}/>
        <PrivateRoute  path="/protected" component={Login}/>
        {/* <Route exact path='/user' component={User}/> */}
       <PrivateRoute  path="/protectedstrains" component={Strains}/>
        
      </Switch>
        </div>
      
   
    
    </div>
    </Router>
    </UserState>
  );
}

export default App;
