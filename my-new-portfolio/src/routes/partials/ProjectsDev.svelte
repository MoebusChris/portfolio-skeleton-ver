<script lang="ts">
    import { getImageLink } from "$lib/images";
    import { cardLists } from "$lib/card";
    import { slide } from "svelte/transition";



</script>

<div class="py-6">
    <h3 class="h2">
        Development
    </h3>
    <section class="grid grid-cols-2 md:grid-cols-3 gap-4 py-8">

        <div>
            <div class="group relative items-center justify-center overflow-hidden">
                <div class="absolute duration-500 group-hover:translate-y-[-100%]">
                    <img class="h-auto max-w-full" src={getImageLink({ id: 'qucYweSE3ZY', w: 1280, h: 1280 })} alt="" />
                </div>


                    <div class="h-96 max-h-full bg-primary-500 flex flex-col items-center justify-center text-center">
                        <p class="text-white">Project-1</p>
                    </div>

            </div>
        </div>








    	<div>
    		<img class="h-auto max-w-full rounded-lg" src={getImageLink({ id: 'qucYweSE3ZY', w: 1280, h: 1280 })} alt="" />
    	</div>
    	<div>
    		<img class="h-auto max-w-full rounded-lg" src={getImageLink({ id: 'qucYweSE3ZY', w: 1280, h: 1280 })} alt="" />
    	</div>
    </section>

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

