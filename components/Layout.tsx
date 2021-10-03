import { useContext } from "react"
import translations from "../data/translations"
import { LanguageContext } from "../pages/_app"

const Layout = ({ children }) => {
  const { changeLanguage } = useContext(LanguageContext)

  return (
    <>
      <header>
        <h1>{translations.fi.siteHeading}</h1>
        <nav>
          <ul className="nav-list">
            <li>
              <a href="/signals">{translations.fi.handSignals}</a>
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
