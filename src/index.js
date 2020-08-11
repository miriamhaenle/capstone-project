import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyles from '../src/components/GlobalStyles'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
