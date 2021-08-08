import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 5vh;
  padding: 2rem;
  background-color: var(--header-bg);
  .text {
    color: var(--text-para);
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <p className="text left">&copy; Copyright 2021 All Rights Reserved </p>
      <div className="right">
        <p className="text"> Design by: Delfino Rosales</p>
        <p className="text">Developed by: Oscar Mendoza </p>
      </div>
    </FooterStyle>
  );
}
