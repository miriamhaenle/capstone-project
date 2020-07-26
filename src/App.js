import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import * as ROUTES from '../src/constants/routes'
import useAuth from './components/auth/useAuth'
import { calculateFootprintPerTransportionType } from './components/utils/calculateFootprintPerTransportationType'
import { calculateTotalFootprintSum } from './components/utils/calculateTotalFootprintSum'
import { getFromStorage, saveToStorage } from './components/utils/handleStorage'
import { APP_STORAGE_KEYS } from './components/utils/storageKeys'
import FootprintHistoryPage from './pages/FootprintHistoryPage/FootprintHistoryPage'
import HomePage from './pages/HomePage/HomePage'
import SignInPage from './pages/SignIn/SignIn'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import WelcomePage from './pages/Welcome/Welcome'
import ProfilePage from './pages/Profile/Profile'
import AuthUserContext from './components/auth/AuthUserContext'
import firebaseApp from '../src/firebase'
import ResetPasswordPage from './pages/PasswordReset/PasswordReset'
import styled from 'styled-components'

export default function App() {
  const [user, authCompleted] = useAuth()

  const initialFootprintValue = 0
  const [carbonFootprint, setCarbonFootprint] = useState([
    initialFootprintValue,
  ])
  const [totalCarbonFootprint, setTotalCarbonFootprint] = useState(
    initialFootprintValue
  )
  const [
    footprintPerTransportationType,
    setFootprintPerTransportationType,
  ] = useState([])

  useEffect(() => {
    const historicCarbonFootprint = getFromStorage(
      APP_STORAGE_KEYS.footprintHistory
    )

    historicCarbonFootprint && setCarbonFootprint(historicCarbonFootprint)

    const historicTotalCarbonFootprint = getFromStorage(
      APP_STORAGE_KEYS.footprintTotal
    )

    const historyFootprintPerTransportationType = getFromStorage(
      APP_STORAGE_KEYS.footprintPerTransportType
    )

    setTotalCarbonFootprint(historicTotalCarbonFootprint)
    setFootprintPerTransportationType(
      historyFootprintPerTransportationType || []
    )
  }, [])

  useEffect(() => {
    saveToStorage(APP_STORAGE_KEYS.footprintHistory, carbonFootprint)
    setTotalCarbonFootprint(calculateTotalFootprintSum(carbonFootprint))

    saveToStorage(APP_STORAGE_KEYS.footprintTotal, totalCarbonFootprint)

    saveToStorage(
      APP_STORAGE_KEYS.footprintPerTransportType,
      footprintPerTransportationType
    )
  }, [carbonFootprint, totalCarbonFootprint, footprintPerTransportationType])

  if (!authCompleted) {
    return <LoadingScreen>...Loading</LoadingScreen>
  }

  return (
    <AuthUserContext.Provider value={{ user, firebaseApp }}>
      <main>
        <ToastContainer autoClose={6000} draggablePercent={60} />

        <Switch>
          <Route exact path={ROUTES.WELCOME}>
            <WelcomePage />
          </Route>
          <Route path={ROUTES.HOME}>
            <HomePage
              totalCarbonFootprint={totalCarbonFootprint}
              updateCarbonFootprint={updateCarbonFootprint}
              updateFootprintPerTransportationType={
                updateFootprintPerTransportationType
              }
              user={user}
            />
          </Route>
          <Route path={ROUTES.FOOTPRINT_HISTORY}>
            <FootprintHistoryPage
              footprintPerTransportationType={footprintPerTransportationType}
            />
          </Route>
          <Route path={ROUTES.SIGN_UP}>
            <SignUpPage />
          </Route>
          <Route path={ROUTES.SIGN_IN}>
            <SignInPage />
          </Route>
          <Route path={ROUTES.PROFILE}>
            <ProfilePage />
          </Route>
          <Route path={ROUTES.PASSWORD_FORGET}>
            <ResetPasswordPage />
          </Route>
        </Switch>
      </main>
    </AuthUserContext.Provider>
  )
  function updateCarbonFootprint(value) {
    setCarbonFootprint([...carbonFootprint, value])
  }
  function updateFootprintPerTransportationType(type, sum) {
    setFootprintPerTransportationType(
      calculateFootprintPerTransportionType(footprintPerTransportationType, {
        type,
        sum,
      })
    )
  }
}

const LoadingScreen = styled.div`
  color: var(--sand);
  padding: 30px;
`
