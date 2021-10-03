import translations from "../data/translations"

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>{translations.fi.siteHeading}</h1>
        <nav>
          <ul className="nav-list">
            <li>
              <a href="/signals">{translations.fi.handSignals}</a>
            </li>
            <li>Quiz</li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
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
