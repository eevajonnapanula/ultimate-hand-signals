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
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
        <button onClick={changeLanguage}>Change Lang</button>
      </header>
      <main>{children}</main>
      <footer>
        <p>
          Created with lots of 💖 and ☕️ by{" "}
          <a href="https://eevis.codes">Eevis</a>.
        </p>
      </footer>
    </>
  )
}

export default Layout
