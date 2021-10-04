import { useContext } from 'react'
import Link from 'next/link'
import { useTranslations } from '../hooks/useTranslations'
import { LanguageContext } from '../pages/_app'

interface LayoutProps {
  children: JSX.Element | Array<JSX.Element>
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { changeLanguage } = useContext(LanguageContext)
  const translations = useTranslations()
  return (
    <>
      <header>
        <h1>{translations.siteHeading}</h1>
        <nav>
          <ul className="nav-list">
            <li>
              <Link href="/signals">{translations.handSignals}</Link>
            </li>
            <li>
              <Link href="/about">{translations.about}</Link>
            </li>
          </ul>
        </nav>
        <button onClick={changeLanguage}>Change Lang</button>
      </header>
      <main>{children}</main>
      <footer>{translations.footer}</footer>
    </>
  )
}

export default Layout
