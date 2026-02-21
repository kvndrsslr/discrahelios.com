<script lang="ts">
	import hero1 from '$lib/images/hero/1.webp?enhanced';
	import hero2 from '$lib/images/hero/2.webp?enhanced';
	import hero3 from '$lib/images/hero/3.webp?enhanced';

	const heroImages = [
		{
			src: hero1,
			text: 'Bereit für eine <em>außergewöhnliches</em> Event?'
		},
		{
			src: hero2,
			text: 'Bereit für eine <em>außergewöhnliches</em> Event?'
		},
		{
			src: hero3,
			text: 'Bereit für eine <em>außergewöhnliches</em> Event?'
		}
	];

	let currentSlide = $state(0);
	$effect(() => {
		setInterval(() => {
			currentSlide = (currentSlide + 1) % heroImages.length;
		}, 5000);
	});
</script>

<section id="hero" aria-hidden={true}>
	<div class={['slide', 'background']}></div>
	{#each heroImages as { src, text }, index (index)}
		<div class={['slide', { active: currentSlide === index }]}>
			<enhanced:img {src} alt="hero" sizes="100vw" />
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<h1>{@html text}</h1>
		</div>
	{/each}
	<div class={['slide', 'shadow']}></div>
</section>

<style lang="scss">
	section {
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
			bottom: 0px;
			right: 0px;
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
			transform: rotate(7.5deg) translate(-15dvw, -25dvh);
			transform-origin: center center;
			transition: all 0.625s ease-in-out;
			font-size: 3.25rem;
			:global(em) {
				font-style: normal;
				color: white;
			}

			@media screen and (max-width: 768px) {
				transform: rotate(0deg) translate(calc(-50dvw + 5em), -5dvh) scale(0.5);
			}
		}
	}
</style>
