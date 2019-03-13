import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Register from './components/backend/Register';


class App extends Component {
  
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Register />
      </div>
      </Router>
    );
  }
}
export default App;