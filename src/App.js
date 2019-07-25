import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './TextInput';
import Result from './Result';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Route
          exact path='/'
          component={TextInput}
        />
        <Route
          path='/result'
          component={Result}
        />
      </div>
    </Router>

  );
}

export default App;
