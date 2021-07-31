import Vuex, { createLogger } from "vuex";
import Vue from "vue";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const debug = process.env.NODE_ENV !== "production";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  state,
  getters,
  actions,
  mutations,
});

export default store;
