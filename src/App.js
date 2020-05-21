import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import Nav from './components/home/header/Nav'
import Login from './components/Login';
import Form from './components/Form';
import Register from './components/Register';
import Logout from './components/Logout';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <HashRouter>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/logowanie' component={Login} />
        <Route path='/rejestracja' component={Register} />
        <Route path='/oddaj-rzeczy' component={Form} />
        <Route path='/wylogowano' component={Logout} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
