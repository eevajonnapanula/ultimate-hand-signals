import { useTranslations } from '../../../hooks/useTranslations'

const About = (): JSX.Element => {
  const translations = useTranslations()
  return <>{translations.aboutPage}</>
}

export default About
