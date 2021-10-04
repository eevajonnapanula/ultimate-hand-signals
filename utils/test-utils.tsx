import { LanguageContext } from './languageContext'

const changeLanguageFunction = jest.fn()
interface LanguageWrapperProps {
  children: JSX.Element | Array<JSX.Element>
  changeLanguage?: () => unknown
}

export const LanguageWrapper = ({ children, changeLanguage = changeLanguageFunction }: LanguageWrapperProps): JSX.Element => {
  return <LanguageContext.Provider value={{ language: 'fi', changeLanguage }}>{children}</LanguageContext.Provider>
}
