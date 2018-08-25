import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ClickGame from './game/ClickGame';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React Playground</h1>
      </header>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App-navigation">
          <nav className="navigation">
            <Link to="/">Home</Link>
            <Link to="/react-clicker-game">React Clicker Game </Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/react-clicker-game" component={ClickGame} />
        </div>
      </Router>
    );
  }
}

export default App;
