import React from "react";
import ReactDOM from "react-dom/client";

import "./custom.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// Apply desktop-only 90% visual zoom for non-touch / desktop viewports.
// Note: Browsers do not allow controlling the browser's native zoom level from a webpage.
// This applies a visual scale to the document instead for desktop users only.
function applyDesktopZoom() {
	try {
		const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
		const isDesktopWidth = window.innerWidth >= 1024; // only for desktop-ish viewports
		if (isDesktopWidth && !isTouch) {
			document.documentElement.classList.add('desktop-zoom');
			document.body.classList.add('desktop-zoom');
		} else {
			document.documentElement.classList.remove('desktop-zoom');
			document.body.classList.remove('desktop-zoom');
		}
	} catch (e) {
		// silent fail — don't block rendering
		console.warn('applyDesktopZoom error', e);
	}
}

applyDesktopZoom();
window.addEventListener('resize', applyDesktopZoom, { passive: true });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
