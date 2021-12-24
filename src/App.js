import React, { Component } from 'react'
import './App.css';
import About from './About';
import Dog from './Dog';
import Contact from './Contact';
import {Route, Switch, NavLink} from "react-router-dom";


const Hater= () => <h1>I Hate Dogss!!</h1>

class  App extends Component {
  render() {
  return (
    <div className="App">
      <nav className="App-nav">
        <NavLink exact activeClassName="active-link" to="/">About </NavLink>
        <NavLink exact activeClassName="active-link" to="/dog">Dog </NavLink>
        <NavLink exact activeClassName="active-link" to="/contact">Contact </NavLink>
        {/* <a href="/dog">Dog</a>
        <a href="/contact">Contact</a>
        <a href="/">About</a> */}
      </nav>
      <Switch>
      <Route exact path="/" component={About}/>
      <Route exact path="/dog" component={Dog}/>
      <Route exact path="/dog/hater" component={Hater}/>
      <Route exact path="/contact" component={Contact}/>
      
      </Switch>

    </div>
  );
}
}

export default App;
