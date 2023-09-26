<script lang="ts">
    import { page } from '$app/stores'
    import { goto } from '$app/navigation';
    
    import { AppBar, Avatar, LightSwitch, RadioGroup, RadioItem } from "@skeletonlabs/skeleton";
    

    // Reactive




</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end" background="bg-transparent" padding="px-0 py-4" class="nav-container">
    <svelte:fragment slot="lead">
        <Avatar src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop" width="w-12" rounded="rounded-full" />
    </svelte:fragment>
    
    <section class="hidden md:block">
        <nav class="flex flex-col md:flex-row gap-2 border md:border-0 border-surface-100-800-token bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-lg rounded-bl-container-token rounded-br-container-token md:rounded-token p-2 shadow-xl">
            <a href='/' class="btn md:btn-sm hover:variant-soft-primary !variant-filled-primary">Home</a>
            <a href='/about' class="btn md:btn-sm hover:variant-soft-primary">About</a>
            <a href='/projects' class="btn md:btn-sm hover:variant-soft-primary">Projects</a>
        </nav>
    </section>

    <svelte:fragment slot="trail">
        <LightSwitch fillLight="fill-surface-50" />
    </svelte:fragment>

</AppBar>