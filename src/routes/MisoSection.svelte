<script>
	import Miso3 from '$lib/assets/miso/miso_3.webp?enhanced';
	import Miso7 from '$lib/assets/miso/miso_7.webp?enhanced';
	import Miso8 from '$lib/assets/miso/miso_8.webp?enhanced';
	import Miso1 from '$lib/assets/miso/miso_1.webp?enhanced';
	import Miso4 from '$lib/assets/miso/miso_4.webp?enhanced';

	/** @type {{ path: string, description: string }[]} */
	const images = [
		{ path: Miso3, description: 'Miso solbader i vores lænestol' },
		{ path: Miso7, description: 'Miso har været hos dyrlægen' },
		{ path: Miso8, description: 'Miso har spillet Mario Kart med familien' },
		{ path: Miso1, description: 'Miso ligger udenfor og ser på fugle' },
		{ path: Miso4, description: 'Miso sover udenfor' }
	];
</script>

<div class="bg-background text-text pt-4 pb-16 md:pt-8" {...$$restProps}>
	<h1 class="text-3xl lg:text-5xl font-bold text-primary mb-8 text-center">
		Giv ekstra kærlighed til Miso
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
