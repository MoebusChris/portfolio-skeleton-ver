<script>
    import HomeHeroComponents from "./HomeHeroComponents.svelte";

</script>

<div class="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-10 items-center">
    <div class="flex flex-col items-center xl:items-start text-center xl:text-left space-y-4">
		
		<h1 class="h1 !text-5xl md:!text-6xl max-w-[600px]">Hello, I'm Chris</h1>
		<p class="!text-xl max-w-[475px]">
			A full stack developer + financial professional. Interested in social media marketing and contents creation. I'm pursuing one-man entrepreneur.
		</p>
		<div class="flex gap-4">
            <div class="flex space-x-4">
                <button type="button" class="btn-icon variant-soft-primary hover:variant-filled-primary"><i class="fa-brands fa-twitter"></i></button>
                <button type="button" class="btn-icon variant-soft-primary hover:variant-filled-primary"><i class="fa-brands fa-github"></i></button>
                <button type="button" class="btn-icon variant-soft-primary hover:variant-filled-primary"><i class="fa-brands fa-instagram"></i></button>
                <button type="button" class="btn-icon variant-soft-primary hover:variant-filled-primary"><i class="fa-brands fa-linkedin"></i></button>
                <button type="button" class="btn-icon variant-soft-primary hover:variant-filled-primary"><i class="fa-solid fa-envelope"></i></button>
            </div>
		</div>
	</div>




    <div class="hidden md:inline-block w-full max-w-[650px] mx-auto mt-20">
		<HomeHeroComponents />
	</div>
</div>