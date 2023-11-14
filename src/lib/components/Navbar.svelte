<div
class="flex justify-between navbar bg-base-100 bg-opacity-90 shadow-lg rounded-box sticky top-0 mx-4 w-auto max-w-full"
>
<div>
    <a href="/" class="btn btn-ghost text-lg md:text-2xl">Askov</a>
</div>
<div>
    <div class="dropdown">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label tabindex="0" class="btn text-lg md:text-2xl btn-ghost m-1">
            Tema
            <svg
                width="12px"
                height="12px"
                class="h-2 w-2 fill-current opacity-60 inline-block"
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
            <li>
                <input
                    type="radio"
                    name="theme-dropdown"
                    class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Forår"
                    value="default"
                />
            </li>
            <li>
                <input
                    type="radio"
                    name="theme-dropdown"
                    class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Efterår"
                    value="october"
                />
            </li>
        </ul>
    </div>
    <a href="onskeliste" class="btn btn-ghost text-lg md:text-2xl">Ønskeliste</a>
</div>
</div>