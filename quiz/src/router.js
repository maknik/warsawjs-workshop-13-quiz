import Vue from "vue";
import Router from "vue-router";
import Intro from "./pages/Intro";
import Game from "./pages/Game";
import Layout from "./pages/Layout";
import Won from "./pages/Won";

Vue.use(Router);

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'intro',
			component: Intro
		},
		{
			path: '/',
			name: 'layout',
			component: Layout,
			children: [
				{
					path: '/game',
					name: 'game',
					component: Game
				},
				{
					path: '/settings',
					name: 'settings',
					component: Game
				},
				{
					path: '/won',
					name: 'won',
					component: Won
				}
			]
		}
	]
})

export default router;