import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { LanguageWrapper } from '../../../utils/test-utils'
import About from './About'

describe('About', () => {
  it('renders', () => {
    render(
      <LanguageWrapper>
        <About />
      </LanguageWrapper>
    )

    expect(screen.getByText('Tietoja sivustosta')).toBeInTheDocument()
  })

  it('does not have accessibility violations', async () => {
    const { container } = render(
      <LanguageWrapper>
        <About />
      </LanguageWrapper>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
