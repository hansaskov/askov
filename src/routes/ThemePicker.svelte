<script>
	const themes = { spring: 'Forår', fall: 'Efterår' };
</script>

<div class="dropdown">
	<!-- dropdown content -->
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label tabindex="0" class="btn text-lg md:text-2xl btn-ghost pr-2.5 flex-nowrap">
		Tema
		<svg
			width="8px"
			height="8px"
			class="h-2 w-2 fill-current opacity-50 inline-block"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 2048 2048"
			><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" /></svg
		>
	</label>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<ul
		tabindex="0"
		class="dropdown-content z-[1] p-2 shadow-xl bg-base-100 bg-opacity-90 rounded-box w-44"
	>
		{#each Object.entries(themes) as [key, val]}
			<li>
				<input
					type="radio"
					name="theme-dropdown"
					class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
					aria-label={val}
					value={key}
				/>
			</li>
		{/each}
	</ul>
</div>
