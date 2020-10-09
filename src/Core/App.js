import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../styles/theme'
import '../styles/App.css'
import Routes from './Routes'
import NavBar from './NavBar'

const App = () => {
  return (
    <ThemeProvider theme={theme} className='App'>
      <NavBar />
      <Routes />
    </ThemeProvider>
  )
}

export default App
