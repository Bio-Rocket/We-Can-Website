<script lang="ts">
	let { data } = $props();
	const { projects } = data;
</script>

<ul>
	{#each projects as project}
		<li>{project.name}</li>
	{/each}
</ul>
