import React from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function SumCarbonFootprint({
  sumCarbonFootprint,
  bubbleStatus,
  isMobile,
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
      {isMobile ? <StyledP>Tab for history</StyledP> : ''}
    </StyledSumCarbonFootprint>
  )
}

SumCarbonFootprint.propTypes = {
  sumCarbonFootprint: PropTypes.string,
  bubbleStatus: PropTypes.object,
  isMobile: PropTypes.bool,
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
  overflow: hidden;
  width: 228px;

  span {
    font-size: 47px;
    margin: 0;
  }

  p {
    margin: 0;
    padding: 2px;
  }

  animation: ${(props) =>
    props.bubbleClicked ? 'grow 1500ms forwards' : 'none'};

  :hover {
    cursor: pointer;
    transform: scale(0.95);
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
      background: var(--sand);
      color: var(--sand);
      transform: scale(15);
    }
  }
`
const StyledP = styled.p`
  font-size: 0.4em;
  text-align: center;
  color: var(--woodland);
  background-color: var(--orange-yellow);
  border: solid 1px var(--orange-yellow);
  border-radius: 3px;
`
