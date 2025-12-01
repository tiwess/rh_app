import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import de from "./de/de.json";
import en from "./en/en.json";
import commonEN from "./en/en.json";
import commonDE from "./de/de.json";

const resources = {
	en: {
		translation: en,
		common: commonEN,
	},
	de: {
		translation: de,
		common: commonDE,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "de",
	interpolation: {
		escapeValue: false,
	},
	returnNull: true,
});

export default i18n;
