<script lang="ts">
	import { enhance } from '$app/forms';
	let { form } = $props();
</script>

<div
	class="relative bg-gradient-to-b from-surface-700 via-surface-800 to-surface-900 border-t border-primary-700/40 overflow-hidden min-h-screen flex items-start"
	style="padding-top: 64px;"
>
	<!-- Decorative gradient blob -->
	<div
		class="absolute -top-20 -right-28 w-[300px] md:w-[500px] h-[700px] bg-gradient-to-br from-transparent via-transparent to-primary-900/10 -rotate-15 pointer-events-none"
	></div>

	<div class="relative z-10 max-w-[1200px] mx-auto px-4 md:px-12 py-8 md:py-10 w-full box-border">
		<!-- Heading -->
		<div class="mb-10">
			<h1 class="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white mt-2 mb-3.5">Get Involved</h1>
			<div class="w-full md:w-[380px] h-[3px] bg-primary-500"></div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-primary-700/40">
			<!-- Left Side -->
			<div class="bg-surface-900 p-5 md:p-9 flex flex-col gap-8 justify-between">
				<div class="flex flex-col gap-8">
					<!-- Join Our Team -->
					<div
						class="flex flex-col gap-4 relative overflow-hidden transition-colors duration-200
						before:absolute before:top-0 before:left-0 before:w-[3px] before:h-0 before:bg-primary-500
						before:transition-[height] before:duration-300 before:ease-in-out
						hover:before:h-full hover:bg-surface-800 p-4 -m-4"
					>
						<h2 class="text-[clamp(1.5rem,3vw,2rem)] font-bold text-white">Join our Team!</h2>
						<p class="text-base leading-7 text-white/80">
							Join the mission to elevate Western Canada's aerospace sector. Whether you are a
							student seeking hands-on experience or a seasoned professional looking to mentor and
							advise, we welcome passionate individuals across all disciplines — from technical
							development to business operations. Fill out the contact form and we'll be in touch
							with the next steps for your application!
						</p>
						<button
							type="button"
							class="bg-primary-700 hover:bg-primary-600 text-white text-sm px-5 py-2 w-full transition-colors duration-200"
						>
							Recruitment Form
						</button>
					</div>

					<!-- Divider -->
					<div class="h-[1px] bg-primary-700/40"></div>

					<!-- Sponsor Us -->
					<div
						class="flex flex-col gap-4 relative overflow-hidden transition-colors duration-200
						before:absolute before:top-0 before:left-0 before:w-[3px] before:h-0 before:bg-primary-500
						before:transition-[height] before:duration-300 before:ease-in-out
						hover:before:h-full hover:bg-surface-800 p-4 -m-4"
					>
						<h2 class="text-[clamp(1.5rem,3vw,2rem)] font-bold text-white">Sponsor Us</h2>
						<p class="text-base leading-7 text-white/80">
							Join our growing network of global industry partners! Your support provides critical
							resources for students to bridge the gap between academic knowledge and applied
							aerospace development. By partnering with us, you help to empower the next generation
							of aerospace leaders, gain access to top talent, and promote your organization to a
							broad network of innovators. View our sponsorship package for more information, or
							fill out our contact form to get started.
						</p>

						<button
							type="button"
							class="bg-primary-700 hover:bg-primary-600 text-white text-sm px-5 py-2 w-full transition-colors duration-200 mt-2"
						>
							Sponsorship Package
						</button>
					</div>
				</div>
			</div>

			<!-- Right Side — Contact Form -->
			<div class="bg-surface-900 p-5 md:p-9 flex flex-col gap-6 min-h-full">
				<!-- Top content grows -->
				<div class="flex flex-col gap-4 flex-1">
					<div class="flex flex-col gap-4">
						<h2 class="text-[clamp(1.5rem,3vw,2rem)] font-bold text-white">Work with Us!</h2>
						<p class="text-base leading-7 text-white/80">
							Are you looking to take your student aerospace project to the next level? WCAN
							provides technical support, mentorship, and other growth opportunities to student-led
							projects across Western Canada. Tell us about your mission and let's explore how we
							can support your team!
						</p>
					</div>

					{#if form?.error}
						<p class="text-sm text-red-300 bg-red-950/40 border border-red-500/30 p-3">
							{form.error}
						</p>
					{/if}
					{#if form?.success}
						<p class="text-sm text-green-300 bg-green-950/40 border border-green-500/30 p-3">
							Your form has been submitted successfully. We'll get back to you soon!
						</p>
					{/if}

					<form id="contactForm" method="POST" use:enhance class="w-full space-y-4">
						<!-- Honeypot -->
						<input type="text" name="website" class="hidden" tabindex="-1" autocomplete="off" />

						<label class="flex flex-col gap-1">
							<span class="text-sm text-white uppercase tracking-widest">Name</span>
							<input
								class="bg-surface-800 border border-primary-700/40 text-white text-sm px-4 py-2 outline-none focus:border-primary-500 transition-colors duration-200 rounded-none w-full"
								type="text"
								name="name"
								placeholder="Your Name"
								required
							/>
						</label>

						<label class="flex flex-col gap-1">
							<span class="text-sm text-white uppercase tracking-widest">Email</span>
							<input
								class="bg-surface-800 border border-primary-700/40 text-white text-sm px-4 py-2 outline-none focus:border-primary-500 transition-colors duration-200 rounded-none w-full"
								type="email"
								name="email"
								placeholder="Your Email Address"
								required
							/>
						</label>

						<label class="flex flex-col gap-1">
							<span class="text-sm text-white uppercase tracking-widest">Phone Number</span>
							<input
								class="bg-surface-800 border border-primary-700/40 text-white text-sm px-4 py-2 outline-none focus:border-primary-500 transition-colors duration-200 rounded-none w-full"
								type="tel"
								name="phone"
								placeholder="Your Phone Number"
							/>
						</label>

						<label class="flex flex-col gap-1">
							<span class="text-sm text-white uppercase tracking-widest">Message</span>
							<textarea
								class="bg-surface-800 border border-primary-700/40 text-white text-sm px-4 py-2 outline-none focus:border-primary-500 transition-colors duration-200 rounded-none w-full resize-none"
								rows="5"
								name="message"
								placeholder="Your Message"
								required
							></textarea>
						</label>
					</form>
				</div>

				<!-- Bottom pinned -->
				<button
					type="submit"
					form="contactForm"
					class="bg-primary-700 hover:bg-primary-600 text-white text-sm px-5 py-2 w-full transition-colors duration-200"
				>
					Submit
				</button>
			</div>
		</div>
	</div>
</div>
