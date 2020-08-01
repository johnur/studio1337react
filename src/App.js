import React from 'react';
import Mainpage from './components/Mainpage';
import Iina from './components/Iina';
import Sanni from './components/Sanni';
import Elina from './components/Elina';
import './style/Scrollbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
   <Route exact path="/" component={Mainpage} />
   <Route exact path="/iina" component={Iina} />
   <Route exact path="/sanni" component={Sanni} />
   <Route exact path="/elina" component={Elina} />
   </Switch>
   </Router>
    </div>
  );
}

export default App;
