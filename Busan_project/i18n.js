import i18n from "i18n-js";
import * as Localization from 'expo-localization';

//다국어
i18n.translations = require('./src/lang/config.json');
i18n.locale = 'ko';
i18n.fallbacks = true;

export default i18n;
