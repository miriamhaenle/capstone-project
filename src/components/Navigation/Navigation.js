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

const StyledNavigation = styled.div`
  margin: 0 auto;
  padding: 10px;

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
      color: var(--seafoam);
      font-size: 34px;
    }
  }
  a {
    color: var(--sand);
    font-family: var(--headlineFont);
    font-size: 20px;
    padding: 40px 0 30px 0;
    margin: 0;
    text-decoration: none;
  }
`
