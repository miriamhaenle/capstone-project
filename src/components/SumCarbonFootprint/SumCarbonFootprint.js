import React from 'react'
import styled from 'styled-components'

export default function SumCarbonFootprint({ sumCarbonFootprint }) {
  return (
    <StyledSumCarbonFootprint>
      <span aria-label="total footprint" data-cy="sumFootprint">
        {sumCarbonFootprint}
      </span>
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
  height: 228px;
  justify-content: center;
  margin: 0 auto;
  margin-top: 50px;
  width: 228px;
  overflow: hidden;

  span {
    font-size: 47px;
    margin: 0;
  }
`
