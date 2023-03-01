
<template>
	<div class="overflow-hidden bg-transparent py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
		<div class="relative mx-auto max-w-xl">

			<div class="text-center">
				<h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-gray-50">Get in touch with me
					<span class="text-amber-400">!</span>
				</h2>
			</div>
			<div class="mt-12">
				<form @submit.prevent="formSubmit" id="contact-form"
					class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
					<div>
						<label for="first-name" class="block text-sm font-medium text-gray-50">Name</label>
						<div class="mt-1">
							<input type="text" name="name" id="name" autocomplete="name" v-model="formData.name"
								class="block w-full rounded-md  text-blue-800 border-blue-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
						</div>
					</div>
					<div class="sm:col-span-2">
						<label for="email" class="block text-sm font-medium text-gray-50">Email</label>
						<div class="mt-1">
							<input id="email" name="email" type="email" autocomplete="email"
								v-model="formData.email"
								class="block w-full rounded-md  text-blue-800 border-blue-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
						</div>
					</div>

					<div class="sm:col-span-2">
						<label for="message" class="block text-sm font-medium text-gray-50">Message</label>
						<div class="mt-1">
							<textarea id="message" name="message" rows="6" v-model="formData.message"
								class="block w-full rounded-md  text-blue-800 border-blue-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
						</div>
					</div>

					<div class="sm:col-span-2 mt-4">
						<button type="submit"
							class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-amber-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">Let's
							chat</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';


interface formData {
	name: string,
	email: string,
	message: string,
}

interface formSubmit {
	preventDefault(): void;
}

let formData: formData = reactive({
	name: '',
	email: "",
	message: "",
})

function formSubmit() {
	let formResult
	if (formData?.name.length > 4 && formData?.email.length > 6 && formData?.message.length > 0) {
		console.log({ formData })
	}
	return formResult
}

</script>
