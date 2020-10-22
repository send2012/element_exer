import Vue       from 'vue';
import VueRouter from 'vue-router';

Vue.use( VueRouter );

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import( '@/views/home/' ),
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '@/views/about/' ),
	},
	{
		path: '/build-in-page',
		name: 'build_in_page',
		component: () => import( '@/views/build_in_components_page/' ),
	},
	{
		path: '/container',
		name: 'container',
		component: () => import( '@/views/container/' ),
	},
	{
		path: '/input',
		name: 'input',
		component: () => import( '@/views/input/' ),
	},
	{
		path: '/select',
		name: 'select',
		component: () => import( '@/views/select/' ),
	},
];

const router = new VueRouter( {
	routes,
} );

export default router;
