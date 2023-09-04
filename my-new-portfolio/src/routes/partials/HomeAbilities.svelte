<script lang="ts">
    const abilities = [
        {
            title: 'Finance',
            body: 'I provides a quality of finance and accounting service to corporates and customers.',
            icon: 'fa-solid fa-money-check-dollar',
        },
        {
            title: 'Development',
            body: 'I acquire wide range of development skills to build web application to introduce great products and services.',
            icon: 'fa-solid fa-trowel-bricks',
        },
        {
            title: 'Marketing',
            body: 'I acknowlege the new marketing strategy using social media and adopt skills to interact with customers more efficiently.',
            icon: 'fa-solid fa-comment-dollar',
        },
    ];
        
    

</script>

<div class="space-y-4 md:space-y-10">
	<!-- Info -->
	<div class="space-y-4 text-center">
		<h2 class="h2">And so much more...</h2>
		<p>There's too many amazing features to list, but here are a few of our favorites.</p>
	</div>
	<!-- Grid -->
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
		<!-- Loop -->
		{#each abilities as ability}
			<!-- Card -->
			<div class="card variant-glass p-4 shadow-lg md:p-10 space-y-4 text-center">
				<span class="btn-icon btn-icon-xl variant-soft-primary">
					<i class="{ability.icon}"></i>
				</span>
				<h3 class="h3">{ability.title}</h3>
				<p>{@html ability.body}</p>
			</div>
		{/each}
	</div>
</div>