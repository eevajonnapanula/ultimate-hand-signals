import { render, screen } from '@testing-library/react'
import { LanguageWrapper } from '../../test-utils/utils'
import Footer from './Footer'

describe('Footer', () => {
  it('renders', () => {
    render(
      <LanguageWrapper>
        <Footer />
      </LanguageWrapper>
    )

    expect(screen.getByText('Eevis')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
