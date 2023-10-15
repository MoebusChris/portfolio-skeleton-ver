<script lang="ts">
	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { AppShell, storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// SvelteKit Imports
	import { afterNavigate } from '$app/navigation';

	// Components & Utility
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { prefersReducedMotionStore } from '@skeletonlabs/skeleton';

	// My Components
	import DocsAppBar from '$lib/components/DocsAppBar/DocsAppBar.svelte';
	import DocsFooter from '$lib/components/DocsFooter/DocsFooter.svelte';
	import DocsDrawer from '$lib/components/DocsDrawer/DocsDrawer.svelte';

	// Global Stylesheets
	import '../app.postcss';

	// Font-awesome
	import '@fortawesome/fontawesome-free/css/fontawesome.css';
	import '@fortawesome/fontawesome-free/css/brands.css';
	import '@fortawesome/fontawesome-free/css/solid.css';

	// SEO Meta Tags
	const metaDefault = {
		title: 'Chris Subeom portfolio profile',
		description: 'Im Chris Subeom, financial accounting professional + fullstack developer.',
		image:'',
	};
	const meta = {
		title: metaDefault.title,
		description: metaDefault.description,
		image: metaDefault.image,
		linkedin: {
			title: metaDefault.title,
			description: metaDefault.description,
			image: metaDefault.image,
		}
	}

	// Initialize Store for Modals and Drawers
	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();

	// Scroll heading into view
	function scrollHeadingIntoView(): void {
		if (!window.location.hash) return;
		const elemTarget: HTMLElement | null = document.querySelector(window.location.hash);
		if (elemTarget) elemTarget.scrollIntoView({ behavior: 'smooth' });
	}

	// Lifecycle
	afterNavigate((params: any) => {
		// Scroll to top
		const isNewPage: boolean = params.from && params.to && params.from.route.id !== params.to.route.id;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
		// Scroll heading into view
		scrollHeadingIntoView();
	});

	page.subscribe((page) => {
		// Restore page Defaults
		meta.title = metaDefault.title;
		meta.description = metaDefault.description;
		meta.image = metaDefault.image;
		meta.linkedin.title = metaDefault.title;
		meta.linkedin.description = metaDefault.description;		
		meta.linkedin.image = metaDefault.image;
	})


	// Reactive
	$: allyPageSmoothScroll = !$prefersReducedMotionStore ? 'scroll-smooth' : '';
</script>

<svelte:head>
	<title>{meta.title}</title>
	<!-- Meta Tags -->
	<meta name="title" content={meta.title} />
	<meta name="description" content={meta.description}/>
	<meta name="keywords" content="finance, accounting, contents, creation, gaap, corporation, bookkeeping, audit, fullstack, development, javascript, typescript, python, quickbooks" />
	<meta name="author" content="Christopher Subeom Jeong Greyson" />
	<!-- Open Graph - https://opg.me/ -->
	<meta property="og:site_name" content="I'm Chris Subeom" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.subeomjeong.com" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:image" content={meta.image} />
	<meta property="og:image:secure_url" content={meta.image} />
	<meta property="og:image:type" content="image/jpg" />
	<meta property="og:image:width" content="" />
	<meta property="og:image:height" content="" />
</svelte:head>

<!-- Overlay -->
<DocsDrawer />

<!-- App Shell -->
<AppShell regionPage={allyPageSmoothScroll} slotPageHeader="sticky top-0 z-10">
	<!-- Header -->
	<svelte:fragment slot="pageHeader">
		<DocsAppBar />
	</svelte:fragment>

	<!-- Page Contents -->
	<slot />

	<!-- pageFooter -->
	<svelte:fragment slot="pageFooter">
		<DocsFooter />
	</svelte:fragment>
</AppShell>
