import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100vw;
  bottom: 0;
  height: 5vh;
  padding: 2rem;
  background-color: var(--header-bg);
  z-index: 106;

  .text {
    color: var(--text-para);
    font-size: 1.2rem;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 480px) {
    justify-content: center;
    text-align: center;
    flex-direction: column;
    .text {
      font-size: 0.9rem;
    }
    .right {
      flex-direction: column;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle className="footer">
      <p className="text left">&copy; Copyright 2021 All Rights Reserved </p>
      <div className="right">
        <p className="text"> Design by: Delfino Rosales</p>
        <p className="text">Developed by: Oscar Mendoza </p>
      </div>
    </FooterStyle>
  );
}
