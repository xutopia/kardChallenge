import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Landing from '../components/Landing.jsx';
import Dashboard from '../containers/Dashboard.jsx';

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
};

export default App;
