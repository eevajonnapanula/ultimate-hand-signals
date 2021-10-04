import { NextPage } from 'next'
import About from '../components/pages/About/About'
import Seo from '../components/Layout/Seo'
import { useTranslations } from '../hooks/useTranslations'
import Layout from '../components/Layout/Layout'

const AboutPage: NextPage = () => {
  const translations = useTranslations()
  return (
    <Layout title={translations.about}>
      <About />
    </Layout>
  )
}

export default AboutPage
