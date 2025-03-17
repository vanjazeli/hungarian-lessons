import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    navigation: {
      back: "Back.",
      theme: "Toggle between dark and light mode.",
      language: "Language selector.",
      confirmationDialog: {
        title: "Are you sure you want to exit?",
        description: "Your current progress will be lost if you proceed.",
        cancel: "Cancel",
        confirm: "Exit",
      },
    },
    mainMenu: {
      badge: "Main menu",
      title: "Let's improve your Hungarian skills together!",
      description:
        "Take part in interactive practice sessions designed to help you improve your Hungarian skills through a variety of exercises and challenges.",
      accusative: "Accusative",
    },
    accusative: {
      badge: "Challenge",
      title: "Accusative",
      description:
        "For each word presented, input the correct Hungarian accusative form into the field using the appropriate suffix: -t, -ot, -et, -öt, or -at.",
      sourcesTitle: "Sources:",
      listTitle: "Examples:",
      button: "Start",
      challenge: {
        placeholder: "Your answer...",
        next: "Next",
        finish: "Finish",
      },
      scoreboard: {
        title: "Score:",
        repeat: "Repeat",
        description:
          "Not satisfied with your score? No worries, champions are made through practice. Hit that retry button and prove yourself!",
        tableSummary: "Challenge score summary",
        noun: "Noun",
        translation: "Translation",
        userAnswer: "Your answer",
        correctAnswer: "Correct answer",
        link: "Main menu",
      },
    },
  },
  hu: {
    navigation: {
      back: "Vissza.",
      theme: "Váltás sötét és világos mód között.",
      language: "Nyelvválasztó.",
      confirmationDialog: {
        title: "Biztosan ki akar lépni?",
        description: "A jelenlegi előrehaladása el fog veszni, ha folytatja.",
        cancel: "Mégse",
        confirm: "Kilépés",
      },
    },
    mainMenu: {
      badge: "Főmenü",
      title: "Fejlesszük együtt a magyar nyelvtudásodat!",
      description:
        "Vegyen részt interaktív gyakorlatokon, amelyek célja, hogy különféle gyakorlatokon és kihívásokon keresztül segítsenek fejleszteni magyar nyelvtudását.",
      accusative: "Tárgyeset",
    },
    accusative: {
      badge: "Kihívás",
      title: "Tárgyeset",
      description:
        "Minden bemutatott szó esetén írja be a mezőbe a helyes magyar accusative formáját a megfelelő képzők használatával: -t, -ot, -et, -öt, vagy -at.",
      sourcesTitle: "Források:",
      listTitle: "Példák:",
      button: "Indítás",
      challenge: {
        placeholder: "Válasza...",
        next: "Tovább",
        finish: "Kész",
      },
      scoreboard: {
        title: "Pontszám:",
        repeat: "Újra",
        description:
          "Nem elégedett a pontszámával? Semmi gond, a bajnokok gyakorlással születnek—nyomja meg az újrapróbálás gombot, és mutassa meg, mire képes!",
        tableSummary: "Kihívás pontszámának összegzése",
        noun: "Főnév",
        translation: "Fordítás",
        userAnswer: "A válasza",
        correctAnswer: "Helyes válasz",
        link: "Főmenü",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
