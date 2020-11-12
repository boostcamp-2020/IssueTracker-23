/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '@Components/header';
import IssueDetail from '@Pages/IssueDetail';
import IssueList from '@Pages/IssueList';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={IssueList} />
        <Route exact path="/issues/:id" component={IssueDetail} />
      </Switch>
    </div>
  );
};

export default App;
