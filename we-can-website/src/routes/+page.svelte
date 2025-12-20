<!-- <h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<hr class="my-4" />

<p>
	Test navigation:
	<a href="/projects" class="underline text-primary-500 hover:text-primary-700">
		Go to Projects
	</a>
</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p> -->

<script lang="ts">
	import './layout.css';
	import { ArrowLeft, ArrowRight } from '@lucide/svelte';
	
	// =========================
	// GALLERY CONSTANTS
	// =========================
	
	/** Carousel arrow button styles. */
	const carouselArrowBtn = 'btn-icon preset-filled bg-[var(--color-surface-500)] hover:bg-[var(--color-surface-600)] text-white';

	/** Array of placeholder images for the gallery carousel. */
	const generatedArray = Array.from({ length: 6 });
	
	/** Reference to the carousel container element. */
	let elemCarousel: HTMLDivElement | null = null;

	/**
	 * Scroll the carousel one full "page" to the left.
	 * Wraps to the last slide if currently at the start.
	 */
	function carouselLeft() {
		if (!elemCarousel) return;
		const x = elemCarousel.scrollLeft === 0
			? elemCarousel.clientWidth * elemCarousel.childElementCount
			: elemCarousel.scrollLeft - elemCarousel.clientWidth;
		elemCarousel.scroll(x, 0);
	}

	/**
	 * Scroll the carousel one full "page" to the right.
	 * Wraps to the first slide if currently at the end.
	 */
	function carouselRight() {
		if (!elemCarousel) return;
		const x = elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
			? 0
			: elemCarousel.scrollLeft + elemCarousel.clientWidth;
		elemCarousel.scroll(x, 0);
	}

	/**
	 * Scroll the carousel to a specific slide based on index.
	 * @param index - The index of the carousel item to scroll to.
	 */

	function carouselThumbnail(index: number) {
		if (elemCarousel) {
			elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
		}
	}
</script>

<style>
    :global(html) {
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;
        overflow-y: scroll;
        height: 100vh;
    }
    
    :global(body) {
        margin: 0;
        padding: 0;
    }
    
    .page {
        height: 100vh;
        scroll-snap-align: start;
        scroll-snap-stop: always;
    }
</style>


<!-- Page 1: -->
	<section class="page flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat" style="background-image: url('/BackgroundTest.jpg');">
		<div class="bg-black/30 w-full h-full flex items-center justify-center">
			<h1 class="text-5xl sm:text-7xl font-bold text-white mb-4">Bio Rocket</h1>
		</div>
	</section>

	<!-- Page 2: Vision -->
	<section class="page flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat" style="background-image: url('/BackgroundTest.jpg');">
		<div class="bg-black/30 w-full h-full flex items-center justify-center p-6">
			<h2 class="text-4xl font-bold">Our Vision for the Future</h2>
		</div>
	</section>

	<!-- Page 3: Recruitment -->
	<section class="page flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat" style="background-image: url('/BackgroundTest.jpg');">
		<div class="bg-black/30 w-full h-full flex items-center justify-center p-6">
			<h3 class="text-2xl font-bold">We want you!</h3>
		</div>
	</section>

	<!-- Page 4: Gallery -->
	<section class="page flex flex-col bg-cover bg-center bg-no-repeat" style="background-image: url('/BackgroundTest.jpg');">
		<div class="bg-black/30 w-full flex-1 flex flex-col justify-center items-center p-6">
			<div class="w-full max-w-4xl mx-auto">
				
				<!-- Carousel Navigation -->
 				<div class="card p-2 grid grid-cols-[auto_1fr_auto] gap-2 items-center">
					
					<!-- Button: Left -->
					<button 
						type="button" 
						class={carouselArrowBtn}
						onclick={carouselLeft}
						title="Previous slide" 
						aria-label="Previous slide"
					>
						<ArrowLeft size={16} />
					</button>
					
					<!-- Carousel Images -->
					<div 
						bind:this={elemCarousel}
						class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto gap-4 px-2"
					>
						{#each generatedArray as _, i}
							<img
								class="snap-center w-[640px] rounded-container flex-shrink-0"
								src={`https://picsum.photos/seed/${i + 1}/640/480`}
								alt={`full-${i}`}
								loading="lazy"
							/>
						{/each}
					</div>
					
					<!-- Button: Right -->
					<button 
						type="button" 
						class={carouselArrowBtn}
						onclick={carouselRight}
						title="Next slide" 
						aria-label="Next slide"
					>
						<ArrowRight size={16} />
					</button>
				</div>
				
				<!-- Thumbnails -->
				<div class="card p-4 grid grid-cols-6 gap-4 mt-4">
					{#each generatedArray as _, i}
						<button 
							type="button" 
							onclick={() => carouselThumbnail(i)}
						>
							<img
								class="rounded-container hover:brightness-125"
								src={`https://picsum.photos/seed/${i + 1}/256`}
								alt={`thumb-${i}`}
								loading="lazy"
							/>
						</button>
					{/each}
				</div>
			</div>
		</div>
	</section>