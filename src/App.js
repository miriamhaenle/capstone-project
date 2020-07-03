import React from 'react'
import SumCarbonFootPrint from './components/SumCarbonFootprint'
import AddKilometers from './components/AddKilometers'
function App() {
  return (
    <div className="App">
      <SumCarbonFootPrint totalFootprint="1234"></SumCarbonFootPrint>
      <AddKilometers disabled></AddKilometers>
    </div>
  )
}

export default App
