<script lang="ts">
    import { getImageLink } from "$lib/images";
    import ProjectsDev from "../partials/ProjectsDev.svelte";
</script>

<div class="w-full max-w-7xl mx-auto">
    <div class="projects-section-container">
        <h2 class="text-center text-7xl">Projects</h2>
    </div>
    <!--  --- -->
	<hr class="devider-section opacity-90" />

    <section  class="projects-section-container">
        <ProjectsDev />
    </section>
</div>

<style lang="postcss">
    .projects-section-container {
    @apply w-full max-w-7xl mx-auto p-4 py-16 md:py-20;
    }
    
    .devider-section {
	@apply w-24 max-w-7xl
	}
</style>