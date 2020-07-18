import React from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'

export default function SumCarbonFootprint({
  sumCarbonFootprint,
  bubbleStatus,
}) {
  const springProps = useSpring({
    number: Number(sumCarbonFootprint),
    from: { number: 0 },
  })

  return (
    <StyledSumCarbonFootprint bubbleClicked={bubbleStatus.active}>
      <animated.span data-cy="sumFootprint" role="note">
        {springProps.number.interpolate((valueToInterpolate) =>
          valueToInterpolate.toFixed(2)
        )}
      </animated.span>
      <p>kg CO2</p>
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

  p {
    margin: 0;
    padding: 0;
  }

  animation: ${(props) =>
    props.bubbleClicked ? 'grow 1500ms forwards' : 'none'};

  :hover {
    transform: scale(0.95);
    cursor: pointer;
  }
  :hover::before {
    content: 'Tap and hold to see your footprint history';
    font-size: 20px;
    padding: 30px;
    text-align: center;
  }

  :hover span {
    display: none;
  }
  :hover p {
    display: none;
  }

  @keyframes grow {
    0% {
      background: var(--sunset);
      color: var(--sunset);
    }

    100% {
      transform: scale(15);
      background: var(--sand);
      color: var(--sand);
    }
  }
`
