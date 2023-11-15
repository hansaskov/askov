<!-- src/routes/+layout.svelte or src/routes/+page.svelte -->
<script>
	import HeroSection from './HouseSection.svelte';
	import MisoSection from './MisoSection.svelte';
</script>

<div class="h-screen overflow-y-scroll snap-y snap-proximity">
	<div class="snap-start snap-always">
		<HeroSection />
	</div>

	<div class="snap-start snap-always pt-8 pb-20 md:pt-24">
		<MisoSection />
	</div>
</div>


