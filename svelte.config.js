import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	compilerOptions: {
		runes: true
	},
	kit: {
		output: {
			bundleStrategy: 'single'
		},
		adapter: adapter(),
		prerender: {
			handleMissingId: 'ignore'
		}
	},
	extensions: ['.svelte', '.svx']
};

export default config;
