// Ref: https://starlight.astro.build/reference/configuration/#defaultlocale
export const defaultLocale = "root";

// List of languages for which we have UI translations for,
// you should probably only support languages your content
// is translated in.

// When deciding what languages you want to translate in,
// consider who your target audience is, and what they can read.
// Ref: https://starlight.astro.build/reference/configuration/#locales
export const locales = {
	/// The following languages have Starlight UI translations
	/// See the following for an updated list of supported languages:
	/// https://starlight.astro.build/guides/i18n/#translate-starlights-ui
	root: { label: "English", lang: "en" }, // English
	// ar: { label: 'اَلْعَرَبِيَّةُ', lang: 'ar', dir: 'rtl' },         // Arabic
	// cs: { label: 'čeština', lang: 'cs' },                     // Czech
	// da: { label: 'Dansk', lang: 'da' },                       // Danish (Denmark)
	// de: { label: 'Deutsch', lang: 'de' },                     // German
	// es: { label: 'Español', lang: 'es' },                     // Spanish
	// fa: { label: 'فارسی', lang: 'fa', dir: 'rtl' },           // Persian
	// fr: { label: 'Français', lang: 'fr' },                    // French
	// gl: { label: 'Galego', lang: 'gl' },                      // Galician (Spain)
	// he: { label: 'עִבְרִית', lang: 'he', dir: 'rtl' },           // Hebrew (Israel, ...)
	// hi: { label: 'हिंदी', lang: 'hi' },                          // Hindi (India)
	// id: { label: 'Bahasa Indonesia', lang: 'id' },            // Indonesian
	// it: { label: 'Italiano', lang: 'it' },                    // Italian
	// ja: { label: '日本語', lang: 'ja' },                      // Japanese (Japan)
	// ko: { label: '한국어', lang: 'ko' },                      // Korean (Korea)
	// nb: { label: 'Bokmål', lang: 'nb' },                      // Norwegian Bokmål (Norway)
	// nl: { label: 'Nederlands', lang: 'nl' },                  // Dutch
	// pl: { label: 'Polski', lang: 'pl' },                      // Polish (Poland)
	// // pt                                                     // Portuguese
	// 'pt-br': { label: 'Português do Brasil', lang: 'pt-BR' }, // Portuguese (Brazilian)
	// 'pt-pt': { label: 'Português', lang: 'pt-PT' },           // Portuguese (Portugal)
	// ro: { label: 'Limba română', lang: 'ro' },                // Romanian (Romania)
	// ru: { label: 'Русский', lang: 'ru' },                     // Russian (...former Soviet Union)
	// sk: { label: 'Slovenčina', lang: 'sk' },                  // Slovak (...Central Europe)
	// sv: { label: 'Svenska', lang: 'sv' },                     // Swedish (Sweden)
	// tr: { label: 'Türkçe', lang: 'tr' },                      // Turkish (Turkey)
	// uk: { label: 'Українська', lang: 'uk' },                  // Ukrainian (Ukrane)
	// vi: { label: 'tiếng Việt', lang: 'vi' },                  // Vietnamese (Vietnam)
	// // zh                                                     // Chinese
	// 'zh-cn': { label: '简体中文', lang: 'zh-CN' },            // Chinese (China)
	// 'zh-tw': { label: '中華民國國語', lang: 'zh-TW' },        // Chinese (Taiwan)
};

// the url slug for the automatic translation status
export const lunariaSlug = "translation-status";

// we sometimes need the actual defaultLocale, not 'root'
let calcActualDefaultLocale = defaultLocale;
if (calcActualDefaultLocale === "root") {
	calcActualDefaultLocale = locales[calcActualDefaultLocale].lang;
}
export const actualDefaultLocale = calcActualDefaultLocale;
