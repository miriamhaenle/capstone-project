import React from 'react'
import styled from 'styled-components'
import car from '../../images/car.svg'
import bus from '../../images/bus.svg'
import train from '../../images/train.svg'
import plane from '../../images/plane.svg'

export default function TransportationType() {
  return (
    <TransportationSelection>
      <p>Select mode of transportation</p>
      <SurroundingFlexbox>
        <StyledTransportationType>
          <img src={car} alt="car" />
          Car
        </StyledTransportationType>
        <StyledTransportationType>
          <img src={bus} alt="bus" />
          Bus
        </StyledTransportationType>
        <StyledTransportationType>
          <img src={train} alt="train" />
          Train
        </StyledTransportationType>
        <StyledTransportationType>
          <img src={plane} alt="plane" />
          Plane
        </StyledTransportationType>
      </SurroundingFlexbox>
    </TransportationSelection>
  )
}

const TransportationSelection = styled.div`
  display: flex;
  flex-direction: column;
`
const SurroundingFlexbox = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 38px 0;
`

const StyledTransportationType = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 61px;
  height: 61px;
  border-radius: 50%;
  background-color: var(--sand);
  font-size: 14px;
  color: var(--woodland);

  img {
    width: 26px;
    height: 26px;
  }
`
