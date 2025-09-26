/* global document:readonly, sessionStorage:readonly */
(function () {
		const savedSidebar = sessionStorage.getItem("starlight-left-sidebar-collapsed") === "1";
		if (savedSidebar) {
				document.documentElement.classList.add('left-sidebar-collapsed');
		}
		const savedToc = sessionStorage.getItem("starlight-right-sidebar-collapsed") === "1";
		if (savedToc) {
				document.documentElement.classList.add('right-sidebar-collapsed');
		}
})();
