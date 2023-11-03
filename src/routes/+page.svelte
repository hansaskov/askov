<!-- src/routes/+layout.svelte or src/routes/+page.svelte -->
<script>
	import '../app.css';
	import HeroSection from '$lib/HouseSection.svelte';
	import MisoSection from '$lib/MisoSection.svelte';
</script>

<div class="h-screen overflow-y-scroll snap-y snap-proximity pt-4">
	<div class="snap-start h-screen snap-always">
		<HeroSection />
	</div>
	<div class="snap-start min-h-screen snap-always">
		<MisoSection />
	</div>
</div>
