import React from 'react';
import styled from 'styled-components';

const TextStyle = styled.div`
  font-size: 1.7rem;
  line-height: 2.1rem;
  @media only screen and (max-width: 768px) {
    line-height: 1.7rem;
    font-size: 1.4rem;
  }
`;

export default function Text({ children }) {
  return (
    <TextStyle>
      <span>{children}</span>
    </TextStyle>
  );
}
