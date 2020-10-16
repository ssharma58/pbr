import React from 'react';
import Loginpage from './Loginpage/Loginpage';
import Aboutpage from './Aboutpage/Aboutpage';

import './App.scss';
 
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import Homepage from './Homepage/Homepage';
import Footer from './Footer/Footer';
// import PieChart from './PieChart/PieChart';
import Chartjs from './Chartjs/Chartjs';


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
    {/* <PieChart/> */}
      {/* <Budgetlist/> */}
    <Chartjs/>
      
      </div>
      <Homepage/>
      <Footer/>
    </Router>
  );
}

export default App;
