import React from 'react';
import styled from 'styled-components';

const TextStyle = styled.div`
  font-size: 1.8rem;
  line-height: 2.1rem;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function Text({ children }) {
  return (
    <TextStyle>
      <p>{children}</p>
    </TextStyle>
  );
}
