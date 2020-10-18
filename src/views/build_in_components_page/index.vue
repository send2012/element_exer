<template>
	<div class="build_in_components_page">
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/helloworld/';

	export default {
		name: 'build_in_components_page',
		
		components: {
			HelloWorld,
		},
	};
</script>
