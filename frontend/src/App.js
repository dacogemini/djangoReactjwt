import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';

class App extends Component {
  state = {
    username: []
  };
  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/v1/users');
      const username = await res.json();
      this.setState({
        username
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Header />
        {this.state.username.map(item => (
          <div key={item.username}>
            <h1>{item.username}</h1>
            <span>{item.username}</span>
          </div>
        ))}
      </div>
      </Router>
    );
  }
}
export default App;