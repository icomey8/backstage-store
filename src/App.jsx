import React from "react";
import { Route, Router } from "wouter";
import Home from "./components/Home/Home.jsx";
import Shop from "./components/Shop/Shop.jsx";

const App = () => {
  return (
    <div className='flex flex-col h-screen'> 
      <Router>
        <div className='flex flex-col flex-1'>
          <Route path='/' component={Home}></Route>
          <Route path='/listings' component={Shop}></Route>
        </div>
      </Router>
    </div>
  );
};

export default App;

// pascal case for components and their folders+files
// camel case for utility functions and their files


//! Spotify API guidelines, don't ignore
// https://developer.spotify.com/terms
// https://developer.spotify.com/documentation/design
  // any metadata used from spotify must be accompanied by brand logo
  // no altering of metadata/artwork


//? maybe shoot an email about the extent of guidelines that should apply to this project.
//? most rules seem tailored towards actual commerial products, not so much personal projects?