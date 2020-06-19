import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Navbar, { NavBar } from './components/NavBar'
import Strains from './components/Strains'
import PrivateRoute from './components/PrivateRoute'

const App =() =>{
  return (
    <div className="App">
    <Router>
      <Fragment>
        <NavBar/>
        <div className="container">
      <Switch>
        <Route exact path="/" component={Home}/>
        <PrivateRoute exact path="/protected" component={Strains}/>
      </Switch>
        </div>
      </Fragment>
    </Router>
    </div>
  );
}

export default App;
