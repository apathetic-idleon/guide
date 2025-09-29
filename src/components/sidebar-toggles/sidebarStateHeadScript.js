// Inspired by Apathetic Tools · MIT
// https://github.com/apathetic-tools/snippets/blob/main/docs/astro-starlight/sidebar-toggle

/* global document:readonly, sessionStorage:readonly, console:readonly */
(function () {
    try {
			const savedLeftSidebar = sessionStorage.getItem("starlight-left-sidebar-collapsed") === "1";
			if (savedLeftSidebar) {
					document.documentElement.classList.add('left-sidebar-collapsed');
			}
			const savedrightSidebar = sessionStorage.getItem("starlight-right-sidebar-collapsed") === "1";
			if (savedrightSidebar) {
					document.documentElement.classList.add('right-sidebar-collapsed');
			}
    } catch (e) {
        // Fail silently if sessionStorage is not available (e.g., privacy mode)
        console.warn("Sidebar state could not be read from sessionStorage:", e);
    }
})();
