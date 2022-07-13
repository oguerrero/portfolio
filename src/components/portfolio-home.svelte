<script>
	let urlCv = "https://drive.google.com/file/d/1FVnovE9z2Gj9pLf_l732UH4tZ3ozcubS/view?usp=sharing";
	const getCV = () => {
		window.open(urlCv, "_blank");
	};
</script>

<section class="mx-auto px-8 py-2 md:px-20 grid md:grid-cols-2">
	<article class="row-start-2 md:row-auto">
		<h1 class="text-3xl text-center md:pt-16">
			Hola, mi nombre es <strong>Oscar Guerrero</strong>
			y soy un Fullstack Developer.
		</h1>
		<p class="pt-2 text-lg md:px-20 text-center">
			Me encanta aprender nuevas tecnologías que faciliten y agilicen el
			desarrollo de aplicaciones web.<br /> Actualmente estoy aprendiendo a usar
			<strong>Svelte</strong> para crear aplicaciones web.
		</p>
		<p class="text-center pt-4">
			<a href="https://github.com/oguerrero" class="links-cv">
				<img src="images/github.svg" alt="" class="w-6 h-6 inline-block">
			</a>
			<a
				href="https://www.linkedin.com/in/oscar-guerrero-b444941ba/"
				class="links-cv">
				<img src="images/linkedin.svg" alt="" class="w-6 h-6 inline-block">
			</a>
			<a href="https://twitter.com/OscarGuerrrox2" class="links-cv">
				<img src="images/twitter.svg" alt="" class="w-6 h-6 inline-block">
			</a>
			<button class="btn-cv mt-5 md:mt-0" on:click={getCV} >CV</button>
		</p>
	</article>
	<article class="justify-center text-center">
		<img src="/images/logo.jpg" alt="logo" class="logo" />
	</article>
</section>
