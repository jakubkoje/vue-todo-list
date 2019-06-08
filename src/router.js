import Vue from "vue";
import Home from "./views/Home.vue";
import { IonicVueRouter } from "@ionic/vue";

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		}
	]
});
