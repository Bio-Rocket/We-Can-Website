<script lang="ts">
	import { supabase } from '$lib/supabaseClient';

	export let data: {
		sponsors: Array<{
			id: number;
			name: string;
			logo_path: string;
			website_url?: string | null;
			tier: string;
			order_index?: number | null;
		}>;
	};

	const BUCKET = 'sponsors';

	const tierOrder = ['platinum', 'gold', 'silver', 'bronze', 'supporter'] as const;

	const tierMeta: Record<
		string,
		{ title: string; blurb: string; itemClass: string; imgClass: string }
	> = {
		platinum: {
			title: 'Platinum Sponsors',
			blurb: 'Our top-tier partners powering the mission.',
			itemClass: 'basis-full sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)]',
			imgClass: 'h-[128px] sm:h-[144px] lg:h-[160px]'
		},
		gold: {
			title: 'Gold Sponsors',
			blurb: 'Key supporters helping us move fast.',
			itemClass:
				'basis-[calc(50%-0.75rem)] sm:basis-[calc(33.333%-1rem)] lg:basis-[calc(25%-1.125rem)]',
			imgClass: 'h-[80px] sm:h-[88px] lg:h-[96px]'
		},
		silver: {
			title: 'Silver Sponsors',
			blurb: 'Trusted contributors to our success.',
			itemClass:
				'basis-[calc(50%-0.75rem)] sm:basis-[calc(33.333%-1rem)] lg:basis-[calc(25%-1.125rem)]',
			imgClass: 'h-[64px] sm:h-[72px]'
		},
		bronze: {
			title: 'Bronze Sponsors',
			blurb: 'Providing crucial resources and support.',
			itemClass:
				'basis-[calc(50%-0.75rem)] sm:basis-[calc(33.333%-1rem)] lg:basis-[calc(20%-1rem)]',
			imgClass: 'h-[56px] sm:h-[64px]'
		},
		supporter: {
			title: 'Supporters',
			blurb: 'Friends of the team making it all possible.',
			itemClass:
				'basis-[calc(50%-0.75rem)] sm:basis-[calc(25%-0.75rem)] lg:basis-[calc(16.66%-1rem)]',
			imgClass: 'h-[44px] sm:h-[52px]'
		}
	};

	const normalizeTier = (t: string) => (t ?? '').toLowerCase().trim();

	const getLogoUrl = (path: string) =>
		supabase.storage.from(BUCKET).getPublicUrl((path ?? '').trim()).data.publicUrl;

	const sponsors = (data.sponsors ?? []).map((s) => ({
		...s,
		tier: normalizeTier(s.tier)
	}));

	function groupByTier(list: typeof sponsors) {
		const map = new Map<string, typeof sponsors>();
		for (const tier of tierOrder) map.set(tier, []);
		for (const s of list) {
			const tier = tierOrder.includes(s.tier as any) ? s.tier : 'supporter';
			map.get(tier)!.push(s);
		}
		return map;
	}

	const grouped = groupByTier(sponsors);
</script>

<section class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
	<header class="mb-10">
		<h1 class="text-4xl font-bold text-[var(--color-surface-50)]">Sponsors</h1>
		<p class="mt-2 text-surface-300 max-w-2xl">
			We’re grateful to the organizations supporting Western Canada Aerospace Initiative. Want to
			partner with us? Check out <a href="/get-involved" class="underline">Get Involved</a>.
		</p>
	</header>

	{#each tierOrder as tier (tier)}
		{@const items = grouped.get(tier) ?? []}
		{#if items.length > 0}
			{@const meta = tierMeta[tier]}

			<div class="mb-10">
				<div class="mb-4 flex items-end justify-between gap-4">
					<div>
						<h2 class="text-2xl font-semibold text-[var(--color-surface-50)]">{meta.title}</h2>
						<p class="text-surface-300 text-sm">{meta.blurb}</p>
					</div>

					<!-- Optional: tier badge -->
					<span
						class="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-surface-700)] text-surface-100"
					>
						{tier.toUpperCase()}
					</span>
				</div>

				<div class="flex flex-wrap gap-3 sm:gap-4">
					{#each items as s (s.id)}
						<a
							href={s.website_url ?? '#'}
							target={s.website_url ? '_blank' : undefined}
							rel={s.website_url ? 'noopener' : undefined}
							class={`card ${meta.itemClass} p-4 sm:p-5 hover:brightness-110 transition
                bg-[var(--color-surface-700)]/60 border border-[var(--color-surface-600)]`}
							aria-label={s.name}
						>
							<div class="flex items-center justify-center">
								<img
									src={getLogoUrl(s.logo_path)}
									alt={s.name}
									class={`${meta.imgClass} object-contain w-full`}
									loading="lazy"
								/>
							</div>

							<!-- Optional caption (can remove if you want super clean logos only) -->
							<div class="mt-3 text-center text-xs text-surface-200 opacity-80">{s.name}</div>
						</a>
					{/each}
				</div>
			</div>
		{/if}
	{/each}

	<!-- CTA -->2d ago
	<div
		class="card p-6 mt-12 bg-[var(--color-surface-700)]/40 border border-[var(--color-surface-600)]"
	>
		<h3 class="text-xl font-semibold text-[var(--color-surface-50)]">Become a sponsor</h3>
		<p class="text-surface-300 mt-1 max-w-2xl">
			Support student-led aerospace development in Western Canada. We offer tiered benefits and
			custom partnership opportunities.
		</p>
		<div class="mt-4 flex flex-wrap gap-3">
			<a class="btn preset-filled-primary" href="/get-involved">Get involved</a>
			<a class="btn preset-tonal" href="/contact">Contact us</a>
		</div>
	</div>
</section>

<style>
	/* Keep cards consistent when logos have different aspect ratios */
	:global(.card img) {
		filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.2));
	}
</style>
