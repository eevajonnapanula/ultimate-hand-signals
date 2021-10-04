import { GetServerSideProps, NextPage } from 'next'
import { useContext } from 'react'
import Signal from '../components/pages/Signal/Signal'
import Seo from '../components/Seo'
import signals, { Signal as SignalType } from '../data/signals'
import { LanguageContext } from '../utils/languageContext'

interface SignalProps {
  signal: SignalType
}

const SignalPage: NextPage<SignalProps> = ({ signal }) => {
  const { language } = useContext(LanguageContext)

  return (
    <>
      <Seo title={signal.translations[language].name} />
      <Signal signal={signal} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { slug } = context.params

  const signal = signals.find(item => item.slug === slug)
  return {
    props: {
      signal: signal ?? null
    }
  }
}

export default SignalPage
