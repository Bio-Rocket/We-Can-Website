<script lang="ts">
    import { Dialog, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="page bg-[var(--color-background)]">
    <!-- Hero Section -->
    <section class="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0 z-0">
            <img 
                src="/Proteus-Cross-Section.png" 
                alt="Proteus Cross Section" 
                class="w-full h-full object-contain opacity-20"
            />
        </div>
        
        <!-- Hero Content -->
        <div class="relative z-10 max-w-4xl mx-auto px-8 text-center">
            <h1 class="text-6xl md:text-8xl font-bold text-[var(--color-secondary-950)] mb-6">
                Proteus
            </h1>
            <p class="text-xl md:text-xl text-[var(--color-secondary-950)] mb-8 leading-relaxed">
                As the flagship vehicle of the Western Canada Aerospace Initiative, Proteus represents
				 a historic milestone in regional aerospace development, as it is the first liquid rocket
				  developed and tested in Alberta. Proteus began in 2024 as an engineering capstone design
				   project at the University of Calgary. Today, the project continues to serve as a valuable
				    training opportunity for students to gain hands-on experience with advanced aerospace
					 applications. Now targeting a Summer 2027 launch, the Proteus project continues to lead
					  the way in WCAN's efforts to push the technical boundaries of student aerospace projects
					   in Western Canada.
            </p>
        </div>
    </section>

    <!-- Specs Overview Section -->
    <section class="page min-h-screen flex items-center justify-center py-20 bg-[var(--color-surface-500)]">
        <div class="max-w-6xl mx-auto px-8">
            <h2 class="text-5xl font-bold text-[--base-font-color] mb-12 text-center">
                Proteus
            </h2>
            <p class="text-lg text-[--base-font-color] mb-16 text-center max-w-3xl mx-auto">
                A single-stage liquid rocket vehicle leveraging bioethanol and nitrous oxide propulsion 
                to demonstrate advanced aerospace capabilities developed by students in Western Canada.
            </p>
            
            <!-- Key Stats -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div class="text-center p-6 bg-[var(--color-background)] shadow-xl">
                    <div class="text-5xl font-bold text-[--base-font-color] mb-2">10,000 ft</div>
                    <div class="text-lg text-[--base-font-color]">Target Altitude</div>
                </div>
                <div class="text-center p-6 bg-[var(--color-background)] shadow-xl">
                    <div class="text-5xl font-bold text-[--base-font-color] mb-2">5 kN</div>
                    <div class="text-lg text-[--base-font-color]">Thrust</div>
                </div>
                <div class="text-center p-6 bg-[var(--color-background)] shadow-xl">
                    <div class="text-5xl font-bold text-[--base-font-color] mb-2">2027</div>
                    <div class="text-lg text-[--base-font-color]">Planned Launch</div>
                </div>
            </div>

            <!-- Technical Specs -->
            <div class="bg-[var(--color-background)] p-8 shadow-xl">
                <h3 class="text-2xl font-bold text-[--base-font-color] mb-6">Specifications</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-[--base-font-color]">
                    <div class="border-l-4 border-[var(--color-primary-700)] pl-4">
                        <div class="font-semibold text-[--base-font-color]">Top Speed:</div>
                        <div>Mach 1 (1235 km/h)</div>
                    </div>
                    <div class="border-l-4 border-[var(--color-primary-700)] pl-4">
                        <div class="font-semibold text-[--base-font-color]">Engine Thrust:</div>
                        <div>5 kN (1,100 lbf)</div>
                    </div>
                    <div class="border-l-4 border-[var(--color-primary-700)] pl-4">
                        <div class="font-semibold text-[--base-font-color]">Dry Weight:</div>
                        <div>56 kg (123 lb)</div>
                    </div>
                    <div class="border-l-4 border-[var(--color-primary-700)] pl-4">
                        <div class="font-semibold text-[--base-font-color]">ADD LIKE SIZE OR SOMETHING:</div>
                        <div>TBD</div>
                    </div>
                    <div class="border-l-4 border-[var(--color-primary-700)] pl-4 md:col-span-2">
                        <div class="font-semibold text-[--base-font-color]">Propellants:</div>
                        <div>Bioethanol (Fuel) and Nitrous Oxide (Oxidizer)</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
<!-- Interactive Rocket Diagram Section -->
<section class="page min-h-screen py-20 bg-[var(--color-background)]">
    <div class="max-w-6xl mx-auto px-8">
        <h2 class="text-4xl font-bold text-[--base-font-color] mb-12 text-center">
            Vehicle Architecture
        </h2>
        
        <div class="relative flex justify-center items-center w-full" style="height: 1000px;">
            <!-- Rocket Image -->
            <img 
                src="/Proteus-Cross-Section.png" 
                alt="Proteus Architecture" 
                class="h-full w-auto object-contain"
                style="transform: rotate(90deg);"
            />
            
            <!-- Recovery -->
            <button class="component-label top-[10%] left-[57%]">
                <div class="label-line"></div>
                <div class="label-box label-text-right">
                    <h4 class="label-title font-bold text-lg">Recovery</h4>
                    <p class="label-description text-sm">A dual-deployment recovery system provides
                         a controlled descent, ensuring safe recovery of the vehicle.
                    </p>
                </div>
            </button>
            <!-- Avionics -->
            <button class="component-label top-[30%] left-[10%]">
                <div class="label-line left-line"></div>
                <div class="label-box label-text-left left-text">
                    <h4 class="label-title font-bold text-lg">Avionics</h4>
                    <p class="label-description text-sm">Custom flight hardware and software enable 1 kHz sensor 
                        data logging and real-time telemetry, facilitating mission-critical monitoring
                         and control of the vehicle.
                    </p>
                </div>
            </button>
            <!-- Pressurant -->
            <button class="component-label top-[50%] left-[57%]">
                <div class="label-line"></div>
                <div class="label-box label-text-right">
                    <h4 class="label-title font-bold text-lg">Pressurant</h4>
                    <p class="label-description text-sm">A high-pressure nitrogen system, 
                        regulated down from 6000 psi, is used to maintain
                         constant propellant pressure throughout the engine
                          burn.
                    </p>
                </div>
            </button>
            <!-- Propellant -->
            <button class="component-label top-[70%] left-[10%]">
                <div class="label-line left-line"></div>
                <div class="label-box label-text-left left-text">
                    <h4 class="label-title font-bold text-lg ">Propellant</h4>
                    <p class="label-description text-sm">Bioethanol and nitrous oxide are stored in a
                         tube-in-tube tank, minimizing external plumbing and leading
                          to a significant reduction in overall vehicle length.
                    </p>
                </div>
            </button>
            <!-- Engine -->
            <button class="component-label top-[85%] left-[57%]">
                <div class="label-line"></div>
                <div class="label-box label-text-right">
                    <h4 class="label-title font-bold text-lg">Engine</h4>
                    <p class="label-description text-sm">Propellants are introduced to the combustion chamber
                         through a metal 3D-printed injector manifold and a custom-designed injector.
                          The engine generates 5 kN (1,100 lbf) of force, carrying the vehicle to its
                           target altitude of 10,000 ft (3048 m).
                    </p>
                </div>
            </button>
        </div>
    </div>
</section>

</div>

<style>
    .page {
        padding-top: 20px;
        width: 100%;
		overflow-y: auto;
    }
    
    .hero-section {
        position: relative;
    }

.component-label {
    position: absolute;
    display: flex;
    align-items: flex-start; 
    cursor: pointer;
    z-index: 10;
    gap: 0;
}
    .label-title {
    color: white;
    }


    
    .left-line {
        order: -1;
    }
    
.label-box {
    background-color: var(--color-surface-500);
    padding: 12px 16px;
    min-width: 220px;
    max-width: 350px;
    text-align: left;
    color: #ffffff;
    transition: all 0.3s ease;
    white-space: normal;
    overflow: hidden;
    align-self: flex-start;  /* Add this */
}
    
    .label-text-left {
        order: -2;
    }
    
    .label-description {
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition: max-height 0.3s ease, opacity 0.3s ease, margin-top 0.3s ease;
        margin-top: 0;
    }
    
    .component-label:hover .label-description {
        max-height: 200px;
        opacity: 1;
        margin-top: 8px;
    }

</style>