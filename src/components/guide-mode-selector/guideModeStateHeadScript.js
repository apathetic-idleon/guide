// Inspired by Apathetic Tools · MIT
// https://github.com/apathetic-tools/snippets/blob/main/docs/astro-starlight/sidebar-toggle

/* global document:readonly, sessionStorage:readonly, console:readonly */
(function () {
		let savedGuideMode = null;
    try {
			savedGuideMode = sessionStorage.getItem("guideMode");
    } catch (e) {
        // Fail silently if sessionStorage is not available (e.g., privacy mode)
        console.warn("Guide mode state could not be read from sessionStorage:", e);
    }
		if (!savedGuideMode) savedGuideMode = "hint";
		document.documentElement.classList.add(`guide-mode-state-${savedGuideMode}`);
})();
