<script>
	import ThemePicker from './ThemePicker.svelte';
</script>

<div
	class="flex navbar  bg-base-100 bg-opacity-90 shadow-lg rounded-box sticky top-0 mx-4 w-auto max-w-full"
>
	<div class="">
		<a href="/" class="btn btn-ghost text-lg md:text-2xl">Askov</a>
	</div>
	<div class="grow flex justify-center md:justify-end">
		<ThemePicker />
	</div>
	<div class="">
		<a href="onskeliste" class="btn btn-ghost text-lg md:text-2xl">Ønskeliste</a>
	</div>
</div>
