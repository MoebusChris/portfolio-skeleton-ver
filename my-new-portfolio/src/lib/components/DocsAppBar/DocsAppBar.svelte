<script lang="ts">
    import { page } from '$app/stores'
    import { goto } from '$app/navigation';
    
    import { AppBar, Avatar, LightSwitch, RadioGroup, RadioItem } from "@skeletonlabs/skeleton";
    

    let value: number = 0;



</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end" background="bg-transparent" class="w-full mx-auto max-w-7xl">
    <svelte:fragment slot="lead">
        <Avatar src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop" width="w-12" rounded="rounded-full" />
    </svelte:fragment>

    <div>
		<RadioGroup active="variant-filled-secondary" border="none">
			<RadioItem bind:group={value} name="justify" value={0} on:click = {() => goto('/') }>Home</RadioItem>
			<RadioItem bind:group={value} name="justify" value={1} on:click = {() => goto('/about') }>About</RadioItem>
			<RadioItem bind:group={value} name="justify" value={2} on:click = {() => goto('/projects') }>Projects</RadioItem>
		</RadioGroup>
	</div>

    <svelte:fragment slot="trail">
        <LightSwitch fillLight="fill-surface-50" />
    </svelte:fragment>

</AppBar>