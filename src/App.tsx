import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/NavBar/Tabs/Home';
import Portfolio from './components/NavBar/Tabs/Portfolio';
import AboutMe from './components/NavBar/Tabs/AboutMe/AboutMe';
import Contact from './components/NavBar/Tabs/Contact';

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
        <AboutMe />
      </div>
    </Router>
  );
}

export default App;
