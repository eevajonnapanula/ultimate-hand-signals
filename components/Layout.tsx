import { useContext } from "react"
import { useTranslations } from "../hooks/useTranslations"
import { LanguageContext } from "../pages/_app"

const Layout = ({ children }) => {
  const { changeLanguage } = useContext(LanguageContext)
  const translations = useTranslations()
  return (
    <>
      <header>
        <h1>{translations.siteHeading}</h1>
        <nav>
          <ul className="nav-list">
            <li>
              <a href="/signals">{translations.handSignals}</a>
            </li>
            <li>
              <a href="/about">{translations.about}</a>
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
