import Seo from '../components/Layout/Seo'
import { useTranslations } from '../hooks/useTranslations'
import { NextPage } from 'next'
import Signals from '../components/pages/Signals/Signals'
import Layout from '../components/Layout/Layout'

const SignalsPage: NextPage = () => {
  const translations = useTranslations()

  return (
    <Layout title={translations.handSignals}>
      <Signals />
    </Layout>
  )
}

export default SignalsPage
