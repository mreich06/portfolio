import React from 'react';
import './App.css';
import styled from 'styled-components';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Navbar/Tabs/Home';
import Portfolio from './components/Navbar/Tabs/Portfolio';
import AboutMe from './components/Navbar/Tabs/AboutMe';
import Contact from './components/Navbar/Tabs/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
