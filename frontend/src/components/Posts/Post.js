import React from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';

const PostStyle = styled.div`
  max-width: 100vw;
  margin-top: 2rem;
  font-size: 1.8rem;
  line-height: 2rem;
  background-color: white;
  padding: 2rem;
  border: 1px solid #f5e37c;
  border-radius: 15px;
  white-space: pre-line;
  .postHeader {
    margin-bottom: 1.5rem;
  }
  .title {
    margin: 2rem 0 4.5rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function Post() {
  return (
    <PostStyle>
      <PostItem
        title={<h1 className="title">Bienvenido a Periquitos Mex</h1>}
      />
    </PostStyle>
  );
}
