import React, { useState, useEffect } from 'react'
import SumCarbonFootPrint from './components/SumCarbonFootprint/SumCarbonFootprint'
import AddKilometers from './components/AddKilometers/AddKilometers'

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
    if (historicCarbonFootprint !== null) {
      setCarbonFootprint(historicCarbonFootprint)
    }
    const historicTotal = JSON.parse(localStorage.getItem('Sum'))
    setTotalCarbonFootprint(historicTotal)
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'Carbon Footprint History',
      JSON.stringify(carbonFootprint)
    )
  }, [carbonFootprint])

  useEffect(() => {
    localStorage.setItem('Sum', JSON.stringify(totalCarbonFootprint))
  }, [totalCarbonFootprint])

  useEffect(() => {
    const calculatedTotalSum = calculateTotalFootprintSum(carbonFootprint)
    setTotalCarbonFootprint(calculatedTotalSum)
  }, [carbonFootprint])

  return (
    <div className="App">
      <SumCarbonFootPrint
        totalFootprint={totalCarbonFootprint || initialFootprintValue}
      ></SumCarbonFootPrint>
      <AddKilometers
        updateCarbonFootprint={updateCarbonFootprint}
      ></AddKilometers>
    </div>
  )
  function updateCarbonFootprint(value) {
    setCarbonFootprint([...carbonFootprint, value])
  }

  function calculateTotalFootprintSum(carbonFootprint) {
    if (carbonFootprint === null) {
      return 0
    } else {
      return carbonFootprint.reduce((acc, curr) => acc + curr, 0)
    }
  }
}

export default App
