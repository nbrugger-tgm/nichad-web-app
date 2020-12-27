import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { AuthAction, MainState } from "@/store/MainState";
import {actions, ErrorInfo} from "@/store/Actions";
import { UserControllerImplApi } from "nichad-client";
Vue.use(Vuex);

const api = new UserControllerImplApi();

const vuexLocal = new VuexPersistence<MainState>({
  storage: window.localStorage
});

export default new Vuex.Store({
  state: new MainState(),
  getters: {
    isLoggedIn: state => state.userToken != null,
    getUserId: state => state.userID,
    getUserToken: state => state.userToken,
    getAuthMethod: state => state.authAction,
    loading: state => state.loading,
    getUserAPI: state => api,
    getRestURL: state => state.restURL
  },
  mutations: {
    SET_USER_ID: (state: MainState, userId: string) => {
      state.userID = userId;
    },
    SET_USER_TOKEN: (state: MainState, userId: string) => {
      state.userToken = userId;
    },
    SWITCH_AUTH_METHOD_CHANGE: (state: MainState, authAction: AuthAction) => {
      state.authAction = authAction;
    },
    TOGGLE_LOADING: (state: MainState) => (state.loading = !state.loading),
    LOGOUT: (state: MainState) => (state.userToken = null)
  },
  actions: actions,
  plugins: [vuexLocal.plugin]
});
