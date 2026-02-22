<script lang="ts">
    let { data } = $props();
    // let proteusPhoto = data.proteusPhoto;
    // let proteusSmallPhoto = data.proteusSmallPhoto
</script>

<div class="page">
	<!-- Hero Section -->
	<section class="relative bg-gradient-to-b from-surface-700 via-surface-800 to-surface-900 overflow-hidden min-h-screen flex items-center justify-center">
    <div class="absolute -top-20 -right-28 w-[300px] md:w-[500px] h-[700px] bg-gradient-to-br from-transparent via-transparent to-primary-900/10 -rotate-15 pointer-events-none"></div>
    <div class="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 py-10 w-full box-border">
        <div class="mb-12">
            <div class="mb-4">
                <h1 class="text-8xl font-bold text-white mt-2 mb-3.5">Proteus</h1>
                <div class="w-[416px] h-[3px] bg-primary-500"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-[2px]">

                <!-- Description Text -->
                <div
                    class="bg-surface-900 p-9 flex flex-col gap-4 relative overflow-hidden transition-colors duration-200
                        before:absolute before:top-0 before:left-0 before:w-[3px] before:h-0 before:bg-primary-500
                        before:transition-[height] before:duration-300 before:ease-in-out
                        hover:before:h-full hover:bg-surface-800"
                >
                    <p class="text-base leading-7 text-white m-0">
                        As the flagship vehicle of the Western Canada Aerospace Initiative, Proteus represents a
                        historic milestone in regional aerospace development, as it is the first liquid rocket
                        developed and tested in Alberta. Proteus began in 2024 as an engineering capstone design
                        project at the University of Calgary. Today, the project continues to serve as a valuable
                        training opportunity for students to gain hands-on experience with advanced aerospace
                        applications. Now targeting a Summer 2027 launch, the Proteus project continues to lead the
                        way in WCAN's efforts to push the technical boundaries of student aerospace projects in
                        Western Canada.
                    </p>
                </div>

                <!-- Banner Image -->
                <div class="overflow-hidden">
                    <img
                        src={data.proteusSmallPhoto}
                        alt="Proteus"
                        class="w-full h-full object-center block"
                    />
                </div>

            </div>
        </div>
    </div>
</section>

	<!-- Specs Section -->
	<section
		class="relative bg-surface-900 overflow-hidden min-h-screen flex items-start"
		style="padding-top: 64px;"
	>
		<div class="relative z-10 max-w-[1200px] mx-auto px-4 md:px-12 py-8 md:py-10 w-full box-border">
			<div class="mb-10">
				<h1 class="text-7xl font-bold text-white mt-2 mb-3.5">Specifications</h1>
				<div class="w-full md:w-[520px] h-[3px] bg-primary-500"></div>
			</div>

			<p class="text-base leading-7 text-white/80 max-w-3xl mb-10">
				A single-stage liquid rocket vehicle leveraging bioethanol and nitrous oxide propulsion to
				demonstrate advanced aerospace capabilities developed by students in Western Canada.
			</p>

			<!-- Key Stats -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-primary-700/40 mb-[32px]">
				<div class="bg-surface-900 p-8 flex flex-col gap-2">
					<div class="text-6xl font-bold text-white">10,000 ft</div>
					<div class="text-sm text-white/50 uppercase tracking-widest">Target Altitude</div>
				</div>
				<div class="bg-surface-900 p-8 flex flex-col gap-2">
					<div class="text-6xl font-bold text-white">5 kN</div>
					<div class="text-sm text-white/50 uppercase tracking-widest">Thrust</div>
				</div>
				<div class="bg-surface-900 p-8 flex flex-col gap-2">
					<div class="text-6xl font-bold text-white">2027</div>
					<div class="text-sm text-white/50 uppercase tracking-widest">Planned Launch</div>
				</div>
			</div>

			<!-- Technical Specs Grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-primary-700/40">
				<div
					class="bg-surface-900 p-6 flex flex-col gap-1
                            relative overflow-hidden transition-colors duration-200
                            before:absolute before:top-0 before:left-0 before:w-[3px] before:h-0 before:bg-primary-500
                            before:transition-[height] before:duration-300 before:ease-in-out
                            hover:before:h-full hover:bg-surface-800"
				>
					<span class="text-md text-white/50 uppercase tracking-widest">Top Speed</span>
					<span class="text-white text-base">Mach 1 (1235 km/h)</span>
				</div>
				<div
					class="bg-surface-900 p-6 flex flex-col gap-1
                            relative overflow-hidden transition-colors duration-200
                            before:absolute before:top-0 before:left-0 before:w-[3px] before:h-0 before:bg-primary-500
                            before:transition-[height] before:duration-300 before:ease-in-out
                            hover:before:h-full hover:bg-surface-800"
				>
					<span class="text-md text-white/50 uppercase tracking-widest">Engine Thrust</span>
					<span class="text-white text-base">5 kN (1,100 lbf)</span>
				</div>
				<div
					class="bg-surface-900 p-6 flex flex-col gap-1
                            relative overflow-hidden transition-colors duration-200
                            before:absolute before:top-0 before:left-0 before:w-[3px] before:h-0 before:bg-primary-500
                            before:transition-[height] before:duration-300 before:ease-in-out
                            hover:before:h-full hover:bg-surface-800"
				>
					<span class="text-md text-white/50 uppercase tracking-widest">Dry Weight</span>
					<span class="text-white text-base">56 kg (123 lb)</span>
				</div>
				<div
					class="bg-surface-900 p-6 flex flex-col gap-1
                            relative overflow-hidden transition-colors duration-200
                            before:absolute before:top-0 before:left-0 before:w-[3px] before:h-0 before:bg-primary-500
                            before:transition-[height] before:duration-300 before:ease-in-out
                            hover:before:h-full hover:bg-surface-800"
				>
					<span class="text-md text-white/50 uppercase tracking-widest">Propellants</span>
					<span class="text-white text-base">Bioethanol (Fuel) and Nitrous Oxide (Oxidizer)</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Interactive Rocket Diagram Section -->
	<section
		class="page min-h-screen py-20 bg-surface-900 overflow-hidden hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
	>
		<div class="max-w-6xl mx-auto px-2">
			<div class="mb-32 relative z-10">
                <h2 class="text-7xl font-bold text-[--base-font-color] mt-2 mb-3.5">Architecture</h2>
                <div class="w-[480px] h-[3px] bg-primary-500"></div>
            </div>

			<div class="relative flex justify-center items-center w-full" style="height: 1000px;">
				<!-- Rocket Image -->
				<img
					src={data.proteusPhoto}
					alt="Proteus Architecture"
					class="h-full w-auto object-contain"
					style="transform: rotate(90deg);"
				/>

				<!-- Recovery -->
				<button class="component-label top-[10%] left-[52.2%]">
					<div class="label-line"></div>
					<div class="label-box label-text-right">
						<h4 class="label-title font-bold text-lg">Recovery</h4>
						<p class="label-description text-sm">
							A dual-deployment recovery system provides a controlled descent, ensuring safe
							recovery of the vehicle.
						</p>
					</div>
				</button>
				<!-- Avionics -->
				<button class="component-label top-[30%] left-[6.5%]">
					<div class="label-line left-line"></div>
					<div class="label-box label-text-left left-text">
						<h4 class="label-title font-bold text-lg">Avionics</h4>
						<p class="label-description text-sm">
							Custom flight hardware and software enable 1 kHz sensor data logging and real-time
							telemetry, facilitating mission-critical monitoring and control of the vehicle.
						</p>
					</div>
				</button>
				<!-- Pressurant -->
				<button class="component-label top-[50%] left-[52.2%]">
					<div class="label-line"></div>
					<div class="label-box label-text-right">
						<h4 class="label-title font-bold text-lg">Pressurant</h4>
						<p class="label-description text-sm">
							A high-pressure nitrogen system, regulated down from 6000 psi, is used to maintain
							constant propellant pressure throughout the engine burn.
						</p>
					</div>
				</button>
				<!-- Propellant -->
				<button class="component-label top-[70%] left-[6.5%]">
					<div class="label-line left-line"></div>
					<div class="label-box label-text-left left-text">
						<h4 class="label-title font-bold text-lg">Propellant</h4>
						<p class="label-description text-sm">
							Bioethanol and nitrous oxide are stored in a tube-in-tube tank, minimizing external
							plumbing and leading to a significant reduction in overall vehicle length.
						</p>
					</div>
				</button>
				<!-- Engine -->
				<button class="component-label top-[85%] left-[52.2%]">
					<div class="label-line"></div>
					<div class="label-box label-text-right">
						<h4 class="label-title font-bold text-lg">Engine</h4>
						<p class="label-description text-sm">
							Propellants are introduced to the combustion chamber through a metal 3D-printed
							injector manifold and a custom-designed injector. The engine generates 5 kN (1,100
							lbf) of force, carrying the vehicle to its target altitude of 10,000 ft (3048 m).
						</p>
					</div>
				</button>
			</div>
		</div>
	</section>
</div>

<style>
	.page {
		width: 100%;
		overflow-y: auto;
	}

	.component-label {
		position: absolute;
		display: flex;
		align-items: flex-start;
		cursor: pointer;
		z-index: 10;
		gap: 0;
		overflow: hidden;
	}

	.label-title {
		color: white;
	}

	.left-line {
		order: -1;
	}

	.label-box {
		background-color: transparent;
		border: 1px solid var(--color-primary-500);
		padding: 12px 16px;
		min-width: 220px;
		max-width: 350px;
		text-align: left;
		color: #ffffff;
		transition: all 0.3s ease;
		white-space: normal;
		overflow: hidden;
		align-self: flex-start;
	}

	.label-text-left {
		order: -2;
	}

	.label-description {
		max-height: 0;
		opacity: 0;
		overflow: hidden;
		transition:
			max-height 0.3s ease,
			opacity 0.3s ease,
			margin-top 0.3s ease;
		margin-top: 0;
	}

	.component-label:hover .label-description {
		max-height: 200px;
		opacity: 1;
		margin-top: 8px;
	}

	.label-line::before {
		content: '';
		display: block;
		width: 128px;
		height: 2px;
		border-radius: 50%;
		background-color: var(--color-primary-500);
	}

	.left-line::before {
		margin-left: auto;
	}
</style>
