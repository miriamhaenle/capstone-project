import React, { useState, useEffect } from 'react'
import SumCarbonFootPrint from './components/SumCarbonFootprint/SumCarbonFootprint'
import AddKilometersForm from './components/AddKilometers/AddKilometersForm'
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

    localStorage.setItem(
      'Total Carbon Footprint',
      JSON.stringify(totalCarbonFootprint)
    )
  }, [carbonFootprint, totalCarbonFootprint])

  return (
    <div className="App">
      <SumCarbonFootPrint
        sumCarbonFootprint={
          totalCarbonFootprint.toFixed(2) || initialFootprintValue
        }
      ></SumCarbonFootPrint>
      <AddKilometersForm
        updateCarbonFootprint={updateCarbonFootprint}
      ></AddKilometersForm>
    </div>
  )
  function updateCarbonFootprint(value) {
    setCarbonFootprint([...carbonFootprint, value])
  }
}

export default App
