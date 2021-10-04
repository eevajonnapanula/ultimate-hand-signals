import Seo from '../components/Seo'
import { useTranslations } from '../hooks/useTranslations'
import { NextPage } from 'next'
import Signals from '../components/pages/Signals/Signals'

const SignalsPage: NextPage = () => {
  const translations = useTranslations()

  return (
    <>
      <Seo title={translations.handSignals} />
      <Signals />
    </>
  )
}

export default SignalsPage
