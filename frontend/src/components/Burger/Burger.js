import React from 'react';
import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  top: 10%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 20;
  span {
    width: 2rem;
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
