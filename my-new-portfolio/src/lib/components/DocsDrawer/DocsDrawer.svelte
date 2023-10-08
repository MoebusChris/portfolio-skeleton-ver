<script lang="ts">
    import { page } from "$app/stores";
    import { getDrawerStore, Drawer } from "@skeletonlabs/skeleton";
    

    // Types
    

    // Local
    import { menuLists } from "$lib/links";
    
    // Drawer Function
    const drawerStore = getDrawerStore();

    function onClickAnchor(): void {
        drawerStore.close();
    }
    

    // Reactive
    $: classesDrawer = $drawerStore.id === 'doc-sidenav' ? 'md:hidden' : '';
    $: menuItemActive = (href: string) => ($page.url.pathname === href ? 'variant-filled-primary' : '');
    $: {
        // Initial call to set up reactive statement
        menuItemActive('/');
        // Call the function again whenever $page.url changes
        menuItemActive('/about');
        menuItemActive('/projects');
    };
</script>

<Drawer class={classesDrawer} position="top" rounded="rounded-xl" padding="p-2" bgDrawer="bg-tertiary-400" height="h-min">
    <nav class="list-nav">
        <ul class="text-center text-white my-1">
            {#each menuLists as segment, i}
                <li>
                    <a href={segment.href} on:click={() => { onClickAnchor() }}>
                        <span class="flex-auto">{segment.label}</span>
                    </a>
                </li>
                {#if i + 1 < menuLists.length }<hr class="opacity-50" />{/if}
            {/each}
        </ul>
    </nav>
</Drawer>