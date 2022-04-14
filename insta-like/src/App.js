import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import ChatList from './ChatList';
import RightSidebar from './RightSidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'>
            <Header />
            <RightSidebar />
            <ChatList />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
