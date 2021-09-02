

import { Redirect, Route, Switch } from "react-router-dom";
import home from "./component/home";
import about from "./component/about";
import service from "./component/service";
import Contact from "./component/contact";
import Navbar from "./component/navbar";
import Footer from './component/footer'

import './component/css/navbar.css';



function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={home}/>
    <Route exact path="/about" component={about}/>
    <Route exact path="/project" component={service}/>
    <Route exact path="/contact" component={Contact}/>
    <Redirect to="/" /> 
    </Switch>
    <Footer/>
  

    </>
  );
}

export default App;
