import React, { useState, useEffect } from 'react'
import SumCarbonFootPrint from './components/SumCarbonFootprint/SumCarbonFootprint'
import AddKilometers from './components/AddKilometers/AddKilometers'

function App() {
  const [totalFootprint, setTotalFootprint] = useState(0)

  useEffect(() => {
    const lastSavedCarbonFootprint = JSON.parse(
      localStorage.getItem('Carbon Footprint')
    )
    setTotalFootprint(lastSavedCarbonFootprint)
  }, [])
  useEffect(() => {
    localStorage.setItem('Carbon Footprint', JSON.stringify(totalFootprint))
  }, [totalFootprint])

  return (
    <div className="App">
      <SumCarbonFootPrint totalFootprint={totalFootprint}></SumCarbonFootPrint>
      <AddKilometers
        updateCarbonFootprint={updateCarbonFootprint}
      ></AddKilometers>
    </div>
  )
  function updateCarbonFootprint(value) {
    setTotalFootprint(value)
  }
}

export default App
