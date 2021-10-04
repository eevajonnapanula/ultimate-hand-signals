import { useTranslations } from '../../hooks/useTranslations'

const Footer = (): JSX.Element => {
  const translations = useTranslations()

  return <footer>{translations.footer}</footer>
}

export default Footer
