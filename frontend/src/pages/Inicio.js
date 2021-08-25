import React from 'react';
import styled from 'styled-components';
import HomePost from '../components/Posts/HomePost';

const InicioStyle = styled.div`
  padding-bottom: 4vh;
`;

export default function Inicio() {
  return (
    <InicioStyle>
      <div className="container">
        <HomePost />
      </div>
    </InicioStyle>
  );
}
