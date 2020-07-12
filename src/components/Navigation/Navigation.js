import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <StyledNavigation>
      <ul>
        <li>
          <NavLink to="/">Add trip</NavLink>
        </li>
        <li>
          <NavLink to="/add-activity">Add activity</NavLink>
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
  }

  li {
    list-style: none;
    margin: 0 20px;
  }
  a {
    color: var(--sand);
  }
`
