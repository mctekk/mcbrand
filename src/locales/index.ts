import { I18n } from "i18n-js";

import en from './lang/en.json';

const translates = {
  en,
};

const i18n = new I18n(translates);

i18n.defaultLocale = "en";
i18n.locale = "en";

export function translate(key: string, interpolate?: any): string {
  return i18n.t(key, interpolate);
}