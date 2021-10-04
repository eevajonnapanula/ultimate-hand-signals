import { NextPage } from 'next'
import About from '../components/pages/About/About'
import Seo from '../components/Seo'
import { useTranslations } from '../hooks/useTranslations'

const AboutPage: NextPage = () => {
  const translations = useTranslations()
  return (
    <>
      <Seo title={translations.about} />
      <About />
    </>
  )
}

export default AboutPage
