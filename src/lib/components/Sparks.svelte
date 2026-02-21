<script lang="ts">
</script>

<video autoplay muted loop>
	<source src="/sparks-m.webm" type="video/webm" />
</video>

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
		/* the video should blend on top of the background but below the content */
		mix-blend-mode: screen;
		opacity: 0.6;
		animation-name: rotateAnimation;
		animation-duration: 1ms; /* Firefox requires this to apply the animation */
		animation-direction: alternate;
		animation-timeline: scroll(block root);
		animation-range: 0dvh 100dvh;
	}

	@keyframes rotateAnimation {
		0% {
			opacity: 0;
		}

		50% {
			opacity: 0;
		}

		100% {
			opacity: 0.6;
		}
	}
</style>
