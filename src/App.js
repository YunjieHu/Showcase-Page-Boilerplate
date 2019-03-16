import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from './components/Landing';
import Signup from './components/Signup.jsx';
import './App.css';


const routes = [
  {
    path: '/',
    exact: true,
    content: () => (
        <Landing />
    )
  },
  {
    path: '/Signup',
    content: () => (
        <Signup />
    )   
  },
  {
    path: '',
    content: () => (
         <Landing />
    )
  }

];

class App extends Component {
  render() {
    const routeContent = routes.map((route, index) => (
       <Route path={route.path} exact={route.exact} component={route.content} key={index}/> 
    ));
    return (
      <Router>
       <div>
            <Switch>{routeContent}</Switch>
      </div>
    </Router>
    );
  }
}

export default App;
