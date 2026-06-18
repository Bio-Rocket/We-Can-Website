<script lang="ts">
	import type { PageData } from './$types.js';

	let { data }: { data: PageData } = $props();

	const posts = data.posts;

	const tagColors: Record<string, string> = {
		Event: 'text-sky-300 border-sky-500/50',
		Partnership: 'text-violet-300 border-violet-500/50',
		Update: 'text-amber-300 border-amber-500/50',
		Publication: 'text-green-300 border-green-500/50',
	};

	const allTags = ['All', ...Object.keys(tagColors).filter((t) => posts.some((p) => p.tag === t))];

	let activeFilter = $state('All');

	let filtered = $derived(
		activeFilter === 'All' ? posts : posts.filter((p) => p.tag === activeFilter)
	);

	let featuredPost = $derived(filtered.find((p) => p.pinned) ?? filtered[0] ?? null);
	let listPosts = $derived(filtered.filter((p) => p !== featuredPost));

	let isFiltered = $derived(activeFilter !== 'All');
	function linkify(text: string) {
		return text.replace(
			/(https?:\/\/[^\s]+)/g,
			'<a href="$1" target="_blank" class="text-primary-400 underline hover:text-primary-300">$1</a>'
		);
	}
</script>

<div
	class="relative bg-gradient-to-b from-surface-700 via-surface-800 to-surface-900 border-t border-primary-700/40 overflow-hidden min-h-screen flex items-start"
	style="padding-top: 64px;"
>
	<div
		class="absolute -top-20 -right-28 w-[300px] md:w-[500px] h-[700px] bg-gradient-to-br from-transparent via-transparent to-primary-900/10 -rotate-15 pointer-events-none"
	></div>

	<div class="relative z-10 max-w-[1200px] mx-auto px-4 md:px-12 py-8 md:py-10 w-full box-border">
		<!-- Heading -->
		<div class="mb-8">
			<h1 class="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white mt-2 mb-3.5">News & Updates</h1>
			<div class="w-full md:w-[520px] h-[3px] bg-primary-500"></div>
		</div>

		<!-- Filter bar -->
		<div class="flex items-center gap-[2px] mb-8 flex-wrap bg-primary-700/40 w-fit">
			{#each allTags as tag}
				<button
					onclick={() => (activeFilter = tag)}
					class="text-xs uppercase tracking-widest px-4 py-2 transition-colors duration-200
                        {activeFilter === tag
						? 'bg-primary-600 text-white'
						: 'bg-surface-900 text-white/50 hover:text-white hover:bg-surface-800'}"
				>
					{tag}
				</button>
			{/each}
		</div>

		<div class="flex flex-col gap-[2px] bg-primary-700/40">
			<!-- Featured post full width -->
			{#if featuredPost}
				<div class="bg-surface-900 p-5 md:p-9">
					<div class="flex items-center gap-3 mb-5 flex-wrap">
						<span
							class="text-xs uppercase tracking-widest border px-2 py-0.5 {tagColors[
								featuredPost.tag
							] ?? 'text-white/50 border-white/20'}"
						>
							{featuredPost.tag}
						</span>
						{#if featuredPost.pinned}
							<span class="text-xs text-white/40 uppercase tracking-widest">Featured</span>
						{/if}
					</div>

					<div
						class="relative overflow-hidden transition-colors duration-200
                    before:absolute before:top-0 before:left-0 before:w-[3px] before:h-0 before:bg-primary-500
                    before:transition-[height] before:duration-300 before:ease-in-out
                    hover:before:h-full hover:bg-surface-800 p-4 -m-4"
					>
						<h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white leading-snug mb-3">
							{featuredPost.title}
						</h2>

						<div class="flex items-center gap-4 mb-5 flex-wrap">
							<span class="text-xs text-white/40 uppercase tracking-widest"
								>{featuredPost.author}</span
							>

							<span class="text-xs text-white/40 uppercase tracking-widest"
								>{featuredPost.date}</span
							>

							<span class="text-xs text-white/40 uppercase tracking-widest"></span>
						</div>
						<p class="text-base leading-7 text-white/80 max-w-[680px] whitespace-pre-line">
							{@html linkify(
								isFiltered
									? featuredPost.content +
											(featuredPost.hyperlink ? ' ' + featuredPost.hyperlink : '')
									: featuredPost.summary
							)}
						</p>

						{#if !isFiltered}
							<button
								type="button"
								onclick={() => (activeFilter = featuredPost.tag)}
								class="mt-6 bg-primary-700 hover:bg-primary-600 text-white text-sm px-5 py-2 transition-colors duration-200"
							>
								View all {featuredPost.tag} posts
							</button>
						{/if}
					</div>
				</div>
			{/if}

			<!-- Post grid -->
			{#if listPosts.length > 0}
				<div class="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-primary-700/40">
					{#each listPosts as post}
						<div class="bg-surface-900 p-5 md:p-7 h-full">
							<div
								class="relative flex flex-col h-full transition-colors duration-200
                    before:absolute before:top-0 before:left-0 before:w-[3px] before:h-0 before:bg-primary-500
                    before:transition-[height] before:duration-300 before:ease-in-out
                    hover:before:h-full hover:bg-surface-800 p-4"
							>
								<div class="flex items-center gap-3 flex-wrap">
									<span
										class="text-xs uppercase tracking-widest border px-2 py-0.5 {tagColors[
											post.tag
										] ?? 'text-white/50 border-white/20'}"
									>
										{post.tag}
									</span>
									<span class="text-xs text-white/40 uppercase tracking-widest">{post.date}</span>
								</div>

								<h3 class="text-lg font-bold text-white leading-snug mt-2 mb-1">{post.title}</h3>

								<div class="flex items-center gap-3 mb-1">
									<span class="text-xs text-white/40">{post.author}</span>
								</div>

								<p class="text-sm leading-6 text-white/70 mb-4 flex-1 whitespace-pre-line">
									{@html linkify(
										isFiltered
											? post.content + (post.hyperlink ? '\n' + post.hyperlink : '')
											: post.summary
									)}
								</p>

								<div class="h-[1px] bg-primary-700/40 mt-2"></div>

								{#if !isFiltered}
									<button
										onclick={() => (activeFilter = post.tag)}
										class="mt-auto pt-4 text-xs uppercase tracking-widest text-primary-400 hover:text-primary-300 transition-colors duration-200 text-left"
									>
										More in {post.tag} →
									</button>
								{/if}
							</div>
						</div>
					{/each}

					{#if listPosts.length % 2 !== 0}
						<div class="bg-surface-900 hidden md:block"></div>
					{/if}
				</div>
			{/if}

			{#if !featuredPost && listPosts.length === 0}
				<div class="bg-surface-900 p-9 text-center">
					<p class="text-white/40 text-sm uppercase tracking-widest">
						No posts in this category yet.
					</p>
				</div>
			{/if}
		</div>
	</div>
</div>
