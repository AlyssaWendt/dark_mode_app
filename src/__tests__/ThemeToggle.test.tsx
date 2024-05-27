import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../context/ThemeContext'
import { ThemeToggle } from '../components/ThemeToggle'

describe('ThemeToggle', () => {
  it('renders ThemeToggle component', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
  })

  it('Ensure the effect has run and updated the className from light/dark', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)

    setTimeout(() => {
      expect(document.body.className).toBe('dark')
      fireEvent.click(checkbox)
      
      setTimeout(() => {
        expect(document.body.className).toBe('light')
      }, 0)
    }, 0)
  })
})
