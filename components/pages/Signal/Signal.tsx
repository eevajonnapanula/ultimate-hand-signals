import Image from 'next/image'
import { useContext } from 'react'
import { Signal as SignalType } from '../../../data/signals'
import { useTranslations } from '../../../hooks/useTranslations'
import { LanguageContext } from '../../../utils/languageContext'

interface SignalProps {
  signal: SignalType
}

const Signal = ({ signal }: SignalProps): JSX.Element => {
  const translations = useTranslations()
  const { language } = useContext(LanguageContext)
  if (!signal) {
    return <section>No signal on that name</section>
  }

  return (
    <>
      <section className="signal-details">
        <h2>{signal && signal?.translations[language].name}</h2>
        <Image src={signal.image} alt="" />
        <h3>{translations.description}</h3>
        <p>{signal.translations[language].description}</p>
      </section>
    </>
  )
}

export default Signal
