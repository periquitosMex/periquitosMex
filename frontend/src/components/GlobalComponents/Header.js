import React from 'react';
import styled from 'styled-components';
import PMXLogo from '../../assets/images/android-chrome-512x512.png';

const HeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100vw;
  background-color: var(--header-bg);
  padding: 1.2rem;
  z-index: 50000;
  .imageLogo {
    width: 95px;
  }
  h1 {
    font-size: 3.5rem;
    color: var(--text-header);
  }

  h2 {
    font-size: 1.4rem;
    color: var(--text-p);
  }
  @media only screen and (max-width: 540px) {
    .imageLogo {
      width: 70px;
    }
    .heading {
      display: none;
    }
    .subheading {
      display: none;
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyle>
      <img src={PMXLogo} alt="" className="imageLogo" />
      <div>
        <h1 className="heading">PeriquitosMex</h1>
        <h2 className="subheading">
          Es algo mas que criar aves, es un estilo de vida...
        </h2>
      </div>
    </HeaderStyle>
  );
}
