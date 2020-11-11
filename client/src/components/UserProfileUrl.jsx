/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components';

const UserProfileImage = styled.img`
  width: 40px;
  height: 40px;
  margin: 12px;
  background-color: rgb(235, 235, 235);
  border-radius: 100%;
`;

const UserProfileUrl = ({ author }) => {
  return <UserProfileImage src={author.profileUrl} alt={`user's profile`} />;
};

export default UserProfileUrl;
