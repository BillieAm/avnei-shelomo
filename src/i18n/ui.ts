import LogoAvneiEn from "../assets/logo/avnei-shelomo_en.webp";
import LogoAvneiHe from "../assets/logo/avnei-shelomo_he.webp";
import LogoChasadaiEn from "../assets/logo/chasadai-gavriel_en.webp";
import LogoChasadaiHe from "../assets/logo/chasadai-gavriel_he.webp";

export const languages = {
  he: "עברית",
  en: "EN"
};

export const defaultLang = "he";
export const showDefaultLang = false;

export const ui = {
  he: {
    "nav.home": "בית",
    "nav.about": "אודות",
    "nav.lessons": "שיעורים",
    "nav.gallery": "גלריה",
    "nav.donate": "תרומות",
    "header.contact": "צור קשר",
    "header.LogoAvnei": LogoAvneiHe,
    "header.LogoChasadai": LogoChasadaiHe
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.lessons": "Lessons",
    "nav.gallery": "Gallery",
    "nav.donate": "Donate",
    "header.contact": "Contact",
    "header.LogoAvnei": LogoAvneiEn,
    "header.LogoChasadai": LogoChasadaiEn
  }
} as const;
