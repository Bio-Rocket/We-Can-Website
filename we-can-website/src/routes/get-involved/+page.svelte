<script lang="ts">
	import { enhance } from '$app/forms';
	let { form } = $props();
</script>

<div class="page min-h-screen bg-[var(--color-background)] bg-center bg-no-repeat">
	<div class="w-full min-h-full flex flex-col">
		<div class="max-w-6xl mx-auto w-full px-4 py-8">
			<h1 class="text-5xl font-bold text-center text-[var(--color-secondary-950)] mb-10">
				Get Involved
			</h1>

			<!-- Left Side -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-[--base-font-color]">
				<div class="bg-[var(--color-surface-500)] p-8 flex flex-col justify-between">
					<div class="space-y-4">
						<!-- Join Our Team -->
						<div>
							<h2 class="text-3xl font-bold mb-2">Join our Team!</h2>
							<p class="text-base text-[--base-font-color] mb-4">
								Join the mission to elevate Western Canada's aerospace sector. Whether you are a
								student seeking hands-on experience or a seasoned professional looking to mentor and
								advise, we welcome passionate individuals across all disciplines - from technical
								development to business operations. Fill out the contact form and we'll be in touch
								with the next steps for your application!
							</p>
							<button
								type="button"
								class="bg-[var(--color-primary-700)] hover:bg-[var(--color-secondary-700)] text-[--base-font-color] text-sm px-5 py-2 w-full rounded-none"
							>
								Recruitment Form
							</button>
						</div>

						<!-- Sponsor -->
						<div>
							<h2 class="text-3xl font-bold mb-2">Sponsor Us</h2>
							<p class="text-base text-[--base-font-color] mb-4">
								Join our growing network of global industry partners! Your support provides critical
								resources for students to bridge the gap between academic knowledge and applied
								aerospace development. By partnering with us, you help to empower the next
								generation of aerospace leaders, gain access to top talent, and promote your
								organization to a broad network of innovators. View our sponsorship package for more
								information on how your organization can make an impact, or fill out our contact
								form to get started.
							</p>
							<button
								type="button"
								class="bg-[var(--color-primary-700)] hover:bg-[var(--color-secondary-700)] text-[--base-font-color] text-sm px-5 py-2 w-full rounded-none"
							>
								Sponsorship Package
							</button>
						</div>
					</div>
				</div>

				<!--- Right Side --->
				<div
					class="outline outline-2 outline-[var(--color-surface-500)] p-8 flex flex-col justify-between"
				>
					<div class="space-y-4 flex-grow">
						<div>
							<h2 class="text-3xl font-bold mb-2 text-[var(--color-secondary-950)]">
								Work with Us!
							</h2>
							<p class="text-base text-[var(--color-secondary-950)] mb-4">
								Are you looking to take your student aerospace project to the next level? WCAN
								provides technical support, mentorship, and other growth opportunities to
								student-led projects across Western Canada. Tell us about your mission through the
								contact form, and let's explore how we can support your team!
							</p>

							{#if form?.error}
								<p class="text-sm text-red-700 bg-red-100 p-2">{form.error}</p>
							{/if}
							{#if form?.success}
								<p class="text-sm text-green-700 bg-green-100 p-2">
									Your form has been submitted successfully. We'll get back to you soon!
								</p>
							{/if}

							<form method="POST" use:enhance class="mx-auto w-full space-y-2">
								<input type="text" name="website" class="hidden" tabindex="-1" autocomplete="off" />

								<!-- Name -->
								<label class="label">
									<span class="label-text text-base text-[var(--color-secondary-950)]">Name</span>
									<input
										class="input text-sm rounded-none"
										type="text"
										name="name"
										placeholder="Name"
										required
									/>
								</label>

								<!-- Email -->
								<label class="label">
									<span class="label-text text-base text-[var(--color-secondary-950)]">Email</span>
									<input
										class="input text-sm rounded-none"
										type="email"
										name="email"
										placeholder="Email Address"
										required
									/>
								</label>

								<!-- Phone Number -->
								<label class="label">
									<span class="label-text text-base text-[var(--color-secondary-950)]"
										>Phone Number</span
									>
									<input
										class="input text-sm rounded-none"
										type="text"
										name="phone"
										placeholder="Your Phone Number"
									/>
								</label>

								<!-- Message -->
								<label class="label">
									<span class="label-text text-base text-[var(--color-secondary-950)]">Message</span>
									<textarea
										class="textarea input text-sm rounded-none"
										rows="5"
										name="message"
										placeholder="Your Message"
										required
									></textarea>
								</label>

								<button
									type="submit"
									class="bg-[var(--color-primary-700)] hover:bg-[var(--color-secondary-700)] text-sm text-white px-5 py-2 w-full rounded-none"
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.page {
		padding-top: 96px;
		overflow-y: auto;
	}
</style>
