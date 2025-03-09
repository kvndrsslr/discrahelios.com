<script lang="ts">
	import { isSparksVisible } from '$lib/components/SparksStore.svelte';
	import { isModernBrowser } from '$lib/index.svelte';
	import { fade } from 'svelte/transition';
</script>

{#if isSparksVisible() && isModernBrowser}
	<video transition:fade autoplay muted loop>
		<source src="/sparks.webm" type="video/webm" />
		Your browser does not support the video tag.
	</video>
{/if}

<style lang="scss">
	video {
		user-select: none;
		pointer-events: none;
		position: fixed;
		bottom: 0px;
		left: 50%;
		transform: translateX(-50%);
		width: 100dvw;
		max-width: 1080px;
		min-width: 720px;
		height: auto;
		z-index: 20;
		opacity: 0.6;
	}
</style>
