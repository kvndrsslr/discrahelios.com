<script lang="ts">
	import '@fontsource-variable/open-sans';
	import '@fontsource-variable/recursive';
	import Icon from '$lib/components/Icon.svelte';
	import { scrollY } from 'svelte/reactivity/window';
	import Sparks from '$lib/components/Sparks.svelte';
	import FlamingLogo from '$lib/components/FlamingLogo.svelte';

	let { children } = $props();
</script>

<!-- 
<div class={['logo', { shrinkNav: (scrollY.current ?? 0) > 100 }]}>
	<Icon icon="logo" --width="100%" />
</div> -->

<div class="logo backdrop">
	<FlamingLogo helperBackdrop />
</div>
<div class="logo blend">
	<FlamingLogo />
</div>

<nav>
	<a href="/#show">
		<Icon icon="show" --height="40px" />
		Show
	</a>
	<a href="/#">
		<Icon icon="gallery" --height="40px" />
		Galerie
	</a>
	<a href="/#">
		<Icon icon="bookings" --height="40px" />
		Buchen
	</a>
	<a href="/#">
		<Icon icon="about-us" --height="40px" />
		&Uuml;ber uns
	</a>
</nav>

<section class="content">
	{@render children()}
</section>

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
	}

	:global(html) {
		scroll-snap-type: y proximity;
		// scroll-behavior: smooth;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Open Sans Variable', sans-serif;
		font-family: 'Recursive Variable', sans-serif;
		background-color: var(--bg0);
		// background-image: url('/hero1.webp');
		// background-size: cover;
		// background-attachment: fixed;
	}

	nav {
		position: fixed;
		top: 20px;
		right: 20px;
		z-index: 100;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
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
			font-size: 1rem;
			transition: color 0.5s ease-in-out;
			&:hover {
				color: var(--fg0);
			}
		}
	}

	section.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		width: 350px;
		position: fixed;
		top: 15px;
		left: 30px;
		z-index: 5;
		&.blend {
			mix-blend-mode: screen;
		}
		&.backdrop {
			filter: drop-shadow(0 0 5px #10050977) drop-shadow(0 0 2px #100509aa)
				drop-shadow(0 0 2px #100509cc) drop-shadow(0 0 1px #100509) drop-shadow(0 0 1px #100509);
		}
	}

	.logo-old {
		position: fixed;
		z-index: 5;
		fill: #cccc33;
		width: 140px;
		inset: 10px 20px auto auto;
		transition: opacity 0.625s ease-in-out;
		filter: drop-shadow(0 0 2px #10050977) drop-shadow(0 0 2px #100509aa)
			drop-shadow(0 0 2px #100509cc) drop-shadow(0 0 1px #100509) drop-shadow(0 0 1px #100509);
		opacity: 1;
		&.shrinkNav {
			opacity: 0;
			// width: 80px;
			// inset: 5px 10px auto auto;
		}

		@media screen and (min-width: 425px) {
			inset: 50px;
		}

		@media screen and (min-width: 1024px) {
			inset: 50px 75px;
			width: 350px;
		}
	}
</style>
