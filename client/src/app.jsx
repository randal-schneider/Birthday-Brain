import React from 'react';
import { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login/login.js';
import BirthdayPage from './components/birthdaypage/BirthdayPage.js';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return (
      <div>
        <div className="header">
          <h1>Birthday Brain !!!</h1>
        </div>
        <div>
          <Login setToken={setToken} />
        </div>
      </div>
    )
  }

  return (
    <div className="header">
      <h1>Birthday Brain !!!</h1>
      <Router>
        <Switch>
          <Route path="/birthdaypage">
            <BirthdayPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
