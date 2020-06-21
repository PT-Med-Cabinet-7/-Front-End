import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Navbar, { NavBar } from './components/NavBar'
import StrainSelectionForm from './components/strains/StrainSelectionForm'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login';
import SignUp from './components/SignUp'

const App =() =>{
  return (
    <div className="App">
    <Router>
      <Fragment>
        <NavBar/>
        <div className="container">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path='/sign-up' component={SignUp}/>
        <Route exact path="/login" component={Login}/>
        {/* <PrivateRoute exact path="/protected" component={StrainSelectionForm}/> */}
        <Route exact path="/strainform" component={StrainSelectionForm}/>
      </Switch>
        </div>
      </Fragment>
    </Router>
    </div>
  );
}

export default App;
