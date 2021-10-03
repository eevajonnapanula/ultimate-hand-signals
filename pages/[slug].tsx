import { NextPage } from "next"
import { useContext } from "react"
import Seo from "../components/Seo"
import signals, { Signal } from "../data/signals"
import { useTranslations } from "../hooks/useTranslations"
import { LanguageContext } from "./_app"

interface SignalProps {
  signal: Signal
}

const SignalPage: NextPage<SignalProps> = ({ signal }) => {
  const translations = useTranslations()
  const { language } = useContext(LanguageContext)
  if (!signal) {
    return <section>No signal on that name</section>
  }

  return (
    <>
      <Seo title={signal.translations[language].name} />
      <section className="signal-details">
        <h2>{signal && signal?.translations[language].name}</h2>
        <img src={signal.image} alt="" />
        <h3>{translations.description}</h3>
        <p>{signal.translations[language].description}</p>
      </section>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const { slug } = context.params

  const signal = signals.find((item) => item.slug === slug)
  return {
    props: {
      signal: signal ?? null,
    },
  }
}

export default SignalPage
