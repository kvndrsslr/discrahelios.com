<script lang="ts">
	import { hideSparks, showSparks } from '$lib/components/SparksStore.svelte';
	import { scrollAction } from '$lib/index.svelte';
	let currentSlide = $state(0);
	$effect(() => {
		hideSparks();
		setInterval(() => {
			currentSlide = (currentSlide + 1) % 3;
		}, 5000);
	});
</script>

<section
	use:scrollAction
	onenterviewport={hideSparks}
	onexitviewport={showSparks}
	class="hero-container"
>
	<div class={['slide', 'background']}></div>
	<div class={['slide', { active: currentSlide === 0 }]}>
		<img src="/hero3.webp" alt="hero" />
		<h1>Bereit für ein <em>außergewöhnliches</em> Event?</h1>
	</div>
	<div class={['slide', { active: currentSlide === 1 }]}>
		<img src="/hero2.webp" alt="hero" />
		<h1>Bereit für ein <em>außergewöhnliches</em> Event?</h1>
	</div>
	<div class={['slide', { active: currentSlide === 2 }]}>
		<img src="/hero1.webp" alt="hero" />
		<h1>Bereit für ein <em>außergewöhnliches</em> Event?</h1>
	</div>
	<div class={['slide', 'shadow']}></div>
</section>
<section class="foo">Hello World</section>
<section class="foo">Hello World</section>
<section class="foo">Hello World</section>
<section class="foo">Hello World</section>

<style lang="scss">
	section {
		scroll-snap-align: start;
		scroll-snap-stop: always;
		width: 100%;
		&.foo {
			height: 100dvh;
		}
	}

	.hero-container {
		position: relative;
		height: 100dvh;
		width: 100dvw;
		.slide {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			opacity: 0;
			transition: opacity 1.75s ease-in-out;
			&.active {
				opacity: 1;
			}
			&.background {
				background-color: var(--bg0);
				opacity: 1;
			}
			&.shadow {
				opacity: 1;
				box-shadow: inset 0 0 100px 25px var(--bg0);
			}
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		h1 {
			position: absolute;
			bottom: 40%;
			right: 15%;
			color: var(--fg0);
			text-align: center;
			margin: 0;
			width: 10em;
			text-shadow:
				0 0 10px var(--bg0),
				0 0 15px var(--bg0),
				0 0 20px var(--bg0),
				0 0 25px var(--bg0);
			// show in bottom right corner at an angle
			transform: rotate(7.5deg);
			transform-origin: center center;
			font-size: 3.25rem;
			em {
				font-style: normal;
				color: white;
			}
		}
	}
</style>
