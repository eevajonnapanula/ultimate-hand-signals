import SignalPage from "./[slug]"

import signals from "../data/signals"
import translations from "../data/translations"
import Seo from "../components/Seo"

const Signals = () => {
  return (
    <>
      <Seo title="Käsimerkit" />
      <section className="signals-list">
        <h2>{translations.fi.handSignals}</h2>
        <ul>
          {signals.map((signal) => (
            <li key={signal.slug} className="signals-list-item">
              <a href={`/${signal.slug}`}>{signal.translations.en.name}</a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Signals
