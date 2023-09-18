<script lang="ts">
    import { getImageLink } from "$lib/images";
    import { cardLists } from "$lib/card";



</script>

<div class="space-y-4 md:space-y-8">
    {#each cardLists as cardList, i}
        
    <header class="space-y-4">
        <h2 class="h2">
            {cardList.title}
        </h2>
    </header>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        {#each cardList.list as { href, name, imageId }}
        <a {href} class="group aspect-square rounded-container-token overflow-hidden shadow-xl variant-filled-primary">
            <img class="w-full aspect-square transition-all duration-[500] group-hover:-translate-y-[101%]" src={getImageLink({ id: imageId, w: 1280, h: 1280 })} alt="" />
            <caption class="w-full h-full flex justify-center items-center group-hover:-translate-y-full">{name}</caption>
        </a>
        {/each}
    </div>
    {/each}
</div>

<!-- For Future Reference-->
<!-- <div class="space-y-4 md:space-y-8">
    <header class="space-y-4">
        <h2 class="h2">
            Development
        </h2>
    </header>
    
    <div class="grid grid-cols-3 md:grid-cols-3 gap-4">
        <a href="/" class="group aspect-square rounded-container-token overflow-hidden shadow-xl variant-filled-primary">
                <img class="w-full aspect-square transition-all duration-[500] group-hover:-translate-y-[101%]" src={getImageLink({ id: 'qucYweSE3ZY', w: 1280, h: 1280 })} alt="" />
                <caption class="w-full h-full flex justify-center items-center group-hover:-translate-y-full">Project-1</caption>
        </a>
    </div>
</div> -->
