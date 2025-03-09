import type { Action } from 'svelte/action';
import { scrollY } from 'svelte/reactivity/window';
import { browser } from '$app/environment';

// place files you want to import through the `$lib` alias in this folder.
export const scrollAction: Action<
	HTMLElement,
	undefined,
	{
		onenterviewport: () => void;
		onexitviewport: () => void;
	}
> = (node) => {
	let inViewport = false;
	console.log('in action');
	$effect(() => {
		console.log('in effect');
		if (!scrollY.current) return;
		const { top, bottom } = node.getBoundingClientRect();
		if (!inViewport && scrollY.current >= top && scrollY.current <= bottom) {
			node.dispatchEvent(new CustomEvent('enterviewport'));
			inViewport = true;
		} else if (inViewport && (scrollY.current < top || scrollY.current > bottom)) {
			node.dispatchEvent(new CustomEvent('exitviewport'));
			inViewport = false;
		}
	});
};

export const isModernBrowser =
	browser &&
	(window.navigator.userAgent.includes('Firefox/') ||
		window.navigator.userAgent.includes('Chrome/'));
