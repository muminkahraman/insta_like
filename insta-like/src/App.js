import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import ChatList from './ChatList';
import RightSidebar from './RightSidebar';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/camelia'>
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
