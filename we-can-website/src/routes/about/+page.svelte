<script>
	const teamMembers = [
		{
			name: 'Lukas Kobler',
			role: 'Project Manager',
			bio: 'Lukas is studying mechanical engineering at the University of Calgary and has been developing rocket propulsion systems for SOAR for over 5 years and led the development of Dracarys I, the most powerful hybrid rocket motor ever flown, in Alberta.',
			image: '/aboutPage/lukas profile picture.jpg'
		},

		{
			name: 'Jayden Sorensen',
			role: 'Controls Lead',
			bio: 'After 3 years with SOAR and 24 months of aerospace and research internship experience, Jayden is ready to design, integrate, and test systems for data acquisition and analysis, communication, controls, and much more.',
			image: '/aboutPage/jayden.CSSQOCL8.png'
		},

		{
			name: 'Jesse Gerbrandt',
			role: 'Software Lead',
			bio: 'With 2 years of avionics experience on SOAR, Jesse has developed flight and safety-critical software, excelling in embedded systems, communication, and GUI programming, ensuring performance and reliability.',
			image: '/aboutPage/jesse.lLHeNc30.png'
		}
	];
</script>

<div
	class="relative bg-gradient-to-b from-surface-700 via-surface-800 to-surface-900 border-t border-primary-700/40 overflow-hidden min-h-screen flex items-start"
	style="padding-top: 64px;"
>
	<div
		class="absolute -top-20 -right-28 w-[500px] h-[700px] bg-gradient-to-br from-transparent via-transparent to-primary-900/10 -rotate-15 pointer-events-none"
	></div>

	<div class="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 py-10 w-full box-border">
		<!-- ── OUR HISTORY ─────────────────────────────────────────────── -->
		<div class="mb-12">
			<div class="mb-4">
				<h2 class="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white mt-2 mb-3.5">Our History</h2>
				<div class="w-[416px] h-[3px] bg-primary-500"></div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-primary-700/40">
				<!-- Banner Image -->
				<div class="bg-surface-900 overflow-hidden relative min-h-[380px]">
					<img
						src="/aboutPage/biorocket winning team photo.jpg"
						alt="Biorocket winning team"
						class="absolute inset-0 w-full h-full object-cover block"
					/>
				</div>

				<!-- History Text — styled like a stat card -->
				<div
					class="bg-surface-900 p-9 flex flex-col gap-4 relative overflow-hidden transition-colors duration-200
					       before:absolute before:top-0 before:left-0 before:w-[3px] before:h-0 before:bg-primary-500
					       before:transition-[height] before:duration-300 before:ease-in-out
					       hover:before:h-full hover:bg-surface-800"
				>
					<p class="text-base leading-7 text-white m-0">
						The Western Canada Aerospace Initiative (WCAN) evolved from Bio Rocket, an ambitious
						engineering capstone project started at the University of Calgary in 2024. Originally
						focused on developing Proteus, Alberta's first liquid rocket, the team completed the
						first static fire test of a liquid rocket engine in Alberta in August 2025, and is
						planning to launch Proteus in Summer 2027. Recognizing a broader need for technical
						maturity and knowledge transfer in student aerospace projects across Western Canada, we
						began transforming our project into a non-profit organization and founded WCAN in 2026.
						Our organization is dedicated to providing access to equipment, training opportunities,
						and technical support to student aerospace initiatives throughout the region.
					</p>
				</div>
			</div>
		</div>

		<!-- ── TEAM ───────────────────────────────────────────────────── -->
		<div>
			<div class="mb-6">
				<h2 class="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white mt-2 mb-3.5">Our Team</h2>
				<div class="w-[332px] h-[3px] bg-primary-500"></div>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
				{#each teamMembers as member}
					<div class="flex flex-col items-center relative group">
						<!-- Circular Card / Image with Hover Blurb -->
						<div
							class="relative w-48 h-48 overflow-hidden rounded-full shadow-xl transition-transform duration-300 group-hover:scale-105"
						>
							{#if member.image}
								<div
									class="w-full h-full bg-cover bg-center"
									style="background-image: url('{member.image}');"
								></div>
							{:else}
								<div class="w-full h-full bg-surface-700 flex items-center justify-center">
									<svg
										class="w-16 h-16 text-primary-500/40"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
											d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										/>
									</svg>
								</div>
							{/if}
						</div>

						<!-- Name & Role -->
						<div class="mt-4 text-center">
							<h3
								class="font-semibold text-2xl text-white group-hover:text-primary-500 transition-colors duration-200"
							>
								{member.name}
							</h3>
							<p class="text-lg text-white/50">{member.role}</p>
						</div>

						<!-- Hover Bio -->
						{#if member.bio}
							<div
								class="absolute top-1/2 left-full transform -translate-y-1/2 ml-2 w-64 p-4 bg-surface-900 text-white/80 text-sm leading-relaxed border border-primary-500/60 shadow-lg opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2 z-10
								[.right-side_&]:left-auto [.right-side_&]:right-full [.right-side_&]:ml-0 [.right-side_&]:mr-2 [.right-side_&]:-translate-x-2"
							>
								{member.bio}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
