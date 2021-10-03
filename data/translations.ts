export type Language = "fi" | "en"
type TranslationKeys = "siteHeading" | "handSignals" | "description"
type Translations = Record<TranslationKeys, string | (() => JSX.Element)>

const translations: Record<Language, Translations> = {
  fi: {
    siteHeading: "Ultimaten käsimerkit",
    handSignals: "Käsimerkit",
    description: "Kuvaus",
  },
  en: {
    siteHeading: "Ultimate Hand Signals",
    handSignals: "Hand Signals",
    description: "Description"
  },
}
export default translations
