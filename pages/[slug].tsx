import { NextPage } from "next"
import Seo from "../components/Seo"
import signals, { Signal } from "../data/signals"
import translations from "../data/translations"

interface SignalProps {
  signal: Signal
}

const SignalPage: NextPage<SignalProps> = ({ signal }) => {
  if (!signal) {
    return <section>No signal on that name</section>
  }
  return (
    <>
      <Seo title={signal.translations.en.name} />
      <section className="signal-details">
        <h2>{signal && signal?.translations?.en.name}</h2>
        <img src={signal.image} alt="" />
        <h3>{translations.fi.description}</h3>
        <p>{signal.translations.en.description}</p>
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
