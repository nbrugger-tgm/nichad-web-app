import { LoginResponse, UserControllerImplApi } from "nichad-client";

import ResultEnum = LoginResponse.ResultEnum;

export interface LoginData {
  userID: string;
  password: string;
  onError: CallableFunction;
  onRequestError: CallableFunction;
}

export interface ErrorInfo {
  message: string;
  title: string;
  show: boolean;
}

export const actions = {
  register: (ctx: any, data: RegistrationInfo) => {
    ctx.commit("TOGGLE_LOADING");
    console.log(data.userID + " " + data.userName + " " + data.password);
    const api: UserControllerImplApi = ctx.getters.getUserAPI;
    api.register(data.userID, data.userName, data.password).then(res => {
      const id: string = res.body;
      ctx.commit("SET_USER_ID", data.userID);
      ctx.commit("SET_USER_TOKEN", id);
      ctx.commit("TOGGLE_LOADING");
    });
  },
  login: function(ctx: any, login: LoginData) {
    console.log("Login request");
    ctx.commit("TOGGLE_LOADING");
    const api: UserControllerImplApi = ctx.getters.getUserAPI;
    api.login(login.userID, login.password).then(res => {
      ctx.commit("TOGGLE_LOADING");
      console.log("Status : " + res.response.statusCode);
      if (res.response.statusCode == 200) {
        const success = res.body.result == ResultEnum.Verified;
        if (!success) {
          login.onError(res.body.result);
        } else {
          ctx.commit("SET_USER_TOKEN", res.body.sessionID);
          ctx.commit("SET_USER_ID", login.userID);
        }
      } else {
        login.onRequestError(res.response.statusCode);
      }
    });
  }
};

export interface RegistrationInfo {
  userID: string;
  password: string;
  userName: string;
}
