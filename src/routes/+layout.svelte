<script lang="ts">
	import '@fontsource-variable/open-sans';
	import '@fontsource-variable/recursive';
	import Icon from '$lib/components/Icon.svelte';
	import Sparks from '$lib/components/Sparks.svelte';
	import FlamingLogo from '$lib/components/FlamingLogo.svelte';
	import { scrollY } from 'svelte/reactivity/window';
	import { resolve } from '$app/paths';

	const showNavIcons = false;
	let { children } = $props();
</script>

<a href={resolve('/')} class={['logo', { expanded: (scrollY.current ?? 0) < 100 }]}>
	<FlamingLogo />
</a>

<nav>
	<a href="#show">
		{#if showNavIcons}<Icon icon="show" --height="40px" />{/if}
		Show
	</a>
	<a href="#gallery">
		{#if showNavIcons}<Icon icon="gallery" --height="40px" />{/if}
		Galerie
	</a>
	<a href="#bookings">
		{#if showNavIcons}<Icon icon="bookings" --height="40px" />{/if}
		Buchen
	</a>
	<a href="#about-us">
		{#if showNavIcons}<Icon icon="about-us" --height="40px" />{/if}
		&Uuml;ber uns
	</a>
	<a href="#impressum">
		{#if showNavIcons}<Icon icon="impressum" --height="40px" />{/if}
		Impressum
	</a>
</nav>

<main>
	{@render children()}
</main>

<Sparks />

<style lang="scss">
	:global(:root) {
		--clr0: #000000;
		--clr1: #100509;
		--clr2: #5a0002;
		--clr3: #a40606;
		--clr4: #d98324;
		--clr5: #d1ae07;
		--clrx5: #cccc33;

		--bg0: var(--clr1);
		--bg1: var(--clr1);
		--fg1: var(--clr5);
		--fg0: #facf61;

		@font-face {
			font-family: 'Diogenes';
			src:
				url('/fonts/diogenes.woff2') format('woff2'),
				url('/fonts/diogenes.ttf') format('truetype');
		}
	}

	:global(html) {
		scroll-snap-type: y proximity;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Open Sans Variable', sans-serif;
		font-family: 'Recursive Variable', sans-serif;
		color: white;
		background-color: var(--bg0);
	}

	nav {
		transition: opacity 0.625s ease-in-out;
		position: fixed;
		top: 20px;
		right: 20px;
		z-index: 100;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		font-family: 'Diogenes';
		font-variant: small-caps;
		gap: 35px;
		filter: drop-shadow(0 0 2px #10050977) drop-shadow(0 0 2px #100509aa)
			drop-shadow(0 0 2px #100509cc) drop-shadow(0 0 1px #100509) drop-shadow(0 0 1px #100509);

		a {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 5px;
			text-decoration: none;
			color: var(--fg1);
			font-size: 1.2rem;
			transition: color 0.5s ease-in-out;
			&:hover {
				color: var(--fg0);
			}
		}

		@media screen and (max-width: 768px) {
			opacity: 0;
			user-select: none;
			pointer-events: none;
		}
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		opacity: 0;
		width: 150px;
		position: fixed;
		z-index: 5;
		inset: 10px;
		transition: all 0.5s ease-in-out;
		user-select: none;
		height: 0;

		&.expanded {
			opacity: 1;
			width: 150px;

			@media screen and (min-width: 768px) {
				inset: 12px 24px;
				width: 250px;
			}

			@media screen and (min-width: 1280px) {
				inset: 20px 30px;
				width: 350px;
			}
		}

		@media screen and (min-width: 768px) {
			opacity: 1;
		}
	}
</style>
