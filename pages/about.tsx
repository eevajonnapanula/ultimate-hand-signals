import Seo from "../components/Seo"
import { useTranslations } from "../hooks/useTranslations"

const About = () => {
  const translations = useTranslations()
  return (
    <>
      <Seo title="About" />
      {translations.aboutPage}
    </>
  )
}

export default About
