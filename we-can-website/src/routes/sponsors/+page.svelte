<script lang="ts">
	import { supabase } from '$lib/supabaseClient';

	type Sponsor = {
		id: number;
		name: string;
		logo_color_path: string;
		logo_black_path: string;
		website_url?: string | null;
		tier: string;
		order_index?: number | null;
	};

	export let data: { sponsors: Sponsor[] };

	const BUCKET = 'sponsors';
	const tierOrder = ['platinum', 'gold', 'silver', 'bronze', 'supporter'] as const;
	type TierKey = (typeof tierOrder)[number];

	const tierMeta: Record<
		TierKey,
		{ title: string; blurb: string; colsClass: string; padClass: string; logoClamp: string }
	> = {
		platinum: {
			title: 'Platinum Sponsors',
			blurb: 'Our top-tier partners powering the mission.',
			colsClass: 'grid-cols-1 md:grid-cols-2',
			padClass: 'p-6 sm:p-8',
			logoClamp: 'clamp(120px, 10vw, 190px)'
		},
		gold: {
			title: 'Gold Sponsors',
			blurb: 'Key supporters helping us move fast.',
			colsClass: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
			padClass: 'p-6',
			logoClamp: 'clamp(92px, 6.5vw, 128px)'
		},
		silver: {
			title: 'Silver Sponsors',
			blurb: 'Trusted contributors to our success.',
			colsClass: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
			padClass: 'p-6',
			logoClamp: 'clamp(86px, 6vw, 120px)'
		},
		bronze: {
			title: 'Bronze Sponsors',
			blurb: 'Providing crucial resources and support.',
			colsClass: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
			padClass: 'p-5',
			logoClamp: 'clamp(78px, 5.2vw, 110px)'
		},
		supporter: {
			title: 'Supporters',
			blurb: 'Friends of the team making it all possible.',
			colsClass: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5',
			padClass: 'p-5',
			logoClamp: 'clamp(72px, 4.6vw, 102px)'
		}
	};

	const normalizeTier = (t: string) => (t ?? '').toLowerCase().trim();

	const getPublicUrl = (path: string) =>
		supabase.storage.from(BUCKET).getPublicUrl((path ?? '').trim()).data.publicUrl;

	const sponsors = (data.sponsors ?? []).map((s) => ({
		...s,
		tier: normalizeTier(s.tier)
	}));

	function groupByTier(list: typeof sponsors) {
		const map = new Map<TierKey, typeof sponsors>();
		for (const tier of tierOrder) map.set(tier, []);
		for (const s of list) {
			const tier = (tierOrder.includes(s.tier as any) ? (s.tier as TierKey) : 'supporter') as TierKey;
			map.get(tier)!.push(s);
		}
		return map;
	}

	const grouped = groupByTier(sponsors);
</script>

<div
	class="relative bg-gradient-to-b from-surface-700 via-surface-800 to-surface-900 overflow-hidden min-h-screen flex items-start"
	style="padding-top: 64px;"
>
	<div
		class="absolute -top-20 -right-28 w-[300px] md:w-[500px] h-[700px] bg-gradient-to-br from-transparent via-transparent to-primary-900/10 -rotate-15 pointer-events-none">
    </div>

	<div class="relative z-10 max-w-[1200px] mx-auto px-4 md:px-12 py-8 md:py-10 w-full box-border">
		<div class="mb-10">
			<h1 class="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white mt-2 mb-3.5">Sponsors</h1>
			<div class="w-full md:w-[320px] h-[3px] bg-primary-500"></div>
			<p class="text-base leading-7 text-white/80 max-w-3xl mt-6">
				We’re grateful to the organizations supporting the Western Canada Aerospace Initiative. Want to
				partner with us? Check out <a href="/get-involved" class="text-primary-400 hover:underline">Get Involved</a>.
			</p>
		</div>

		{#each tierOrder as tier (tier)}
			{@const items = grouped.get(tier) ?? []}
			{#if items.length > 0}
				{@const meta = tierMeta[tier]}

				<section class="mb-12">
					<div class="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-5">
						<div>
							<h2 class="text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold text-white m-0">{meta.title}</h2>
							<p class="text-sm text-white/65 m-0 mt-1">{meta.blurb}</p>
						</div>

						<span class="w-fit text-xs text-white/60 uppercase tracking-widest border border-primary-700/40 bg-surface-900 px-3 py-2">
							{tier}
						</span>
					</div>

					<div class={`grid ${meta.colsClass} auto-rows-fr gap-0`}>
						{#each items as s (s.id)}
							{@const href = s.website_url ?? undefined}

							<a
								href={href}
								target={href ? '_blank' : undefined}
								rel={href ? 'noopener' : undefined}
								aria-label={s.name}
								class={`sponsor-tile group h-full bg-surface-900 ${meta.padClass} no-underline
                                    border border-primary-700/40
                                    flex flex-col
                                    relative overflow-hidden transition-colors duration-200
                                    before:absolute before:top-0 before:left-0 before:w-[3px] before:h-0 before:bg-primary-500
                                    before:transition-[height] before:duration-300 before:ease-in-out
                                    hover:before:h-full hover:bg-surface-800`}>

                                <div class="logo-pad">
                                    <div class="logo-box" style={`height:${meta.logoClamp};`}>
                                        <img
                                        src={getPublicUrl(s.logo_black_path)}
                                        alt={s.name}
                                        class="logo-img logo-black"
                                        loading="eager"
                                        decoding="async"
                                        />
                                        <img
                                        src={getPublicUrl(s.logo_color_path)}
                                        alt={s.name}
                                        class="logo-img logo-color"
                                        loading="eager"
                                        decoding="async"
                                        />
                                    </div>
                                </div>

								<div class="mt-auto pt-3 border-t border-primary-700/30">
									<div class="text-sm text-white/70">{s.name}</div>
									{#if href}
										<div class="text-xs text-white/45 mt-1">Visit website →</div>
									{/if}
								</div>
							</a>
						{/each}
					</div>
				</section>
			{/if}
		{/each}

		<!-- CTA -->
		<div
			class="bg-surface-900 p-7 md:p-9 relative overflow-hidden transition-colors duration-200
             border border-primary-700/40
             before:absolute before:top-0 before:left-0 before:w-[3px] before:h-0 before:bg-primary-500
             before:transition-[height] before:duration-300 before:ease-in-out
             hover:before:h-full hover:bg-surface-800"
		>
			<h3 class="text-[clamp(1.5rem,3vw,2rem)] font-bold text-white m-0">Become a sponsor</h3>
			<p class="text-base leading-7 text-white/80 m-0 mt-3 max-w-3xl">
				Support student-led aerospace development in Western Canada. We offer tiered benefits and custom partnership opportunities.
			</p>

			<div class="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
				<a
					class="bg-primary-700 hover:bg-primary-600 text-white text-sm px-6 py-3 text-center transition-colors duration-200 no-underline"
					href="/get-involved"
				>
					Get involved
				</a>
				<a
					class="bg-surface-800 hover:bg-surface-700 border border-primary-700/40 text-white text-sm px-6 py-3 text-center transition-colors duration-200 no-underline"
					href="/contact"
				>
					Contact us
				</a>
			</div>
		</div>
	</div>
</div>

<style>
    .logo-pad {
    background: rgba(255, 255, 255, 0.92);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 16px;
    overflow: hidden;
    }

    .logo-box {
    position: relative;
    width: 100%;
    }

    .logo-img {
    position: absolute;
    inset: 0%;  
    width: auto;
    height: auto;

    right: 10%;
    bottom: 10%;
    left: 10%;
    top: 10%;

    width: calc(100% - 20%);
    height: calc(100% - 20%);

    object-fit: contain;
    transition: opacity 220ms ease-in-out;
    }

    .logo-black { opacity: 1; }
    .logo-color { opacity: 0; }

    .sponsor-tile:hover .logo-black { opacity: 0; }
    .sponsor-tile:hover .logo-color { opacity: 1; }
</style>