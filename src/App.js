import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllPosts from './Components/AllPosts/AllPosts';
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetails from './Components/PostDetails/PostDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <AllPosts></AllPosts>
        </Route>
        <Route path='/PostDetails/:id'>
            <PostDetails></PostDetails>
        </Route>
        <Route path='*'>
            <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
     
  )
}

export default App;
