import React from 'react';
import styled from 'styled-components';
import Post from '../components/Posts/Post';

const InicioStyle = styled.div`
  width: 100vw;
  height: auto;
`;

export default function Inicio() {
  return (
    <InicioStyle>
      <div className="container">
        <Post />
      </div>
    </InicioStyle>
  );
}
