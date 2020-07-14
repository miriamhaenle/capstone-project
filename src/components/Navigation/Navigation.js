import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <StyledNavigation>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="selected">
            Add trip
          </NavLink>
        </li>

        <li>
          <NavLink to="/add-activity" activeClassName="selected">
            Add activity
          </NavLink>
        </li>
      </ul>
    </StyledNavigation>
  )
}

const StyledNavigation = styled.nav`
  margin: 0 auto;
  padding: 30px 0;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: baseline;
  }

  li {
    list-style: none;
    margin: 0 20px;
    color: var(--seafoam);

    .selected {
      padding: 0;
      color: var(--seafoam);
      font-size: 34px;
      animation: breathe 1500ms forwards;
    }
  }
  a {
    color: var(--sand);
    font-variation-settings: 'wght' 100, 'wdth' 85;
    font-family: var(--headlineFont);
    font-size: 20px;
    padding: 40px 0 30px 0;
    margin: 0;
    text-decoration: none;
  }

  @keyframes breathe {
    10% {
      font-variation-settings: 'wght' 700, 'wdth' 100;
    }
    40% {
      font-variation-settings: 'wght' 700, 'wdth' 85;
    }
    100% {
      font-variation-settings: 'wght' 100, 'wdth' 100;
    }
  }
`
