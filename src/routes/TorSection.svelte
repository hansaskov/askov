<script>
	import Tor8 from '$lib/assets/tor/tor_8.jpg?enhanced';
	import Tor7 from '$lib/assets/tor/tor_7.jpg?enhanced';
	import Tor6 from '$lib/assets/tor/tor_6.jpg?enhanced';
	import Tor4 from '$lib/assets/tor/tor_4.webp?enhanced';
	import Tor3 from '$lib/assets/tor/tor_3.jpg?enhanced';
	import Tor2 from '$lib/assets/tor/tor_2.jpg?enhanced';

	/** @type {{ path: string, description: string }[]} */
	const images = [
		{ path: Tor8, description: 'Tor elsker at sove, især med far' },
		{ path: Tor2, description: 'Tor er altid sulten' },
		{ path: Tor3, description: 'Og elsker far. Det er hans kat' },
		{ path: Tor4, description: 'Tor og miso er også venner' },
		{ path: Tor6, description: 'De kan godt dele sengen, men ikke alt for tæt' },
		{ path: Tor7, description: 'Mor er også en stor fan' },
	];
</script>

<div class="bg-background text-text" {...$$restProps}>
	<h1 class="text-3xl lg:text-5xl font-bold text-primary mb-8 text-center">
		Mød Tor, Fars nye killing!
	</h1>

	{#each images as { path, description }, index}
		<div class={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center my-4`}>
			<div class={`w-[49%] `}>
				<enhanced:img src={path} alt={description} class={`shadow-lg ${index % 2 === 0 ? 'rounded-r-xl' : 'rounded-l-xl'}`} />
			</div>
			<p class="flex-1 text-md sm:text-xl lg:text-3xl mx-8 text-center text-primary p-4 rounded-lg">
				{description}
			</p>
		</div>
	{/each}
</div>
