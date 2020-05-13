import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import './scss/main.scss';
import Home from './components/Home';
import Login from './components/Login';
import Form from './components/Form';
import Register from './components/Register';
import Logout from './components/Logout';




const NotFound = () => {
  return '404: Content not found';
}

const App = () => {
  return (
    <HashRouter>
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
