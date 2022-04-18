import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import ChatList from './ChatList';
import RightSidebar from './RightSidebar';
import PostList from './PostList';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <RightSidebar />
            <ChatList />
            <PostList />
          </Route>
          <Route path='/posttest'>
            <Post />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
