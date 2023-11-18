<!-- src/routes/+layout.svelte or src/routes/+page.svelte -->
<script>
	import HeroSection from './HouseSection.svelte';
	import MisoSection from './MisoSection.svelte';
	import Navbar from './Navbar.svelte';
</script>

<div class="snap-y snap-proximity">
	<div class="snap-start snap-always">
		<HeroSection />
	</div>

	<div class="flex flex-col md:flex-col-reverse snap-start snap-always">
		<MisoSection />
		<Navbar />
	</div>
</div>
