import React from 'react'
import styled from 'styled-components'

export default function SumCarbonFootprint({ totalFootprint }) {
  return (
    <StyledSumCarbonFootprint>
      <span aria-label="total footprint">{totalFootprint}</span>
      kg CO2
    </StyledSumCarbonFootprint>
  )
}

const StyledSumCarbonFootprint = styled.div`
  align-items: center;
  background: var(--sunset);
  border: none;
  border-radius: 50%;
  color: var(--sand);
  display: flex;
  flex-direction: column;
  font-family: var(--headline-font);
  font-size: 20px;
  font-weight: bold;
  height: 228px;
  justify-content: center;
  width: 228px;

  span {
    font-size: 47px;
    margin: 0;
  }
`
