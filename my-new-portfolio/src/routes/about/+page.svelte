<script lang="ts">
    import { getImageLink } from "$lib/images";

    // Component
    import AboutMe from "../partials/AboutMe.svelte";
</script>

<div class="page-container-wide page-padding">
    <div>
        <h2 class="text-center text-7xl">About Me</h2>
    </div>

    <!-- --- -->
	<hr class="devider-section opacity-90" />
    
    <div>
        <img class="h-auto max-w-full rounded-lg" src={getImageLink({ id: 'qucYweSE3ZY', w: 1280, h: 512 })} alt=" " />
    </div>

    <!--  --- -->
	<hr class="devider-section opacity-90" />

    <section>
        <AboutMe />
    </section>



</div>

