<script>
	// Page Partials
	import HomeHero from "./partials/HomeHero.svelte";
	import HomeStat from "./partials/HomeStat.svelte";
	import HomeAbilities from "./partials/HomeAbilities.svelte";
	import HomeContact from "./partials/HomeContact.svelte";
</script>

<div class="w-full max-w-7xl mx-auto">
		<!-- Hero -->
		<header id="hero">
			<div class="section-container">
				<HomeHero />
			</div>
		</header>
		<!--  --- -->
		<hr class="devider-section w-20 opacity-90" />
		<!-- Stats -->
		<section id="stats">
			<div class="section-container">
				<HomeStat />
			</div>
		</section>
		<!--  --- -->
		<hr class="devider-section opacity-90" />
		<!-- Abilities -->
		<section id="Abilities">
			<div class="section-container">
				<HomeAbilities />
			</div>
		</section>
		<!--  --- -->
		<hr class="devider-section opacity-90" />
		<!-- Abilities -->
		<section id="Contact">
			<div class="section-container">
				<HomeContact />
			</div>
		</section>
	
</div>

<style lang="postcss">
		.section-container {
		@apply w-full max-w-7xl mx-auto p-4 py-16 md:py-24;
		}
		.devider-section {
		@apply w-24 max-w-7xl
		}
</style>