/* global document:readonly, sessionStorage:readonly */
(function () {
		const saved = sessionStorage.getItem("starlight-sidebar-collapsed") === "1";
		if (saved) {
				document.documentElement.classList.add('sidebar-collapsed');
		}
})();
