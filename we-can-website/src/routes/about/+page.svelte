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
                },

        ];
</script>

<div class="page min-h-screen bg-[var(--color-background)] bg-center bg-no-repeat">
	<div class="w-full min-h-full flex flex-col">
		<div class="max-w-6xl mx-auto w-full px-4 py-8">
			<!-- Our History Section -->
			<div class="mb-8">
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<!-- Banner Image -->
					<div
						class="card bg-[var(--color-surface-500)] rounded-none shadow-xl overflow-hidden border-1 border-[var(--color-surface-500)]"
					>
						<div class="relative min-w-[250px] min-h-[418px]">
							<img
								src="/aboutPage/biorocket winning team photo.jpg"
								alt="Biorocket winning team"
								class="absolute inset-0 w-full h-full object-cover block"
							/>
						</div>
					</div>

					<!-- History Text -->
					<div
						class="card bg-[var(--color-surface-500)] rounded-none shadow-xl p-6 border border-[var(--color-surface-500)] flex flex-col"
					>
						<h2 class="text-3xl font-bold mb-4 text-[--base-font-color]">Our History</h2>
						<p class="text-[--base-font-color] leading-relaxed">
							<!--  history text here -->
							The Western Canada Aerospace Initiative (WCAN) evolved from Bio Rocket, an ambitious engineering
							capstone project started at the University of Calgary in 2024. Originally focused on developing
							Proteus, Alberta's first liquid rocket, the team completed the first static fire test of
							a liquid rocket engine in Alberta in August 2025, and is planning to launch Proteus in Summer
							2027. Recognizing a broader need for technical maturity and knowledge transfer in student
							aerospace projects across Western Canada, we began transforming our project into a non-profit
							organization and founded WCAN in 2026. Our organization is dedicated to providing access
							to equipment, training opportunities, and technical support to student aerospace initiatives
							throughout the region.
						</p>
					</div>
				</div>
			</div>

			<!-- Team Section -->
			<div class="mb-8">
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
					{#each teamMembers as member}
						<div class="flex flex-col items-center relative group">
							<!-- Circular Card / Image with Hover Blurb -->
							<div
								class="relative w-48 h-48 rounded-full overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-105"
							>
								{#if member.image}
									<div
										class="w-full h-full bg-cover bg-center"
										style="background-image: url('{member.image}');"
									></div>
								{:else}
									<svg
										class="absolute inset-0 m-auto w-16 h-16 text-[var(--color-surface-800)]"
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
								{/if}
							</div>

							<!-- Name & Role -->
							<div class="mt-4 text-center">
								<h3
									class="font-semibold text-2xl text-[var(--color-secondary-950)] group-hover:text-[var(--color-secondary-600)] transition-colors duration-200"
								>
									{member.name}
								</h3>
								<p class="text-lg text-[var(--color-secondary-950)] opacity-70">{member.role}</p>
							</div>
							<!-- Hover Bio  -->
							{#if member.bio}
  <div class="absolute top-1/2 left-full transform -translate-y-1/2 ml-2 w-64 p-4 bg-white text-black rounded-lg shadow-lg border-2 border-[var(--color-surface-500)] opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2 z-10 
    [.right-side_&]:left-auto [.right-side_&]:right-full [.right-side_&]:ml-0 [.right-side_&]:mr-2 [.right-side_&]:-translate-x-2">
    {member.bio}
  </div>
{/if}
						</div>
					{/each}
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
