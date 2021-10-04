import { useContext } from 'react'
import Link from 'next/link'
import { useTranslations } from '../../hooks/useTranslations'
import { LanguageContext } from '../../utils/languageContext'

const Header = (): JSX.Element => {
  const { changeLanguage } = useContext(LanguageContext)
  const translations = useTranslations()
  return (
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
  )
}

export default Header
