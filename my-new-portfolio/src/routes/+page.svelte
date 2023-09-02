<script>


	// Page Partials
	import HomeHero from "./partials/HomeHero.svelte";
	import HomeStat from "./partials/HomeStat.svelte";
</script>

<div>
	<div class="flex flex-col items-center xl:items-start text-center xl:text-left space-y-4">

	</div>
		<!-- Hero -->
		<header id="hero">
			<div class="section-container">
				<HomeHero />
			</div>
		</header>
		<hr class="section-devider opacity-90" />
		<!-- Stats -->
		<section id="stats">
			<div class="section-container">
				<HomeStat />
			</div>
		</section>
	
</div>

<style lang="postcss">
		.section-container {
		@apply w-full max-w-7xl mx-auto p-4 py-16 md:py-24;
	}
		.section-devider {
			@apply w-full max-w-5xl mx-auto p-4 py-16 md:py-24;
		}
</style>