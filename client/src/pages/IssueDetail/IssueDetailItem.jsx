/* eslint-disable import/no-unresolved */
import React from 'react';
import DescriptionHeader from '@Components/DescriptionHeader.jsx';
import DescriptionBody from '@Components/DescriptionBody.jsx';

const IssueDetailItem = (props) => {
  return (
    <div>
      <DescriptionHeader isOwner={props.isOwner} value={props.value} />
      <DescriptionBody value={props.value} />
    </div>
  );
};

export default IssueDetailItem;
