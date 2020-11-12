/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '@Components/header';
import IssueDetail from '@Pages/IssueDetail';
import IssueList from '@Pages/IssueList';
import NewIssue from '@Pages/IssueEditor/NewIssue';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={IssueList} />
        <Route exact path="/issues/:id" component={IssueDetail} />
        <Route exact path="/new-issue" component={NewIssue} />
      </Switch>
    </div>
  );
};

export default App;
