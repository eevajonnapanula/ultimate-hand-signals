import { fireEvent, render, screen } from '@testing-library/react'
import { LanguageWrapper } from '../../test-utils/utils'
import Header from './Header'

describe('Header', () => {
  it('renders', () => {
    render(
      <LanguageWrapper>
        <Header />
      </LanguageWrapper>
    )

    expect(screen.getByText('Ultimaten käsimerkit')).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('toggles the language', () => {
    const changeLang = jest.fn()

    render(
      <LanguageWrapper changeLanguage={changeLang}>
        <Header />
      </LanguageWrapper>
    )

    const button = screen.getByText('Change Lang')

    fireEvent.click(button)

    expect(changeLang).toBeCalled()
    fireEvent.click(button)
    expect(changeLang).toBeCalledTimes(2)
  })
})
