import React, { useEffect, useReducer } from 'react'
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
import { saveToStorage } from './services/handleStorage'
import { APP_STORAGE_KEYS } from './services/storageKeys'
import useDarkMode from './services/useDarkMode'
import { ACTIONS } from './states/actions'
import footprintReducer from './states/footprintReducer'
import updateStateFromDB from './services/updateStateFromDB'
import StateContext from './states/StateContext'

export default function App() {
  const [user, authCompleted] = useAuth()

  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  const initialFootprintValue = 0
  const initialState = {
    carbonFootprint: [],
    totalCarbonFootprint: [],
    footprintPerTransportationType: [],
  }
  const [
    { carbonFootprint, totalCarbonFootprint, footprintPerTransportationType },
    dispatch,
  ] = useReducer(footprintReducer, initialState)

  useEffect(() => {
    if (user) {
      updateStateFromDB(dispatch, user.uid, APP_STORAGE_KEYS.footprintTotal)
      updateStateFromDB(dispatch, user.uid, APP_STORAGE_KEYS.footprintHistory)
      updateStateFromDB(
        dispatch,
        user.uid,
        APP_STORAGE_KEYS.footprintPerTransportType
      )
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

    dispatch({
      type: ACTIONS.UPDATE_TOTAL_FOOTPRINT,
      payload: calculateTotalFootprintSum(carbonFootprint),
    })
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
    <StateContext.Provider
      value={{
        carbonFootprint,
        totalCarbonFootprint,
        footprintPerTransportationType,
      }}
    >
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
                  footprintPerTransportationType={
                    footprintPerTransportationType
                  }
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
    </StateContext.Provider>
  )

  function updateCarbonFootprint(value) {
    dispatch({ type: ACTIONS.UPDATE_FOOTPRINT, payload: value })
  }

  function updateFootprintPerTransportationType(
    transportationTypeToUpdate,
    footprintSum
  ) {
    dispatch({
      type: ACTIONS.UPDATE_PER_TRANSPORTATIONTYPE,
      payload: calculateFootprintPerTransportionType(
        footprintPerTransportationType,
        {
          transportationTypeToUpdate,
          footprintSum,
        }
      ),
    })
  }
}
