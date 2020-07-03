import React, { useState } from 'react'
import SumCarbonFootPrint from './components/SumCarbonFootprint'
import AddKilometers from './components/AddKilometers'

function App() {
  const [totalFootprint, setTotalFootprint] = useState(0)
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
