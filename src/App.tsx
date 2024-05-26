import React, { useEffect } from 'react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import { ThemeToggle } from './components/ThemeToggle'
import './styles/theme.scss'

const App: React.FC = () => {
  const { theme } = useTheme()

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <div>
      <h1>Welcome to the Dark Mode App</h1> 
      <ThemeToggle />
    </div>
  )
}

const WrapperApp: React.FC = () => (
<ThemeProvider>
  <App />
</ThemeProvider>
)

export default WrapperApp;
