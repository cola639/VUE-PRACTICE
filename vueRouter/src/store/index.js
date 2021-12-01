import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { VCOM_RE2WEB: null },
  mutations: {
    updateVCOM_RE2WEB(state, VCOM) {
      state.VCOM_RE2WEB = VCOM;
    },
  },
});
