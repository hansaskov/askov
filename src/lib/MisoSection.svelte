<script>
	const images = [
		{ path: 'images/miso_3.jpg', description: 'Miso solbader i vores lænestol' },
		{ path: 'images/miso_1.jpg', description: 'Miso slapper af og kigger på fugle' },
		{
			path: 'images/miso_2.jpg',
			description: 'Miso ligger på gulvet og kigger på kameraet'
		},
		{ path: 'images/miso_4.jpg', description: 'Miso ligger på sofaen' }
	];
</script>

<div class="bg-background text-text py-10" {...$$restProps}>
	<h1 class=" text-3xl lg:text-5xl font-bold text-primary mb-8 text-center">Mød Miso, Vores ynglings kat!</h1>

	{#each images as image, index}
		<div class={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center my-4`}>
			<img
				src={image.path}
				alt="Miso"
				class={`w-[49%] shadow-lg ${index % 2 === 0 ? 'rounded-r-xl' : 'rounded-l-xl'}`}
			/>
			<p class="flex-1 text-md sm:text-xl lg:text-3xl mx-8 text-center text-primary p-4 rounded-lg">
				{image.description}
			</p>
		</div>
	{/each}
</div>
