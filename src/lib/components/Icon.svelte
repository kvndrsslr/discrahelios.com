<script lang="ts">
	const icons = import.meta.glob('../icons/*.svg', {
		eager: true,
		import: 'default',
		query: '?raw'
	});

	type IconProps = {
		icon: string;
	};

	let { icon, ...rest }: IconProps = $props();

	const iconPath = $derived(`../icons/${icon}.svg`);
	const iconSvg = $derived(icons[iconPath]);
	$effect(() => {
		if (!iconSvg) {
			console.error(`Icon ${icon} not found`);
		}
	});
</script>

{#if iconSvg}
	<div {...rest}>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html iconSvg}
	</div>
{/if}

<style lang="scss">
	div {
		display: inline-block;
		width: var(--width);
		height: var(--height);
	}
	div > :global(svg) {
		width: 100%;
		height: 100%;
		fill: var(--color, var(--fg1));
	}
</style>
