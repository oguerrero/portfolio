<script>
	let hidden = true;
	const toogleMenu = () => {
		hidden = !hidden;
	};
</script>

<nav
	class="{hidden === true ?  '' : 'bg-primary-400'} sticky top-0 bg-white md:bg-white shadow-sm shadow-primary-200"
>
	<div class="max-w-6xl mx-auto px-4">
		<div class="flex md:justify-around">
			<div class="flex space-x-7 md:space-x-40">
				<div>
					<a
						href="https://github.com/oguerrero/portfolio"
						class="{hidden === true ? '' : "hidden"} flex items-center py-4 px-2 "
					>
						<span
							class="font-semibold text-gray-600 text-lg hover:text-primary-500"
							>Oscar Guerrero</span
						>
					</a>
				</div>
				<div class="hidden md:flex items-center">
					<ul class="flex flex-row gap-6 ">
						<li class="nav-item"><a href="#aboutMe">Sobre mí</a></li>
						<li class="nav-item"><a href="#skills">Skills</a></li>
						<li class="nav-item"><a href="#soft">Soft Skills</a></li>
						<li class="nav-item"><a href="#projects">Proyectos</a></li>
						<li class="nav-item"><a href="#contact">Contacto</a></li>
					</ul>
				</div>
				<div class="md:hidden flex items-center">
					<button
						on:click={toogleMenu}
						class="outline-none mobile-menu-button hover:bg-primary-100 rounded-full p-2"
					>
						<svg
							class="w-6 h-6 text-gray-900"
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
				<div class="{hidden === false ? '' : "hidden"} justify-start mobile-menu none md:hidden">
					<ul class="grid grid-cols-3 grid-rows-2">
						<li class="nav-item text-white"><a href="#aboutMe">Sobre mí</a></li>
						<li class="nav-item text-white"><a href="#skills">Skills</a></li>
						<li class="nav-item text-white"><a href="#soft">Soft Skills</a></li>
						<li class="nav-item text-white"><a href="#projects">Proyectos</a></li>
						<li class="nav-item text-white"><a href="#contact">Contacto</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</nav>
