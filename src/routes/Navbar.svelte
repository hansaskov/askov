<script>
	import ThemePicker from './ThemePicker.svelte';
</script>

<div
	class="flex navbar sticky bottom-4 md:top-4 md:bottom-full mx-4 bg-base-100 bg-opacity-90 shadow-lg rounded-box"
	style="width: calc(100% - 2rem);"
>
	<div>
		<a href="/" class="btn btn-ghost text-lg md:text-2xl">Askov</a>
	</div>
	<div class="grow flex justify-center md:justify-end">
		<ThemePicker />
	</div>
	<div>
		<a href="onskeliste" class="btn btn-ghost text-lg md:text-2xl">Ønskeliste</a>
	</div>
</div>
