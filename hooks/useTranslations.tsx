import { useContext } from "react"
import translations from "../data/translations"
import { LanguageContext } from "../pages/_app"

export const useTranslations = () => {
  const { language } = useContext(LanguageContext)

  return translations[language]
}
