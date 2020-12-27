import {ErrorInfo} from "@/store/Actions";

export enum AuthAction {
	LOGIN,
	REGISTER
}

export class MainState {
	public userID: string | null = null;
	public userToken: string | null = null;
	public authAction: AuthAction = AuthAction.LOGIN;
	public loading = false;
	public restURL = "localhost:8080";
}