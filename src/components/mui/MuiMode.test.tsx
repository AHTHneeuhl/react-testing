import { render, screen } from '@testing-library/react'
import MuiMode from './MuiMode'

describe('MuiMode', () => {
  test('renders text correctly', () => {
    render(<MuiMode />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('light mode')
  })
})
