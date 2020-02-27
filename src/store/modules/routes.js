import data from "../../api/data.json";
function pushRoute(map, state, tranport) {
  for (let number in state[tranport]) {
    const { type, direction } = state[tranport][number];
    const stops = direction.split(" - ");
    map.push({
      number,
      start: stops[0],
      end: stops[1],
      type
    });
  }
}
export default {
  actions: {
    async fetchRoutes({ commit }) {
      commit("updateRoutes", data);
    }
  },
  mutations: {
    updateRoutes(state, routes) {
      state.autobus = routes.autobus;
      state.tram = routes.tram;
      state.trolleybus = routes.trolleybus;
    }
  },
  state: {
    autobus: {},
    tram: {},
    trolleybus: {}
  },
  getters: {
    allRoutes(state) {
      let allRoutes = [];
      for (let tranport in state) {
        pushRoute(allRoutes, state, tranport);
      }
      return allRoutes;
    },
    autobusRoutes(state) {
      let map = [];
      pushRoute(map, state, "autobus");
      return map;
    },
    tramRoutes(state) {
      let map = [];
      pushRoute(map, state, "tram");
      return map;
    },
    trolleybusRoutes(state) {
      let map = [];
      pushRoute(map, state, "trolleybus");
      return map;
    }
  }
};
