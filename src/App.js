import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages';
import SigninPage from './pages/signin';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route patch="/" component={Home} exact/>
        <Route patch="/signin" component={SigninPage} exact/>
      </Switch>
    </Router>
  );
};

export default App;
