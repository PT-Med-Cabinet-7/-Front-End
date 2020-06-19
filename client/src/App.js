import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Navbar, { NavBar } from './components/NavBar'


const App =() =>{
  return (
    <div className="App">
    <Router>
      <Fragment>
        <NavBar/>
        <div className="container">
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
        </div>
      </Fragment>
    </Router>
    </div>
  );
}

export default App;
