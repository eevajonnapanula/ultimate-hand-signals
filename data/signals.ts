import { Language } from "./translations"

type Translation = {
  name: string
  description: string
}

export type Signal = {
  slug: string
  image: string
  translations: Record<Language, Translation>
}

const signals: Array<Signal> = [
  {
    slug: "foul",
    image: "https://placekitten.com/360/440",
    translations: {
      fi: { name: "Virhe", description: "" },
      en: {
        name: "Foul",
        description:
          "Hold one arm straight out and chop the other forearm across the straight arm",
      },
    },
  },
  {
    slug: "violation",
    image: "https://placekitten.com/360/440",
    translations: {
      fi: { name: "", description: "" },
      en: {
        name: "Violation",
        description: "Hands above head forming a V, closed fists",
      },
    },
  },
  {
    slug: "goal",
    image: "https://placekitten.com/360/440",
    translations: {
      fi: { name: "", description: "" },
      en: {
        name: "Goal",
        description:
          "Raise both arms, fully extended, straight up, palms facing inwards",
      },
    },
  },
  {
    slug: "uncontest",
    image: "https://placekitten.com/360/440",
    translations: {
      fi: { name: "", description: "" },
      en: {
        name: "Contest",
        description:
          "Two fists bumped together in front of chest, back of hands facing outward",
      },
    },
  },
  {
    slug: "uncontested",
    image: "https://placekitten.com/360/440",
    translations: {
      fi: { name: "", description: "" },
      en: {
        name: "Uncontested",
        description:
          "Forearms extended in front of body, elbows tight against torso with palms facing upwards",
      },
    },
  },
  {
    slug: "retracted-play-on",
    image: "https://placekitten.com/360/440",
    translations: {
      fi: { name: "", description: "" },
      en: {
        name: "Retracted / Play on",
        description:
          "Sweeping crossover motion with both arms extended down in front of body",
      },
    },
  },
  {
    slug: "in-out-of-bounds",
    image: "https://placekitten.com/360/440",
    translations: {
      fi: { name: "", description: "" },
      en: {
        name: "In / Out-of-bounds – Out of end zone",
        description:
          "Point with one arm extended, flat palm, thumb parallel to fingers, towards playing field (in) or away from playing field (out)",
      },
    },
  },
  {
    slug: "disc-down",
    image: "https://placekitten.com/360/440",
    translations: {
      fi: { name: "", description: "" },
      en: {
        name: "Disc down",
        description: "Index finger straight arm pointing down at 45 degree",
      },
    },
  },
  {
    slug: "disc-up",
    image: "https://placekitten.com/360/440",
    translations: {
      fi: { name: "", description: "" },
      en: {
        name: "Disc up",
        description: "Elbow down forearm vertical index finger pointing upward",
      },
    },
  },
  {
    slug: "pick",
    image: "https://placekitten.com/360/440",
    translations: {
      fi: { name: "", description: "" },
      en: {
        name: "Pick",
        description: "Arms raised, elbows bent, fists facing head",
      },
    },
  },
  {
    slug: "travel",
    image: "https://placekitten.com/360/440",
    translations: {
      fi: { name: "", description: "" },
      en: {
        name: "Travel",
        description: "Closed fists, rotate wrists around in a vertical circle",
      },
    },
  },
]

export default signals
