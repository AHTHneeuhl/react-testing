import { render, screen } from '@testing-library/react'
import Greet from './Greet'

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText('Hello Guest')
    expect(textElement).toBeInTheDocument()
  })

  test('renders a name', () => {
    render(<Greet name="Arya" />)
    const textElement = screen.getByText('Hello Arya')
    expect(textElement).toBeInTheDocument()
  })
})
