<script>
	// Page Partials
	import HomeHero from "./partials/HomeHero.svelte";
	import HomeStat from "./partials/HomeStat.svelte";
	import HomeAbilities from "./partials/HomeAbilities.svelte";
	import HomeContact from "./partials/HomeContact.svelte";
</script>

<div class="page-container-wide page-padding">
		<!-- Hero -->
		<header id="hero">
			<div>
				<HomeHero />
			</div>
		</header>
		<!--  --- -->
		<hr class="devider-section" />
		<!-- Stats -->
		<section id="stats">
			<div>
				<HomeStat />
			</div>
		</section>
		<!--  --- -->
		<hr class="devider-section" />
		<!-- Abilities -->
		<section id="Abilities">
			<div>
				<HomeAbilities />
			</div>
		</section>
		<!--  --- -->
		<hr class="devider-section" />
		<!-- Abilities -->
		<section id="Contact">
			<div>
				<HomeContact />
			</div>
		</section>
	
</div>