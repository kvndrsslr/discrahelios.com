<script lang="ts">
	const icons = import.meta.glob('../icons/*.svg', {
		eager: true,
		import: 'default',
		query: '?raw'
	});

	type IconProps = {
		icon: string;
		[key: string]: any;
	};

	let { icon, ...rest }: IconProps = $props();

	const iconPath = `../icons/${icon}.svg`;
	const iconSvg = icons[iconPath];
	if (!iconSvg) {
		console.error(`Icon ${icon} not found`);
	}
</script>

{#if iconSvg}
	<div {...rest}>
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
