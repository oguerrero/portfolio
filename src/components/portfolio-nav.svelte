<script>
	let hiddenMenu = "hidden"
    let hiddenName = ""
    let mobileMenu = ""
    const toogleMenu = () => {
        hiddenMenu = hiddenMenu === "hidden" ? "" : "hidden"
        hiddenName = hiddenName === "hidden" ? "" : "hidden"
        mobileMenu = mobileMenu === "bg-primary-400" ? "" : "bg-primary-400"
    }
</script>

<nav class="{mobileMenu} md:bg-white shadow-sm shadow-primary-200">
	<div class="max-w-6xl mx-auto px-4">
		<div class="flex md:justify-around">
			<div class="flex space-x-7 md:space-x-40">
				<div>
					<a href="github.com" class="{hiddenName} flex items-center py-4 px-2 ">
						<span class="font-semibold text-gray-600 text-lg hover:text-primary-500"
							>Oscar Guerrero</span
						>
					</a>
				</div>
				<div class="hidden md:flex items-center">
					<ul class="flex flex-row gap-6 ">
						<li class="nav-item">Sobre mí</li>
						<li class="nav-item">Skills</li>
						<li class="nav-item">Soft Skills</li>
						<li class="nav-item">Portafolio</li>
						<li class="nav-item">Contacto</li>
					</ul>
				</div>
				<div class="md:hidden flex items-center">
					<button on:click={toogleMenu} class="outline-none mobile-menu-button hover:bg-primary-100 rounded-full p-2">
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
				<div class="{hiddenMenu} justify-start mobile-menu none md:hidden">
					<ul class="">
						<li class="nav-item text-white">Sobre mí</li>
						<li class="nav-item text-white">Skills</li>
						<li class="nav-item text-white">Soft Skills</li>
						<li class="nav-item text-white">Portafolio</li>
						<li class="nav-item text-white">Contacto</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</nav>
