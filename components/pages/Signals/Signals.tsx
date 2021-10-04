import signals from '../../../data/signals'
import { useTranslations } from '../../../hooks/useTranslations'
import { useContext } from 'react'
import { LanguageContext } from '../../../utils/languageContext'

const Signals = (): JSX.Element => {
  const translations = useTranslations()
  const { language } = useContext(LanguageContext)

  return (
    <>
      <section className="signals-list">
        <h2>{translations.handSignals}</h2>
        <ul>
          {signals.map(signal => (
            <li key={signal.slug} className="signals-list-item">
              <a href={`/${signal.slug}`}>{signal.translations[language].name}</a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Signals