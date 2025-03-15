import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    mainMenu: {
      badge: "Main Menu",
      title: "Let's improve your Hungarian skills together!",
      description:
        "Take part in interactive practice sessions designed to help you improve your Hungarian skills through a variety of exercises and challenges.",
      accusative: "Accusative",
    },
    accusative: {
      badge: "Challenge",
      title: "Accusative",
      description:
        "Use -t, -ot, -et, -öt, -at suffixes to form the correct accusative form of a Hungarian word.",
      listTitle: "Examples:",
      button: "Start the challenge",
    },
  },
  hu: {
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
        "Használja a -t, -ot, -et, -öt, -at ragokat a magyar szó helyes tárgyeseti formájának kialakításához.",
      listTitle: "Példák:",
      button: "Kihívás indítása",
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
