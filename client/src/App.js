/* eslint-disable import/no-unresolved */
import React from 'react';
import Header from '@Components/header';
import SidePart from '@Pages/IssueDetail/sidePart';
import MainPart from '@Pages/IssueDetail/mainPart';

const App = () => {
  return (
    <div>
      <Header />
      <MainPart />
      <SidePart />
    </div>
  );
};

export default App;
