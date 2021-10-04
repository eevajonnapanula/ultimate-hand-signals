import { useContext } from 'react'
import translations, { Translations as TranslationsType } from '../data/translations'
import { LanguageContext } from '../pages/_app'

export const useTranslations = (): TranslationsType => {
  const { language } = useContext(LanguageContext)

  return translations[language]
}
