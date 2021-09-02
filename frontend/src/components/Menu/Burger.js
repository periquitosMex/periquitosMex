import React from 'react';
import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  top: 7%;
  left: 1.5rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 20;
  @media only screen and (max-width: 768px) {
    display: flex;
  }
  span {
    width: 2.6rem;
    height: 0.3rem;
    background-color: var(--text-header);
    border-radius: 30px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ openNav }) => (openNav ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ openNav }) => (openNav ? '0' : '1')};
      transform: ${({ openNav }) =>
        openNav ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ openNav }) => (openNav ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export default function Burger({ openNav, setopenNav }) {
  const isExpanded = !!openNav;
  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      openNav={openNav}
      onClick={() => setopenNav(!openNav)}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
}
