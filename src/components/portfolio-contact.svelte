<script lang="ts">
	let values = {
		name: '',
		email: '',
		affair: '',
		message: '',
	};
	let valid = false;
	const validate = () => {
		if (
			values.name != '' &&
			values.email != '' &&
			values.affair != '' &&
			values.message != ''
		) {
			valid = true;
		}
	};
	const handleSubmit = () => {
		var domain = values.email.substring(values.email.lastIndexOf('@') + 1);
		const validDomains = [
			'yahoo.com',
			'gmail.com',
			'hotmail.com',
			'outlook.com',
			'yahoo.com.mx',
		];
		return alert('Enviado');
	};
</script>

<section
	class="bg-secondary-50 px-8 pt-6 pb-4 md:px-20 scroll-m-16 "
	id="contact"
>
	<article class="md:flex md:flex-row">
		<div class="hidden md:flex">
			<img src="images/contacto.png" alt="" />
		</div>
		<div class="text-center md:mx-8">
			<h1 class="pt-2 pb-2 text-4xl font-bold">Contacto</h1>
			<form on:submit={handleSubmit}>
				<input
					type="text"
					name="nombre"
					id="nombre"
					placeholder="Nombre"
					class="w-full px-4 py-2 border border-gray-300 rounded-lg mt-4 mb-2"
					bind:value={values.name}
					on:change={validate}
					required
				/>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Email"
					class="w-full px-4 py-2 border border-gray-300 rounded-lg my-2"
					bind:value={values.email}
					on:change={validate}
					required
				/>
				<input
					type="text"
					name="asunto"
					id="asunto"
					placeholder="Asunto"
					class="w-full px-4 py-2 border border-gray-300 rounded-lg my-2"
					bind:value={values.affair}
					on:change={validate}
					required
				/>
				<textarea
					name="mensaje"
					id="mensaje"
					cols="30"
					rows="10"
					placeholder="Mensaje"
					class="resize-none w-full px-4 py-2 border border-gray-300 rounded-lg my-2"
					bind:value={values.message}
					on:change={validate}
					required
				/>
				<input
					type="submit"
					value="enviar"
					class=" {valid === true
						? 'bg-red-600'
						: 'bg-gray-600'} w-full px-4 py-2  text-white rounded-lg my-2"
					disabled={!valid}
				/>
			</form>
		</div>
	</article>
</section>
