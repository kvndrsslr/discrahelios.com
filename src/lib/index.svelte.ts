import { browser } from '$app/environment';

export const isModernBrowser =
	browser &&
	(window.navigator.userAgent.includes('Firefox/') ||
		window.navigator.userAgent.includes('Chrome/'));
