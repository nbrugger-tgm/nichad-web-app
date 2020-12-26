import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { AuthAction, MainState } from "@/store/MainState";
import {actions, ErrorInfo} from "@/store/Actions";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence<MainState>({
  storage: window.localStorage
});

export default new Vuex.Store({
  state: new MainState(),
  getters: {
    isLoggedIn: state => state.userID != null,
    getUserId: state => state.userID,
    getAuthMethod: state => state.authAction,
    loading: state => state.loading,
    error: state => state.error
  },
  mutations: {
    SET_USER_ID: (state: MainState, userId: string) => {
      state.userID = userId;
    },
    SWITCH_AUTH_METHOD_CHANGE: (state: MainState, authAction: AuthAction) => {
      state.authAction = authAction;
    },
    TOGGLE_LOADING: (state: MainState) => state.loading = !state.loading
  },
  actions: actions,
  plugins: [vuexLocal.plugin]
});
