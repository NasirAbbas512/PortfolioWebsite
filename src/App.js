import React from 'react'
import "./App.css"
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Error from './Components/Error';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
const App = () => {
  return (
    <>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/services" component={Services}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Blog" component={Blog}/>
          <Route exact path="/Contact" component={Contact}/>
          <Route component={Error}/>
        </Switch>
    </>
  )
}

export default App;