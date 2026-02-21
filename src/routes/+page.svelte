<script>
	import Hero from '$lib/sections/Hero.svelte';
	import Show from '$lib/sections/Show.svelte';
	const sections = [Hero, Show];
</script>

{#each sections as Section, index (index)}
	<Section />
{/each}

<section>Hello World</section>
<section>Hello World</section>
<section>Hello World</section>

<style lang="scss">
	:global(section) {
		scroll-snap-align: start;
		scroll-snap-stop: normal;
		width: 100%;
		min-height: 100dvh;
	}
</style>
