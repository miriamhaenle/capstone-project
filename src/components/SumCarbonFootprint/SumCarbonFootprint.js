import React from 'react'
import styled from 'styled-components'

import { useSpring, animated } from 'react-spring'

export default function SumCarbonFootprint({ sumCarbonFootprint }) {
  const springProps = useSpring({
    number: Number(sumCarbonFootprint),
    from: { number: 0 },
  })
  return (
    <StyledSumCarbonFootprint>
      <animated.span data-cy="sumFootprint" role="note">
        {springProps.number.interpolate((valueToInterpolate) =>
          valueToInterpolate.toFixed(2)
        )}
      </animated.span>
      kg CO2
    </StyledSumCarbonFootprint>
  )
}

const StyledSumCarbonFootprint = styled.section`
  align-items: center;
  background: var(--sunset);
  border: none;
  border-radius: 50%;
  color: var(--sand);
  display: flex;
  flex-direction: column;
  font-family: var(--headlineFont);
  font-size: 30px;
  height: 228px;
  justify-content: center;
  margin: 0 auto;
  margin-top: 30px;
  width: 228px;
  overflow: hidden;

  span {
    font-size: 47px;
    margin: 0;
  }
`
