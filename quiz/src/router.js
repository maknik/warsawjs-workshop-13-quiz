import Vue from "vue";
import Router from "vue-router";
import Intro from "./pages/Intro";
import Game from "./pages/Game";
import Layout from "./pages/Layout";
import Won from "./pages/Won";
import Settings from "./pages/Settings";

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
					component: Settings
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