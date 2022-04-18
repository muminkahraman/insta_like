import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import ChatList from './ChatList';
import RightSidebar from './RightSidebar';
import ChatBox from './ChatBox'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <RightSidebar />
            <ChatList />
            <Home />
          </Route>
          <Route path='/TestAbdou'>
          <ChatBox  />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
