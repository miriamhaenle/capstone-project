import React, { useState, useEffect } from 'react'
import SumCarbonFootPrint from './components/SumCarbonFootprint/SumCarbonFootprint'
import AddKilometers from './components/AddKilometers/AddKilometers'
import { calculateTotalFootprintSum } from './components/utils/calculateTotalFootprintSum'

function App() {
  const initialFootprintValue = 0
  const [carbonFootprint, setCarbonFootprint] = useState([
    initialFootprintValue,
  ])
  const [totalCarbonFootprint, setTotalCarbonFootprint] = useState(
    initialFootprintValue
  )

  useEffect(() => {
    const historicCarbonFootprint = JSON.parse(
      localStorage.getItem('Carbon Footprint History')
    )
    historicCarbonFootprint && setCarbonFootprint(historicCarbonFootprint)
    const historicTotalCarbonFootprint = JSON.parse(
      localStorage.getItem('Total Carbon Footprint')
    )
    setTotalCarbonFootprint(historicTotalCarbonFootprint)
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'Carbon Footprint History',
      JSON.stringify(carbonFootprint)
    )
    setTotalCarbonFootprint(calculateTotalFootprintSum(carbonFootprint))
  }, [carbonFootprint])

  useEffect(() => {
    localStorage.setItem(
      'Total Carbon Footprint',
      JSON.stringify(totalCarbonFootprint)
    )
  }, [totalCarbonFootprint])

  return (
    <div className="App">
      <SumCarbonFootPrint
        sumCarbonFootprint={totalCarbonFootprint || initialFootprintValue}
      ></SumCarbonFootPrint>
      <AddKilometers
        updateCarbonFootprint={updateCarbonFootprint}
      ></AddKilometers>
    </div>
  )
  function updateCarbonFootprint(value) {
    setCarbonFootprint([...carbonFootprint, value])
  }
}

export default App
