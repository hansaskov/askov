<script>
	/** @type {{ path: string, description: string }[]} */
	const images = [
		{ path: 'images/miso_3.jpg', description: 'Miso solbader i vores lænestol' },
		{ path: 'images/miso_7.jpg', description: 'Miso har været hos dyrlægen' },
		{ path: 'images/miso_8.jpg', description: 'Miso har spillet Mario Kart med familien' },
		{ path: 'images/miso_1.jpg', description: 'Miso ligger udenfor og ser på fugle' },
		{ path: 'images/miso_5.JPG', description: 'Miso sover udenfor' }
	];
</script>

<div class="bg-background text-text py-10" {...$$restProps}>
	<h1 class="text-3xl lg:text-5xl font-bold text-primary mb-8 text-center">
		Mød Miso, vores yndlingskat!
	</h1>

	{#each images as { path, description }, index}
		<div class={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center my-4`}>
			<img
				src={path}
				alt="Miso"
				class={`w-[49%] shadow-lg ${index % 2 === 0 ? 'rounded-r-xl' : 'rounded-l-xl'}`}
			/>
			<p class="flex-1 text-md sm:text-xl lg:text-3xl mx-8 text-center text-primary p-4 rounded-lg">
				{description}
			</p>
		</div>
	{/each}
</div>
