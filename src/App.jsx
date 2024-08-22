import React from "react";
import { Route, Router } from "wouter";
import Home from "./components/Home/Home.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

const App = () => {
  return (
    <div className='flex flex-col h-screen'> 
      <Router>
        <Navbar />
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
