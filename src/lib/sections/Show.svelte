<script lang="ts">
	import weddingImage from '$lib/images/hochzeit-herzflamme.webp?enhanced';
	import corporateImage from '$lib/images/firmenfeier.webp?enhanced';
	import medievalImage from '$lib/images/pestdoktor.webp?enhanced';
	import cityFestivalImage from '$lib/images/kohlepoi.webp?enhanced';
	import kindergartenImage from '$lib/images/led-einhorn.webp?enhanced';
	import customImage from '$lib/images/harlekin-sense.webp?enhanced';

	const concepts = [
		{
			title: 'Hochzeiten & private Feiern',
			description:
				'Show zu Ihren Lieblingsliedern – inkl. Herzflammen Bühnenbild als Fotomotiv für Ihren schönsten Tag',
			image: weddingImage
		},
		{
			title: 'Firmenfeiern',
			description:
				'Lockere Show, um Ihre Erfolge ins Rampenlicht zu stellen – individuelles Bühnenbild und auf Sie zugeschnittene Moderation',
			image: corporateImage
		},
		{
			title: 'Mittelaltermärkte',
			description:
				'Passende Gewandung und Einbezug des Publikums – kombinierbar mit Walking Act für ein ganztägiges Programm',
			image: medievalImage
		},
		{
			title: 'Stadtfeste',
			description: 'Technik und Flammeneffekte angepasst an Ihre Eventgröße',
			image: cityFestivalImage
		},
		{
			title: 'Kindergärten',
			description:
				'Angepasste kürzere Show für die kleinsten Zuschauer – LED Show komplett ohne Feuer ebenfalls möglich',
			image: kindergartenImage
		},
		{
			title: 'Individuelles Konzept',
			description:
				'Noch nichts gefunden? Sprechen Sie uns direkt an und wir planen Ihr perfektes Event!',
			image: customImage
		}
	];
</script>

<section id="show">
	<h2>Showkonzepte</h2>
	<p class="intro">
		Ob romantische Hochzeit, elegante Firmenfeier oder buntes Stadtfest – wir gestalten Ihre
		Feuershow individuell nach Ihren Wünschen. Entdecken Sie unsere bewährten Konzepte oder lassen
		Sie sich ein maßgeschneidertes Programm erstellen.
	</p>
	<div class="concept-grid">
		{#each concepts as concept (concept.title)}
			<div class="concept-card">
				<enhanced:img src={concept.image} alt={concept.title} />
				<div class="concept-overlay">
					<h3>{concept.title}</h3>
					<div class="concept-description">
						<p>{concept.description}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		padding: 4rem 2rem;

		h2 {
			text-align: left;
			margin-bottom: 1rem;
			font-size: 2rem;
		}
	}

	.intro {
		text-align: center;
		max-width: 800px;
		margin: 0 auto 2.5rem;
		font-size: 1.15rem;
		line-height: 1.6;
	}

	.concept-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(max(30dvw, 300px), 1fr));
		gap: max(2dvw, 20px);
		width: 100%;
	}

	.concept-card {
		position: relative;
		aspect-ratio: 4 / 3;
		overflow: hidden;
		border-radius: 8px;
		cursor: pointer;

		[src] {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: transform 0.3s ease;
		}

		&:hover [src] {
			transform: scale(1.05);
		}

		.concept-overlay {
			position: absolute;
			inset: 0;
			box-shadow: inset 0 0 100px 25px #00000099;
			background: #00000000;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 1.5rem;
			color: white;
			transition: background 0.3s ease;

			h3 {
				margin: 0;
				font-family: 'Diogenes';

				font-size: 1.25rem;
				color: white;
				text-shadow:
					0 0 5px var(--bg0),
					0 0 10px var(--bg0),
					0 0 15px var(--bg0);
			}

			.concept-description {
				p {
					margin: 0;
					font-size: 0.9rem;
					opacity: 0;
					text-shadow:
						0 0 5px var(--bg0),
						0 0 10px var(--bg0),
						0 0 15px var(--bg0);
					transform: translateY(10px);
					transition:
						opacity 0.3s ease,
						transform 0.3s ease;
				}
			}
		}

		&:hover .concept-overlay {
			background: #00000077;

			.concept-description p {
				opacity: 1;
				transform: translateY(0);
			}
		}
	}

	@media (max-width: 768px) {
		.concept-grid {
			grid-template-columns: 1fr;
		}

		.concept-card .concept-overlay .concept-description p {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
