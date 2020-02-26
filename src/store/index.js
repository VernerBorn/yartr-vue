import Vue from "vue";
import Vuex from "vuex";

import search from "./modules/search";
import routes from "./modules/routes";
import stops from "./modules/stops";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { search, routes, stops }
});
