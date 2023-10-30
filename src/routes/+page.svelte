<!-- src/routes/+layout.svelte or src/routes/+page.svelte -->
<script>
	import HeroSection from '$lib/HeroSection.svelte';
	import MisoSection from '$lib/MisoSection.svelte';
</script>

<div class="h-screen overflow-y-scroll snap-y snap-proximity pt-4">
	<div class="snap-start h-screen snap-always">
		<HeroSection />
	</div>
	<div class="snap-start min-h-screen snap-always">
		<MisoSection />
		<!-- Additional content here if needed to allow scrolling within this section -->
	</div>
</div>
