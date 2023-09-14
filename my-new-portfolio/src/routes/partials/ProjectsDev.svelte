<script lang="ts">
    import { getImageLink } from "$lib/images";
    import { cardLists } from "$lib/card";
    import { slide } from "svelte/transition";



</script>

<div class="space-y-4 md:space-y-8">
    <header class="space-y-4">
        <h2 class="h2">
            Development
        </h2>
    </header>
    
    <div class="grid grid-cols-3 md:grid-cols-3 gap-4 py-8">
        <a href="/" class="group aspect-square rounded-container-token overflow-hidden shadow-xl variant-filled-primary">
                <img class="w-full aspect-square transition-all duration-[500] group-hover:-translate-y-[101%]" src={getImageLink({ id: 'qucYweSE3ZY', w: 1280, h: 1280 })} alt="" />
                <caption class="w-full h-full flex justify-center items-center group-hover:-translate-y-full">Project-1</caption>
        </a>
    </div>
</div>




<div class="py-6">
    {#each cardLists as cardList, i}
        <h3 class="h2">{cardList.title}</h3>
        <section class="grid grid-cols-2 md:grid-cols-3 gap-4 py-8">
            {#each cardList.id as imageId}
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={getImageLink({ id: imageId, w: 1280, h: 1280 })} alt="" />
                </div>
            {/each}
        </section>
    {/each}
</div>

