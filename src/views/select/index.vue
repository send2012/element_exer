<template>
	<div class="ele-select">
		<!-- 远程搜索 -->
		<div>
			<el-select v-model="value" multiple filterable remote reserve-keyword placeholder="please input keyword" :remote-method="remoteMethod" :loading="loading">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
			</el-select>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ele-select',

	props: {
		propName: {
			type: Number,
			default: 0
		}
	},

	computed: {
		name() {
			return this.data;
		}
	},

	watch: {
		data(newValue, oldValue) {
			console.log(newValue, oldValue);
		}
	},

	data: () => ({
		options: [],
		value: [],
		list: [],
		loading: false,
		states: [
			'Alabama',
			'Alaska',
			'Arizona',
			'Arkansas',
			'California',
			'Colorado',
			'Connecticut',
			'Delaware',
			'Florida',
			'Georgia',
			'Hawaii',
			'Idaho',
			'Illinois',
			'Indiana',
			'Iowa',
			'Kansas',
			'Kentucky',
			'Louisiana',
			'Maine',
			'Maryland',
			'Massachusetts',
			'Michigan',
			'Minnesota',
			'Mississippi',
			'Missouri',
			'Montana',
			'Nebraska',
			'Nevada',
			'New Hampshire',
			'New Jersey',
			'New Mexico',
			'New York',
			'North Carolina',
			'North Dakota',
			'Ohio',
			'Oklahoma',
			'Oregon',
			'Pennsylvania',
			'Rhode Island',
			'South Carolina',
			'South Dakota',
			'Tennessee',
			'Texas',
			'Utah',
			'Vermont',
			'Virginia',
			'Washington',
			'West Virginia',
			'Wisconsin',
			'Wyoming'
		],
	}),

	created() {},
	
	mounted()
	{
		this.list = this.states.map( item =>
		{
			return {
				value: `value: ${ item }`,
				label: `label: ${ item }`,
			};
		} );
	},

	methods: {
		remoteMethod( query )
		{
			if ( query !== '' )
			{
				this.loading = true;
				
				setTimeout( () =>
				{
					this.loading = false;
					
					this.options = this.list.filter( item =>
					{
						return item.label
						           .toLowerCase()
								   .indexOf( query.toLowerCase() ) > -1;
					} );
				}, 200 );
			}
			else
			{
				this.options = [];
			}
		},
	},

	components: {}
};
</script>

<style lang="scss" scoped>
	@import "style";
</style>
