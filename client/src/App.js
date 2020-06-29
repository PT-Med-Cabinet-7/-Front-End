import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import StrainState from './components/context/strainsContext/StrainState'
import Navbar, { NavBar } from './components/NavBar'
import Strains from './components/strains/Strains'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login';
import SignUp from './components/SignUp';



const App =() =>{
  return (
    <StrainState>
    <Router>
    <div className="App">
      
    
      
        <NavBar/>
        <div className="container">
        
        <Switch>
        <Route  path='/Front-End' component={SignUp}/>
        <PrivateRoute  path="/protected" component={Login}/>
        {/* <Route exact path='/user' component={User}/> */}
       <PrivateRoute  path="/protectedstrains" component={Strains}/>
        
      </Switch>
        </div>
      
   
    
    </div>
    </Router>
    </StrainState>
  );
}

export default App;
