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

// keep track of which callback is associated with each element
type IntersectionCallback = (entry: IntersectionObserverEntry) => void;
const intersectionCallbacks = new WeakMap<Element, IntersectionCallback>();

// use a single intersection observer instance per options
const intersectionObservers = new WeakMap<IntersectionObserverInit, IntersectionObserver>();

function createObserver(init: IntersectionObserverInit) {
	const observer = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			const callback = intersectionCallbacks.get(entry.target);
			if (callback) {
				callback(entry);
			}
		}
	}, init);
	intersectionObservers.set(init, observer);
	return observer;
}

export interface IntersectOptions extends IntersectionObserverInit {
	callback: IntersectionCallback;
}

// separated from action to make it easier to destroy / recreate when options change
function observe(target: Element, options: IntersectOptions) {
	const { callback } = options;

	const observer = intersectionObservers.get(options) || createObserver(options);

	intersectionCallbacks.set(target, callback);
	observer.observe(target);

	return () => {
		observer.unobserve(target);
		intersectionCallbacks.delete(target);
	};
}

// the actual action
export function intersect(target: Element, options: IntersectOptions) {
	let unobserve = observe(target, options);

	return {
		update(options: IntersectOptions) {
			unobserve();
			unobserve = observe(target, options);
		},
		destroy() {
			unobserve();
		}
	};
}
