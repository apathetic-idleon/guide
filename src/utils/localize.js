export function localize(text, currentLocale, actualDefaultLocale) {
	let finalText = text;
	if (typeof finalText === 'object' && !Array.isArray(finalText) && finalText !== null) {
		if (currentLocale && Object.hasOwn(finalText, currentLocale)) {
			finalText = finalText[currentLocale];
		} else if (actualDefaultLocale && Object.hasOwn(finalText, actualDefaultLocale)) {
			finalText = finalText[actualDefaultLocale];
		}
	}
	return finalText;
}
