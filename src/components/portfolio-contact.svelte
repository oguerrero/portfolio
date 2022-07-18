<script lang="ts">
	let nombre = '',
		email = '',
		asunto = '',
		mensaje = '',
		honey = '';
	let valid = false;
	const validate = () => {
		if (nombre != '' && email != '' && asunto != '' && mensaje != '') {
			valid = true;
		}
	};
	const handleSubmit = async (event: Event) => {
		event.preventDefault();
		const contact = {
			name: nombre,
			email: email,
			subject: asunto,
			honeypot: honey, // if any value received in this field, form submission will be ignored.
			message: mensaje,
			accessKey: '74d5f2cf-200b-416e-a92e-9037c87cac11', // get your access key from https://www.staticforms.xyz
		};
		try {
			const res = await fetch('https://api.staticforms.xyz/submit', {
				method: 'POST',
				body: JSON.stringify(contact),
				headers: { 'Content-Type': 'application/json' },
			});
			const json = await res.json();
			if (json.success) {
				nombre = '';
				email = '';
				asunto = '';
				mensaje = '';
				honey = '';
				alert('Mensaje enviado');
			} else {
				alert('Error al enviar el mensaje');
			}
		} catch (e) {
			alert('Error');
		}
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
					bind:value={nombre}
					on:change={validate}
					required
				/>
				<input type="text" name="honeypot" class="hidden" bind:value={honey} />
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Email"
					class="w-full px-4 py-2 border border-gray-300 rounded-lg my-2"
					bind:value={email}
					on:change={validate}
					required
				/>
				<input
					type="text"
					name="asunto"
					id="asunto"
					placeholder="Asunto"
					class="w-full px-4 py-2 border border-gray-300 rounded-lg my-2"
					bind:value={asunto}
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
					bind:value={mensaje}
					on:change={validate}
					required
				/>
				<input
					type="submit"
					value="enviar"
					class=" {valid === true
						? 'bg-red-600'
						: 'bg-gray-600'} w-full px-4 py-2  text-white rounded-lg my-2 cursor-pointer"
					disabled={!valid}
				/>
			</form>
		</div>
	</article>
</section>
