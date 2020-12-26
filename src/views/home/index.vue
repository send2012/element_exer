<template>
	<div class="home">
		<div class="home-link">
			<span v-for="( pageLinkListItem, index ) of page_link_list"
			      :key="index"
			      @click="goRelated( pageLinkListItem.name, pageLinkListItem.url )">
				{{ pageLinkListItem.name }}
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		
		data: () => ( {
			page_link_list: [
				{
					name: 'about',
					url: '/about',
				},
				{
					name: 'build_in_page',
					url: '/build-in-page',
				},
				{
					name: 'container',
					url: '/container',
				},
				{
					name: 'input',
					url: '/input',
				},
				{
					name: 'select',
					url: '/select',
				},
				{
					name: 'cascader',
					url: '/cascader'
				},
			],
		} ),
		
		created()
		{
			
		},
		
		methods: {
			goRelated( linkName, linkURL ) {
				this.$router.push( {
					name: linkName,
					path: linkURL,
				} );
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "style";
</style>
