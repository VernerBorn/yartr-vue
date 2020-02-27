import data from "../../api/data.json";
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
        for (let number in state[tranport]) {
          const stops = state[tranport][number].direction.split(" - ");
          allRoutes.push({ number, start: stops[0], end: stops[1] });
        }
      }
      return allRoutes;
    },
    autobusRoutes(state) {
      let allRoutes = [];
      for (let number in state.autobus) {
        const stops = state.autobus[number].direction.split(" - ");
        allRoutes.push({ number, start: stops[0], end: stops[1] });
      }
      return allRoutes;
    },
    tramRoutes(state) {
      let allRoutes = [];
      for (let number in state.tram) {
        const stops = state.tram[number].direction.split(" - ");
        allRoutes.push({ number, start: stops[0], end: stops[1] });
      }
      return allRoutes;
    },
    trolleybusRoutes(state) {
      let allRoutes = [];
      for (let number in state.trolleybus) {
        const stops = state.trolleybus[number].direction.split(" - ");
        allRoutes.push({ number, start: stops[0], end: stops[1] });
      }
      return allRoutes;
    }
  }
};
