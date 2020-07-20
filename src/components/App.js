import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history';
import Header from './Header';
import Chat from './Chat';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/chat" exact component={Chat} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;