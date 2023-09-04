<script lang="ts">
	import '../app.postcss';


	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { AppShell, storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// My Components
	import DocsAppBar from '$lib/components/DocsAppBar/DocsAppBar.svelte';
	import DocsFooter from '$lib/components/DocsFooter/DocsFooter.svelte';


</script>

<!-- App Shell -->

<AppShell>
	<!-- Header -->
	<svelte:fragment slot="header">
		<DocsAppBar />
	</svelte:fragment>

	<!-- Page Contents -->
	<slot />

	<!-- pageFooter -->
	<svelte:fragment slot="pageFooter">
		<DocsFooter />
	</svelte:fragment>
</AppShell>
