import React from 'react';
import Loginpage from './Loginpage/Loginpage';
import Aboutpage from './Aboutpage/Aboutpage';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import Homepage from './Homepage/Homepage';
import Footer from './Footer/Footer';

function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className ="mainContainer">

        <Switch>

          <Route path ="/About">
            <Aboutpage>

            </Aboutpage>


          </Route>

          <Route path ="/Login"><Loginpage/></Route>
        
          <Route path ="/"><Homepage/></Route>
</Switch>


      </div>
      <Homepage/>
      <Footer/>
    </Router>
  );
}

export default App;
