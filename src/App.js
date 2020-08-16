import React, { useEffect, useState, useReducer } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import * as ROUTES from '../src/constants/routes'
import firebaseApp from '../src/firebase'
import AuthUserContext from './components/auth/AuthUserContext'
import useAuth from './components/auth/useAuth'
import GlobaleStyles from './components/GlobalStyles'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import { darkTheme, lightTheme } from './components/Themes'
import FootprintHistoryPage from './pages/FootprintHistoryPage/FootprintHistoryPage'
import HomePage from './pages/HomePage/HomePage'
import ResetPasswordPage from './pages/PasswordReset/PasswordReset'
import ProfilePage from './pages/Profile/Profile'
import SignInPage from './pages/SignIn/SignIn'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import WelcomePage from './pages/Welcome/Welcome'
import { calculateFootprintPerTransportionType } from './services/calculateFootprintPerTransportationType'
import { calculateTotalFootprintSum } from './services/calculateTotalFootprintSum'
import { getFromStorage, saveToStorage } from './services/handleStorage'
import { APP_STORAGE_KEYS } from './services/storageKeys'
import useDarkMode from './services/useDarkMode'
import footprintReducer from './states/footprintReducer'
import { ACTIONS } from './states/actions'

export default function App() {
  const [user, authCompleted] = useAuth()
  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

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

  const initialState = {
    carbonFootprint: 0,
    /*   totalCarbonFootprint: 0,
    footprintPerTransportType: [], */
  }

  const [state, dispatch] = useReducer(footprintReducer, initialState)

  useEffect(() => {
    if (user) {
      updateStateFromDB(user.uid, APP_STORAGE_KEYS.footprintHistory)
      updateStateFromDB(user.uid, APP_STORAGE_KEYS.footprintTotal)
      updateStateFromDB(user.uid, APP_STORAGE_KEYS.footprintPerTransportType)
    }
  }, [user])

  useEffect(() => {
    if (user) {
      saveToStorage(
        user.uid,
        APP_STORAGE_KEYS.footprintHistory,
        carbonFootprint
      )

      saveToStorage(
        user.uid,
        APP_STORAGE_KEYS.footprintTotal,
        totalCarbonFootprint
      )

      saveToStorage(
        user.uid,
        APP_STORAGE_KEYS.footprintPerTransportType,
        footprintPerTransportationType
      )
    }
    setTotalCarbonFootprint(calculateTotalFootprintSum(carbonFootprint))
  }, [
    carbonFootprint,
    totalCarbonFootprint,
    footprintPerTransportationType,
    user,
  ])

  if (!authCompleted) {
    return <LoadingScreen />
  }
  if (!componentMounted) return <div />

  return (
    <ThemeProvider theme={themeMode}>
      <AuthUserContext.Provider value={{ user, firebaseApp }}>
        <main>
          <GlobaleStyles />
          <ToastContainer autoClose={6000} draggablePercent={60} />

          <Switch>
            <Route exact path={ROUTES.WELCOME}>
              <WelcomePage />
            </Route>
            <Route path={ROUTES.HOME}>
              <HomePage
                initialFootprintValue={initialFootprintValue}
                totalCarbonFootprint={totalCarbonFootprint || 0}
                updateCarbonFootprint={updateCarbonFootprint}
                updateFootprintPerTransportationType={
                  updateFootprintPerTransportationType
                }
                toggleTheme={toggleTheme}
                theme={theme}
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
    </ThemeProvider>
  )
  function updateCarbonFootprint(value) {
    dispatch({ type: ACTIONS.UPDATE_FOOTPRINT })
    setCarbonFootprint([...carbonFootprint, value])
  }
  function updateFootprintPerTransportationType(
    transportationTypeToUpdate,
    footprintSum
  ) {
    setFootprintPerTransportationType(
      calculateFootprintPerTransportionType(footprintPerTransportationType, {
        transportationTypeToUpdate,
        footprintSum,
      })
    )
  }

  async function updateStateFromDB(userId, key) {
    const dataFromDB = await getFromStorage(userId, key)
    if (!dataFromDB) {
      return
    }

    if (key === APP_STORAGE_KEYS.footprintHistory) {
      setCarbonFootprint(dataFromDB)
    }
    if (key === APP_STORAGE_KEYS.totalCarbonFootprint) {
      setTotalCarbonFootprint(dataFromDB)
    }
    if (key === APP_STORAGE_KEYS.footprintPerTransportType) {
      setFootprintPerTransportationType(dataFromDB)
    }
  }
}
