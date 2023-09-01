<script lang="ts">
    import { page } from '$app/stores'
    
    import { AppBar, Avatar, LightSwitch, RadioGroup, RadioItem } from "@skeletonlabs/skeleton";
    

    let value = 0;
    let path = location.pathname;

</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end" background="bg-transparent">
    <svelte:fragment slot="lead">
        <Avatar src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop" width="w-12" rounded="rounded-full" />
    </svelte:fragment>

    <div>
		<RadioGroup active="variant-filled-secondary" border="none">
			<RadioItem href="/"  bind:group={value} name="justify" value={0}>Home</RadioItem>
			<RadioItem href="/about"  bind:group={value} name="justify" value={1}>About</RadioItem>
			<RadioItem href="/projects" on:click={() => (path = location.pathname)} bind:group={value} name="justify" value={2}>Project</RadioItem>
		</RadioGroup>
	</div>

    <svelte:fragment slot="trail">
        <LightSwitch fillLight="fill-primary-50" />
    </svelte:fragment>

</AppBar>