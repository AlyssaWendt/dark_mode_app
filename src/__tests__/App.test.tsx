import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import WrapperApp from '../App'

test('renders Welcome to the Dark Mode App text', () => {
  render(<WrapperApp />)
  const headingElement = screen.getByText(/Welcome to the Dark Mode App/i)
  expect(headingElement).toBeInTheDocument()
})
