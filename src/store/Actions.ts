import { UserControllerImplApi } from "nichad-client";
import {MainState} from "@/store/MainState";
const api = new UserControllerImplApi();

export const actions = {
	register: (ctx:any,data:RegistrationInfo) => {
		console.log(data.userID+" "+data.userName+" "+data.password);
		api.register(data.userID,data.userName,data.password).then(res => {
			const id = res.body;
			ctx.commit("SET_USER_ID",id);
		});
	}
}

export interface RegistrationInfo{
	userID:string;
	password: string;
	userName:string;
}