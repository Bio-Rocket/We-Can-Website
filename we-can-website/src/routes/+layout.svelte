<script lang="ts">
	import './layout.css';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { MenuIcon, Instagram, Linkedin, Youtube, Github } from '@lucide/svelte';
	import { page } from '$app/stores';
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';

	const { children } = $props();

	// =========================
	// SOCIAL MEDIA LINKS
	// =========================
	const LINKEDIN_URL = 'https://www.linkedin.com/company/biorocket/';
	const GITHUB_URL = 'https://github.com/Bio-Rocket';
	const YOUTUBE_URL = 'https://www.youtube.com/@BioRocket-yyc';
	const INSTAGRAM_URL = 'https://www.instagram.com/biorocketuofc/';

	// const projectLinks = [
	//         { label: 'Proteus', href: '/projects/proteus' },
	//         // { label: 'Test Stand', href: '/projects/test-stand' }
	// ];

	// =========================
	// NAVIGATION BAR
	// =========================
	const navLinks = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Projects', href: '/projects/proteus' },
		{ label: 'Sponsors', href: '/sponsors' },
		{ label: 'Get Involved', href: '/get-involved' },
	];

	const socialBtn =
		'btn-icon !w-[44px] !h-[44px] !p-0 flex items-center justify-center text-[--base-font-color] hover:text-[var(--color-success-500)] hover:bg-[var(--color-surface-600)] rounded-lg';
	const socialIcon = '!w-6 !h-6';
	const socailBtnFtr =
		'btn-icon !w-[20px] !h-[20px] flex items-center justify-center text-[--base-font-color] hover:text-[var(--color-success-500)] hover:bg-[var(--color-surface-600)] rounded-md';
	const baseNavLink =
		'px-3 py-2 text-sm font-medium text-[--base-font-color] transition-colors hover:text-[var(--color-success-500)] hover:bg-[var(--color-surface-600)] rounded-lg';
	const activeNavLink = 'text-primary-500';
	const inactiveNavLink = 'text-surface-600-200';

	let mobileMenuOpen = $state(false);
</script>

<div class="bg-[var(--color-background)] text-[var(--color-text)]">
	<!-- =========================
    HEADER / NAVIGATION BAR
     ========================= -->
	<header class="fixed top-0 left-0 right-0 z-50">
		<AppBar class="bg-[var(--color-surface-500)] border-none !shadow-none py-2">
			<AppBar.Toolbar class="grid-cols-[auto_1fr_auto] items-center !p-0">
				<AppBar.Lead class="flex items-center gap-2">
					<div class="md:hidden">
						<Menu>
							<Menu.Trigger
								class="btn-icon !w-[44px] !h-[44px] flex items-center justify-center text-[--base-font-color] hover:bg-[var(--color-surface-600)] rounded-lg"
							>
								<MenuIcon class="w-6 h-6" />
							</Menu.Trigger>
							<Portal>
								<Menu.Positioner>
									<Menu.Content
										class="bg-[var(--color-surface-500)] border border-white/10 shadow-lg z-50 min-w-[200px]"
									>
										{#each navLinks as link}
											<Menu.Item value={link.href}>
												<Menu.ItemText>
													<a href={link.href} class="block w-full px-2 py-1 text-white">
														{link.label}
													</a>
												</Menu.ItemText>
											</Menu.Item>
										{/each}
										<Menu.Separator />
									</Menu.Content>
								</Menu.Positioner>
							</Portal>
						</Menu>
					</div>

					<a href="/">
						<img
							src="/wcan-logo-dark.png"
							alt="Logo"
							class="w-auto h-10 md:h-15 object-contain"
						/>
					</a>
				</AppBar.Lead>

				<AppBar.Headline class="hidden md:flex justify-center items-center gap-4">
					<nav class="flex items-center gap-4">
						{#each navLinks as link}
							<a
								href={link.href}
								class={`${baseNavLink} ${$page.url.pathname === link.href ? activeNavLink : inactiveNavLink}`}
							>
								{link.label}
							</a>
						{/each}
					</nav>
				</AppBar.Headline>

				<AppBar.Trail class="flex items-center gap-2">
					<div class="hidden lg:flex items-center">
						<a href={LINKEDIN_URL} target="_blank" class={socialBtn}>
							<Linkedin class={socialIcon} />
						</a>
						<a href={GITHUB_URL} target="_blank" class={socialBtn}>
							<Github class={socialIcon} />
						</a>
						<a href={YOUTUBE_URL} target="_blank" class={socialBtn}>
							<Youtube class={socialIcon} />
						</a>
						<a href={INSTAGRAM_URL} target="_blank" class={socialBtn}>
							<Instagram class={socialIcon} />
						</a>
					</div>
				</AppBar.Trail>
			</AppBar.Toolbar>
		</AppBar>
	</header>

	<!-- =========================
         PAGE CONTENT
         ========================= -->
	<main class="pt-[0px]">
		{@render children()}
	</main>

	<!-- =========================
    FOOTER
    ========================= -->
	<footer class="bg-[var(--color-surface-500)] text-[var(--color-text)] py-2 px-6 shadow-inner">
		<div class="flex flex-col md:flex-row items-center justify-between gap-1">
			<p class="text-xs text-center md:text-left">
				&copy; {new Date().getFullYear()} Western Canada Aerospace Initiative. All rights reserved.
			</p>
			<div class="flex items-center">
				<a href={LINKEDIN_URL} target="_blank" class={socailBtnFtr}
					><Linkedin class={socialIcon} /></a
				>
				<a href={GITHUB_URL} target="_blank" class={socailBtnFtr}><Github class={socialIcon} /></a>
				<a href={YOUTUBE_URL} target="_blank" class={socailBtnFtr}><Youtube class={socialIcon} /></a
				>
				<a href={INSTAGRAM_URL} target="_blank" class={socailBtnFtr}
					><Instagram class={socialIcon} /></a
				>
			</div>
		</div>
	</footer>
</div>
