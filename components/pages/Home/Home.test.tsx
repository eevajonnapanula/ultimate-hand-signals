import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import Home from './Home'

describe('Home', () => {
  it('renders', () => {
    render(<Home />)

    expect(screen.getByText('Work in Progress')).toBeInTheDocument()
  })

  it('does not have accessibility violations', async () => {
    const { container } = render(<Home />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
