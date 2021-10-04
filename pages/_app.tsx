import { createContext, useMemo, useState } from 'react'
import '../index.css'
import Layout from '../components/Layout'
import { AppComponent } from 'next/dist/shared/lib/router/router'

export const LanguageContext = createContext({
  language: 'fi',
  changeLanguage: undefined
})

const CustomApp: AppComponent = ({ Component, pageProps }) => {
  const storedLanguage = typeof window !== 'undefined' && window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'fi' || 'fi'
  const [language, setLanguage] = useState(storedLanguage)

  const value = useMemo(() => {
    const changeLanguage = () => {
      const langToSet = language === 'fi' ? 'en' : 'fi'
      window.localStorage.setItem('lang', langToSet)
      setLanguage(langToSet)
    }
    return { language, changeLanguage }
  }, [language])

  return (
    <LanguageContext.Provider value={value}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageContext.Provider>
  )
}

export default CustomApp
