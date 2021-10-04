import { NextPage } from 'next'
import Seo from '../components/Seo'
import { useTranslations } from '../hooks/useTranslations'

const About: NextPage = () => {
  const translations = useTranslations()
  return (
    <>
      <Seo title="About" />
      {translations.aboutPage}
    </>
  )
}

export default About
