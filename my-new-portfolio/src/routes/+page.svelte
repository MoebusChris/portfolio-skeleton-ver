<script>


	// Page Partials
	import HomeHero from "./partials/HomeHero.svelte";
	import HomeStat from "./partials/HomeStat.svelte";
	import HomeAbilities from "./partials/HomeAbilities.svelte";
	import HomeContact from "./partials/HomeContact.svelte";
</script>

<div>
		<!-- Hero -->
		<header id="hero">
			<div class="section-container">
				<HomeHero />
			</div>
		</header>
		<!--  --- -->
		<hr class="section-devider opacity-90" />
		<!-- Stats -->
		<section id="stats">
			<div class="section-container">
				<HomeStat />
			</div>
		</section>
		<!--  --- -->
		<hr class="section-devider opacity-90" />
		<!-- Abilities -->
		<section id="Abilities">
			<div class="section-container">
				<HomeAbilities />
			</div>
		</section>
		<!--  --- -->
		<hr class="section-devider opacity-90" />
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
</style>