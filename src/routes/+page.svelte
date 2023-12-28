<!-- src/routes/+layout.svelte or src/routes/+page.svelte -->
<script>
	import HeroSection from './HouseSection.svelte';
	import MisoSection from './MisoSection.svelte';
	import Navbar from '../lib/components/Navbar.svelte';
	import TorSection from './TorSection.svelte';
</script>

<div>
	<div>
		<HeroSection />
	</div>

	<div class="flex flex-col md:flex-col-reverse">
		<div class="pt-8">
			<TorSection />
			<MisoSection />
		</div>
		<Navbar />
	</div>
</div>
