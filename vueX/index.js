import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { userInfo: "", idCard: "" },
  mutations: {
    updateUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },

    updateIdCard(state, idCard) {
      state.idCard = idCard;
    },
  },
});
