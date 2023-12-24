<script>
	import Tor3 from '$lib/assets/tor/tor_3.jpg';
	import Tor2 from '$lib/assets/tor/tor_1.jpg';
	import Tor1 from '$lib/assets/tor/tor_2.jpg';

	/** @type {{ path: string, description: string }[]} */
	const images = [
		{ path: Tor2, description: 'Fra den første dag' },
		{ path: Tor1, description: 'Tor er altid sulten' },
		{ path: Tor3, description: 'Der er fars kat' }
	];
</script>

<div class="bg-background text-text" {...$$restProps}>
	<h1 class="text-3xl lg:text-5xl font-bold text-primary mb-8 text-center">
		Mød Tor, Fars nye killing!
	</h1>

	{#each images as { path, description }, index}
		<div class={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center my-4`}>
			<img
				src={path}
				alt={description}
				class={`w-[49%] shadow-lg ${index % 2 === 0 ? 'rounded-r-xl' : 'rounded-l-xl'}`}
			/>
			<p class="flex-1 text-md sm:text-xl lg:text-3xl mx-8 text-center text-primary p-4 rounded-lg">
				{description}
			</p>
		</div>
	{/each}
</div>
