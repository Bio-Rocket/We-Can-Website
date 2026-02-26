<script lang="ts">
	import { ArrowLeft, ArrowRight, Zap, Globe, Users, Award } from '@lucide/svelte';
	import Icon from '@iconify/svelte';

	const LINKEDIN_URL = 'https://www.linkedin.com/company/biorocket/';
	const GITHUB_URL = 'https://github.com/Bio-Rocket';
	const YOUTUBE_URL = 'https://www.youtube.com/@BioRocket-yyc';
	const INSTAGRAM_URL = 'https://www.instagram.com/biorocketuofc/';

	let { data } = $props();

	let elemCarousel: HTMLDivElement | null = null;

	function carouselLeft() {
		if (!elemCarousel) return;
		if (elemCarousel.scrollLeft <= 0) {
			elemCarousel.scroll(elemCarousel.scrollWidth - elemCarousel.clientWidth, 0);
		} else {
			elemCarousel.scroll(elemCarousel.scrollLeft - elemCarousel.clientWidth, 0);
		}
	}

	function carouselRight() {
		if (!elemCarousel) return;
		const maxScroll = elemCarousel.scrollWidth - elemCarousel.clientWidth;
		if (elemCarousel.scrollLeft >= maxScroll - 1) {
			elemCarousel.scroll(0, 0);
		} else {
			elemCarousel.scroll(elemCarousel.scrollLeft + elemCarousel.clientWidth, 0);
		}
	}

	function carouselThumbnail(index: number) {
		if (elemCarousel) {
			elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
		}
	}

	const stats = [
		{ icon: 'material-symbols:group-outline', value: '100+', label: 'Students Impacted' },
		{ icon: 'fa-brands:canadian-maple-leaf', value: 'Outreach', label: 'Across Western Canada' },
		{ icon: 'mdi:globe', value: '25+', label: 'Global Industry Partners' },
		{ icon: 'material-symbols:trophy-sharp', value: '1st', label: 'Liquid Rocket in Alberta' },
	];
</script>

<div class="bg-surface-900 text-white font-sans overflow-x-hidden">
	<!-- HERO -->
	<section class="relative h-screen flex flex-col items-center justify-center overflow-hidden">
		<div
			class="absolute inset-0 bg-cover bg-center scale-[1.04]"
			style="background-image: url('{data.homePageImage}');"
		></div>
		<div
			class="absolute inset-0 bg-gradient-to-br from-black/75 via-black/45 to-primary-900/15 pointer-events-none"
		></div>
		<div class="relative z-10 text-center flex flex-col items-center gap-5">
			<h1 class="flex flex-col gap-0 m-0">
				<span
					class="block text-[clamp(3rem,9vw,7.5rem)] font-bold leading-[0.92] text-white tracking-[0.05em]"
				>
					WESTERN <span class="text-tertiary-500">CANADA</span>
				</span>
				<span
					class="block text-[clamp(3rem,9vw,6.75em)] font-bold leading-[0.92] tracking-[0.0002em]"
				>
					AEROSPACE INITIATIVE
				</span>
			</h1>
			<p class="text-2xl md:text-4xl text-white/80 m-0">
				Empowering the next generation of aerospace leaders
			</p>
		</div>
	</section>

	<!-- RECRUITMENT -->
	<section
		class="relative bg-gradient-to-b from-surface-700 via-surface-800 to-surface-900 border-t border-primary-700/40 overflow-hidden min-h-screen flex items-center"
	>
		<div
			class="absolute -top-20 -right-28 w-[500px] h-[700px] bg-gradient-to-br from-transparent via-transparent to-primary-900/10 -rotate-15 pointer-events-none"
		></div>
		<div
			class="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 pt-24 pb-10 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center w-full box-border"
		>
			<!-- LEFT -->
			<div>
				<h2 class="text-[clamp(3rem,6vw,5.5rem)] font-bold leading-tight text-white m-0 mb-7">
					We Want<br />
					<em class="not-italic text-tertiary-500">You.</em>
				</h2>
				<p class="text-base leading-7 text-white/65 m-0 mb-9 max-w-[480px]">
					Are you looking to take your student aerospace project to the next level? WCAN provides
					technical support, mentorship, and other growth opportunities to student-led projects
					across Western Canada. Tell us about your mission through the contact form, and let's
					explore how we can support your team!
				</p>
				<a
					href="/get-involved"
					data-sveltekit-preload-data
					class="inline-flex items-center gap-2.5 px-5 py-2 bg-[var(--color-primary-700)] hover:bg-[var(--color-secondary-700)] text-white text-sm no-underline transition-all duration-200 ease-in-out"
				>
					<span>Get Involved</span>
				</a>
			</div>
			<!-- RIGHT: stats -->
			<div class="grid grid-cols-2 gap-[2px] bg-primary-700/40">
				{#each stats as stat}
					<div
						class="bg-surface-900 p-5 md:p-9 flex flex-col gap-2.5 relative overflow-hidden transition-colors duration-200 before:absolute before:top-0 before:left-0 before:w-[3px] before:h-0 before:bg-primary-500 before:transition-[height] before:duration-300 before:ease-in-out hover:before:h-full hover:bg-surface-800"
					>
						{#if typeof stat.icon === 'string'}
							<Icon icon={stat.icon} width="32" height="32" class="text-primary-500" />
						{:else}
							<stat.icon size={32} class="text-primary-500" />
						{/if}
						<div class="text-2xl font-semibold leading-none text-white">{stat.value}</div>
						<div class="text-sm text-white/65">{stat.label}</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
	<!-- GALLERY -->
	<section
		class="bg-gradient-to-b from-surface-700 via-surface-800 to-surface-900 h-screen flex items-center"
	>
		<div class="max-w-[900px] mx-auto px-6 py-8 w-full box-border">
			<div class="mb-10">
				<h2 class="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white mt-2 mb-3.5">Our Work</h2>
				<div class="w-[356px] h-[3px] bg-primary-500"></div>
			</div>

			<div class="grid grid-cols-[auto_1fr_auto]">
				<button
					type="button"
					class="bg-surface-900 border-none text-white cursor-pointer px-[18px] flex items-center justify-center min-h-[60px] transition-colors duration-200 hover:bg-primary-500"
					onclick={carouselLeft}
					aria-label="Previous slide"
				>
					<ArrowLeft size={20} />
				</button>

				<div
					bind:this={elemCarousel}
					class="flex overflow-x-hidden aspect-video snap-x snap-mandatory scroll-smooth"
				>
					{#each data.galleryImages as url, i}
						<img
							class="flex-shrink-0 w-full object-cover snap-center"
							src={url}
							alt={`Gallery image ${i + 1}`}
						/>
					{/each}
				</div>

				<button
					type="button"
					class="bg-surface-900 border-none text-white cursor-pointer px-[18px] flex items-center justify-center min-h-[60px] transition-colors duration-200 hover:bg-primary-500"
					onclick={carouselRight}
					aria-label="Next slide"
				>
					<ArrowRight size={20} />
				</button>
			</div>

			<div
				class="grid gap-[2px] mt-[2px]"
				style="grid-template-columns: repeat({data.galleryImages.length}, 1fr)"
			>
				{#each data.galleryImages as url, i}
					<button
						type="button"
						class="bg-transparent border-none p-0 cursor-pointer overflow-hidden aspect-square block group"
						onclick={() => carouselThumbnail(i)}
						aria-label={`Go to slide ${i + 1}`}
					>
						<img
							class="w-full h-full object-cover block opacity-55 transition-opacity duration-200 group-hover:opacity-100 group-hover:outline group-hover:outline-2 group-hover:outline-primary-500 group-hover:-outline-offset-2"
							src={url}
							alt={`Thumbnail ${i + 1}`}
							loading="lazy"
						/>
					</button>
				{/each}
			</div>
		</div>
	</section>
</div>

<style>
	.scroll-smooth {
		scroll-behavior: smooth;
	}
</style>
