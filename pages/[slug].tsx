import { GetServerSideProps, NextPage } from 'next'
import { useContext } from 'react'
import Signal from '../components/pages/Signal/Signal'
import signals, { Signal as SignalType } from '../data/signals'
import { LanguageContext } from '../utils/languageContext'
import Layout from '../components/Layout/Layout'

interface SignalProps {
  signal: SignalType
}

const SignalPage: NextPage<SignalProps> = ({ signal }) => {
  const { language } = useContext(LanguageContext)

  return (
    <Layout title={signal.translations[language].name}>
      <Signal signal={signal} />
    </Layout>
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
