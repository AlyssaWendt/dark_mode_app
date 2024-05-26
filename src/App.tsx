import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext'

const App: React.FC = () => {
  const { theme } = useTheme()

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <div>
      <h1>Welcome to the Dark Mode App</h1> 
    </div>
  )
}

const WrapperApp: React.FC = () => (
<ThemeProvider>
  <App />
</ThemeProvider>
)

export default WrapperApp;
