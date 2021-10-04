export type Language = 'fi' | 'en'
type TranslationKeys = 'siteHeading' | 'handSignals' | 'description' | 'about' | 'footer' | 'aboutPage'
export type Translations = Record<TranslationKeys, string | JSX.Element>

const translations: Record<Language, Translations> = {
  fi: {
    siteHeading: 'Ultimaten käsimerkit',
    handSignals: 'Käsimerkit',
    description: 'Kuvaus',
    about: 'Tietoja',
    footer: (
      <p>
        Tämän sivun on tehnyt <a href="https://eevis.codes">Eevis</a>, ja tekemiseen on käytetty paljon{' '}
        <span role="img" aria-label="rakkautta">
          💖
        </span>{' '}
        sekä{' '}
        <span role="img" aria-label="kahvia">
          ☕️
        </span>{' '}
        .
      </p>
    ),
    aboutPage: (
      <section>
        <h1>Tietoja sivustosta</h1>
        <p>Tämä sivusto on tehty helpottamaan ultimaten käsimerkkien opettelua.</p>
        <h2>Teknologioista ja kuinka voin osallistua</h2>
        <h2>Tekijä sivuston taustalla</h2>
      </section>
    )
  },
  en: {
    siteHeading: 'Ultimate Hand Signals',
    handSignals: 'Hand Signals',
    description: 'Description',
    about: 'About',
    footer: (
      <p>
        Created with lots of{' '}
        <span role="img" aria-label="love">
          💖
        </span>{' '}
        and{' '}
        <span role="img" aria-label="coffee">
          ☕️
        </span>{' '}
        by <a href="https://eevis.codes">Eevis</a>.
      </p>
    ),
    aboutPage: (
      <section>
        <h1>About this site</h1>
        <p>This site was created in order to make learning hand signals for ultimate frisbee easier.</p>
        <h2>Something about the tech, credits?</h2>
        <h2>About the developer</h2>
      </section>
    )
  }
}
export default translations
