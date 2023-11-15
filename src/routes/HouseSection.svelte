<!-- src/lib/HouseSection.svelte -->
<script>
	import House1 from '$lib/assets/hjemmet/hjemmet_view1.jpg';
	import House2 from '$lib/assets/hjemmet/hjemmet_view2.jpg';
	import House3 from '$lib/assets/hjemmet/hjemmet_view3.jpg';
	import House4 from '$lib/assets/hjemmet/hjemmet_view4.webp';

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let currentImageIndex = 0;

	/** @type {number | undefined}*/
	let interval;
	const images = [House4, House1, House2, House3];

	function startImageRotation() {
		clearInterval(interval);
		interval = setInterval(() => {
			currentImageIndex = (currentImageIndex + 1) % images.length;
		}, 5000);
	}

	onMount(startImageRotation);

	/** @param {number} index */
	function onIndicatorClick(index) {
		currentImageIndex = index;
		startImageRotation();
	}
</script>

<div class="relative h-screen" {...$$restProps}>
	{#each images as image, index (image)}
		{#if currentImageIndex === index}
			<img
				src={image}
				alt={`Hjemmet view ${index + 1}`}
				class="absolute inset-0 w-full h-full object-cover"
				transition:fade={{ duration: 800 }}
			/>
		{/if}
	{/each}
	<div
		class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-50"
	/>
	<div
		class="absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center p-4 text-center bg-black bg-opacity-50"
	>
		<h2 class="text-5xl text-secondary font-bold mb-4">Velkommen til Askov.dk</h2>
		<p class="text-xl font-medium text-accent">Et kig ind i familien askov og deres hjemmeside</p>
	</div>
	<div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
		{#each images as _, index}
			<button
				class="w-4 h-4 block bg-base-100 rounded-full cursor-pointer"
				class:bg-opacity-100={currentImageIndex === index}
				class:bg-opacity-40={currentImageIndex !== index}
				on:click={() => onIndicatorClick(index)}
				aria-label={`View image ${index + 1}`}
			/>
		{/each}
	</div>
</div>
