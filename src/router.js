import Vue from "vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import { IonicVueRouter } from "@ionic/vue";

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/about",
			name: "about",
			component: About
		}
	]
});
