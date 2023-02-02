import { render, screen } from '@testing-library/react'
import Greet from './Greet'

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
  })
})

describe('Nested', () => {
  test('renders with name', () => {
    render(<Greet name="Arya" />)
    const textElement = screen.getByText('Hello Arya')
    expect(textElement).toBeInTheDocument()
  })
})
