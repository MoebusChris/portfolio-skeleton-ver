<script lang="ts">
    import { getDrawerStore, Drawer } from "@skeletonlabs/skeleton";
    
    

    const drawerStore = getDrawerStore();

    function onClickAnchor(): void {
        drawerStore.close();
    }
    

    // Reactive
    $: classesDrawer = $drawerStore.id === 'doc-sidenav' ? 'md:hidden' : '';

</script>

<Drawer class={classesDrawer} position="top" rounded="rounded-xl" padding="p-2" bgDrawer="bg-tertiary-400" height="h-min">
    <nav class="list-nav">
        <ul class="text-center text-white">
            <li>
                <a href="/" on:click={() => { onClickAnchor() }}>
                    <span class="flex-auto">Home</span>
                </a>
            </li>
            <li>
                <a href="/about" on:click={() => { onClickAnchor() }}>
                    <span class="flex-auto">About</span>
                </a>
            </li>
            <li>
                <a href="/projects" on:click={() => { onClickAnchor() }}>
                    <span class="flex-auto">Projects</span>
                </a>
            </li>
        </ul>
    </nav>
</Drawer>