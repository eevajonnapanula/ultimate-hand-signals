import { createContext, useMemo, useState, SetStateAction } from "react"
import "../index.css"
import Layout from "../components/Layout"

export const LanguageContext = createContext({
  language: "fi",
  changeLanguage: undefined,
})

function MyApp({ Component, pageProps }) {
  const storedLanguage =
    typeof window !== "undefined" && window.localStorage.getItem("lang")
      ? window.localStorage.getItem("lang")
      : "fi" || "fi"
  const [language, setLanguage] = useState(storedLanguage)
  const changeLanguage = () => {
    const langToSet = language === "fi" ? "en" : "fi"
    window.localStorage.setItem("lang", langToSet)
    setLanguage(langToSet)
  }
  const value = useMemo(() => ({ language, changeLanguage }), [language])

  return (
    <LanguageContext.Provider value={value}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageContext.Provider>
  )
}

export default MyApp
